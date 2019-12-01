using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;

namespace FlowersAndFloofs.DataAccess
{
    public class ShippingAddressRepository : IAddressRepository
    {
        string _connectionString = "Server = localhost; Database = FlowersAndFloofs; Trusted_Connection = True";
        public bool AddAddress(AddAddressDTO newAddress)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[ShippingAddress]
                                               ([CustomerId]
                                               ,[StreetAddress]
                                               ,[AptOrHouseNum]
                                               ,[City]
                                               ,[State]
                                               ,[ZipCode])
                                         VALUES
                                               (@CustomerId
                                               ,@StreetAddress
                                               ,@AptOrHouseNum
                                               ,@City
                                               ,@State
                                               ,@ZipCode)";
                return db.Execute(sql, newAddress) == 1;
            }
        }

        public bool DeleteAddress(int addressIdToDelete)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"DELETE FROM [dbo].[ShippingAddress]
                                               WHERE Id = @addressIdToDelete";

                return db.Execute(sql, new { addressIdToDelete }) == 1;
            }
        }

        public IEnumerable<Address> GetAddress()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select * from ShippingAddress";
                var ShippingAddress = db.Query<Address>(sql);
                return ShippingAddress;
            };
        }

        public bool UpdateAddress(Address addressToUpdate, int addressIdToUpdate)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"UPDATE [dbo].[ShippingAddress]
                                    SET [CustomerId] = @CustomerId
                                        ,[StreetAddress] = @StreetAddress
                                        ,[AptOrHouseNum] = @AptOrHouseNum
                                        ,[City] = @City
                                        ,[State] = @State
                                        ,[ZipCode] = @ZipCode
                                    WHERE Id = @Id";

                addressToUpdate.Id = addressIdToUpdate;
                return db.Execute(sql, addressToUpdate) == 1;
            }
        }
    }
}
