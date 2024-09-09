using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Data;
using TesteDevCenterSys.Models;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Authorization;

namespace TesteDevCenterSys.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
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
            var vendedor = _context.Vendedores.FirstOrDefault(v => v.Id == vendaDto.VendedorId);
            if (vendedor == null) return NotFound("Vendedor não encontrado.");

            Venda venda = _mapper.Map<Venda>(vendaDto);
            venda.Vendedor = vendedor;

            venda.VendaProdutos = new List<VendaProduto>();            
            foreach(var vendaProdutoDto in vendaDto.VendaProdutos)            
            {
                var produto = _context.Produtos.FirstOrDefault(p => p.Id == vendaProdutoDto.ProdutoId);
                if (produto == null) return NotFound("Produto não encontrado");

                var vp = _mapper.Map<VendaProduto>(vendaProdutoDto);
                vp.Produto = produto;
                vp.Venda = venda;

                venda.VendaProdutos.Add(vp);
            }

            _context.Vendas.Add(venda);
            _context.SaveChanges();


            vendedor.ValorComissoes += venda.ComissaoVendedor;
            _context.SaveChanges();

            return CreatedAtAction(
                nameof(RetornaVendaPorId),
                new { id = venda.Id },
                venda);
        }

        [HttpGet]
        public IEnumerable<ReadVendaDto> RetornaVendas([FromQuery] int skip = 0, [FromQuery] int take = 10)
        {
            return _mapper.Map<List<ReadVendaDto>>(_context.Vendas.ToList().Skip(skip).Take(take));
        }

        [HttpGet("/Comissao")]
        public IEnumerable<ReadVendaComissaoDto> RetornaComissoes([FromQuery] int skip = 0, [FromQuery] int take = 10)
        {
            return _mapper.Map<List<ReadVendaComissaoDto>>(_context.Vendas.ToList().Skip(skip).Take(take));
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

            var vendedor = _context.Vendedores.FirstOrDefault(vor => vor.Id == venda.VendedorId);
            if (vendedor == null) return ValidationProblem();

            vendedor.ValorComissoes -= venda.ComissaoVendedor;

            _context.Remove(venda);
            _context.SaveChanges();

            return NoContent();
        }
    }
}
