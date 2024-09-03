using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Data;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Controllers
{
    public class VendaController : ControllerBase
    {
        private TesteDevDbContext _context;
        private IMapper _mapper;

        public VendaController(TesteDevDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost]
        public IActionResult CadastraVenda([FromBody] CreateVendaDto vendaDto)
        {
            Venda venda = _mapper.Map<Venda>(vendaDto);

            // Busca o vendedor relacionado à venda
            var vendedor = _context.Vendedores.FirstOrDefault(v => v.Id == venda.VendedorId);
            if (vendedor == null) return NotFound("Vendedor não encontrado.");

            // Adiciona o valor da comissão ao total de comissões do vendedor
            vendedor.ValorComissoes += venda.ComissaoVendedor;

            _context.Vendas.Add(venda);
            _context.SaveChanges();

            return CreatedAtAction(
                nameof(RetornaVendaPorId),
                new { id = venda.Id },
                venda);
        }

        [HttpGet]
        public IEnumerable<ReadVendaDto> RetornaVendas([FromQuery] int skip = 0, [FromQuery] int take = 10)
        {
            return _mapper.Map<List<ReadVendaDto>>(_context.Vendas.Skip(skip).Take(take));
        }

        [HttpGet("{id}")]
        public IActionResult RetornaVendaPorId(int id)
        {
            var venda = _context.Vendas.FirstOrDefault(v => v.Id == id);
            if (venda == null) return NotFound();
            var vendaDto = _mapper.Map<ReadVendaDto>(venda);

            return Ok(vendaDto);
        }

        [HttpPut("{id}")]
        public IActionResult AtualizaVenda(int id, [FromBody] UpdateVendaDto vendaDto)
        {
            var venda = _context.Vendas.FirstOrDefault(v => v.Id == id);
            if (venda == null) return NotFound();
            _mapper.Map(vendaDto, venda);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpPatch("{id}")]
        public IActionResult AtualizaVendaParcial(int id, JsonPatchDocument<UpdateVendaDto> vendaPatch)
        {
            var venda = _context.Vendas.FirstOrDefault(v => v.Id == id);
            if (venda == null) return NotFound();

            var vendaAtualizacao = _mapper.Map<UpdateVendaDto>(venda);
            vendaPatch.ApplyTo(vendaAtualizacao, ModelState);

            if (!TryValidateModel(vendaAtualizacao)) return ValidationProblem(ModelState);

            _mapper.Map(vendaAtualizacao, venda);
            _context.SaveChanges();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult DeletaVenda(int id)
        {
            var venda = _context.Vendas.FirstOrDefault(v => v.Id == id);
            if (venda == null) return NotFound();

            _context.Remove(venda);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
