using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos
{
    public class ReadVendaDto
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public DateTime DataVenda { get; set; }

        public Vendedor Vendedor { get; set; }

        public virtual ICollection<VendaProduto> VendaProdutos { get; set; } = new List<VendaProduto>();

        [NotMapped]
        public double TotalVenda => VendaProdutos.Sum(v => v.ValorTotal);
        [NotMapped]
        public double ComissaoVendedor => TotalVenda * Vendedor.PercentualComissao / 100;
    }
}
