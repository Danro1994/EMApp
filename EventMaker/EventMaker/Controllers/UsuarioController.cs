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
    public class UsuarioController:ControllerBase
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly UsuarioAppService _usuarioAppService;

        public UsuarioController(ReservacionDataContext _context, UsuarioAppService usuarioAppService)
        {
            _baseDatos = _context;
            _usuarioAppService = usuarioAppService;


            if (_baseDatos.usuarios.Count() == 0)
            {
                _baseDatos.usuarios.Add(new Usuario {nombre_usuario="Manuel",apellido_usuario="Madrid",edad=53,correo_electronico="jose.madrid@hondutel.hn"});
                _baseDatos.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Usuario>>> GetUsuarios()
        {
            return await _baseDatos.usuarios.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Usuario>> GetUsuario(int id)
        {
            var respuestaAutoloteAppService = await _usuarioAppService.GetUsuarioApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return await _baseDatos.usuarios.FirstOrDefaultAsync(q => q.id == id);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPost]
        public async Task<ActionResult<Usuario>> PostUsuario(Usuario usuario)
        {
            var respuestaAutoloteAppService = await _usuarioAppService.PostUsuarioApplicationService(usuario);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return CreatedAtAction(nameof(GetUsuario), new { id = usuario.id }, usuario);
            }
            return BadRequest(respuestaAutoloteAppService);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutUsuario(int id, Usuario usuario)
        {
            var respuestaAutoloteAppService = await _usuarioAppService.PutUsuarioApplicationService(id,usuario);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletusuarios(int id)
        {
            var respuestaAutoloteAppService = await _usuarioAppService.DeletusuariosApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);
        }
    }
}
