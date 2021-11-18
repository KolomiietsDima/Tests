using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace Test
{
    public class Questions
    {
        [Key]
        [Column("QuestionId", TypeName = "int")]
        public int Id { get; set; }

        [Column("Body", TypeName = "varchar(200)")]
        [Required]
        public string Body { get; set; }

        [Column("TestId", TypeName = "varchar(36)")]
        [Required]
        [ForeignKey("Test")]
        public int TestId { get; set; }

        [Column("Answer", TypeName = "varchar(200)")]
        [Required]
        public string Answer { get; set; }

    }
}
