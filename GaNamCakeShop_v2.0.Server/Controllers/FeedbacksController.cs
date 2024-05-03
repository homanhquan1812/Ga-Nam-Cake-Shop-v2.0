using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GaNamCakeShop_v2._0.Server.Controllers
{
    [ApiController]
    [Route("api/feedbacks")]
    public class FeedbacksController : Controller
    {
        public readonly FeedbacksServices _feedbacksServices;

        public FeedbacksController(FeedbacksServices feedbacksServices)
        {
            _feedbacksServices = feedbacksServices;
        }

        // GET: api/feedbacks
        [HttpGet]
        public async Task<List<Feedbacks>> Get() => await _feedbacksServices.GetAsync();

        // GET: api/feedbacks/_id
        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Feedbacks>> Get(string id)
        {
            var Feedbacks = await _feedbacksServices.GetAsync(id);

            if (Feedbacks is null)
            {
                return NotFound();
            }

            return Feedbacks;
        }

        // POST: api/feedbacks
        [HttpPost]
        public async Task<ActionResult<Feedbacks>> Post(Feedbacks newFeedbacks)
        {
            await _feedbacksServices.CreateAsync(newFeedbacks);

            return CreatedAtAction(nameof(Get), new { id = newFeedbacks.Id }, newFeedbacks);
        }

        // PUT: api/feedbacks/_id
        [HttpPut("{id:length(24)}")]
        public async Task<ActionResult> Put(string id, Feedbacks updateFeedbacks)
        {
            var Feedbacks = await _feedbacksServices.GetAsync(id);

            if (Feedbacks is null)
            {
                return NotFound();
            }

            updateFeedbacks.Id = Feedbacks.Id;

            await _feedbacksServices.UpdateAsync(id, updateFeedbacks);

            return Ok("Updated successfully!");
        }

        // DELETE: api/feedbacks/_id
        [HttpDelete("{id:length(24)}")]
        public async Task<ActionResult> Delete(string id)
        {
            var Feedbacks = await _feedbacksServices.GetAsync(id);

            if (Feedbacks is null)
            {
                return NotFound();
            }

            await _feedbacksServices.RemoveAsync(id);

            return Ok("Deleted successfully!");
        }
    }
}
