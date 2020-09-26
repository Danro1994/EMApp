using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.Modelos
{
    public class Invitado
    {
        public int id { get; set; }
        public string nombre_invitado { get; set; }
        public string tipo_invitado { get; set; }
        public string descripcion { get; set; }
        public List<Evento> eventos { get; set; }

    }
}
