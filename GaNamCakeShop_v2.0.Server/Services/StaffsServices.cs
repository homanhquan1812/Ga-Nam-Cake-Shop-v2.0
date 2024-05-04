using MongoDB.Driver;
using Microsoft.Extensions.Options;
using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Settings;

namespace GaNamCakeShop_v2._0.Server.Services
{
    public class StaffsServices
    {
        private readonly IMongoCollection<Staffs> _staffsCollection;

        public StaffsServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongodb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _staffsCollection = mongodb.GetCollection<Staffs>(settings.Value.StaffsCollection);
        }

        // Get all staffs
        public async Task<List<Staffs>> GetAsync() => await _staffsCollection.Find(_ => true).ToListAsync();

        // Get staffs by ID
        public async Task<Staffs?> GetAsync(string id) => await _staffsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Add new staff(s)
        public async Task CreateAsync(Staffs newStaffs) => await _staffsCollection.InsertOneAsync(newStaffs);

        // Update new staffs
        public async Task UpdateAsync(string id, Staffs updateStaffs) => await _staffsCollection.ReplaceOneAsync(x => x.Id == id, updateStaffs);

        // Delete a staff
        public async Task RemoveAsync(string id) => await _staffsCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<Staffs> GetByUserNameAsync(string username)
        {
            // Query and return the staff object based on the username
            return await _staffsCollection.Find(s => s.csw_username == username).FirstOrDefaultAsync();
        }
    }
}
