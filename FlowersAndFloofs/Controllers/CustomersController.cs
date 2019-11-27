using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Commands
{
    [Route("api/customers")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        [HttpPost]
        public IActionResult CreateCustomer(AddCustomerDTO newCustomerDTO)
        {
            var newCustomer = new Customer
            {
                DateCreated = newCustomerDTO.DateCreated,
                FirebaseKey = newCustomerDTO.FirebaseKey
            };

            var repo = new CustomerRepository();
            var customerThatGotCreated = repo.Add(newCustomer);

            return Created($"api/customers/{customerThatGotCreated.Id}", customerThatGotCreated);
        }

    }
}
