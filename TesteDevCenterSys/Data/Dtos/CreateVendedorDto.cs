using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos;

public class CreateVendedorDto
{
    [Required]
    [StringLength(50)]
    public string Nome { get; set; }
    [Required]

    [Range(0, 100, ErrorMessage = "O valor deve estar entre 0 e 100.")]
    public double PercentualComissao { get; set; }
}
