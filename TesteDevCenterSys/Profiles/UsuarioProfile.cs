using AutoMapper;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Profiles
{
    public class UsuarioProfile : Profile
    {
        public UsuarioProfile()
        {
            CreateMap<CreateUsuarioDto, Usuario>();
            CreateMap<Usuario, ReadUsuarioDto>();
        }
    }
}