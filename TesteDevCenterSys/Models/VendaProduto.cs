﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace TesteDevCenterSys.Models
{
    public class VendaProduto
    {
        [Key]
        [Required]
        public int Id { get; set; }

        [Required]
        public int VendaId { get; set; }
        public virtual Venda Venda { get; set; }

        [Required]
        public int ProdutoId { get; set; }
        public virtual Produto Produto { get; set; }

        [Required]
        public int Quantidade { get; set; }
    }
}
