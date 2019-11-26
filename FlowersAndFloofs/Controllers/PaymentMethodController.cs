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
    [Route("api/paymentMethod")]
    [ApiController]
    public class PaymentMethodController : ControllerBase
    {
        // GET: api/PaymentMethod/5
        [HttpGet("{id}")]
        public IEnumerable<PaymentMethod> GetByCustomerId(int id)
        {
            var repo = new PaymentMethodRepository();
            var paymentMethodsById = repo.GetPaymentMethodByCustomerId(id);
            return paymentMethodsById;
        }

        // POST: api/PaymentMethod
        [HttpPost]
        public IEnumerable<PaymentMethod> Post(AddPaymentMethodDTO paymentMethodToAdd)
        {
            var repo = new PaymentMethodRepository();
            repo.AddCustomerPaymentMethod(paymentMethodToAdd);
            return repo.GetPaymentMethodByCustomerId(paymentMethodToAdd.CustomerId);
        }

        // PUT: api/PaymentMethod/5
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
