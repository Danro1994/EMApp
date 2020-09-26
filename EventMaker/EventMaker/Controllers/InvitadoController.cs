using EventMaker.DataContext;
using EventMaker.Modelos;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EventMaker.ApplicationService;

namespace EventMaker.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class InvitadoController:ControllerBase
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly InvitadoAppService _invitadoAppService;

        public InvitadoController(ReservacionDataContext _context, InvitadoAppService invitadoAppService)
        {
            _baseDatos = _context;
            _invitadoAppService = invitadoAppService;

            if (_baseDatos.invitados.Count() == 0)
            {
                _baseDatos.invitados.Add(new Invitado {nombre_invitado="Kazzabe" ,tipo_invitado="Agrupacion",descripcion="Grupo Hondureño" });
                _baseDatos.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invitado>>> GetInvitados()
        {
            return await _baseDatos.invitados.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Invitado>> GetInvitado(int id)
        {
            var respuestaAutoloteAppService = await _invitadoAppService.GetInvitadoApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return await _baseDatos.invitados.FirstOrDefaultAsync(q => q.id == id);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPost]
        public async Task<ActionResult<Invitado>> PostInvitado(Invitado invitado)
        {
            var respuestaAutoloteAppService = await _invitadoAppService.PostInvitadoApplicationService(invitado);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return CreatedAtAction(nameof(GetInvitado), new { id = invitado.id }, invitado);
            }
            return null;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvitado(int id, Invitado invitado)
        {
            var respuestaAutoloteAppService = await _invitadoAppService.PutInvitadoApplicationService(id,invitado);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return null;

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletInvitado(int id)
        {
            var respuestaAutoloteAppService = await _invitadoAppService.DeletInvitadoApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return null;
        }
    }
}
