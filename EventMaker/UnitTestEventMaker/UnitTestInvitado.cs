using EventMaker.DomainService;
using EventMaker.Modelos;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestEventMaker
{
    [TestClass]
    public class UnitTestInvitado
    {
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnInvitado()
        {
            // Arrange
            var invitado = new Invitado();
            var id = new int();
            invitado = null;
            // Act
            var invitadoDomainService = new InvitadoDomainService();
            var resultado = invitadoDomainService.GetInvitadoDomainService(id,invitado);

            // Assert
            Assert.AreEqual("No se Encuentra el Invitado", resultado);
        }


        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnInvitado2()
        {
            // Arrange
            var invitado = new Invitado();
            var id = new int();
            invitado = null;
            // Act
            var invitadoDomainService = new InvitadoDomainService();
            var resultado = invitadoDomainService.PutInvitadoDomainService(id, invitado);

            // Assert
            Assert.AreEqual("No se Encuentra el Invitado", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnInvitado3()
        {
            // Arrange
            var invitado = new Invitado();
            var id = new int();
            invitado = null;
            // Act
            var invitadoDomainService = new InvitadoDomainService();
            var resultado = invitadoDomainService.DeleteInvitadoDomainService(invitado);

            // Assert
            Assert.AreEqual("No se Encuentra el Invitado", resultado);
        }
    }
}
