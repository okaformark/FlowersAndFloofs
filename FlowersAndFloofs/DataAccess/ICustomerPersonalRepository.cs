using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public interface ICustomerPersonalRepository
    {
        bool AddNewCustomerPersonalInfo(AddCustomerPersonalInfoDTO newCustomerPersonalInfo);
        CustomerPersonalInfo GetCustomerPersonalInfo(int customerId);
        bool UpdateCustomerPersonalInfo(CustomerPersonalInfo updatedCustomerPersonalInfo, int id);
        bool DeleteCustomerPersonalInfo(int customerId);
    }
}
