using ExamGenerator.Api.DTOs;
using ExamGenerator.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ExamGenerator.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubjectsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly ILogger<SubjectsController> _logger;
        public SubjectsController(DataContext context, ILogger<SubjectsController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var subjects = await _context.Subjects.ToListAsync();
            return new JsonResult(subjects);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(Guid id)
        {
            var subject = await _context.Subjects.FirstOrDefaultAsync(n => n.Id == id);

            if (subject == null)
                return NotFound("Subject not found");

            return new JsonResult(subject);
        }

        [HttpPost]
        public async Task<IActionResult> Post(SubjectDto subject)
        {
            try
            {
                var newSubject = new Subject { Name = subject.Name, Description = subject.Description};
                _context.Subjects.Add(newSubject);
                await _context.SaveChangesAsync();

                return new JsonResult(newSubject);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Failed to add subject");
            }

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(Guid id, SubjectDto subject)
        {
            var existingSubject = await _context.Subjects.FirstOrDefaultAsync(n => n.Id == id);

            if (existingSubject == null)
                return NotFound("Subject not found");

            existingSubject.Name = subject.Name;
            existingSubject.Description = subject.Description;

            var success = (await _context.SaveChangesAsync()) > 0;

            return new JsonResult(success);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                var subject = await _context.Subjects.FirstOrDefaultAsync(n => n.Id == id);
                _context.Remove(subject);
                var success = (await _context.SaveChangesAsync()) > 0;

                return new JsonResult(success);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                return BadRequest("Failed to update subject");
            }

        }
    }
}
