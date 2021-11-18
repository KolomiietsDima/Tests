
using System.Collections.Generic;
using System.Linq;

namespace Test
{
    public class UserTestsServices : IUserTestsServices
    {

        private AppDbContext _context;
        public UserTestsServices( AppDbContext context) : base()
        {
          
            _context = context;
        }

       




        public List<UserTest> GetTests(string userId)
        {


            List<UserTest> ret = new List<UserTest>();
            ret = _context.UserTests.Where(p => p.UserId == userId).ToList();
            return ret;
        }

       



    }
}
