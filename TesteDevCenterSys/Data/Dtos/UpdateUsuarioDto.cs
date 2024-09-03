using System.ComponentModel.DataAnnotations;

namespace TesteDevCenterSys.Data.Dtos;

public class UpdateUsuarioDto
{
    [Required]
    public string Username { get; set; }
    [Required]
    [RegularExpression(@"^\d{11}$", ErrorMessage = "Formato inválido de CPF")]
    public string Cpf { get; set; }
    [Required]
    public DateTime DataNascimento { get; set; }
    [Required]
    [DataType(DataType.Password)]
    public string Password { get; set; }
    [Required]
    [Compare("Password")]
    public string RePassword { get; set; }
}
