using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EventMaker.DataContext;
using EventMaker.Modelos;
using EventMaker.ApplicationService;

namespace EventMaker.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CategoriaEventoController:ControllerBase
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly CategoriaEventoAppService _categoriaEventoAppService;

        public CategoriaEventoController(ReservacionDataContext _context, CategoriaEventoAppService categoriaEventoAppService)
        {
            _baseDatos = _context;
            _categoriaEventoAppService = categoriaEventoAppService;

            if (_baseDatos.categoriaEventos.Count() == 0)
            {
                _baseDatos.categoriaEventos.Add(new CategoriaEvento {categoria_evento="Concierto",tamano="Grande"});
                _baseDatos.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CategoriaEvento>>> GetCategoriaEventos()
        {
            return await _baseDatos.categoriaEventos.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<CategoriaEvento>> GetCategoriaEvento(int id)
        {
            var respuestaAutoloteAppService = await _categoriaEventoAppService.GetCategoriaEventoApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return await _baseDatos.categoriaEventos.FirstOrDefaultAsync(q => q.id == id);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPost]
        public async Task<ActionResult<CategoriaEvento>> PostCategoriaEvento(CategoriaEvento categoriaEvento)
        {
            var respuestaAutoloteAppService = await _categoriaEventoAppService.PostCategoriaEventoApplicationService(categoriaEvento);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return CreatedAtAction(nameof(GetCategoriaEvento), new { id = categoriaEvento.id }, categoriaEvento);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCategoriaEvento(int id, CategoriaEvento categoriaEvento)
        {
            var respuestaAutoloteAppService = await _categoriaEventoAppService.PutCategoriaEventoApplicationService(id,categoriaEvento);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletCategoriaEvento(int id)
        {
            var respuestaAutoloteAppService = await _categoriaEventoAppService.DeletCategoriaEventoApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);

        }
    }
}
