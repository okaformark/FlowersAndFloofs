using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Commands
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController
    {
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            var repo = new ProductRepository();
            var products = repo.GetAll();
            return products;
        }

        [HttpGet("{productId}")]
        public ProductsController GetProduct(int productId)
        {
            var repo = new ProductRepository();
            var product = repo.Get(productId);
            return product;
        }
    }
}
