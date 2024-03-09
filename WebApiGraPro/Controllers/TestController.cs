using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace WebApiGraPro.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        
        [HttpGet]
        public IActionResult Get()
        {
            var number = Random.Shared.Next(0, 10);
            if (number >= 7)
                return Unauthorized(number);
            return Ok(number);
        }
    }
}
