using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace GaNamCakeShop_v2._0.Server.Models
{
    [BsonIgnoreExtraElements]
    public class Staffs
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

        [BsonElement("csw_position")]
        public string? csw_position { get; set; }

        [BsonElement("csw_department")]
        public string? csw_department { get; set; }

        [BsonElement("deleted")]
        public bool? deleted { get; set; }
    }
}
