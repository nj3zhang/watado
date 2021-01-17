using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace tado.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PlayerDataController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<PlayerDataController> _logger;
        public PlayerDataController(ILogger<PlayerDataController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [ActionName("PlayerData")]
        public int Post()
        {
            
            return 0;
            /*
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new PlayerData
            {
                Date = DateTime.Now.AddDays(index),
                TemperatureC = rng.Next(-20, 55),
                Summary = Summaries[rng.Next(Summaries.Length)]
            })
            .ToArray();
            */
        }
    }
}
