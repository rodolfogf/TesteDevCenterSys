namespace TesteDevCenterSys.Data.Dtos
{
    public class ReadVendaComissaoDto
    {
        public int Id { get; set; }
        public string DataVenda { get; set; }
        public double TotalVenda { get; set; }
        public string NomeVendedor { get; set; }
        public double ComissaoVendedor { get; set; }
    }
}
