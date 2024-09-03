using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using TesteDevCenterSys.Data;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Services;

namespace TesteDevCenterSys.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class UsuarioController : ControllerBase
    {
        private UsuarioService _usuarioService;
        private TesteDevDbContext _context;
        private IMapper _mapper;

        public UsuarioController(UsuarioService cadastroService, TesteDevDbContext context, IMapper mapper)
        {
            _usuarioService = cadastroService;
            _context = context;
            _mapper = mapper;
        }

        [HttpPost("cadastro")]
        public async Task<IActionResult> CadastraUsuario(CreateUsuarioDto dto)
        {
            await _usuarioService.Cadastra(dto);
            return Ok("Usuário Cadastrado!");
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync(LoginUsuarioDto dto)
        {
            var token = await _usuarioService.Login(dto);
            return Ok(token);
        }

        [HttpGet]
        public IEnumerable<ReadUsuarioDto> RetornaUsuarios()
        {
            var usuarios = _mapper.Map<List<ReadUsuarioDto>>(_context.Users);

            return usuarios;
        }

        [HttpPatch("{id}")]
        public IActionResult AlteraUsuarioParcial(string id, JsonPatchDocument<UpdateUsuarioDto> usuarioPatch)
        {
            var usuario = _context.Users.FirstOrDefault(u => u.Id == id);
            if (usuario == null) return NotFound();

            var usuarioAlteracao = _mapper.Map<UpdateUsuarioDto>(usuario);
            usuarioPatch.ApplyTo(usuarioAlteracao, ModelState);

            if (!TryValidateModel(usuarioAlteracao)) return ValidationProblem(ModelState);

            _mapper.Map(usuarioAlteracao, usuario);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete]
        public IActionResult DeletaUsuario(string id) 
        {
            var usuario = _context.Users.FirstOrDefault(u => u.Id == id);
            if (usuario == null) return NotFound();

            _context.Remove(usuario);
            _context.SaveChanges();

            return NoContent();
        }
        
    }
}