using Microsoft.EntityFrameworkCore;

namespace UsingAjax_CodeAffection_DublicateProject.Models
{
    public class TransactionDBContext : DbContext
    {
        public TransactionDBContext(DbContextOptions<TransactionDBContext> options) : base(options)
        {

        }
        public DbSet<TransactionModel> Transactions { get; set; }

    }
}
