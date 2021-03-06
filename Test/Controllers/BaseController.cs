using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.Security.Claims;


namespace Test
{
    public abstract class BaseController : Controller
    {

        private ClaimsIdentity  claims { get { return HttpContext?.User?.Identity as ClaimsIdentity; ;}}
        protected string UserId { get { return claims.Claims.FirstOrDefault(c => c.Type == ClaimTypes.NameIdentifier)?.Value; ; } }
        protected string UserName  { get { return HttpContext?.User?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Name)?.Value; ; } }
        protected string UserEmail { get { return HttpContext?.User?.Claims.FirstOrDefault(c => c.Type == ClaimTypes.Email)?.Value; ; } }
    }
}

