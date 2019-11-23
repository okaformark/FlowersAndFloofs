using Dapper;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public class CustomerPersonalRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public CustomerPersonal Add(CustomerPersonal newCustomerPersonal)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[CustomerPersonal]
                                                ([FirstName]
                                                ,[LastName]
                                                ,[CustomerEmail])
                                            output inserted.*
                                            VALUES
                                                (@firstName
                                                , @lastName
                                                , @customerEmail)";
                return db.QueryFirst<CustomerPersonal>(sql, newCustomerPersonal);
            }
        }

        public CustomerPersonal Update(CustomerPersonal updatedCustomerPersonal, int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {

                var sql = @"Update [CustomerPersonal]
                               SET [FirstName] = @firstName
                               ,[LastName] = @lastName
                               ,[CustomerEmail] = @customerEmail
                        output inserted.*
                            where id = @id";


                updatedCustomerPersonal.Id = id;

                var customer = db.QueryFirst<CustomerPersonal>(sql, updatedCustomerPersonal);

                return customer;

            }
        }

        public bool Remove(int customerId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from CustomerPersonal
                            where [customerid] = @customerId";
                return db.Execute(sql, new { customerId }) == 1;
            }
        }
    }
}
