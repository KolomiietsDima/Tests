using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;


namespace Test
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserTestsController : BaseController
    {
        private AppDbContext _context;

        public UserTestsController(AppDbContext _context) : base()
        {
            this._context = _context;
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("GetTests", Name = "GetTests ")]
        public IActionResult GetTests()
        {

            var userId = UserId;

            UserTestsServices ut = new UserTestsServices(_context);

            var tests = ut.GetTests(userId);

            if (tests != null)
                return Ok(tests);
            else
                throw new Exception("Users not found");



        }

        
    }
}
