using System.ComponentModel.DataAnnotations;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data.Dtos
{
    public class ReadVendaProdutoDto
    {
        public ReadProdutoDto Produto { get; set; }

        public int Quantidade { get; set; }
    }
}
