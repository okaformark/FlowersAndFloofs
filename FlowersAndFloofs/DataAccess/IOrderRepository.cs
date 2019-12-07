using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public interface IOrderRepository
    {
        Order AddNewOrder(AddOrderDTO newOrder);
        Order GetOrder(int orderId);
        IEnumerable<Order> GetAllOrders();
    }
}
