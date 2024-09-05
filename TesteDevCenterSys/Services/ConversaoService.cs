using System.Globalization;
using System.Text;

namespace TesteDevCenterSys.Services
{
    public class ConversaoService
    {
        public ConversaoService() { }

        public static string NormalizaString(string texto)
        {
            string textoNormalizado = texto.Normalize(NormalizationForm.FormD);

            StringBuilder sb = new StringBuilder();

            foreach (char c in textoNormalizado)
            {
                if (CharUnicodeInfo.GetUnicodeCategory(c) != UnicodeCategory.NonSpacingMark)
                {
                    sb.Append(c);
                }
            }

            string stringNormalizada = sb.ToString().Normalize(NormalizationForm.FormC);
            stringNormalizada = stringNormalizada.Replace("ç", "c").Replace("Ç", "C");
            stringNormalizada = stringNormalizada.Replace(" ", "");

            return stringNormalizada;
        }
    }
}
