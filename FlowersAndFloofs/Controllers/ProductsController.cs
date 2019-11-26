using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.Commands
{
    //Customers will need to be able to GET a single product, GET all products, and GET products by typeId

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
        public Product GetProduct(int productId)
        {
            var repo = new ProductRepository();
            var product = repo.Get(productId);
            return product;
        }

        [HttpGet("{typeId}")]
        public IEnumerable<Product> GetProductsByType(int typeId)
        {
            var repo = new ProductRepository();
            var productsWithTypeId = repo.GetAllByTypeId(typeId);
            return productsWithTypeId;
        }
    }
}
