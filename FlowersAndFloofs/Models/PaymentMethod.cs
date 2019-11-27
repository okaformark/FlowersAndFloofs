using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Models
{
    public class PaymentMethod
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public int PaymentTypeId { get; set; }
        public Int64 CardNumber { private get; set; }
        public string NameOnCard { get; set; }
        public DateTime ExpirationDate { get; set; }
        public int CVV { get; set; }

    }
}
