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
        private readonly IPaymentMethodRepository _repo;

        public PaymentMethodController(IPaymentMethodRepository repo)
        {
            _repo = repo;

        }
        // GET: api/PaymentMethod/5
        [HttpGet("{id}")]
        public IEnumerable<PaymentMethod> GetByCustomerId(int id)
        {
            return _repo.GetPaymentMethodByCustomerId(id);
        }

        // POST: api/PaymentMethod
        [HttpPost]
        public IEnumerable<PaymentMethod> AddPaymentMethod(AddPaymentMethodDTO paymentMethodToAdd)
        {
            _repo.AddCustomerPaymentMethod(paymentMethodToAdd);
            return _repo.GetPaymentMethodByCustomerId(paymentMethodToAdd.CustomerId);
        }

        // PUT: api/PaymentMethod/5
        [HttpPut("update/{paymentMethodId}")]
        public IActionResult UpdatePaymentMethodById(int paymentMethodId, UpdatePaymentMethodDTO paymentMethodToUpdate)
        {
            _repo.UpdatePaymentMethod(paymentMethodId, paymentMethodToUpdate);
            return Ok();
        }

        // DELETE: api/PaymentMethod/5
        [HttpDelete("{paymentMethodId}")]
        public IActionResult DeletePaymentMethod(int paymentMethodId)
        {
            _repo.DeletePaymentMethod(paymentMethodId);
            return Ok();
        }
    }
}
