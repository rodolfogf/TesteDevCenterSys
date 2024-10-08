﻿using System.ComponentModel.DataAnnotations;

namespace TesteDevCenterSys.Models;

public class Vendedor
{
    [Key]
    [Required]
    public int Id { get; set; }
    [Required]
    [StringLength(50)]
    public string Nome { get; set; }
    [Required]

    [DisplayFormat(DataFormatString = "{0:P2}")]
    [Range(0, 100, ErrorMessage = "O valor deve estar entre 0 e 100.")]
    public double PercentualComissao { get; set; }
    public double ValorComissoes { get; set; }

    public virtual ICollection<Venda> Vendas { get; set; }

}
