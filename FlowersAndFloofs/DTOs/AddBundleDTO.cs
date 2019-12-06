using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DTOs
{
    public class AddBundleDTO
    {
        public int Id { get; set; }
        public int FlowerId { get; set; }
        public int PuppyId { get; set; }
        public int OccasionId { get; set; }
        public int Description { get; set; }
        public int ProudctImageUrl { get; set; }
    }
}
