document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const faqItems = document.querySelectorAll(".faq-item");

  // Search functionality
const searchInput = document.getElementById("faq-search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  faqItems.forEach((item) => {
    const questionText = item.querySelector(".question").textContent.toLowerCase();
    item.style.display = questionText.includes(query) ? "block" : "none";
  });
});


  // Toggle answer
  questions.forEach((question) => {
    question.addEventListener("click", () => {
      const answer = question.nextElementSibling;
      answer.style.display = answer.style.display === "block" ? "none" : "block";
    });
  });

  // Filter by category
  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active").classList.remove("active");
      btn.classList.add("active");
      const category = btn.dataset.category;
      faqItems.forEach((item) => {
        const match = category === "all" || item.dataset.category === category;
        item.style.display = match ? "block" : "none";
      });
    });
  });

  // Feedback buttons
  const feedbackButtons = document.querySelectorAll(".thumb");
  feedbackButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Thank you for your feedback!");
    });
  });
});
