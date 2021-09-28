using ExamGenerator.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace ExamGenerator.Api
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Subject> Subjects { get; set; }
    }
}
