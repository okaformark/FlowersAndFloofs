using FlowersAndFloofs.DTOs;
using FlowersAndFloofs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FlowersAndFloofs.DataAccess
{
    public interface IBundleRepository
    {
        IEnumerable<Bundle> GetAllBundles();
        bool AddNewBundle(AddBundleDTO bundleToAdd);
        bool UpdateBundle(int bundleId, UpdateBundleDTO bundleToUpdate);
        bool DeleteBundle(int bundleId);

    }
}
