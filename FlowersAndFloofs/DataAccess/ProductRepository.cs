using Dapper;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public class ProductRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public IEnumerable<Product> GetAllProducts()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select * from Product";
                var products = db.Query<Product>(sql);
                return products;
            }
        }

        public Product GetProduct(int productId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from Product
                            where [Id] = @ProductId";
                var parameters = new
                {
                    ProductId = productId
                };
                var product = db.QueryFirst<Product>(sql, parameters);
                return product;
            }
        }

        public IEnumerable<Product> GetAllProductsByTypeId(int productTypeId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select * from Product 
                          where ProductTypeId = @productTypeId";
                var parameters = new
                {
                    ProductTypeId = productTypeId
                };

                var products = db.Query<Product>(sql, parameters);

                return products;
            }
        }
    }
}
