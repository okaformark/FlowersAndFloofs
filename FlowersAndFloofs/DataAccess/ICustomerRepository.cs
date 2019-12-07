using FlowersAndFloofs.Models;
using FlowersAndFloofs.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.Commands;

namespace FlowersAndFloofs.DataAccess
{
    public interface ICustomerRepository
    {
        Customer AddNewCustomer(AddCustomerDTO newCustomer);
    }
}
