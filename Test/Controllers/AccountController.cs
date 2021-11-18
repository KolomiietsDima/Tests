using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;

namespace Test
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly UserManager<Users> _userManager;
        private readonly SignInManager<Users> _signInManager;
        private readonly IConfiguration _configuration;

        public AccountController(UserManager<Users> userManager, SignInManager<Users> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;

            _configuration = configuration;
        }
        [HttpPost("Register")]
        public async Task<Response> Register(RegisterModel model)
        {
            if (ModelState.IsValid)
            {
                Users user = new Users { FirstName = model.FirstName, LastName = model.LastName, Email = model.Email, UserName = model.Email };
                
                var result = await _userManager.CreateAsync(user, model.Password);
                if (result.Succeeded)
                {
                            

                    return new Response { Status = "Success", Message = "Record SuccessFully Saved" }; 
                }
                else
                {
                    throw new Exception("Invalid Data"); ;

                }
            }
            return new Response { Status = "Success", Message = "Record SuccessFully Saved." };
        }
       

        [HttpPost("Login")]
        public async Task<Response> Login(LoginModel model)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByNameAsync(model.Email);
                                               
                var result = await _signInManager.PasswordSignInAsync(model.Email, model.Password,false, false);
                if (result.Succeeded)
                {
                    var encodedJwt = TokenManager.GenerateToken(user);
                    return new Response { Status = "Success",Message = encodedJwt };
                }
                else
                {
                    throw new Exception("Invalid Data"); ;
                }
            }

            throw new Exception("Error"); ;
        }


       
    }
}
