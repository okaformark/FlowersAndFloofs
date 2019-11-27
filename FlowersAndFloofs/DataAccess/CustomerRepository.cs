using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Dapper;

namespace FlowersAndFloofs.DataAccess
{
    public class CustomerRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public Customer Add(Customer newCustomer)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[Customer]
                                                    ([DateCreated]
                                                    ,[FirebaseKey])
	                                        output inserted.*
                                                VALUES
                                                    (@dateCreated
                                                    , @firebaseKey)";
                return db.QueryFirst<Customer>(sql, newCustomer);
            }
        }
    }
}
