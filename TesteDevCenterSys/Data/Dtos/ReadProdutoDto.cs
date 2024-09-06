using System.ComponentModel.DataAnnotations;

namespace TesteDevCenterSys.Data.Dtos;

public class ReadProdutoDto
{
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public double Preco { get; set; }
}
