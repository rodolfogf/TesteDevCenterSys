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
        public DbSet<VendaProduto> VendaProdutos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            
            modelBuilder.Entity<VendaProduto>()
                .HasOne(vp => vp.Venda)
                .WithMany(v => v.VendaProdutos)
                .HasForeignKey(vp => vp.VendaId);

            modelBuilder.Entity<VendaProduto>()
                .HasOne(vp => vp.Produto)
                .WithMany()
                .HasForeignKey(vp => vp.ProdutoId);

            modelBuilder.Entity<Venda>()
                .HasOne(v => v.Vendedor)
                .WithMany(v => v.Vendas)
                .HasForeignKey(v => v.VendedorId);
        }
    }
}