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
    public class EventoController:ControllerBase
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly EventoAppService _eventoteAppService;

        public EventoController(ReservacionDataContext _context, EventoAppService eventoAppService)
        {
            _baseDatos = _context;
            _eventoteAppService = eventoAppService;


            if (_baseDatos.eventos.Count() == 0)
            {
                _baseDatos.eventos.Add(new Evento {nombre_evento="Feria juniana ",lugar="Expocentro",precio=250,categoriaEventoid=1,invitadoid=1,clave="asd213"});
                _baseDatos.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<Evento>>> GetEventos()
        {
            return await _baseDatos.eventos.Include(q => q.invitado).Include(q => q.categoriaEvento).ToListAsync();

  
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Evento>> GetEvento(int id)
        {
            var respuestaAutoloteAppService = await _eventoteAppService.GetEventoApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return await _baseDatos.eventos.Include(q => q.invitado).Include(q => q.categoriaEvento).FirstOrDefaultAsync(q => q.id == id);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPost]
        public async Task<ActionResult<Evento>> PostEvento(Evento evento)
        {
            var respuestaAutoloteAppService = await _eventoteAppService.PostEventoApplicationService(evento);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return CreatedAtAction(nameof(GetEvento), new { id = evento.id }, evento);
            }
            return BadRequest(respuestaAutoloteAppService);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutEvento(int id, Evento evento)
        {
            var respuestaAutoloteAppService = await _eventoteAppService.PutEventoApplicationService(id,evento);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletEvento(int id)
        {
            var respuestaAutoloteAppService = await _eventoteAppService.DeletEventoApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);

        }
    }
}
