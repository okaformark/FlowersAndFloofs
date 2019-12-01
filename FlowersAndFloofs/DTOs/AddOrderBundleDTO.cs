using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DTOs
{
    public class AddOrderBundleDTO
    {
        public int Id { get; set; }
        public int OrderId { get; set; }
        public int BundleId { get; set; }
        public int Quantity { get; set; }
        public decimal UnitCost { get; set; }
    }
}
