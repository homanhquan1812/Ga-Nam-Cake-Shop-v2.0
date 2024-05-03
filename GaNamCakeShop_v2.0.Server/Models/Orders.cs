using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Orders
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("customer")]
        public string? customer { get; set; }

        [BsonElement("phonenumber")]
        public string? phonenumber { get; set; }

        [BsonElement("address")]
        public string? address { get; set; }

        [BsonElement("csw_username")]
        public string? csw_username { get; set; }

        [BsonElement("products")]
        public List<AllProductsBought>? products { get; set; }

        [BsonElement("totalcost")]
        public int? totalcost { get; set; }

        [BsonElement("delivered")]
        public bool? delivered { get; set; }

        [BsonElement("declined")]
        public bool? declined { get; set; }

        [BsonElement("deleted")]
        public bool? deleted { get; set; }

        [BsonElement("createdAt")]
        public DateTime? createdAt { get; set; }
    }

    public class AllProductsBought
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("photo")]
        public string[]? photo { get; set; }

        [BsonElement("name")]
        public string? name { get; set; }

        [BsonElement("price")]
        public int? price { get; set; }

        [BsonElement("qty")]
        public int? qty { get; set; }

        [BsonElement("totalCost")]
        public int? totalCost { get; set; }

        [BsonElement("productId")]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? productId { get; set; }
    }
}
