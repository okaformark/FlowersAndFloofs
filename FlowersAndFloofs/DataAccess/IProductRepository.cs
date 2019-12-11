using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAll();
        Product Get(int productId);
        IEnumerable<Product> GetProductsByType(int typeId);
    }
}
