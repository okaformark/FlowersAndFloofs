using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Models
{
    public class Bundle
    {
        public int Id { get; set; }
        public int FlowerId { get; set; }
        public int PuppyId { get; set; }
        public int OccasionId { get; set; }
        public string Description { get; set; }
        public string ProductImageUrl { get; set; }
    }
}
