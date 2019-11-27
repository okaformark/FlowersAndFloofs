using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DTOs
{
    public class AddOrderDTO
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public bool IsComplete { get; set; }
        public decimal OrderTotal { get; set; }
        public int BillingAddressId { get; set; }
        public int ShippingAddressId { get; set; }
        public int PaymentId { get; set; }
    }
}
