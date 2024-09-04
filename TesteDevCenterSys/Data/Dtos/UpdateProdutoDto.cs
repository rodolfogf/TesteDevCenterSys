using System.ComponentModel.DataAnnotations;

namespace TesteDevCenterSys.Data.Dtos;

public class UpdateProdutoDto
{
    [Required]
    [StringLength(40)]
    public string Nome { get; set; }
    [Required]
    [StringLength(60)]
    public string Descricao { get; set; }
    [DataType(DataType.Currency)]
    [Range(0.01, double.MaxValue)]
    [Required(ErrorMessage = "O valor é obrigatório.")]
    [RegularExpression(@"^\d+(\.\d{2})?$", ErrorMessage = "O valor deve ser um número com até duas casas decimais.")]
    public double Preco { get; set; }
}
