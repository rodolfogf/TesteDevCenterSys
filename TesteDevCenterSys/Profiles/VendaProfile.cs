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
            CreateMap<Venda, ReadVendaComissaoDto>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.DataVenda, opt => opt.MapFrom(src => src.DataVenda.ToString("dd/MM/yyyy HH:mm")))
                .ForMember(dest => dest.TotalVenda, opt => opt.MapFrom(src => src.TotalVenda))
                .ForMember(dest => dest.NomeVendedor, opt => opt.MapFrom(src => src.Vendedor.Nome))
                .ForMember(dest => dest.ComissaoVendedor, opt => opt.MapFrom(src => src.ComissaoVendedor));
            CreateMap<ReadVendaDto, Venda>();
        }
    }
}
