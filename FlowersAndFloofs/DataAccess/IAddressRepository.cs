using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
     public interface IAddressRepository
    {
        IEnumerable<Address> GetAddress();
        bool AddAddress(AddAddressDTO newAddress);
        bool UpdateAddress(Address addressToUpdate, int id);

    }
}
