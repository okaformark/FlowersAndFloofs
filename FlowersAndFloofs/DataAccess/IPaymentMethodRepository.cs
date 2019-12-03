using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace FlowersAndFloofs.DataAccess
{
    public interface IPaymentMethodRepository
    {
        IEnumerable<PaymentMethod> GetPaymentMethodByCustomerId(int customerId);
        bool AddCustomerPaymentMethod(AddPaymentMethodDTO paymentMethodToAdd);
        bool UpdatePaymentMethod(int id, UpdatePaymentMethodDTO paymentMethodToUpdate);
        bool DeletePaymentMethod(int paymentMethodId);

    }
}
