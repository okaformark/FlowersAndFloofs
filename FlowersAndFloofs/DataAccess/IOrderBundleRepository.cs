using System.Collections.Generic;
using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;

namespace FlowersAndFloofs.DataAccess
{
    public interface IOrderBundleRepository
    {
        bool AddNewOrderBundle(AddOrderBundleDTO orderBundleToAdd);
        bool DeleteOrderBundle(int orderBundleId);
        IEnumerable<OrderBundle> GetAllOrderBundles();
        bool UpdateOrderBundle(int orderBundleId, UpdateOrderBundleDTO orderBundleToUpdate);
    }
}