using System.ComponentModel.DataAnnotations;

namespace JQueryDatatable.Models
{
	public class Customer
	{
		public int Id { get; set; }
		[Required, MaxLength(50)]
		public string FirstName { get; set; }
		[Required, MaxLength(50)]
		public string LastName { get; set; }
		[Required, MaxLength(50)]
		public string Contact { get; set; }
		[Required, MaxLength(150)]
		public string Email { get; set; }
		public DateTime DateOfBirth { get; set; }
		

	}
}
