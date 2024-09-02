using AutoMapper;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Profiles
{
    public class VendedorProfile : Profile
    {
        public VendedorProfile() 
        {
            CreateMap<CreateVendedorDto, Vendedor>();
            CreateMap<UpdateVendedorDto, Vendedor>();
            CreateMap<Vendedor, UpdateVendedorDto>();
            CreateMap<Vendedor, ReadVendedorDto>();
        }
    }
}
