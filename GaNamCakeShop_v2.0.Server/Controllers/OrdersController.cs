using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GaNamCakeShop_v2._0.Server.Controllers
{
    [ApiController]
    [Route("api/orders")]
    public class OrdersController : Controller
    {
        public readonly OrdersServices _ordersServices;

        public OrdersController(OrdersServices OrdersServices)
        {
            _ordersServices = OrdersServices;
        }

        // GET: api/orders
        [HttpGet]
        public async Task<List<Orders>> Get() => await _ordersServices.GetAsync();

        // GET: api/orders/_id
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Orders>> Get(string id)
        {
            var Orders = await _ordersServices.GetAsync(id);

            if (Orders is null)
            {
                return NotFound();
            }

            return Orders;
        }

        // POST: api/orders
        [HttpPost]
        public async Task<ActionResult<Orders>> Post(Orders newOrders)
        {
            await _ordersServices.CreateAsync(newOrders);

            return CreatedAtAction(nameof(Get), new { id = newOrders.Id }, newOrders);
        }

        // PUT: api/orders/_id
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Orders updateOrders)
        {
            var Orders = await _ordersServices.GetAsync(id);

            if (Orders is null)
            {
                return NotFound();
            }

            updateOrders.Id = Orders.Id;

            await _ordersServices.UpdateAsync(id, updateOrders);

            return Ok("Updated successfully!");
        }

        // DELETE: api/orders/_id
        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            var Orders = await _ordersServices.GetAsync(id);

            if (Orders is null)
            {
                return NotFound();
            }

            await _ordersServices.RemoveAsync(id);

            return Ok("Deleted successfully!");
        }
    }
}
