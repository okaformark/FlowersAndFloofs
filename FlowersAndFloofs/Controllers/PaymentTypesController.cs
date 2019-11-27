using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DataAccess;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using FlowersAndFloofs.Models;

namespace FlowersAndFloofs.Controllers
{
    [Route("api/paymentTypes")]
    [ApiController]
    public class PaymentTypesController : Controller
    {
        [HttpGet]
        public IEnumerable<PaymentType> GetPaymentTypes()
        {
            var repo = new PaymentTypeRepository();
            var paymentTypes = repo.GetAll();
            return paymentTypes;
        }

        [HttpGet("{paymentTypeId}")]
        public PaymentType GetProduct(int paymentTypeId)
        {
            var repo = new PaymentTypeRepository();
            var paymentType = repo.Get(paymentTypeId);
            return paymentType;
        }
    }
}