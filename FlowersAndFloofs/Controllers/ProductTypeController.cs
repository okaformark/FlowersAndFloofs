using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace FlowersAndFloofs.Controllers
{
    [Route("api/producttype")]
    [ApiController]
    public class ProductTypeController : ControllerBase
    {
        private readonly IProductTypeRepository _repo;

        public ProductTypeController(IProductTypeRepository repo)
        {
            _repo = repo;
        }
        // GET: api/ProductType
        [HttpGet]
        public IEnumerable<ProductType> Get()
        {
            return _repo.GetProductType();
        }

        // GET: api/ProductType/5
        [HttpGet("{id}", Name = "Get")]
        public ProductType Get(int id)
        {
            return _repo.GetProductType().FirstOrDefault(one => one.Id == id);
        }

     
    }
}
