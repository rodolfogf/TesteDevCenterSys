using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TesteDevCenterSys.Migrations
{
    public partial class CorrecaoVendaVendedor : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VendaProduto_Produtos_ProdutoId",
                table: "VendaProduto");

            migrationBuilder.DropForeignKey(
                name: "FK_VendaProduto_Vendas_VendaId",
                table: "VendaProduto");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VendaProduto",
                table: "VendaProduto");

            migrationBuilder.RenameTable(
                name: "VendaProduto",
                newName: "VendaProdutos");

            migrationBuilder.RenameIndex(
                name: "IX_VendaProduto_VendaId",
                table: "VendaProdutos",
                newName: "IX_VendaProdutos_VendaId");

            migrationBuilder.RenameIndex(
                name: "IX_VendaProduto_ProdutoId",
                table: "VendaProdutos",
                newName: "IX_VendaProdutos_ProdutoId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VendaProdutos",
                table: "VendaProdutos",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VendaProdutos_Produtos_ProdutoId",
                table: "VendaProdutos",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VendaProdutos_Vendas_VendaId",
                table: "VendaProdutos",
                column: "VendaId",
                principalTable: "Vendas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_VendaProdutos_Produtos_ProdutoId",
                table: "VendaProdutos");

            migrationBuilder.DropForeignKey(
                name: "FK_VendaProdutos_Vendas_VendaId",
                table: "VendaProdutos");

            migrationBuilder.DropPrimaryKey(
                name: "PK_VendaProdutos",
                table: "VendaProdutos");

            migrationBuilder.RenameTable(
                name: "VendaProdutos",
                newName: "VendaProduto");

            migrationBuilder.RenameIndex(
                name: "IX_VendaProdutos_VendaId",
                table: "VendaProduto",
                newName: "IX_VendaProduto_VendaId");

            migrationBuilder.RenameIndex(
                name: "IX_VendaProdutos_ProdutoId",
                table: "VendaProduto",
                newName: "IX_VendaProduto_ProdutoId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_VendaProduto",
                table: "VendaProduto",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_VendaProduto_Produtos_ProdutoId",
                table: "VendaProduto",
                column: "ProdutoId",
                principalTable: "Produtos",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_VendaProduto_Vendas_VendaId",
                table: "VendaProduto",
                column: "VendaId",
                principalTable: "Vendas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
