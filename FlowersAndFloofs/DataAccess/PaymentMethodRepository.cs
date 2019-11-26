using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FlowersAndFloofs.Models;
using System.Data.SqlClient;

namespace FlowersAndFloofs.DataAccess
{
    public class PaymentMethodRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public IEnumerable<PaymentMethod> GetPaymentMethodByCustomerId(int customerId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from PaymentMethod
                            where CustomerId = @customerId";
                var parameters = new
                {
                    CustomerId = customerId
                };
                var customerPaymentMethods = db.Query<PaymentMethod>(sql, parameters);
                return customerPaymentMethods;
            }
        }
    }
}
