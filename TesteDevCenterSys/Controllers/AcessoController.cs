using Microsoft.AspNetCore.Mvc;

namespace TesteDevCenterSys.Controllers
{
    [ApiController]
    [Route("[Controller]")]
    public class AcessoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Ok("Acesso permitido");
        }

    }
}