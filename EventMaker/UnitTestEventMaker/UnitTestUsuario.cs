using EventMaker.DomainService;
using EventMaker.Modelos;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestEventMaker
{
    [TestClass]
    public class UnitTestUsuario
    {
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnUsuario()
        {
            // Arrange
            var usuario = new Usuario();
            var id = new int();
            usuario = null;
            // Act
            var usuarioDomainService = new UsuarioDomainService();
            var resultado = usuarioDomainService.GetUsuarioDomainService(id,usuario);

            // Assert
            Assert.AreEqual("No se Encontro el Usuario", resultado);
        }


        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnUsuario2()
        {
            // Arrange
            var usuario = new Usuario();
            var id = new int();
            usuario = null;
            // Act
            var usuarioDomainService = new UsuarioDomainService();
            var resultado = usuarioDomainService.PutUsuarioDomainService(id, usuario);

            // Assert
            Assert.AreEqual("No se Encontro el Usuario", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnUsuario3()
        {
            // Arrange
            var usuario = new Usuario();
            var id = new int();
            usuario = null;
            // Act
            var usuarioDomainService = new UsuarioDomainService();
            var resultado = usuarioDomainService.DeleteUsuarioDomainService(id,usuario);

            // Assert
            Assert.AreEqual("No se Encontro el Usuario", resultado);
        }
    }
}
