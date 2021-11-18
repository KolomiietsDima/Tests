using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Test
{
    public class RegisterModel
    {
      
        public string FirstName { get; set; }

        public string LastName { get; set; }
    
        public string Email { get; set; }

     
        [DataType(DataType.Password)]
        public string Password { get; set; }

        [DataType(DataType.Password)]
        [Compare("Password"/*, ErrorMessage = "Wrong password"*/)]
        public string PasswordConfirm { get; set; }
    }
}
