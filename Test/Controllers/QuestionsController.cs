using System;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
namespace Test
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : BaseController
    {
        private AppDbContext _context;

        public QuestionsController(AppDbContext _context) : base()
        {
            this._context = _context;
        }

        [Authorize(AuthenticationSchemes = "Bearer")]
        [HttpGet("GetQuestionsByTestId", Name = "GetQuestionsByTestId ")]
        public IActionResult GetQuestionsByTestId(int testId)
        {



            QuestionsServices qs = new QuestionsServices(_context);

            var questions = qs.GetQuestionsByTestId(testId);

            if (questions != null)
                return Ok(questions);
            else
                throw new Exception("Users not found");



        }

       

    }
}
