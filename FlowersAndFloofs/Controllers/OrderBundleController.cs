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
        private readonly IOrderBundleRepository _repo;

        public OrderBundleController(IOrderBundleRepository repo)
        {
            _repo = repo;

        }
        // GET: api/OrderBundle
        [HttpGet]
        public IEnumerable<OrderBundle> GetAllOrderBundles()
        {
            return _repo.GetAllOrderBundles();
        }


        // POST: api/OrderBundle
        [HttpPost]
        public IEnumerable<OrderBundle> AddOrderBundle(AddOrderBundleDTO orderBundleToAdd)
        {
            _repo.AddNewOrderBundle(orderBundleToAdd);
            return _repo.GetAllOrderBundles();
        }

        // PUT: api/OrderBundle/5
        [HttpPut("update/{orderBundleId}")]
        public IActionResult UpdateOrderBundleById(int orderBundleId, UpdateOrderBundleDTO orderBundleToUpdate)
        {
            _repo.UpdateOrderBundle(orderBundleId, orderBundleToUpdate);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{orderBundleId}")]
        public IActionResult Delete(int orderBundleId)
        {
            _repo.DeleteOrderBundle(orderBundleId);
            return Ok();
        }
    }
}
