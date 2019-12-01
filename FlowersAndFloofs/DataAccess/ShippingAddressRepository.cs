using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;

namespace FlowersAndFloofs.DataAccess
{
    public class ShippingAddressRepository : IAddressRepository
    {
        public bool AddAddress(AddAddressDTO newAddress)
        {
            throw new NotImplementedException();
        }

        public bool DeleteAddress(int id)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Address> GetAddress()
        {
            throw new NotImplementedException();
        }

        public bool UpdateAddress(Address addressToUpdate, int id)
        {
            throw new NotImplementedException();
        }
    }
}
