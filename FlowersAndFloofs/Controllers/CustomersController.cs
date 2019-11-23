using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Commands
{
    public class CustomersController
    {
        [Route("api/[controller]")]
        [ApiController]
        public class CustomerController : ControllerBase
        {
            [HttpGet]
            public IEnumerable<Customer> GetCustomers()
            {
                var repo = new CustomerRepository();
                var customers = repo.GetAll();
                return customers;
            }

            [HttpGet("{customerId}")]
            public Customer GetCustomer(int customerId)
            {
                var repo = new CustomerRepository();
                var customer = repo.Get(customerId);
                return customer;
            }
        }
    }
}
