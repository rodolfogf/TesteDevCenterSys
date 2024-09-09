using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;
using TesteDevCenterSys.Data;
using TesteDevCenterSys.Data.Dtos;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Controllers;

[Authorize]
[ApiController]
[Route("[controller]")]
public class ProdutoController : ControllerBase
{
    private TesteDevDbContext _context;
    private IMapper _mapper;

    public ProdutoController(TesteDevDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }

    [HttpPost]
    public IActionResult CadastraProduto([FromBody] CreateProdutoDto produtoDto)
    {
        var produto = _mapper.Map<Produto>(produtoDto);
        _context.Produtos.Add(produto);
        _context.SaveChanges();

        return CreatedAtAction(
                nameof(RetornaProdutoPorId),
                new {id = produto.Id}, 
                produto);
    }

    [HttpGet]
    public IEnumerable<ReadProdutoDto> RetornaProdutos([FromQuery] int skip = 0, [FromQuery]int take = 10)
    {
        return _mapper.Map<List<ReadProdutoDto>>(_context.Produtos.Skip(skip).Take(take));
    }

    [HttpGet("{id}")]
    public IActionResult RetornaProdutoPorId(int id) 
    {
        var produto = _context.Produtos.FirstOrDefault(p => p.Id == id);
        if (produto == null) return NotFound();
        var produtoDto = _mapper.Map<ReadProdutoDto>(produto);

        return Ok(produtoDto);
    }

    [HttpPut("{id}")]
    public IActionResult AtualizaProduto(int id, [FromBody] UpdateProdutoDto produtoDto)
    {
        var produto = _context.Produtos.FirstOrDefault(p => p.Id == id);
        if (produto == null) return NotFound();
        _mapper.Map(produtoDto, produto);
        _context.SaveChanges();

        return NoContent();
    }

    [HttpPatch("{id}")]
    public IActionResult AtualizaProdutoParcial(int id, JsonPatchDocument<UpdateProdutoDto> produtoPatch)
    {
        var produto = _context.Produtos.FirstOrDefault(p => p.Id == id);
        if (produto == null) return NotFound();

        var produtoAtualizacao = _mapper.Map<UpdateProdutoDto>(produto);
        produtoPatch.ApplyTo(produtoAtualizacao, ModelState);

        if (!TryValidateModel(produtoAtualizacao)) return ValidationProblem(ModelState);

        _mapper.Map(produtoAtualizacao, produto);
        _context.SaveChanges();

        return NoContent();
    }

    [HttpDelete("{id}")]
    public IActionResult DeletaProduto(int id)
    {
        var produto = _context.Produtos.FirstOrDefault(p => p.Id == id);
        if (produto == null) return NotFound();

        _context.Remove(produto);
        _context.SaveChanges();

        return NoContent();
    }
}
