using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Customers
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("csw_name")]
        public string? csw_name { get; set; }

        [BsonElement("csw_gender")]
        public string? csw_gender { get; set; }

        [BsonElement("csw_phonenumber")]
        public string? csw_phonenumber { get; set; }

        [BsonElement("csw_username")]
        public string? csw_username { get; set; }

        [BsonElement("csw_emailaddress")]
        public string? csw_emailaddress { get; set; }

        [BsonElement("csw_password")]
        public string? csw_password { get; set; }

        [BsonElement("deleted")]
        public bool? deleted { get; set; }

        [BsonElement("csw_address")]
        public string? csw_address { get; set; }

        [BsonElement("csw_cart")]
        public TotalProductsAndPrice? csw_cart { get; set; }
    }

    public class TotalProductsAndPrice
    {
        [BsonElement("items")]
        public List<AllProductsAdded>? items {  get; set; }

        [BsonElement("totalPrice")]
        public int? totalPrice { get; set; }
    }

    public class AllProductsAdded
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
