document.addEventListener("DOMContentLoaded", function () {
  loadLayoutByPetraPixel();
});

function loadLayoutByPetraPixel() {
  const mainEl = document.querySelector("main");
  if (!mainEl) return;
  mainEl.insertAdjacentHTML("beforebegin", headerHTML());
  mainEl.insertAdjacentHTML("afterend", footerHTML());
  giveActiveClassToCurrentPage();
}

const nesting = getNesting();

function headerHTML() {
  return `
    <header>
      <div class="header-content">
        <div class="header-title">Welcome, silly hooman :3</div>
      </div>
    </header>

    <aside class="left-sidebar">
      <nav>
        <div class="sidebar-title">Navigation</div>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/page1">Books</a></li>
          <li><a href="/page2">Photos</a></li>
          <li><a href="/page3">Vinyl/Music</a></li>
          <li><a href="/page4">Series/TV</a></li>
        </ul>
      </nav>

      <div class="sidebar-section">
        <blockquote>
          <div class="sidebar-title">Updates</div>
          <p>I'm very lazy so the pages are not set up yet.</p>
          <p>Sorry!</p>
        </blockquote>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">Badges!</div>
        <marquee>
          <a href="https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/index/" target="_blank"><img src="https://timedout.uk/88x31s/non-people/pirate.webp" alt="If Buying Isn't Owning, Then Piracy Isn't Stealing"></a>
          <a href="" target="_blank"><img src="https://cyber.dabamos.de/88x31/rainbow_bev.gif" alt="LGBTQIA+"></a>
          <a href="https://karma.computer/resources/palestine/" target="_blank"><img src="https://hillhouse.neocities.org/_images/toybox/_buttons/riversea.gif" alt="Free Palestine"></a>
          <a href="" target="_blank"><img src="https://timedout.uk/88x31s/non-people/dont-feed-ai.gif" alt="Fuck you if you use Gen-AI"></a>
        </marquee>
      </div>

      <div class="sidebar-section">
        <div class="sidebar-title">Friends</div>
        none of my friends code :<
        <div class="site-button"></div>
      </div>
    </aside>
  `;
}

function footerHTML() {
  return ``;
}

function giveActiveClassToCurrentPage() {
  const els = document.querySelectorAll("nav a");
  [...els].forEach((el) => {
    const href = el.getAttribute("href").replace(".html", "").replace("#", "");
    const pathname = window.location.pathname.replace("/public/", "");
    const currentHref = window.location.href.replace(".html", "") + "END";

    if (href == "/" || href == "/index.html") {
      if (pathname == "/") {
        el.classList.add("active");
      }
    } else {
      if (currentHref.includes(href + "END")) {
        el.classList.add("active");

        if (el.closest("details")) {
          el.closest("details").setAttribute("open", "open");
          el.closest("details").classList.add("active");
        }

        if (el.closest("ul")) {
          if (el.closest("ul").closest("ul")) {
            el.closest("ul").closest("ul").classList.add("active");
          }
        }
      }
    }
  });
}

function getNesting() {
  const numberOfSlashes = window.location.pathname.split("/").length - 1;
  if (numberOfSlashes == 1) return "./";
  return "../".repeat(numberOfSlashes - 1);
}