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
    public class CategoriaEventoAppService
    {
        private readonly ReservacionDataContext _baseDatos;
        private readonly CategoriaEventoDomainService _categoriaEventoDomainService;


        public CategoriaEventoAppService(ReservacionDataContext _context, CategoriaEventoDomainService categoriaEventoDomainService)
        {
            _baseDatos = _context;
            _categoriaEventoDomainService= categoriaEventoDomainService;

        }
        public async Task<String> GetCategoriaEventoApplicationService(int id)
        {
            var categoriaEvento = await _baseDatos.categoriaEventos.FirstOrDefaultAsync(q => q.id == id);


            var respuestaDomainService = _categoriaEventoDomainService.GetCategoriaEventoDomainService(id,categoriaEvento);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            return null;
        }
        public async Task<String> PostCategoriaEventoApplicationService(CategoriaEvento categoriaEvento)
        {
            var respuestaDomainService = _categoriaEventoDomainService.PostCategoriaEventoDomainService(categoriaEvento);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.categoriaEventos.Add(categoriaEvento);
            await _baseDatos.SaveChangesAsync();

            return null;
        }
        public async Task<String> PutCategoriaEventoApplicationService(int id, CategoriaEvento categoriaEvento)
        {
            var respuestaDomainService = _categoriaEventoDomainService.PutCategoriaEventoDomainService(id,categoriaEvento);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.Entry(categoriaEvento).State = EntityState.Modified;
            await _baseDatos.SaveChangesAsync();

            return null;
        }
        public async Task<String> DeletCategoriaEventoApplicationService(int id)
        {
            var categoriaEvento = await _baseDatos.categoriaEventos.FindAsync(id);

            var respuestaDomainService = _categoriaEventoDomainService.DeleteCategoriaEventoDomainService(categoriaEvento);

            bool hayErrorEnElDomainService = respuestaDomainService != null;
            if (hayErrorEnElDomainService)
            {
                return respuestaDomainService;
            }

            _baseDatos.categoriaEventos.Remove(categoriaEvento);
            await _baseDatos.SaveChangesAsync();

            return null;
        }
    }
}
