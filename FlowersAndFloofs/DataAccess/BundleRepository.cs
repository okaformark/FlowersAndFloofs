using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using FlowersAndFloofs.Models;
using System.Data.SqlClient;
using FlowersAndFloofs.DTOs;

namespace FlowersAndFloofs.DataAccess
{
    public class BundleRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public IEnumerable<Bundle> GetAllBundles()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from Bundle";

                var allBundles = db.Query<Bundle>(sql);
                return allBundles;
            }
        }
        public bool AddNewBundle(AddBundleDTO bundleToAdd)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[Bundle]
                                                ([FlowerId]
                                                ,[PuppyId]
                                                ,[OccasionId])
                                            VALUES
                                                (@FlowerId
                                                , @PuppyId
                                                , @OccasionId)";

                return db.Execute(sql, bundleToAdd) == 1;

            }
        }
    }
}
