using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos
{
    public class ReadVendaDto
    {
        public DateTime DataVenda { get; set; }
        public ReadVendedorDto Vendedor { get; set; }
        public List<ReadVendaProdutoDto> VendaProdutos { get; set; }
        public double TotalVenda { get; set; }
        public double ComissaoVendedor { get; set; }
    }
}
