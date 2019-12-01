﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace FlowersAndFloofs.Controllers
{
    [Route("api/billingAddress")]
    [ApiController]
    public class BillingAddressController : ControllerBase
    {
        private readonly ILogger<BillingAddressController> _logger;
        private readonly IAddressRepository _repo;


        public BillingAddressController(ILogger<BillingAddressController> logger, IAddressRepository repo)
        {
            _logger = logger;
            _repo = repo;

        }
        // GET: api/BillingAddress
        [HttpGet]
        public IEnumerable<Address> Get()
        {
            return _repo.GetAddress();
        }

        // GET: api/BillingAddress/5
        [HttpGet("{customerId}", Name = "Get")]
        public Address Get(int customerId)
        {
            return _repo.GetAddress().FirstOrDefault(customer => customer.Id == customerId);
        }

        // POST: api/BillingAddress
        [HttpPost]
        public void Post(AddAddressDTO newAddress)
        {
            _repo.AddAddress(newAddress);
        }

        // PUT: api/BillingAddress/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
