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
    [Route("api/bundle")]
    [ApiController]
    public class BundleController : ControllerBase
    {
        // GET: api/Bundle
        [HttpGet]
        public IEnumerable<Bundle> Get()
        {
            var repo = new BundleRepository();
            var allBundles = repo.GetAllBundles();
            return allBundles;
        }

        // POST: api/Bundle
        [HttpPost]
        public IEnumerable<Bundle> AddBundle(AddBundleDTO bundleToAdd)
        {
            var repo = new BundleRepository();
            repo.AddNewBundle(bundleToAdd);
            return repo.GetAllBundles();
        }

        // PUT: api/Bundle/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
