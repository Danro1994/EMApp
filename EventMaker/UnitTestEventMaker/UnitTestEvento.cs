using EventMaker.DomainService;
using EventMaker.Modelos;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestEventMaker
{
    [TestClass]
    public class UnitTestEvento
    {
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnEvento()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            var id = new int();
            evento = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.GetEventoDomainService(id, evento);

            // Assert
            Assert.AreEqual("No se Encuentra el Evento", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnaCategoriaEvento()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            categoriaEvento = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.PosttEventoDomainService(reservacion);

            // Assert
            Assert.AreEqual("La categoria del Evento no existe", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnInvitado()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            invitado = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.PosttEventoDomainService(reservacion);

            // Assert
            Assert.AreEqual("El Invitado no existe", resultado);
        }
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnaCategoriaEvento2()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            var id = new int();
            categoriaEvento = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.PuttEventoDomainService(id, reservacion);

            // Assert
            Assert.AreEqual("La categoria del Evento no existe", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnInvitado2()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            var id = new int();
            invitado = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.PuttEventoDomainService(id, reservacion);

            // Assert
            Assert.AreEqual("El Invitado no existe", resultado);
        }
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnEvento2()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            var id = new int();
            evento = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.PuttEventoDomainService(id, reservacion);

            // Assert
            Assert.AreEqual("No se encontro el Evento", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnEvento3()
        {
            // Arrange
            var invitado = new Invitado();
            var categoriaEvento = new CategoriaEvento();
            var evento = new Evento();
            var id = new int();
            evento = null;
            var reservacion = new Reservacion(categoriaEvento, evento, invitado);
            // Act
            var eventoDomainService = new EventoDomainService();
            var resultado = eventoDomainService.DeletetEventoDomainService(id,evento);

            // Assert
            Assert.AreEqual("No se encuentro el Evento", resultado);
        }
    }
}
