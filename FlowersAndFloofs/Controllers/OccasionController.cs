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
        private readonly IOccasionRepository _repo;

        public OccasionController(IOccasionRepository repo)
        {
            _repo = repo;

        }
        // GET: api/Occasion
        [HttpGet]
        public IEnumerable<Occasion> Get()
        {
            return _repo.GetAllOccasions();
        }

        // POST: api/Occasion
        [HttpPost]
        public IEnumerable<Occasion> AddOccasion(AddOccasionDTO occasionToAdd)
        {
            _repo.AddNewOccasion(occasionToAdd);
            return _repo.GetAllOccasions();
        }

        // PUT: api/Occasion/update/5
        [HttpPut("update/{occasionId}")]
        public IActionResult UpdateOccasionById(int occasionId, UpdateOccasionDTO occasionToUpdate)
        {
            _repo.UpdateOccasion(occasionId, occasionToUpdate);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{occasionId}")]
        public IActionResult Delete(int occasionId)
        {
            _repo.DeleteOccasion(occasionId);
            return Ok();
        }
    }
}
