using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GaNamCakeShop_v2._0.Server.Controllers
{
    [ApiController]
    [Route("api/products")]
    public class ProductsController : Controller
    {
        public readonly ProductsServices _productsServices;

        public ProductsController(ProductsServices productsServices)
        {
            _productsServices = productsServices;
        }

        // GET: api/products
        [HttpGet]
        public async Task<List<Products>> Get() => await _productsServices.GetAsync();

        // GET: api/products/_id
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Products>> Get(string id)
        {
            var products = await _productsServices.GetAsync(id);

            if (products is null)
            {
                return NotFound();
            }

            return products;
        }

        // POST: api/products
        [HttpPost]
        public async Task<ActionResult<Products>> Post(Products newProducts)
        {
            await _productsServices.CreateAsync(newProducts);

            return CreatedAtAction(nameof(Get), new { id = newProducts.Id }, newProducts);
        }

        // PUT: api/products/_id
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Products updateProducts)
        {
            var products = await _productsServices.GetAsync(id);

            if (products is null)
            {
                return NotFound();
            }

            updateProducts.Id = products.Id;

            await _productsServices.UpdateAsync(id, updateProducts);

            return Ok("Updated successfully!");
        }

        // DELETE: api/products/_id
        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            var products = await _productsServices.GetAsync(id);

            if (products is null)
            {
                return NotFound();
            }

            await _productsServices.RemoveAsync(id);

            return Ok("Deleted successfully!");
        }
    }
}
