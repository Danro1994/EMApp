using EventMaker.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.DomainService
{
    public class UsuarioDomainService
    {
        public string GetUsuarioDomainService(int id, Usuario usuario)
        {
            if (usuario == null)
            {
                return "No se Encontro el Usuario";
            }

            return null;
        }
        public string PostUsuarioDomainService(Usuario usuario)
        {

            return null;
        }
        public string PutUsuarioDomainService(int id, Usuario usuario)
        {
            if (usuario == null)
            {
                return "No se Encontro el Usuario";
            }

            return null;
        }
        public string DeleteUsuarioDomainService(int id, Usuario usuario)
        {
            if (usuario == null)
            {
                return "No se Encontro el Usuario";
            }

            return null;
        }
    }
}
