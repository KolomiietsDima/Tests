﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Test
{
    public class LoginModel
    {
       
        public string Email { get; set; }

       
        [DataType(DataType.Password)]
        public string Password { get; set; }

 
    }
}