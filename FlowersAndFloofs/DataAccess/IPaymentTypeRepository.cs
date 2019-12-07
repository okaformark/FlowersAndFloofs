using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public interface IPaymentTypeRepository
    {
        PaymentType GetPaymentType(int paymentTypeId);
        IEnumerable<PaymentType> GetAllPaymentTypes();
    }
}
