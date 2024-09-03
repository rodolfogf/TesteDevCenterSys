using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TesteDevCenterSys.Models
{
    public class Venda
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime DataVenda { get; set; }

        [Required]
        [ForeignKey("Vendedor")]
        public int VendedorId { get; set; }
        public virtual Vendedor Vendedor { get; set; }

        public virtual ICollection<VendaProduto> VendaProdutos { get; set; } = new List<VendaProduto>();

        [NotMapped]
        public double TotalVenda => VendaProdutos.Sum(v => v.ValorTotal);
        [NotMapped]
        public double ComissaoVendedor => TotalVenda * Vendedor.PercentualComissao / 100;
    }
}
