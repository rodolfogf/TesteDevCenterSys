﻿using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos
{
    public class CreateVendaDto
    {
        [Required]
        public DateTime DataVenda { get; set; }

        [Required]
        [ForeignKey("Vendedor")]
        public int VendedorId { get; set; }
        public Vendedor Vendedor { get; set; }

        public virtual ICollection<VendaProduto> VendaProdutos { get; set; } = new List<VendaProduto>();

        [NotMapped]
        public double TotalVenda => VendaProdutos.Sum(v => v.ValorTotal);
        [NotMapped]
        public double ComissaoVendedor => TotalVenda * Vendedor.PercentualComissao / 100;
    }
}
