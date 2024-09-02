using System.ComponentModel.DataAnnotations;

namespace TesteDevCenterSys.Data.Dtos;

public class ReadVendedorDto
{
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public double Preco { get; set; }
    public int QuantidadeEstoque { get; set; }
}
