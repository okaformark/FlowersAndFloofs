using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlowersAndFloofs.Controllers
{
    [Route("api/ShippingAddress")]
    [ApiController]
    public class ShippingAddressController : ControllerBase
    {
        private readonly IAddressRepository _repo;

        public ShippingAddressController(IAddressRepository repo)
        {
            _repo = repo;

        }
        // GET: api/Shipping
        [HttpGet]
        public IEnumerable<Address> Get()
        {
            return _repo.GetAddress();
        }

        // GET: api/ShippingAddress/5
        [HttpGet("{customerId}", Name = "GetShippingAddress")]
        public Address Get(int customerId)
        {
            return _repo.GetAddress().FirstOrDefault(customer => customer.Id == customerId);
        }

        // POST: api/ShippingAddress
        [HttpPost]
        public void Post(AddAddressDTO newAddress)
        {
            _repo.AddAddress(newAddress);
        }

        // PUT: api/ShippingAddress/5
        [HttpPut("{addressIdToUpdate}/update")]
        public void Put(Address addressToUpdate, int addressIdToUpdate)
        {
            _repo.UpdateAddress(addressToUpdate, addressIdToUpdate);
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{addressIdToDelete}/delete")]
        public void Delete(int addressIdToDelete)
        {
            _repo.DeleteAddress(addressIdToDelete);
        }
    }
}
