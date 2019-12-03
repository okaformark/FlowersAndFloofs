using Dapper;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public class ProductTypeRepository : IProductTypeRepository
    {
        string _connectionString = "Server=localhost; Database=FlowersAndFloofs; Trusted_Connection=True";
        public IEnumerable<ProductType> GetProductType()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"select * from ProductType";

                return db.Query<ProductType>(sql).ToList();
            }
        }
    }
}
