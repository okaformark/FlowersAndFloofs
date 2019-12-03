using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public interface IOccasionRepository
    {
        IEnumerable<Occasion> GetAllOccasions();
        bool AddNewOccasion(AddOccasionDTO occasionToAdd);
        bool UpdateOccasion(int occasionId, UpdateOccasionDTO occasionToUpdate);
        bool DeleteOccasion(int occasionId);

    }
}
