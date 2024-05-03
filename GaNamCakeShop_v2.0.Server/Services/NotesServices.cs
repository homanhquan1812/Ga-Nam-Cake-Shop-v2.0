using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GaNamCakeShop_v2._0.Server.Services
{
    public class NotesServices
    {
        private readonly IMongoCollection<Notes> _NotesCollection;

        public NotesServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongodb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _NotesCollection = mongodb.GetCollection<Notes>(settings.Value.NotesCollection);
        }

        // Get all Notes
        public async Task<List<Notes>> GetAsync() => await _NotesCollection.Find(_ => true).ToListAsync();

        // Get Notes by ID
        public async Task<Notes?> GetAsync(string id) => await _NotesCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Add new Note(s)
        public async Task CreateAsync(Notes newNotes) => await _NotesCollection.InsertOneAsync(newNotes);

        // Update a Note
        public async Task UpdateAsync(string id, Notes updateNotes) => await _NotesCollection.ReplaceOneAsync(x => x.Id == id, updateNotes);

        // Delete a Note
        public async Task RemoveAsync(string id) => await _NotesCollection.DeleteOneAsync(x => x.Id == id);
    }
}
