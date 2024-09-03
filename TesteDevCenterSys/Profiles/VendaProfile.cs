using AutoMapper;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Profiles
{
    public class VendaProfile : Profile
    {
        public VendaProfile() 
        {
            CreateMap<CreateVendaDto, Venda>();
            CreateMap<UpdateVendaDto, Venda>();
            CreateMap<Venda, ReadVendaDto>();
            CreateMap<ReadVendaDto, Venda>();
        }
    }
}
