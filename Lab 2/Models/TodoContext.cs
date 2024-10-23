using Microsoft.EntityFrameworkCore;
using TodoApi.Models; // Ensure this is the namespace where your model resides

namespace TodoApi.Models;

public class TodoContext : DbContext
{
    public TodoContext(DbContextOptions<TodoContext> options): base(options)
    {
    }

    public DbSet<TodoItem> TodoItems { get; set; } = null!;
}