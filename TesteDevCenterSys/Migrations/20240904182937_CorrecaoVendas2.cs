using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TesteDevCenterSys.Migrations
{
    public partial class CorrecaoVendas2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "QuantidadeEstoque",
                table: "Produtos");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "QuantidadeEstoque",
                table: "Produtos",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
