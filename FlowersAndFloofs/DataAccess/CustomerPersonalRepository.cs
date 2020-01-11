using Dapper;
using FlowersAndFloofs.DTOs;
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

        public CustomerPersonalInfo AddNewCustomerPersonalInfo(AddCustomerPersonalInfoDTO newCustomerPersonalInfo)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[CustomerPersonalInfo]
                                                ([CustomerId]
                                                ,[FirstName]
                                                ,[LastName]
                                                ,[CustomerEmail])
                                            output inserted.*
                                            VALUES
                                                (@customerId
                                                , @firstName
                                                , @lastName
                                                , @customerEmail)";
                return db.QueryFirst<CustomerPersonalInfo>(sql, newCustomerPersonalInfo);
            }
        }

        public CustomerPersonalInfo GetCustomerPersonalInfo(int customerId)
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

        public CustomerPersonalInfo GetCustomerPersonalInfoByEmail(string customerEmail)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from CustomerPersonalInfo
                            where CustomerEmail = @customerEmail";
                var parameters = new
                {
                    CustomerEmail = customerEmail
                };
                var customerPersonalInfo = db.QueryFirst<CustomerPersonalInfo>(sql, parameters);
                return customerPersonalInfo;
            }
        }

        public CustomerPersonalInfo UpdateCustomerPersonalInfo(UpdateCustomerPersonalInfoDTO updatedCustomerPersonalInfo, int id)
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

                var customer = db.QueryFirstOrDefault<CustomerPersonalInfo>(sql, updatedCustomerPersonalInfo);

                return customer;

            }
        }

        public bool DeleteCustomerPersonalInfo(int customerId)
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
