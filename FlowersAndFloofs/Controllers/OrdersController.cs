using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using FlowersAndFloofs.DTOs;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Commands
{
    //Customers will need to be able to GET a single order, GET all orders, and POST a new order

    [Route("api/orders")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        [HttpGet("{customerId}")]
        public IEnumerable<Order> GetOrders(int customerId)
        {
            var repo = new OrderRepository();
            var orders = repo.GetAllOrdersForCustomer(customerId);
            return orders;
        }

        [HttpGet("singleOrder/{orderid}")]
        public Order getorder(int orderid)
        {
            var repo = new OrderRepository();
            var order = repo.GetOrder(orderid);
            return order;
        }

        [HttpPost]
        public IActionResult CreateOrder(AddOrderDTO newAddOrderDTO)
        {
            var newOrder = new Order
            {
                Id = newAddOrderDTO.Id,
                CustomerId = newAddOrderDTO.CustomerId,
                IsComplete = newAddOrderDTO.IsComplete,
                OrderTotal = newAddOrderDTO.OrderTotal,
                BillingAddressId = newAddOrderDTO.BillingAddressId,
                ShippingAddressId = newAddOrderDTO.ShippingAddressId,
                PaymentId = newAddOrderDTO.PaymentId
            };

            var repo = new OrderRepository();
            var orderThatGotCreated = repo.AddNewOrder(newAddOrderDTO);

            return Created($"api/orders/{orderThatGotCreated.Id}", orderThatGotCreated);
        }
    }

}
