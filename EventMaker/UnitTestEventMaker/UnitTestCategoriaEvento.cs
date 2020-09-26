using EventMaker.DomainService;
using EventMaker.Modelos;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestEventMaker
{
    [TestClass]
    public class UnitTestCategoriaEvento
    {
        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnCategoriaEvento()
        {
            // Arrange
            var categoriaEvento = new CategoriaEvento();
            var id = new int();
            categoriaEvento = null;
            // Act
            var categoriaEventoDomainService = new CategoriaEventoDomainService();
            var resultado = categoriaEventoDomainService.GetCategoriaEventoDomainService(id, categoriaEvento);

            // Assert
            Assert.AreEqual("No se Encontro la Categoria del Evento", resultado);
        }


        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnCategoriaEvento2()
        {
            // Arrange
            var categoriaEvento = new CategoriaEvento();
            var id = new int();
            categoriaEvento = null;
            // Act
            var categoriaEventoDomainService = new CategoriaEventoDomainService();
            var resultado = categoriaEventoDomainService.PutCategoriaEventoDomainService(id,categoriaEvento);

            // Assert
            Assert.AreEqual("No se Encuentra la Categoria del Evento", resultado);
        }

        [TestMethod]
        public void PruebaParaValidarQueSeEncuentraUnCategoriaEvento3()
        {
            // Arrange
            var categoriaEvento = new CategoriaEvento();
            var id = new int();
            categoriaEvento = null;
            // Act
            var categoriaEventoDomainService = new CategoriaEventoDomainService();
            var resultado = categoriaEventoDomainService.DeleteCategoriaEventoDomainService(categoriaEvento);

            // Assert
            Assert.AreEqual("No se Encontro la Categoria del Evento", resultado);
        }
    }
}
