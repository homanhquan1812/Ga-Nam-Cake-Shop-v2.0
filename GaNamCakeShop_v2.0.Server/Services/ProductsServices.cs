using GaNamCakeShop_v2._0.Server.Models;
using GaNamCakeShop_v2._0.Server.Settings;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace GaNamCakeShop_v2._0.Server.Services
{
    public class ProductsServices
    {
        private readonly IMongoCollection<Products> _productsCollection;

        public ProductsServices(IOptions<DatabaseSettings> settings)
        {
            var mongoClient = new MongoClient(settings.Value.Connection);
            var mongodb = mongoClient.GetDatabase(settings.Value.DatabaseName);
            _productsCollection = mongodb.GetCollection<Products>(settings.Value.ProductsCollection);
        }

        // Get all products
        public async Task<List<Products>> GetAsync() => await _productsCollection.Find(_ => true).ToListAsync();

        // Get products by ID
        public async Task<Products?> GetAsync(string id) => await _productsCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

        // Add new product(s)
        public async Task CreateAsync(Products newProducts) => await _productsCollection.InsertOneAsync(newProducts);

        // Update new products
        public async Task UpdateAsync(string id, Products updateProducts) => await _productsCollection.ReplaceOneAsync(x => x.Id == id, updateProducts);

        // Delete a product
        public async Task RemoveAsync(string id) => await _productsCollection.DeleteOneAsync(x => x.Id == id);
    }
}
