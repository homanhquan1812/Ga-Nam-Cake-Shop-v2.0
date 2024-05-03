using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GaNamCakeShop_v2._0.Server.Services
{
    public class OrdersServices
    {
        private readonly IMongoCollection<Orders> _OrdersCollection;

        public OrdersServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongodb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _OrdersCollection = mongodb.GetCollection<Orders>(settings.Value.OrdersCollection);
        }

        // Get all Orders
        public async Task<List<Orders>> GetAsync() => await _OrdersCollection.Find(_ => true).ToListAsync();

        // Get Orders by ID
        public async Task<Orders?> GetAsync(string id) => await _OrdersCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Add new Order(s)
        public async Task CreateAsync(Orders newOrders) => await _OrdersCollection.InsertOneAsync(newOrders);

        // Update a Order
        public async Task UpdateAsync(string id, Orders updateOrders) => await _OrdersCollection.ReplaceOneAsync(x => x.Id == id, updateOrders);

        // Delete a Order
        public async Task RemoveAsync(string id) => await _OrdersCollection.DeleteOneAsync(x => x.Id == id);
    }
}
