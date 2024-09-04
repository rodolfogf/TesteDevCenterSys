using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos
{
    public class CreateVendaDto
    {
        public DateTime DataVenda { get; set; }
        public int VendedorId { get; set; }
        public List<CreateVendaProdutoDto> VendaProdutos { get; set; }
    }
}
