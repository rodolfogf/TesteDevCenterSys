using AutoMapper;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using TesteDevCenterSys.Data;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Controllers;

[ApiController]
[Route("[controller]")]
public class VendedorController : ControllerBase
{
    private TesteDevDbContext _context;
    private IMapper _mapper;

    public VendedorController(TesteDevDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult AdicionaVendedor([FromBody] CreateVendedorDto vendedorDto)
    {
        Vendedor vendedor = _mapper.Map<Vendedor>(vendedorDto);
        _context.Vendedores.Add(vendedor);
        _context.SaveChanges();

        return CreatedAtAction(
                nameof(RetornaVendedorPorId),
                new { id = vendedor.Id },
                vendedor);
    }

    [HttpGet]
    public IEnumerable<ReadVendedorDto> RetornaVendedores([FromQuery] int skip = 0, [FromQuery] int take = 10)
    {
        return _mapper.Map<List<ReadVendedorDto>>(_context.Vendedores.Skip(skip).Take(take));
    }

    [HttpGet("{id}")]
    public IActionResult RetornaVendedorPorId(int id)
    {
        var vendedor = _context.Vendedores.FirstOrDefault(v => v.Id == id);
        if (vendedor == null) return NotFound();
        var vendedorDto = _mapper.Map<ReadVendedorDto>(vendedor);

        return Ok(vendedorDto);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizaVendedor(int id, [FromBody] UpdateVendedorDto vendedorDto)
    {
        var vendedor = _context.Vendedores.FirstOrDefault(v => v.Id == id);
        if(vendedor == null) return NotFound();
        _mapper.Map(vendedorDto, vendedor);
        _context.SaveChanges();

        return NoContent();
    }

    [HttpPatch("{id}")]
    public IActionResult AtualizaVendedorParcial(int id, JsonPatchDocument<UpdateVendedorDto> vendedorPatch)
    {
        var vendedor = _context.Vendedores.FirstOrDefault(v => v.Id == id);
        if(vendedor == null) return NotFound();

        var vendedorAtualizacao = _mapper.Map<UpdateVendedorDto>(vendedor);
        vendedorPatch.ApplyTo(vendedorAtualizacao, ModelState);

        if (!TryValidateModel(vendedorAtualizacao)) return ValidationProblem(ModelState);

        _mapper.Map(vendedorAtualizacao, vendedor);
        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletaVendedor(int id)
    {
        var vendedor = _context.Vendedores.FirstOrDefault(v => v.Id == id);
        if (vendedor == null) return NotFound();

        _context.Remove(vendedor);
        _context.SaveChanges();

        return NoContent();        
    }
}
