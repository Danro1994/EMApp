using EventMaker.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.DomainService
{
    public class EventoDomainService
    {
        public string GetEventoDomainService(int id,Evento evento )
        {
            if (evento == null)
            {
                return "No se Encuentra el Evento";
            }
            return null;
        }
        public string PosttEventoDomainService(Reservacion reservacion)
        {
            if (reservacion.CategoriaEvento== null)
            {
                return "La categoria del Evento no existe";
            }
            if (reservacion.Invitado == null)
            {
                return "El Invitado no existe";
            }

            return null;
        }
        public string PuttEventoDomainService(int id,Reservacion reservacion)
        {
            if (reservacion.Evento == null)
            {
                return "No se encontro el Evento";
            }
            if (reservacion.CategoriaEvento == null)
            {
                return "La categoria del Evento no existe";
            }

            if (reservacion.Invitado == null)
            {
                return "El Invitado no existe";
            }
            return null;
        }
        public string DeletetEventoDomainService(int id, Evento evento)
        {
            if (evento == null)
            {
                return "No se encuentro el Evento";
            }
            return null;

        }
    }
}
