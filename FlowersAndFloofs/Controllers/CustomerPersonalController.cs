using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Controllers
{
    //  Customers will need to GET their CustomerPersonal data, POST CustomerPersonal data when they create an acct, 
    //  PUT updated CustomerPersonal data, and DELETE CustomerPersonal data if they no longer want an account

    [Route("api/customerPersonal")]
    [ApiController]
    public class CustomerPersonalInfoController : ControllerBase
    {
        [HttpGet("{customerId}")]
        public CustomerPersonalInfo GetCustomerPersonalInfo(int customerId)
        {
            var repo = new CustomerPersonalInfoRepository();
            var product = repo.Get(customerId);
            return product;
        }

        [HttpPost]
        public IActionResult CreateCustomerPersonal(AddCustomerPersonalInfoDTO newCustomerPersonalInfoDTO)
        {
            var newCustomerPersonalInfo = new CustomerPersonalInfo
            {
                Id = 1,
                CustomerId = newCustomerPersonalInfoDTO.CustomerId,
                FirstName = newCustomerPersonalInfoDTO.FirstName,
                LastName = newCustomerPersonalInfoDTO.LastName,
                CustomerEmail = newCustomerPersonalInfoDTO.CustomerEmail
            };

            var repo = new CustomerPersonalInfoRepository();
            var customerPersonalInfoThatGotCreated = repo.Add(newCustomerPersonalInfo);

            return Created($"api/customerPersonalInfo/{customerPersonalInfoThatGotCreated.Id}", customerPersonalInfoThatGotCreated);
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult UpdateCustomerPersonalInfo(UpdateCustomerPersonalInfoDTO updatedCustomerPersonalInfoDTO, int id)
        {
            var repo = new CustomerPersonalInfoRepository();

            var updatedCustomerPersonalInfo = new CustomerPersonalInfo
            {
                FirstName = updatedCustomerPersonalInfoDTO.FirstName,
                LastName = updatedCustomerPersonalInfoDTO.LastName,
                CustomerEmail = updatedCustomerPersonalInfoDTO.CustomerEmail,
            };

            var customerPersonalInfoThatGotUpdated = repo.Update(updatedCustomerPersonalInfo, id);

            if (customerPersonalInfoThatGotUpdated == null)
            {
                return BadRequest("Could not update trainer");
            }

            return Ok(customerPersonalInfoThatGotUpdated);
        }

        [HttpDelete("{customerId}")]
        public IActionResult DeleteCustomerPersonalInfo(int customerId)
        {
            var repo = new CustomerPersonalInfoRepository();
            repo.Remove(customerId);

            return Ok();

        }

    }
}
