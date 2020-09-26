using EventMaker.Modelos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMaker.DomainService
{
    public class InvitadoDomainService
    {
        public string GetInvitadoDomainService(int id,Invitado invitado)
        {

            if (invitado == null)
            {
                return "No se Encuentra el Invitado";
            }
            return null;
        }

        public string PostInvitadoDomainService(Invitado invitado)
        {
            return null;
        }

        public string PutInvitadoDomainService(int id ,Invitado invitado)
        {
            if (invitado == null)
            {
                return "No se Encuentra el Invitado";
            }
            return null;
        }

        public string DeleteInvitadoDomainService(Invitado invitado)
        {
            if (invitado == null)
            {
                return "No se Encuentra el Invitado";
            }
            return null;
        }
           

    }
}
