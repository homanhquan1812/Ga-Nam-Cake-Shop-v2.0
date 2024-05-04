using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GaNamCakeShop_v2._0.Server.Services
{
    public class CustomersServices
    {
        private readonly IMongoCollection<Customers> _customersCollection;

        public CustomersServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongodb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _customersCollection = mongodb.GetCollection<Customers>(settings.Value.CustomersCollection);
        }

        // Get all Customers
        public async Task<List<Customers>> GetAsync() => await _customersCollection.Find(_ => true).ToListAsync();

        // Get Customer by ID
        public async Task<Customers?> GetAsync(string id) => await _customersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Add new Customer(s)
        public async Task CreateAsync(Customers newCustomers) => await _customersCollection.InsertOneAsync(newCustomers);

        // Update a Customer
        public async Task UpdateAsync(string id, Customers updateCustomers) => await _customersCollection.ReplaceOneAsync(x => x.Id == id, updateCustomers);

        // Delete a Customer
        public async Task RemoveAsync(string id) => await _customersCollection.DeleteOneAsync(x => x.Id == id);

        public async Task<Customers> GetByUserNameAsync(string username)
        {
            // Query and return the customer object based on the username
            return await _customersCollection.Find(c => c.csw_username == username).FirstOrDefaultAsync();
        }
    }
}
