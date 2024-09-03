using Microsoft.AspNetCore.Identity;

namespace TesteDevCenterSys.Models;

public class Usuario : IdentityUser
{
    public DateTime DataNascimento { get; set; }
    public string Cpf { get; set; }
    public Usuario() : base() { }
}
