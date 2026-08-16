import React, { useEffect, useState } from "react";

const IMAGE_ROOT = "/assets/images";

const navItems = [
  { label: "Your stay", icon: "icon-bed.svg", active: true, badge: "1" },
  { label: "The house", icon: "icon-house.svg" },
  { label: "Around town", icon: "icon-pin.svg" },
  { label: "Breakfast", icon: "icon-breakfast-outline.svg" },
  { label: "Messages", icon: "icon-mail.svg" },
];

const stepNames = [
  "Canvas and outside background",
  "Rounded application shell",
  "Left-column geometry",
  "Complete sidebar",
  "Booking header",
  "Receipt card",
  "Host card",
  "Composed center hero",
  "Arrival card",
  "Wi-Fi card",
  "Breakfast and responsive behavior",
  "Final accessible polish",
];

function getCurrentStep() {
  const match = window.location.pathname.match(/\/(1[0-2]|[1-9])\/?$/);
  return match ? Number(match[1]) : 12;
}

function Brand() {
  return <img className="brand-logo" src={`${IMAGE_ROOT}/logo.svg`} alt="Maison Soleil" />;
}

function Navigation({ onNavigate }) {
  return (
    <nav className="guest-nav" aria-label="Guest navigation">
      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <a
              className={item.active ? "nav-link nav-link--active" : "nav-link"}
              href={`#${item.label.toLowerCase().replaceAll(" ", "-")}`}
              aria-current={item.active ? "page" : undefined}
              onClick={onNavigate}
            >
              <img src={`${IMAGE_ROOT}/${item.icon}`} alt="" />
              <span>{item.label}</span>
              {item.badge && <span className="nav-badge">{item.badge}</span>}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function WeatherCard() {
  return (
    <section className="weather-card" aria-label="Weather in Cassis">
      <img src={`${IMAGE_ROOT}/icon-weather.svg`} alt="" />
      <p className="eyebrow">Today in Cassis</p>
      <p className="temperature">27°</p>
      <p className="weather-copy">Sunny · light breeze</p>
    </section>
  );
}

function PropertyFooter() {
  return (
    <footer className="property-footer">
      <p>Est. 1987</p>
      <address>Maison Soleil · 12 Rue des Oliviers · Cassis</address>
      <p>© 2026 Maison Soleil</p>
    </footer>
  );
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <Brand />
        <div className="sidebar-rule" />
        <Navigation />
      </div>
      <div className="sidebar-bottom">
        <WeatherCard />
        <PropertyFooter />
      </div>
    </aside>
  );
}

function MobileHeader({ open, onToggle }) {
  return (
    <header className="mobile-header">
      <Brand />
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={onToggle}
      >
        <img src={`${IMAGE_ROOT}/${open ? "icon-close.svg" : "icon-menu.svg"}`} alt="" />
      </button>
    </header>
  );
}

function MobileMenu({ open, onClose }) {
  if (!open) return null;
  return (
    <aside className="mobile-menu" id="mobile-menu">
      <Navigation onNavigate={onClose} />
      <div>
        <WeatherCard />
        <PropertyFooter />
      </div>
    </aside>
  );
}

function BookingHeader({ onCalendar }) {
  return (
    <header className="booking-header">
      <div>
        <p className="booking-status">Booking&nbsp; · &nbsp;Confirmed</p>
        <h1>Bienvenue, <em>Lucia.</em></h1>
      </div>
      <div className="header-actions">
        <button className="button button--light" type="button" onClick={() => window.print()}>
          Print receipt
        </button>
        <button className="button button--dark" type="button" onClick={onCalendar}>
          Add to calendar
        </button>
      </div>
    </header>
  );
}

function ReceiptCard() {
  return (
    <article className="receipt-card" aria-labelledby="receipt-title">
      <div className="receipt-meta">
        <p>Receipt</p>
        <p>No MS-2026<br />0421-AH</p>
      </div>
      <h2 id="receipt-title">Your stay</h2>
      <div className="receipt-dates">
        <div>
          <p>Check in</p>
          <strong>25 Apr</strong>
          <span>Saturday · 15:00</span>
        </div>
        <div>
          <p>Check out</p>
          <strong>29 Apr</strong>
          <span>Wednesday · 11:00</span>
        </div>
      </div>
      <dl className="receipt-lines">
        <div><dt>Room · La Garrigue × 4 nights</dt><dd>€ 620.00</dd></div>
        <div><dt>Breakfast × 2 guests</dt><dd>€ 96.00</dd></div>
        <div><dt>Tourist tax</dt><dd>€ 14.40</dd></div>
      </dl>
      <div className="receipt-total">
        <span>Total paid</span>
        <strong>€ 730.40</strong>
      </div>
      <div className="receipt-payment">
        <span>Paid · Wise · GBP</span>
        <img src={`${IMAGE_ROOT}/icon-barcode.svg`} alt="Receipt barcode" />
      </div>
    </article>
  );
}

function HostCard() {
  return (
    <article className="host-card" aria-labelledby="host-title">
      <div className="host-top">
        <p>Welcome card</p>
        <img src={`${IMAGE_ROOT}/icon-sun.svg`} alt="" />
      </div>
      <h2 id="host-title"><span>A note from your host,</span> Margaux.</h2>
      <p className="host-note">
        We&apos;re so glad you&apos;re coming. The shutters will be open, the lemonade cold,
        and the cat – Poivre – pretending not to notice you.
      </p>
      <div className="host-room">
        <span>Room</span>
        <strong>La Garrigue</strong>
      </div>
    </article>
  );
}

function BookingHero({ step }) {
  return (
    <section className="booking-hero" aria-label="Booking receipt and welcome note">
      <div className="hero-cards">
        {step >= 6 && <ReceiptCard />}
        {step >= 7 && <HostCard />}
        {step >= 8 && (
          <img className="fan-sun" src={`${IMAGE_ROOT}/illustration-sun.svg`} alt="" />
        )}
      </div>
      {step >= 8 && (
        <p className="fan-hint">
          <img src={`${IMAGE_ROOT}/icon-sparkle.svg`} alt="" />
          Hover to fan
          <img src={`${IMAGE_ROOT}/icon-sparkle.svg`} alt="" />
        </p>
      )}
    </section>
  );
}

function InfoCard({ type, number, icon, title, subtitle, children }) {
  return (
    <article className={`info-card info-card--${type}`}>
      <header className="info-card-header">
        <span className="info-icon"><img src={`${IMAGE_ROOT}/${icon}`} alt="" /></span>
        <span className="info-label">{type}</span>
        <span className="info-number">{number}</span>
      </header>
      <h2>{title}</h2>
      <p className="info-subtitle">{subtitle}</p>
      {children}
    </article>
  );
}

function InformationGrid({ step, copied, onCopy }) {
  return (
    <section className="information-grid" aria-label="Guest information">
      {step >= 9 && (
        <InfoCard
          type="arrival"
          number="01"
          icon="icon-key.svg"
          title="Check-in from 15:00"
          subtitle="Sat, 25 April"
        >
          <p>Ring the brass bell by the blue door. If we&apos;re at the market, the key is in the terracotta pot by the olive tree.</p>
        </InfoCard>
      )}
      {step >= 10 && (
        <InfoCard
          type="wifi"
          number="02"
          icon="icon-wifi.svg"
          title="Le Soleil · Guest"
          subtitle="Password below"
        >
          <dl className="wifi-details">
            <div><dt>Network</dt><dd>Le Soleil · Guest</dd></div>
            <div>
              <dt>Password</dt>
              <dd>soleil-2026 <button type="button" onClick={onCopy}>{copied ? "Copied" : "Copy"}</button></dd>
            </div>
          </dl>
          <span className="sr-only" aria-live="polite">{copied ? "Wi-Fi password copied" : ""}</span>
        </InfoCard>
      )}
      {step >= 11 && (
        <InfoCard
          type="breakfast"
          number="03"
          icon="icon-breakfast.svg"
          title="Served 8 – 10:30"
          subtitle="On the terrace"
        >
          <p>Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before.</p>
        </InfoCard>
      )}
    </section>
  );
}

function ConstructionLabel({ step }) {
  if (step === 12) return null;
  return (
    <div className="construction-label" aria-hidden="true">
      <span>Step {String(step).padStart(2, "0")}</span>
      {stepNames[step - 1]}
    </div>
  );
}

export default function App() {
  const step = getCurrentStep();
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  async function copyPassword() {
    await navigator.clipboard.writeText("soleil-2026");
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  function addToCalendar() {
    const calendar = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "BEGIN:VEVENT",
      "DTSTART:20260425T150000",
      "DTEND:20260429T110000",
      "SUMMARY:Maison Soleil — La Garrigue",
      "LOCATION:12 Rue des Oliviers, Cassis",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([calendar], { type: "text/calendar" }));
    link.download = "maison-soleil-stay.ics";
    link.click();
    URL.revokeObjectURL(link.href);
  }

  return (
    <div className={`preview-stage step-${step}`} data-step={step}>
      <ConstructionLabel step={step} />
      {step >= 12 && <div className="backdrop-mark backdrop-mark--top" />}
      {step >= 12 && <div className="backdrop-mark backdrop-mark--bottom" />}
      {step >= 2 && (
        <div className="hotel-app">
          {step >= 3 && <div className="sidebar-geometry">{step >= 4 && <Sidebar />}</div>}
          <div className="app-content">
            {step >= 11 && (
              <MobileHeader open={menuOpen} onToggle={() => setMenuOpen((value) => !value)} />
            )}
            {step >= 11 && <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />}
            <main className="main-content">
              {step >= 5 && <BookingHeader onCalendar={addToCalendar} />}
              {step >= 6 && <BookingHero step={step} />}
              {step >= 9 && (
                <InformationGrid
                  step={step}
                  copied={copied}
                  onCopy={copyPassword}
                />
              )}
            </main>
          </div>
        </div>
      )}
    </div>
  );
}
