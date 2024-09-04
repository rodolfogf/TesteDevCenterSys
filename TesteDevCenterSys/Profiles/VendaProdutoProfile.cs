using AutoMapper;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Profiles
{
    public class VendaProdutoProfile : Profile
    {
        public VendaProdutoProfile()
        {
            CreateMap<CreateVendaProdutoDto, VendaProduto>()
                .ForMember(dest => dest.Venda, opt => opt.Ignore());
            CreateMap<VendaProduto, ReadVendaProdutoDto>();
        }
    }
}
