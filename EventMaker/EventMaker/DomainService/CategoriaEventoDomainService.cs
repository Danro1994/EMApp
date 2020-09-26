using EventMaker.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.DomainService
{
    public class CategoriaEventoDomainService
    {
        public string GetCategoriaEventoDomainService(int id, CategoriaEvento categoriaEvento)
        {

            if (categoriaEvento == null)
            {
                return "No se Encontro la Categoria del Evento";
            }

            return null;
        }
        public string PostCategoriaEventoDomainService(CategoriaEvento categoriaEvento)
        {

            return null;
        }
        public string PutCategoriaEventoDomainService(int id, CategoriaEvento categoriaEvento)
        {
            if (categoriaEvento == null)
            {
                return "No se Encuentra la Categoria del Evento";
            }
            return null;
        }
        public string DeleteCategoriaEventoDomainService(CategoriaEvento categoriaEvento)
        {
            if (categoriaEvento == null)
            {
                return "No se Encontro la Categoria del Evento";
            }

            return null;
        }
    }
}
