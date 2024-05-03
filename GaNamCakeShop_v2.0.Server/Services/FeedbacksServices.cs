using GaNamCakeShop_v2._0.Server.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;
using GaNamCakeShop_v2._0.Server.Models;

namespace GaNamCakeShop_v2._0.Server.Services
{
    public class FeedbacksServices
    {
        private readonly IMongoCollection<Feedbacks> _feedbacksCollection;

        public FeedbacksServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongodb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _feedbacksCollection = mongodb.GetCollection<Feedbacks>(settings.Value.FeedbacksCollection);
        }

        // Get all feedbacks
        public async Task<List<Feedbacks>> GetAsync() => await _feedbacksCollection.Find(_ => true).ToListAsync();

        // Get feedback by ID
        public async Task<Feedbacks?> GetAsync(string id) => await _feedbacksCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Add new feedback(s)
        public async Task CreateAsync(Feedbacks newFeedbacks) => await _feedbacksCollection.InsertOneAsync(newFeedbacks);

        // Update a feedback
        public async Task UpdateAsync(string id, Feedbacks updateFeedbacks) => await _feedbacksCollection.ReplaceOneAsync(x => x.Id == id, updateFeedbacks);

        // Delete a feedback
        public async Task RemoveAsync(string id) => await _feedbacksCollection.DeleteOneAsync(x => x.Id == id);
    }
}
