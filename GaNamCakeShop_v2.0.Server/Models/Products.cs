using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Products
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("csw_products")]
        public string? csw_products { get; set; }

        [BsonElement("type")]
        public string? type { get; set; }

        [BsonElement("description")]
        public string? description { get; set; }

        [BsonElement("price")]
        public int? price { get; set; }

        [BsonElement("photo")]
        public string[]? photo { get; set; }

        [BsonElement("deleted")]
        public bool? deleted { get; set; }

        [BsonElement("createdAt")]
        public DateTime? createdAt { get; set; }
    }
}
