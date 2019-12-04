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
    public class BundleRepository : IBundleRepository
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

        public bool UpdateBundle(int bundleId, UpdateBundleDTO bundleToUpdate)
        {
            using (var db = new SqlConnection(_connectionString))
            {

                var sql = @"Update [Bundle]
                               SET [FlowerId] = @FlowerId
                               ,[PuppyId] = @PuppyId
                               ,[OccasionId] = @OccasionId
                            Where [Id] = @Id";

                bundleToUpdate.Id = bundleId;

                return db.Execute(sql, bundleToUpdate) == 1;
            }
        }

        public bool DeleteBundle(int bundleId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from Bundle
                            where [Id] = @bundleId";
                return db.Execute(sql, new { bundleId }) == 1;
            }
        }
    }
}
