using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventMaker.ApplicationService;
using EventMaker.DataContext;
using EventMaker.DomainService;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace Examen1
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<ReservacionDataContext>();
            services.AddScoped<EventoAppService>();
            services.AddScoped<CategoriaEventoAppService>();
            services.AddScoped<InvitadoAppService>();
            services.AddScoped<CompraAppService>();
            services.AddScoped<UsuarioAppService>();
            services.AddScoped<EventoDomainService>();
            services.AddScoped<CompraDomainService>();
            services.AddScoped<InvitadoDomainService>();
            services.AddScoped<UsuarioDomainService>();
            services.AddScoped<CategoriaEventoDomainService>();
            services.AddMvc()
                 .AddJsonOptions(Options => Options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore);

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
     
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            app.UseCors(builder =>
            {
                builder.WithOrigins("*");
                builder.AllowAnyMethod();
                builder.AllowAnyHeader();
            });
            app.UseMvc();
        }
    }
}
