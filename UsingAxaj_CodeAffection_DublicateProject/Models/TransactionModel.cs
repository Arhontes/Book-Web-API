using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UsingAjax_CodeAffection_DublicateProject.Models
{
    public class TransactionModel
    {
        [Key] // Аннотация/атрибут устанавливает нижележащее свойство в качестве первичного ключа(ниже свойство с типом Int поэтому к нему автоматически применяется DatabaseGenerated(DatabaseGeneratedOption.Identity) и его можно не указывать)
        public int TransactionId { get; set; } //Теперь это свойство первичный ключ

        [MaxLength(12)]
        [Required(ErrorMessage = "This field is requered")]
        [DisplayName("Account Number")]
        [Column(TypeName = "nvarchar(12)")] // под этим атрибутом данные в столбце будут не длинней 12 символов(объяснение весьма условно ведь 12 это длина строки в парах байтов) nvarchar - Строковые данные переменного размера. 
        public string AccountNumber { get; set; }

        [Required(ErrorMessage = "This field is requered")]
        [DisplayName("Beneficary Name")]
        [Column(TypeName = "nvarchar(100)")]
        public string BeneficaryName { get; set; }

        [Required(ErrorMessage = "This field is requered")]
        [DisplayName("Bank Name")]
        [Column(TypeName = "nvarchar(100)")]
        public string BankName { get; set; }

        [MaxLength(11)]
        [Required(ErrorMessage = "This field is requered")]
        [DisplayName("SWIFT Code")]
        [Column(TypeName = "nvarchar(100)")]
        public string SWIFTCode { get; set; }

        [Required(ErrorMessage = "This field is requered")]
        public int Amount { get; set; }

        public DateTime Date { get; set; }
    }
}
