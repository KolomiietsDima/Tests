using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
namespace Test
{
    public class UserTest
    {
        [Key]
        [Column("Id", TypeName = "int")]
        public int Id { get; set; }

        [Column("Name", TypeName = "varchar(200)")]
        [Required]
        public string Name { get; set; }

        [Column("UserId", TypeName = "varchar(36)")]
        [Required]
        [ForeignKey("Users")]
        public string UserId { get; set; }

        [Column("Description", TypeName = "varchar(200)")]
        [Required]
        public string Description { get; set; }




    }
}
