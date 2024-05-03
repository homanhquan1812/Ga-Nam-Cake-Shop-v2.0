using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Notes
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("csw_notes")]
        public string? csw_notes{ get; set; }

        [BsonElement("deleted")]
        public bool? deleted { get; set; }
    }
}
