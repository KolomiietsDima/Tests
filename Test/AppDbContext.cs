using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
namespace Test
{
    public class AppDbContext : DbContext 
    {

        private readonly IConfiguration _configuration;
        public AppDbContext(IConfiguration configuration) : base()
        {
            this._configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                _configuration.GetConnectionString("DefaultConnection"));
        }
       
       public DbSet<UserTest> UserTests { get; set; }
       public DbSet<Questions> Questions { get; set; }


    }
}
