var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddOpenApiDocument();

builder.Services.AddCors(options => options.AddPolicy("Poll", builder =>
{
    builder.AllowAnyOrigin();
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseOpenApi();

    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("Poll");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
