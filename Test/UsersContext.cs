
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Test
{
    public class UsersContext : IdentityDbContext<Users>
    {
        public UsersContext(DbContextOptions<UsersContext> options)
            : base(options)
        {
            
        }
    }
}
