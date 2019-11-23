using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Commands
{
    public class AddCustomerCommand
    {
        public int Id { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime DateDeleted { get; set; }
        public string FirebaseKey { get; set; }
    }
}
