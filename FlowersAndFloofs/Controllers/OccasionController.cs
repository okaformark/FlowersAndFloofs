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
    [Route("api/occasion")]
    [ApiController]
    public class OccasionController : ControllerBase
    {
        // GET: api/Occasion
        [HttpGet]
        public IEnumerable<Occasion> Get()
        {
            var repo = new OccasionRepository();
            var allOccasions = repo.GetAllOccasions();
            return allOccasions;
        }

        // POST: api/Occasion
        [HttpPost]
        public IEnumerable<Occasion> AddOccasion(AddOccasionDTO occasionToAdd)
        {
            var repo = new OccasionRepository();
            repo.AddNewOccasion(occasionToAdd);
            return repo.GetAllOccasions();
        }

        // PUT: api/Occasion/update/5
        [HttpPut("update/{occasionId}")]
        public IActionResult UpdateOccasionById(int occasionId, UpdateOccasionDTO occasionToUpdate)
        {
            var repo = new OccasionRepository();
            repo.UpdateOccasion(occasionId, occasionToUpdate);

            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{occasionId}")]
        public IActionResult Delete(int occasionId)
        {
            var repo = new OccasionRepository();
            repo.DeleteOccasion(occasionId);
            return Ok();
        }
    }
}
