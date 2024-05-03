using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GaNamCakeShop_v2._0.Server.Controllers
{
    [ApiController]
    [Route("api/notes")]
    public class NotesController : Controller
    {
        public readonly NotesServices _notesServices;

        public NotesController(NotesServices NotesServices)
        {
            _notesServices = NotesServices;
        }

        // GET: api/notes
        [HttpGet]
        public async Task<List<Notes>> Get() => await _notesServices.GetAsync();

        // GET: api/notes/_id
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Notes>> Get(string id)
        {
            var Notes = await _notesServices.GetAsync(id);

            if (Notes is null)
            {
                return NotFound();
            }

            return Notes;
        }

        // POST: api/notes
        [HttpPost]
        public async Task<ActionResult<Notes>> Post(Notes newNotes)
        {
            await _notesServices.CreateAsync(newNotes);

            return CreatedAtAction(nameof(Get), new { id = newNotes.Id }, newNotes);
        }

        // PUT: api/notes/_id
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Notes updateNotes)
        {
            var Notes = await _notesServices.GetAsync(id);

            if (Notes is null)
            {
                return NotFound();
            }

            updateNotes.Id = Notes.Id;

            await _notesServices.UpdateAsync(id, updateNotes);

            return Ok("Updated successfully!");
        }

        // DELETE: api/notes/_id
        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            var Notes = await _notesServices.GetAsync(id);

            if (Notes is null)
            {
                return NotFound();
            }

            await _notesServices.RemoveAsync(id);

            return Ok("Deleted successfully!");
        }
    }
}
