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

        // PUT: api/Occasion/5
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
