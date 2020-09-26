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
    public class InvitadoAppService
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly InvitadoDomainService _invitadoDomainService;
        
        public InvitadoAppService(ReservacionDataContext _context, InvitadoDomainService invitadoDomainService)
        {
            _baseDatos = _context;
            _invitadoDomainService= invitadoDomainService;


        }
        public async Task<String> GetInvitadoApplicationService(int id)
        {
            var invitado = await _baseDatos.invitados.FirstOrDefaultAsync(q => q.id == id);

            var respuestaDomainService = _invitadoDomainService.GetInvitadoDomainService(id,invitado);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            return null;
        }

        public async Task<String> PostInvitadoApplicationService(Invitado invitado)
        {
            var respuestaDomainService = _invitadoDomainService.PostInvitadoDomainService(invitado);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.invitados.Add(invitado);
            await _baseDatos.SaveChangesAsync();

            return null;
        }

        public async Task<String> PutInvitadoApplicationService(int id, Invitado invitado)
        {
            var respuestaDomainService = _invitadoDomainService.PutInvitadoDomainService(id,invitado);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }
            _baseDatos.Entry(invitado).State = EntityState.Modified;
            await _baseDatos.SaveChangesAsync();

            return null;
        }
        public async Task<String> DeletInvitadoApplicationService(int id)
        {
            var invitado = await _baseDatos.invitados.FindAsync(id);

            var respuestaDomainService = _invitadoDomainService.DeleteInvitadoDomainService(invitado);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.invitados.Remove(invitado);
            await _baseDatos.SaveChangesAsync();

            return null;
        }

    }
}
