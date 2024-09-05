using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using TesteDevCenterSys.Services;

namespace TesteDevCenterSys.Data.Dtos;

public class UpdateUsuarioDto
{
    [Required]
    [RegularExpression(@"^[a-zA-Z]+(?: [a-zA-Z]+)*$", ErrorMessage = "Use somente letras e espaços únicos entre os nomes")]
    public string Nome { get; set; }
    [Required]
    [EmailAddress]
    public string Email { get; set; }
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
    [NotMapped]
    public string Username => Email;
}
