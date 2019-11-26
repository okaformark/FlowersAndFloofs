using Dapper;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public class CustomerPersonalInfoRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public CustomerPersonalInfo Add(CustomerPersonalInfo newCustomerPersonalInfo)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[CustomerPersonalInfo]
                                                ([FirstName]
                                                ,[LastName]
                                                ,[CustomerEmail])
                                            output inserted.*
                                            VALUES
                                                (@firstName
                                                , @lastName
                                                , @customerEmail)";
                return db.QueryFirst<CustomerPersonalInfo>(sql, newCustomerPersonalInfo);
            }
        }

        public CustomerPersonalInfo Get(int customerId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from CustomerPersonalInfo
                            where CustomerId = @customerId";
                var parameters = new
                {
                    CustomerId = customerId
                };
                var customerPersonalInfo = db.QueryFirst<CustomerPersonalInfo>(sql, parameters);
                return customerPersonalInfo;
            }
        }

        public CustomerPersonalInfo Update(CustomerPersonalInfo updatedCustomerPersonalInfo, int id)
        {
            using (var db = new SqlConnection(_connectionString))
            {

                var sql = @"Update [CustomerPersonalInfo]
                               SET [FirstName] = @firstName
                               ,[LastName] = @lastName
                               ,[CustomerEmail] = @customerEmail
                        output inserted.*
                            where id = @id";


                updatedCustomerPersonalInfo.Id = id;

                var customer = db.QueryFirst<CustomerPersonalInfo>(sql, updatedCustomerPersonalInfo);

                return customer;

            }
        }

        public bool Remove(int customerId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from CustomerPersonalInfo
                            where [customerId] = @customerId";
                return db.Execute(sql, new { customerId }) == 1;
            }
        }
    }
}
