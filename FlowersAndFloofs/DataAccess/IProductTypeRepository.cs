using System.Collections.Generic;
using FlowersAndFloofs.Models;

namespace FlowersAndFloofs.DataAccess
{
    public interface IProductTypeRepository
    {
        IEnumerable<ProductType> GetProductType();
    }
}