using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data
{
    public class TesteDevDbContext : IdentityDbContext<Usuario>
    {
        public TesteDevDbContext(DbContextOptions<TesteDevDbContext> opts) : base(opts)
        {

        }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Vendedor> Vendedores { get; set; }
        public DbSet<Venda> Vendas { get; set; }
    }
}