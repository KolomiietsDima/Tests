using System.Collections.Generic;

namespace Test
{
    public interface IUserTestsServices
    {
        public List<UserTest> GetTests(string username);
  
    }
}
