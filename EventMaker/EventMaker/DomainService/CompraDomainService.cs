using EventMaker.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.DomainService
{
    public class CompraDomainService
    {
        public string GetCompraDomainService(Compra compra)
        {
            if (compra == null)
            {
                return "No se Encontro la Compra";
            }
            return null;
        }
        public string PostCompraDomainService(Reservacion reservacion)
        {
            if (reservacion.Evento == null)
            {
                return "El Evento no existe";
            }
            if (reservacion.Usuario == null)
            {
                return "El Usuario no existe";
            }
            if (reservacion.Usuario.edad <= 20)
            {
                return "La reservacion debe ser por alguien mayor de 21 años";
            }
        

            return null;
        }
        public string PutCompraDomainService(int id, Reservacion reservacion)
        {
            if (reservacion.Evento == null)
            {
                return "No se Encuentra el Evento";
            }
            if (reservacion.Compra == null)
            {
                return "No se Encontro la Compra";
            }
            if (reservacion.Usuario == null)
            {
                return "El Usuario no existe";
            }
            if (reservacion.Usuario.edad <= 20)
            {
                return "La reservacion debe ser por alguien mayor de 21 años";
            }
          
            return null;
        }
        public string DeleteCompraDomainService(int id, Compra compra)
        {

            if (compra == null)
            {
                return "No se Encontro la Compra";
            }

            return null;
        }
    }
}
