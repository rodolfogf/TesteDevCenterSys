using Microsoft.EntityFrameworkCore;
using TesteDevCenterSys.Models;

namespace TesteDevCenterSys.Data;

public class TesteDevContext : DbContext
{
    public DbSet<Produto> Produtos { get; set; }
    public DbSet<Vendedor> Vendedores { get; set; }
    public TesteDevContext(DbContextOptions<TesteDevContext> opts) : base(opts)
    {

    }
}
