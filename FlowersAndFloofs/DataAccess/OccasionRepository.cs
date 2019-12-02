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
    public class OccasionRepository
    {
        string _connectionString = "Server=localhost;Database=FlowersAndFloofs;Trusted_Connection=True;";

        public IEnumerable<Occasion> GetAllOccasions()
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"Select *
                            from Occasion";

                var allOccasions = db.Query<Occasion>(sql);
                return allOccasions;
            }
        }

        public bool AddNewOccasion(AddOccasionDTO occasionToAdd)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"INSERT INTO[dbo].[Occasion]
                                                ([Name]
                                                ,[Description])
                                            VALUES
                                                (@Name
                                                , @Description)";

                return db.Execute(sql, occasionToAdd) == 1;

            }
        }

        public bool DeleteOccasion(int occasionId)
        {
            using (var db = new SqlConnection(_connectionString))
            {
                var sql = @"delete
                            from Occasion
                            where [Id] = @occasionId";
                return db.Execute(sql, new { occasionId }) == 1;
            }
        }
    }
}
