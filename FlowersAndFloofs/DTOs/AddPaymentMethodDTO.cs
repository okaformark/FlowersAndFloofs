using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DTOs
{
    public class AddPaymentMethodDTO
    {
        public int CustomerId { get; set; }
        public int PaymentTypeId { get; set; }
        public Int64 CardNumber { get; set; }
        public string NameOnCard { get; set; }
        public DateTime ExpirationDate { get; set; }
        public int CVV { get; set; }
    }
}
