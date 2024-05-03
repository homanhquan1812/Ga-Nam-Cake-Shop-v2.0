namespace GaNamCakeShop_v2._0.Server.Settings
{
    public class DatabaseSettings
    {
        // Collection
        public string? StaffsCollection { get; set; }

        public string? ProductsCollection {  get; set; }

        public string? CustomersCollection { get; set; }

        public string? NotesCollection { get; set; }

        public string? FeedbacksCollection { get; set; }

        public string? OrdersCollection { get; set; }

        // Database name
        public string? DatabaseName { get; set; }

        // Connection string
        public string? Connection { get; set; }
    }
}
