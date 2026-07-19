const cards = [...document.querySelectorAll(".course-card")];
const tabs = [...document.querySelectorAll(".course-tab")];
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector("#course-search");
const searchButton = document.querySelector(".search-button");
const noResults = document.querySelector(".no-results");

let activeFilter = "all";

function updateCourses() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  cards.forEach((card) => {
    const matchesLevel =
      activeFilter === "all" || card.dataset.level === activeFilter;
    const matchesQuery =
      query === "" || card.dataset.search.toLowerCase().includes(query);
    const isVisible = matchesLevel && matchesQuery;

    card.hidden = !isVisible;
    if (isVisible) visibleCount += 1;
  });

  noResults.hidden = visibleCount !== 0;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeFilter = tab.dataset.filter;

    tabs.forEach((candidate) => {
      const isActive = candidate === tab;
      candidate.classList.toggle("is-active", isActive);
      candidate.setAttribute("aria-selected", String(isActive));
    });

    updateCourses();
  });
});

searchInput.addEventListener("input", updateCourses);

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  updateCourses();
  document.querySelector("#courses").scrollIntoView({ behavior: "smooth" });
});

searchButton.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 767px)").matches) {
    const isOpen = searchForm.classList.toggle("is-open");
    searchButton.setAttribute("aria-expanded", String(isOpen));
    searchButton.setAttribute(
      "aria-label",
      isOpen ? "Close course search" : "Open course search",
    );
    if (isOpen) searchInput.focus();
    return;
  }

  updateCourses();
  searchInput.focus();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && searchForm.classList.contains("is-open")) {
    searchForm.classList.remove("is-open");
    searchButton.setAttribute("aria-expanded", "false");
    searchButton.setAttribute("aria-label", "Open course search");
    searchButton.focus();
  }
});

document.querySelectorAll(".enroll-button").forEach((button) => {
  button.addEventListener("click", () => {
    const isEnrolled = button.getAttribute("aria-pressed") === "true";
    button.setAttribute("aria-pressed", String(!isEnrolled));
    button.textContent = isEnrolled ? "Enroll" : "Enrolled";
  });
});
