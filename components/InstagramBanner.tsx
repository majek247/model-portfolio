export default function InstagramBanner() {
  return (
    <a
      className="ig-banner"
      href="https://www.instagram.com/muiz_thomas/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Follow Muiz on Instagram (opens in a new tab)"
    >
 

      <div className="ig-main">
        <p className="ig-title">Follow on Instagram.</p>
        <p className="ig-sub">Behind the scenes <i>/</i> New shoots <i>/</i> Travel <i>/</i> Life</p>
      </div>

      <div className="ig-handle">
        <div className="ig-handle-row">
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
          </svg>
          <span className="ig-name">@muiz_thomas</span>
          <span className="ig-arrow" aria-hidden="true">→</span>
        </div>
        <p className="ig-connect">Let’s connect</p>
      </div>
    </a>
  );
}
