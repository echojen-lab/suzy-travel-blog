// Wander With Suzy: scroll-triggered fade-up animations, shared by every page.
// Elements fade up (20px → 0, opacity 0 → 1) as they scroll into view.
// Elements that come into view together appear one after another (staggered).
// Load with <script src="reveal.js" defer></script> in the <head>. "defer" makes it run
// after each page's own scripts have built their content (blog cards, articles).

(function () {
  // Respect visitors who prefer less motion, and old browsers: show everything as-is.
  if (!("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  // What to animate. Each match animates as one block.
  var SELECTORS = [
    // Page headers (home hero, blog header, about hero, article header)
    ".hero .container > *",
    ".page-head .container > *",
    ".post-head .container > *",
    // Section headings and controls
    ".section-head",
    ".filters",
    "#map",
    ".center",
    // Cards
    ".post-card",
    ".stat-card",
    ".pager-card",
    ".newsletter-card",
    // About content
    ".about > *",
    ".bio p",
    // Article page
    ".hero-img",
    ".caption",
    ".article > *",
    ".author",
    ".more h2"
  ].join(",");

  var DURATION = 700;   // ms for each fade-up
  var STAGGER = 110;    // ms between elements that appear together
  var MAX_DELAY = 660;  // never make anyone wait longer than this

  // The hidden/visible styles are added by this script, so if it ever fails to load,
  // nothing on the page stays hidden.
  var style = document.createElement("style");
  style.textContent =
    ".reveal{opacity:0;transform:translateY(20px);" +
    "transition:opacity " + DURATION + "ms ease-out,transform " + DURATION + "ms cubic-bezier(.2,.7,.3,1);" +
    "will-change:opacity,transform}" +
    ".reveal.reveal-in{opacity:1;transform:none}";
  document.head.appendChild(style);

  var elements = Array.prototype.slice.call(document.querySelectorAll(SELECTORS));

  // When the animation is done, remove our classes so each element's own
  // transitions and hover effects (like the card scale-up) work normally again.
  function cleanUp(el) {
    el.classList.remove("reveal", "reveal-in");
    el.style.transitionDelay = "";
  }

  var observer = new IntersectionObserver(function (entries) {
    // Everything that entered the viewport in this batch, in page order
    var batch = entries
      .filter(function (e) { return e.isIntersecting; })
      .map(function (e) { return e.target; })
      .sort(function (a, b) {
        return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
      });

    batch.forEach(function (el, i) {
      observer.unobserve(el);
      var delay = Math.min(i * STAGGER, MAX_DELAY);
      el.style.transitionDelay = delay + "ms";
      el.classList.add("reveal-in");

      var done = false;
      var finish = function () { if (!done) { done = true; cleanUp(el); } };
      el.addEventListener("transitionend", function onEnd(e) {
        if (e.target === el && e.propertyName === "opacity") {
          el.removeEventListener("transitionend", onEnd);
          finish();
        }
      });
      setTimeout(finish, delay + DURATION + 200); // fallback if transitionend never fires
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

  elements.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });
})();
