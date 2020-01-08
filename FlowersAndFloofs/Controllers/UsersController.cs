using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using FlowersAndFloofs.DataAccess;
using FlowersAndFloofs.Models;
using FlowersAndFloofs.DTOs;

namespace FlowersAndFloofs.Controllers
{
    [Route("api/users")]
    [ApiController, Authorize]
    public class UsersController : FirebaseEnabledController
    {
        //[HttpPost]
        //public IActionResult AddUser(AddUserDTO newUser)
        //{
        //    var repository = new UserRepository();

        //    var user = repository.Add(new User { Email = newUser.Email, FirebaseUid = UserId });

        //    return Ok(user);
        //}
    }
}