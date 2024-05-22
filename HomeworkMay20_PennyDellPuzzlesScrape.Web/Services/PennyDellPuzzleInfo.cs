using AngleSharp.Browser;
using AngleSharp.Html.Parser;

namespace HomeworkMay20_PennyDellPuzzlesScrape.Web.Services
{
    public class ProductCategory
    {
        public string Name { get; set; }
        public string Url { get; set; }
        public string ImageUrl { get; set; }
    }
    public class NewItem : ProductCategory
    {
        public string Price { get; set; }
    }
    public class PuzzlersCornerItem
    {
        public string Title { get; set; }
        public string Url { get; set; }
    }
    public class PennyDellPuzzleInfo
    {
        private HttpClient _client = new();
        private HtmlParser _parser = new();
        public List<ProductCategory> ProductCategories()
        {
            var html = _client.GetStringAsync("https://www.pennydellpuzzles.com/our-products/").Result;
            var doc = _parser.ParseDocument(html);

            var pcs = new List<ProductCategory>();

            var container = doc.QuerySelector(".vc_section");
            var rows = container.QuerySelectorAll(".vc_row");
            foreach (var row in rows)
            {
                var cols = row.QuerySelectorAll(".vc_column_container");
                foreach (var col in cols)
                {
                    pcs.Add(new ProductCategory
                    {
                        Name = col.QuerySelector(".vcex-button-inner").TextContent,
                        Url = $"https://www.pennydellpuzzles.com{col.QuerySelector(".vcex-button").Attributes["href"].Value}",
                        ImageUrl = col.QuerySelector(".vc_figure").QuerySelector(".vc_single_image-img").Attributes["src"].Value
                    });
                }
            }
            return pcs;
        }
        public List<NewItem> NewItems()
        {
            var html = _client.GetStringAsync("https://www.pennydellpuzzles.com/whats-new/").Result;
            var doc = _parser.ParseDocument(html);

            var newItems = new List<NewItem>();

            var products = doc.QuerySelectorAll(".type-product");
            foreach (var p in products)
            {
                newItems.Add(new NewItem
                {
                    Name = p.QuerySelector(".woocommerce-loop-product__title").TextContent,
                    Url = p.QuerySelector(".woocommerce-LoopProduct-link").Attributes["href"].Value,
                    ImageUrl = p.QuerySelector(".woo-entry-image-main").Attributes["src"].Value,
                    //Price = Decimal.Parse(p.QuerySelector("bdi").TextContent.Replace("$", ""))
                    Price = p.QuerySelector("bdi").TextContent
                });
            }
            return newItems;
        }
        public List<PuzzlersCornerItem> PuzzlersCornerItems()
        {
            var html = _client.GetStringAsync("https://www.pennydellpuzzles.com/puzzlers-corner/").Result;
            var doc = _parser.ParseDocument(html);

            var puzzleItems = new List<PuzzlersCornerItem>();

            var puzzles = doc.QuerySelectorAll(".theme-button-wrap");
            foreach (var puzzle in puzzles)
            {
                puzzleItems.Add(new PuzzlersCornerItem
                {
                    Title = puzzle.QuerySelector(".vcex-button-inner").TextContent,
                    Url = $"https://www.pennydellpuzzles.com{puzzle.QuerySelector(".vcex-button").Attributes["href"].Value}"
                });
            }
            return puzzleItems;
        }
    }
}
