﻿// <auto-generated />
using System;
using EventMaker.DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EventMaker.Migrations
{
    [DbContext(typeof(ReservacionDataContext))]
    [Migration("20200924005303_creardb")]
    partial class creardb
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EventMaker.Modelos.CategoriaEvento", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("categoria_evento");

                    b.Property<string>("tamano");

                    b.HasKey("id");

                    b.ToTable("categoriaEventos");
                });

            modelBuilder.Entity("EventMaker.Modelos.Compra", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(50)
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("cantidadBoletos");

                    b.Property<int>("eventoid");

                    b.Property<string>("numeroTarjeta");

                    b.Property<int>("usuarioid");

                    b.HasKey("id");

                    b.HasIndex("eventoid");

                    b.HasIndex("usuarioid");

                    b.ToTable("compras");
                });

            modelBuilder.Entity("EventMaker.Modelos.Evento", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("categoriaEventoid");

                    b.Property<string>("clave");

                    b.Property<DateTime>("fecha");

                    b.Property<int>("invitadoid");

                    b.Property<string>("lugar");

                    b.Property<string>("nombre_evento");

                    b.Property<decimal>("precio");

                    b.HasKey("id");

                    b.HasIndex("categoriaEventoid");

                    b.HasIndex("invitadoid");

                    b.ToTable("eventos");
                });

            modelBuilder.Entity("EventMaker.Modelos.Invitado", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("descripcion");

                    b.Property<string>("nombre_invitado");

                    b.Property<string>("tipo_invitado");

                    b.HasKey("id");

                    b.ToTable("invitados");
                });

            modelBuilder.Entity("EventMaker.Modelos.Usuario", b =>
                {
                    b.Property<int>("id")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("apellido_usuario");

                    b.Property<string>("correo_electronico");

                    b.Property<int>("edad");

                    b.Property<DateTime>("fecha_Nacimiento");

                    b.Property<string>("nombre_usuario");

                    b.HasKey("id");

                    b.ToTable("usuarios");
                });

            modelBuilder.Entity("EventMaker.Modelos.Compra", b =>
                {
                    b.HasOne("EventMaker.Modelos.Evento", "evento")
                        .WithMany("compras")
                        .HasForeignKey("eventoid")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EventMaker.Modelos.Usuario", "usuario")
                        .WithMany("compras")
                        .HasForeignKey("usuarioid")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("EventMaker.Modelos.Evento", b =>
                {
                    b.HasOne("EventMaker.Modelos.CategoriaEvento", "categoriaEvento")
                        .WithMany("eventos")
                        .HasForeignKey("categoriaEventoid")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("EventMaker.Modelos.Invitado", "invitado")
                        .WithMany("eventos")
                        .HasForeignKey("invitadoid")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
