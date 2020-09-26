using EventMaker.DomainService;
using EventMaker.Modelos;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestEventMaker
{
    [TestClass]
    public class UnitTestCompra
    {
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnCompra()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            var id = new int();
            compra = null;
            var reservacion = new Reservacion(compra, usuario, evento);

            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.GetCompraDomainService(compra);

            // Assert
            Assert.AreEqual("No se Encontro la Compra", resultado);
        }
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnUsuario()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            usuario = null;
            var reservacion = new Reservacion(compra, usuario, evento);

            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.PostCompraDomainService(reservacion);

            // Assert
            Assert.AreEqual("El Usuario no existe", resultado);
        }
        [TestMethod]
        public void PruebaParaValidarLaEdadUsuario()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            usuario.edad = 20;
            var reservacion = new Reservacion(compra, usuario, evento);

            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.PostCompraDomainService(reservacion);

            // Assert
            Assert.AreEqual("La reservacion debe ser por alguien mayor de 21 años", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnEvento()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            var id = new int();
            evento = null;
            var reservacion = new Reservacion(compra, usuario, evento);
            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.PostCompraDomainService(reservacion);

            // Assert
            Assert.AreEqual("El Evento no existe", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnCompra2()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            var id = new int();
            compra = null;
            var reservacion = new Reservacion(compra, usuario, evento);

            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.PutCompraDomainService(id, reservacion);

            // Assert
            Assert.AreEqual("No se Encontro la Compra", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnUsuario2()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            var id = new int();
            usuario = null;
            var reservacion = new Reservacion(compra, usuario, evento);

            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.PutCompraDomainService(id, reservacion);

            // Assert
            Assert.AreEqual("El Usuario no existe", resultado);
        }

          [TestMethod]
          public void PruebaParaValidarLaEdadUsuario2()
          {
              // Arrange
              var usuario = new Usuario();
              var evento = new Evento();
              var compra = new Compra();
              var id = new int();
            usuario.edad = 20;
            var reservacion = new Reservacion(compra, usuario, evento);

              // Act
              var compraDomainService = new CompraDomainService();
              var resultado = compraDomainService.PutCompraDomainService(id, reservacion);

              // Assert
              Assert.AreEqual("La reservacion debe ser por alguien mayor de 21 años", resultado);
          }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnEvento2()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            var id = new int();
            evento = null;
            var reservacion = new Reservacion(compra, usuario, evento);
            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.PutCompraDomainService(id,reservacion);

            // Assert
            Assert.AreEqual("No se Encuentra el Evento", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnCompra3()
        {
            // Arrange
            var usuario = new Usuario();
            var evento = new Evento();
            var compra = new Compra();
            var id = new int();
            compra = null;
            var reservacion = new Reservacion(compra, usuario, evento);

            // Act
            var compraDomainService = new CompraDomainService();
            var resultado = compraDomainService.DeleteCompraDomainService(id,compra);

            // Assert
            Assert.AreEqual("No se Encontro la Compra", resultado);
        }
    }
}
