using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventMaker.ApplicationService;
using EventMaker.DataContext;
using EventMaker.Modelos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EventMaker.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class CompraController:ControllerBase
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly CompraAppService _compraAppService;

        public CompraController(ReservacionDataContext _context, CompraAppService compraAppService)
        {
            _baseDatos = _context;
            _compraAppService = compraAppService;

            if (_baseDatos.compras.Count() == 0)
            {
                _baseDatos.compras.Add(new Compra { usuarioid = 1, eventoid=1});
                _baseDatos.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<List<Compra>>> GetCompras()
        {
                  return await _baseDatos.compras.Include(q => q.usuario).Include(q => q.evento).ToListAsync();        
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Compra>> GetCompra(int id)
        {
            var respuestaAutoloteAppService = await _compraAppService.GetCompraApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return await _baseDatos.compras.FirstOrDefaultAsync(q => q.id == id);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPost]
        public async Task<ActionResult<Compra>> PostCompra(Compra compra)
        {
            var respuestaAutoloteAppService = await _compraAppService.PostCompraApplicationService(compra);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return await _baseDatos.compras.FirstOrDefaultAsync(q => q.id == compra.id);
            }
            return BadRequest(respuestaAutoloteAppService);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutCompra(int id, Compra compra)
        {
            var respuestaAutoloteAppService = await _compraAppService.PutCompraApplicationService(id,compra);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);
         

        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletCompra(int id)
        {
            var respuestaAutoloteAppService = await _compraAppService.DeletCompraApplicationService(id);

            bool noHayErroresEnLasValidaciones = respuestaAutoloteAppService == null;
            if (noHayErroresEnLasValidaciones)
            {
                return NoContent();
            }
            return BadRequest(respuestaAutoloteAppService);
        }

    }
}
