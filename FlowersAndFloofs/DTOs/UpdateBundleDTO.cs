using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DTOs
{
    public class UpdateBundleDTO
    {
        public int Id { get; set; }
        public int FlowerId { get; set; }
        public int PuppyId { get; set; }
        public int OccasionId { get; set; }
    }
}
