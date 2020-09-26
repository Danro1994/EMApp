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
    public class UsuarioAppService
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly UsuarioDomainService _usuarioDomainService;

        public UsuarioAppService(ReservacionDataContext _context, UsuarioDomainService usuarioDomainService)
        {
            _baseDatos = _context;
            _usuarioDomainService = usuarioDomainService;


        }
        public async Task<String> GetUsuarioApplicationService(int id)
        {
            var usuario = await _baseDatos.usuarios.FirstOrDefaultAsync(q => q.id == id);


            var respuestaDomainService = _usuarioDomainService.GetUsuarioDomainService(id, usuario);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }
            return null;
        }
        public async Task<String> PostUsuarioApplicationService(Usuario usuario)
        {

            var respuestaDomainService = _usuarioDomainService.PostUsuarioDomainService(usuario);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.usuarios.Add(usuario);
            await _baseDatos.SaveChangesAsync();

            return null;
        }
        public async Task<String> PutUsuarioApplicationService(int id, Usuario usuario)
        {
            var respuestaDomainService = _usuarioDomainService.PutUsuarioDomainService(id,usuario);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.Entry(usuario).State = EntityState.Modified;
            await _baseDatos.SaveChangesAsync();

            return null;
        }
        public async Task<String> DeletusuariosApplicationService(int id)
        {
            var usuario = await _baseDatos.usuarios.FindAsync(id);
            var respuestaDomainService = _usuarioDomainService.DeleteUsuarioDomainService(id, usuario);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.usuarios.Remove(usuario);
            await _baseDatos.SaveChangesAsync();

            return null;
        }
    }
}
