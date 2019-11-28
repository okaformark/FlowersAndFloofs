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
    [Route("api/orderBundle")]
    [ApiController]
    public class OrderBundleController : ControllerBase
    {
        // GET: api/OrderBundle
        [HttpGet]
        public IEnumerable<OrderBundle> GetAllOrderBundles()
        {
            var repo = new OrderBundleRepository();
            var allOrderBundles = repo.GetAllOrderBundles();
            return allOrderBundles;
        }


        // POST: api/OrderBundle
        [HttpPost]
        public IEnumerable<OrderBundle> AddOrderBundle(AddOrderBundleDTO orderBundleToAdd)
        {
            var repo = new OrderBundleRepository();
            repo.AddNewOrderBundle(orderBundleToAdd);
            return repo.GetAllOrderBundles();
        }

        // PUT: api/OrderBundle/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{orderBundleId}")]
        public IActionResult Delete(int orderBundleId)
        {
            var repo = new OrderBundleRepository();
            repo.DeleteOrderBundle(orderBundleId);
            return Ok();
        }
    }
}
