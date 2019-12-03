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
        private readonly IBundleRepository _repo;

        public BundleController(IBundleRepository repo)
        {
            _repo = repo;

        }
        // GET: api/Bundle
        [HttpGet]
        public IEnumerable<Bundle> Get()
        {
            //var repo = new BundleRepository();
            //var allBundles = repo.GetAllBundles();
            return _repo.GetAllBundles();
        }

        // POST: api/Bundle
        [HttpPost]
        public IEnumerable<Bundle> AddBundle(AddBundleDTO bundleToAdd)
        {
            _repo.AddNewBundle(bundleToAdd);
            return _repo.GetAllBundles();
        }

        // PUT: api/Bundle/update/5
        [HttpPut("update/{bundleId}")]
        public IActionResult UpdateOrderBundleById(int bundleId, UpdateBundleDTO bundleToUpdate)
        {
            _repo.UpdateBundle(bundleId, bundleToUpdate);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{bundleId}")]
        public IActionResult Delete(int bundleId)
        {
            _repo.DeleteBundle(bundleId);
            return Ok();
        }
    }
}
