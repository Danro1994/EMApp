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
    public class EventoAppService
    {

        private readonly ReservacionDataContext _baseDatos;
        private readonly EventoDomainService _eventoDomainService;

        public EventoAppService(ReservacionDataContext _context, EventoDomainService eventoDomainService)
        {
            _baseDatos = _context;
            _eventoDomainService = eventoDomainService;

        }
        public async Task<String> GetEventoApplicationService(int id)
        {
            var evento = await _baseDatos.eventos.Include(q => q.invitado).Include(q => q.categoriaEvento).FirstOrDefaultAsync(q => q.id == id);

            var respuestaDomainService = _eventoDomainService.GetEventoDomainService(id, evento);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }
            return null;
        }

        public async Task<String> PostEventoApplicationService(Evento evento)
        {
            Reservacion reservarcion = await LlamadaALaBaseDeDatos(evento);

            var respuestaDomainService = _eventoDomainService.PosttEventoDomainService(reservarcion);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }
            _baseDatos.eventos.Add(evento);
            await _baseDatos.SaveChangesAsync();

            return null;
        }

        private async Task<Reservacion> LlamadaALaBaseDeDatos(Evento evento)
        {
            CategoriaEvento categoriaEvento = await _baseDatos.categoriaEventos.FirstOrDefaultAsync(q => q.id == evento.categoriaEventoid);

            Invitado invitado = await _baseDatos.invitados.FirstOrDefaultAsync(q => q.id == evento.invitadoid);

            var reservarcion = new Reservacion(categoriaEvento, evento, invitado);
            return reservarcion;
        }

        public async Task<String> PutEventoApplicationService(int id, Evento evento)
        {
            Reservacion reservarcion = await LlamadaALaBaseDeDatos(evento);

            var respuestaDomainService = _eventoDomainService.PuttEventoDomainService(id, reservarcion);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.Entry(evento).State = EntityState.Modified;
            await _baseDatos.SaveChangesAsync();

            return null;
        }

        public async Task<String> DeletEventoApplicationService(int id)
        {
            var evento = await _baseDatos.eventos.FindAsync(id);
            var respuestaDomainService = _eventoDomainService.DeletetEventoDomainService(id, evento);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }


            _baseDatos.eventos.Remove(evento);
            await _baseDatos.SaveChangesAsync();

            return null;
        }
    }
}
