
using System.Collections.Generic;
using System.Linq;


namespace Test
{
    public class QuestionsServices : IQuestionServices
    {

        private AppDbContext _context;
        public QuestionsServices(AppDbContext context) : base()
        {

            _context = context;
        }






        public List<Questions> GetQuestionsByTestId(int testId)
        {


            List<Questions> ret = new List<Questions>();
            ret = _context.Questions.Where(p => p.TestId == testId).ToList();
            return ret;
        }

        


    }
}