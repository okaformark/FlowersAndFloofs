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

        public bool AddCustomerPaymentMethod(AddPaymentMethodDTO paymentMethodToAdd)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[PaymentMethod]
                                                ([CustomerId]
                                                ,[PaymentTypeId]
                                                ,[CardNumber]
                                                ,[NameOnCard]
                                                ,[ExpirationDate]
                                                ,[CVV])
                                            VALUES
                                                (@CustomerId
                                                , @PaymentTypeId
                                                , @CardNumber
                                                , @NameOnCard
                                                , @ExpirationDate
                                                , @CVV)";


                return db.Execute(sql, paymentMethodToAdd) == 1;

            }
        }

        public bool UpdatePaymentMethod(int id, UpdatePaymentMethodDTO paymentMethodToUpdate)
        {
            using (var db = new SqlConnection(_connectionString))
            {

                var sql = @"Update [PaymentMethod]
                               SET [PaymentTypeId] = @PaymentTypeId
                               ,[CardNumber] = @CardNumber
                               ,[NameOnCard] = @NameOnCard
                               ,[ExpirationDate] = @ExpirationDate
                               ,[CVV] = @CVV
                            Where [Id] = @Id";


                paymentMethodToUpdate.Id = id;

                return db.Execute(sql, paymentMethodToUpdate) == 1;


            }
        }

        public bool DeletePaymentMethod(int paymentMethodId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from PaymentMethod
                            where [Id] = @paymentMethodId";
                return db.Execute(sql, new { paymentMethodId }) == 1;
            }
        }
    }
}
