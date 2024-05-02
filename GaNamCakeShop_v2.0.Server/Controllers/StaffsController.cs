using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Services;
using Microsoft.AspNetCore.Mvc;

namespace GaNamCakeShop_v2._0.Server.Controllers
{
    [ApiController]
    [Route("api/staffs")]
    public class StaffsController : Controller
    {
        public readonly StaffsServices _staffsServices;

        public StaffsController(StaffsServices staffsServices)
        {
            _staffsServices = staffsServices;
        }

        // GET: api/staffs
        [HttpGet]
        public async Task<List<Staffs>> Get() => await _staffsServices.GetAsync();

        // GET: api/staffs/_id
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Staffs>> Get(string id)
        {
            var staffs = await _staffsServices.GetAsync(id);

            if (staffs is null)
            {
                return NotFound();
            }

            return staffs;
        }

        // POST: api/staffs
        [HttpPost]
        public async Task<ActionResult<Staffs>> Post(Staffs newStaffs)
        {
            await _staffsServices.CreateAsync(newStaffs);

            return CreatedAtAction(nameof(Get), new { id = newStaffs.Id }, newStaffs);
        }

        // PUT: api/staffs/_id
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Staffs updateStaffs)
        {
            var staffs = await _staffsServices.GetAsync(id);

            if (staffs is null)
            {
                return NotFound();
            }

            updateStaffs.Id = staffs.Id;

            await _staffsServices.UpdateAsync(id, updateStaffs);

            return Ok("Updated successfully!");
        }

        // DELETE: api/staffs/_id
        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            var staffs = await _staffsServices.GetAsync(id);

            if (staffs is null)
            {
                return NotFound();
            }

            await _staffsServices.RemoveAsync(id);

            return Ok("Deleted successfully!");
        }
    }
}
