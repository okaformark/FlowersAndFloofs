using Dapper;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public class PaymentTypeRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public PaymentType GetPaymentType(int paymentTypeId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from PaymentType
                            where [Id] = @PaymentTypeId";
                var parameters = new
                {
                    PaymentTypeId = paymentTypeId
                };
                var paymentType = db.QueryFirst<PaymentType>(sql, parameters);
                return paymentType;
            }
        }

        public IEnumerable<PaymentType> GetAllPaymentTypes()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select * from PaymentType";
                var paymentTypes = db.Query<PaymentType>(sql);
                return paymentTypes;
            }
        }
    }
}
