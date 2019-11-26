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
            // Customers will not need to do anything with customer data (id, dateCreated, dateDeleted, firebaseKey)

        }
    }
}
