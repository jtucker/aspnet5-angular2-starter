using Microsoft.AspNet.Builder;
using Microsoft.AspNet.Hosting;
using Microsoft.AspNet.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AspNet5Angular2Starter
{
    public class Startup
    {
        IConfigurationRoot Configuration { get; set; }

        public Startup(IHostingEnvironment env)
        {
            var builder = new ConfigurationBuilder()
                .AddJsonFile("appsettings.json")
                .AddEnvironmentVariables();
                
            Configuration = builder.Build();
        }

        // This method gets called by a runtime.
        // Use this method to add services to the container
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();
        }

        // Configure is called after ConfigureServices is called.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
        {
            if(env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            
            loggerFactory
                .AddConsole(Configuration.GetSection("Logging"))
                .AddDebug();
            
            // Use the Default files ['index.html', 'index.htm', 'default.html', 'default.htm']
            app.UseDefaultFiles()
                .UseStaticFiles()
                .UseIISPlatformHandler()
                .UseMvc();

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
        
        public static void Main(string[] args) => WebApplication.Run<Startup>(args);
    }    
}
