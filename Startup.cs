using System.Net;
using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Framework.DependencyInjection;

namespace AspNet5Angular2Starter
{
    public class Startup
    {
        public Startup(IHostingEnvironment env)
        {
        }

        // This method gets called by a runtime.
        // Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
            // Uncomment the following line to add Web API services which makes it easier to port Web API 2 controllers.
            // You will also need to add the Microsoft.AspNet.Mvc.WebApiCompatShim package to the 'dependencies' section of project.json.
            // services.AddWebApiConventions();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            // Use the Default files ['index.html', 'index.htm', 'default.html', 'default.htm']
            app.UseDefaultFiles();

            // Configure the HTTP request pipeline.
            app.UseStaticFiles();

            // Add MVC to the request pipeline.
            app.UseMvc();

            // Setup a generic Quotes API EndPoint
            app.Map("/api/quotes", (config) =>
            {
                app.Run(async context =>
                {
                    var quotes = "{ \"quotes\":" +
                                 " [ { \"quote\": \"Duct tape is like the force. It has a light side, a dark side, and it holds the universe together.\", \"author\":\"Oprah Winfrey\"} ]" +
                                 "}";
                    context.Response.ContentLength = quotes.Length;
                    context.Response.ContentType = "application/json";                    
                    await context.Response.WriteAsync(quotes);
                });
            });
        }
    }
}
