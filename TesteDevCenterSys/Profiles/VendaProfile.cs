using AutoMapper;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Profiles
{
    public class VendaProfile : Profile
    {
        public VendaProfile() 
        {
            CreateMap<CreateVendaDto, Venda>()
                .ForMember(dest => dest.Vendedor, opt => opt.Ignore())
                .ForMember(dest => dest.VendaProdutos, opt => opt.Ignore());
            CreateMap<UpdateVendaDto, Venda>();
            CreateMap<Venda, ReadVendaDto>();
            CreateMap<ReadVendaDto, Venda>();
        }
    }
}
