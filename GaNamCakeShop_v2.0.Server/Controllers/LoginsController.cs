using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GaNamCakeShop_v2._0.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginsController : Controller
    {
        private readonly CustomersServices _customersServices;
        private readonly StaffsServices _staffsServices;

        public LoginsController(CustomersServices customersServices, StaffsServices staffsServices)
        {
            _customersServices = customersServices;
            _staffsServices = staffsServices;
        }

        // GET: api/customers
        [HttpGet("customers")]
        public async Task<List<Customers>> Get() => await _customersServices.GetAsync();

        // GET: api/customers/_id
        [HttpGet("customers/{id:length(24)}")]
        public async Task<ActionResult<Customers>> Get(string id)
        {
            var Customers = await _customersServices.GetAsync(id);

            if (Customers is null)
            {
                return NotFound();
            }

            return Customers;
        }

        // POST: api/customers
        [HttpPost("customers")]
        public async Task<ActionResult<Customers>> Post(Customers newCustomers)
        {
            await _customersServices.CreateAsync(newCustomers);

            return CreatedAtAction(nameof(Get), new { id = newCustomers.Id }, newCustomers);
        }

        // PUT: api/customers/_id
        [HttpPut("customers/{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Customers updateCustomers)
        {
            var Customers = await _customersServices.GetAsync(id);

            if (Customers is null)
            {
                return NotFound();
            }

            updateCustomers.Id = Customers.Id;

            await _customersServices.UpdateAsync(id, updateCustomers);

            return Ok("Updated successfully!");
        }

        // DELETE: api/customers/_id
        [HttpDelete("customers/{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            var Customers = await _customersServices.GetAsync(id);

            if (Customers is null)
            {
                return NotFound();
            }

            await _customersServices.RemoveAsync(id);

            return Ok("Deleted successfully!");
        }
    }
}
