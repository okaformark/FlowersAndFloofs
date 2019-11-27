using Dapper;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public class OrderRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public Order Add(Order newOrder)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[Order]
                                                ([CustomerId]
                                                ,[IsComplete]
                                                ,[OrderTotal]
                                                ,[BillingAddressId]
                                                ,[ShippingAddressId]
                                                ,[PaymentId])
                                            output inserted.*
                                            VALUES
                                                (@customerId
                                                , @isComplete
                                                , @orderTotal
                                                , @billingAddressId
                                                , @shippingAddressId
                                                , @paymentId)";
                return db.QueryFirst<Order>(sql, newOrder);
            }
        }

        public Order Get(int orderId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from [Order]
                            where Id = @OrderId";
                var parameters = new
                {
                    OrderId = orderId
                };
                var order = db.QueryFirst<Order>(sql, parameters);
                return order;
            }
        }

        public IEnumerable<Order> GetAll()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                          from [Order]";
                var orders = db.Query<Order>(sql);
                return orders;
            }
        }

    }
}
