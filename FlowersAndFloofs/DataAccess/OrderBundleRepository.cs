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
    }
}
