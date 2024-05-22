using HomeworkMay20_PennyDellPuzzlesScrape.Web.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HomeworkMay20_PennyDellPuzzlesScrape.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PennyDellPuzzles : ControllerBase
    {
        PennyDellPuzzleInfo _info = new();
        [HttpGet("Products")]
        public List<ProductCategory> GetProductCategories()
        {
            return _info.ProductCategories();
        }
        [HttpGet("NewItems")]
        public List<NewItem> GetNewItems()
        {
            return _info.NewItems();
        }
        [HttpGet("PuzzlersCorner")]
        public List<PuzzlersCornerItem> GetPuzzlersCornerItems()
        {
            return _info.PuzzlersCornerItems();
        }
    }
}
