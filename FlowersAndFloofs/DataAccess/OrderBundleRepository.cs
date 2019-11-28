using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FlowersAndFloofs.Models;
using System.Data.SqlClient;
using FlowersAndFloofs.DTOs;

namespace FlowersAndFloofs.DataAccess
{
    public class OrderBundleRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public IEnumerable<OrderBundle> GetAllOrderBundles()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from OrderBundle";

                var allOrderBundles = db.Query<OrderBundle>(sql);
                return allOrderBundles;
            }
        }

        public bool AddNewOrderBundle(AddOrderBundleDTO orderBundleToAdd)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[OrderBundle]
                                                ([OrderId]
                                                ,[BundleId]
                                                ,[Quantity]
                                                ,[UnitCost])
                                            VALUES
                                                (@OrderId
                                                , @BundleId
                                                , @Quantity
                                                , @UnitCost)";


                return db.Execute(sql, orderBundleToAdd) == 1;

            }
        }

        public bool DeleteOrderBundle(int orderBundleId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from OrderBundle
                            where [Id] = @orderBundleId";
                return db.Execute(sql, new { orderBundleId }) == 1;
            }
        }
    }
}
