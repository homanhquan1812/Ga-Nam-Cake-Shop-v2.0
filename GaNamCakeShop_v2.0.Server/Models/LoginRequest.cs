using MongoDB.Bson.Serialization.Attributes;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class LoginRequest
    {
        [BsonElement("csw_username")]
        public string? csw_username { get; set; }
        [BsonElement("csw_password")]
        public string? csw_password { get; set; }
    }
}
