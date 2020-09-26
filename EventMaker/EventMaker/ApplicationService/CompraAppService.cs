using EventMaker.DataContext;
using EventMaker.DomainService;
using EventMaker.Modelos;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.ApplicationService
{
    public class CompraAppService
    {

        private readonly ReservacionDataContext _baseDatos;
        private readonly CompraDomainService _compraDomainService;


        public CompraAppService(ReservacionDataContext _context, CompraDomainService compraDomainService)
        {
            _baseDatos = _context;
            _compraDomainService = compraDomainService;

        }
        public async Task<String> GetCompraApplicationService(int id)
        {
            var compra = await _baseDatos.compras.Include(q => q.usuario).Include(q => q.evento).FirstOrDefaultAsync(q => q.id == id);
           
            var respuestaDomainService = _compraDomainService.GetCompraDomainService(compra);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }
            return null;
        }
        public async Task<String> PostCompraApplicationService(Compra compra)
        {

            Reservacion reservacion = await LlamadaALaBaseDeDatos(compra);


            var respuestaDomainService = _compraDomainService.PostCompraDomainService(reservacion);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.compras.Add(compra);
            await _baseDatos.SaveChangesAsync();

            return null;
        }
        public async Task<String> PutCompraApplicationService(int id, Compra compra)
        {
            Reservacion reservacion = await LlamadaALaBaseDeDatos(compra);

            var respuestaDomainService = _compraDomainService.PutCompraDomainService(id, reservacion);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.Entry(compra).State = EntityState.Modified;
            await _baseDatos.SaveChangesAsync();

            return null;
        }

        private async Task<Reservacion> LlamadaALaBaseDeDatos(Compra compra)
        {
            Usuario usuario = await _baseDatos.usuarios.FirstOrDefaultAsync(q => q.id == compra.usuarioid);

            Evento evento = await _baseDatos.eventos.FirstOrDefaultAsync(q => q.id == compra.eventoid);

            var reservacion = new Reservacion(compra, usuario, evento);
            return reservacion;
        }

        public async Task<String> DeletCompraApplicationService(int id)
        {
            var compra = await _baseDatos.compras.FindAsync(id);

            var respuestaDomainService = _compraDomainService.DeleteCompraDomainService(id, compra);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.compras.Remove(compra);
            await _baseDatos.SaveChangesAsync();

            return null;
        }

    }
}
