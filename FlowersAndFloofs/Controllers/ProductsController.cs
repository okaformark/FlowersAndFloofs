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

    [Route("api/products")]
    [ApiController]
    public class ProductsController
    {
        [HttpGet]
        public IEnumerable<Product> GetProducts()
        {
            var repo = new ProductRepository();
            var products = repo.GetAllProducts();
            return products;
        }

        [HttpGet("{productId}")]
        public Product GetProduct(int productId)
        {
            var repo = new ProductRepository();
            var product = repo.GetProduct(productId);
            return product;
        }

        [HttpGet("productType/{typeId}")]
        public IEnumerable<Product> GetProductsByType(int typeId)
        {
            var repo = new ProductRepository();
            var productsWithTypeId = repo.GetAllProductsByTypeId(typeId);
            return productsWithTypeId;
        }
    }
}
