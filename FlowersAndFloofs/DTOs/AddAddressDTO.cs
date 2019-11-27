using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DTOs
{
    public class AddAddressDTO
    {
        public int Id { get; set; }
        public int CustomerId { get; set; }
        public string StreetAddress { get; set; }
        public string AptOrHouseNum { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int ZipCode { get; set; }
    }
}
