using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Feedbacks
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("firstName")]
        public string? firstName { get; set; }

        [BsonElement("lastName")]
        public string? lastName { get; set; }

        [BsonElement("email")]
        public string? email { get; set; }

        [BsonElement("phone")]
        public string? phone { get; set; }

        [BsonElement("message")]
        public string? message { get; set; }

        [BsonElement("deleted")]
        public bool? deleted { get; set; }

        [BsonElement("createdAt")]
        public DateTime? createdAt { get; set; }
    }
}
