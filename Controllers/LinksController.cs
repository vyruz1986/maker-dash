using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;
using Newtonsoft.Json;
using maker_dash.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace maker_dash.Controllers
{
   [Route("api/[controller]")]
   public class LinksController : Controller
   {
      private readonly LinkContext _context;

      public LinksController(LinkContext context)
      {
         _context = context;
         if (_context.LinkItems.Count() == 0)
         {
            _context.LinkItems.Add(new LinkItem { Id = 0, Name = "Google", Url = "https://www.google.com" });
            _context.SaveChanges();
         }
      }

      // GET: api/link
      [HttpGet]
      public IEnumerable<LinkItem> GetAll()
      {
         return _context.LinkItems.ToList();
      }

      [HttpGet("{id}", Name = "GetLink")]
      public IActionResult GetById(long id)
      {
         var link = _context.LinkItems.FirstOrDefault(t => t.Id == id);
         if (link == null)
         {
            return NotFound();
         }

         return new ObjectResult(link);
      }

      [HttpPost]
      public IActionResult Create([FromBody] LinkItem link)
      {
         if (link == null)
         {
            return BadRequest();
         }

         _context.LinkItems.Add(link);
         _context.SaveChanges();

         return CreatedAtRoute("GetLink", new { id = link.Id }, link);
      }

      [HttpPut("{id}")]
      public IActionResult Update(long id, [FromBody] LinkItem newLink)
      {
         if (newLink == null)
         {
            return BadRequest();
         }

         var link = _context.LinkItems.FirstOrDefault(t => t.Id == id);
         if (link == null)
         {
            return NotFound();
         }

         link.Url = newLink.Url;
         link.Name = newLink.Name;

         _context.LinkItems.Update(link);
         _context.SaveChanges();


         return new NoContentResult();

      }

      [HttpDelete("{id}")]
      public IActionResult Delete(long id)
      {
         var link = _context.LinkItems.FirstOrDefault(t => t.Id == id);
         if (link == null)
         {
            return NotFound();
         }

         _context.LinkItems.Remove(link);
         _context.SaveChanges();

         return new NoContentResult();
      }

   }
}
