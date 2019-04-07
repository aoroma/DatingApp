using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(10, MinimumLength = 8, ErrorMessage = "La contraseña debe de ser entre 8 y 10 caracteres")]
        public string Password { get; set; }
    }
}