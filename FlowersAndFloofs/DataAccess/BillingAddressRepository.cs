using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using Dapper;

namespace FlowersAndFloofs.DataAccess
{
    public class BillingAddressRepository : IAddressRepository
    {
        string _connectionString = "Server = localhost; Database = FlowersAndFloofs; Trusted_Connection = True";
        public bool AddAddress(AddAddressDTO newAddress)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO [dbo].[BillingAddress]
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
                return db.Execute(sql, newAddress) ==1;
            }
        }


        public IEnumerable<Address> GetAddress()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select * from BillingAddress";
                var billingAddress = db.Query<Address>(sql);
                return billingAddress;
            };
        }

        public bool UpdateAddress(Address addressToUpdate, int id)
        {
            throw new NotImplementedException();
        }
    }
}
