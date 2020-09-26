using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.Modelos
{
    public class Reservacion
    {

        public Reservacion(CategoriaEvento categoriaEvento, Evento evento, Invitado invitado)
        {
            CategoriaEvento = categoriaEvento;
            Evento = evento;
            Invitado = invitado;
        }

        public Reservacion(Compra compra, Usuario usuario, Evento evento)
        {
            Compra = compra;
            Usuario = usuario;
            Evento = evento;
     
        }

        public Evento Evento{ get; set; }
        public CategoriaEvento CategoriaEvento{ get; set; }
        public Invitado Invitado{ get; set; }
        public Usuario Usuario{ get; set; }
        public Compra Compra{ get; set; }
    }
}
