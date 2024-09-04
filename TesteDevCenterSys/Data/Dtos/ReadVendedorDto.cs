using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos;

public class ReadVendedorDto
{
    public string Nome { get; set; }
    public double PercentualComissao { get; set; }
    public double ValorComissoes { get; set; }
}
