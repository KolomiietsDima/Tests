using System.Collections.Generic;

namespace Test
{
    public interface IQuestionServices
    {
        public List<Questions> GetQuestionsByTestId(int testId);
      
    }
}
