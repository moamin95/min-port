export default function Blurb() {
  return (
    <section id="blurb" className="section-container">
      <div className="w-full">
        <div className="space-y-12">
          <div className="content-section">
            <h1 className="heading-primary">About Me</h1>
          </div>

          <div className="content-section">
            <p className="text-muted">
              I am a software engineer passionate about design and reliability.
              My experience in full stack development enables me to architect
              solutions from a macro-level perspective.
            </p>
            <p className="text-muted">
              Currently, I&apos;m an engineer at American Express, contributing to
              the revamp endeavor of the personal banking web platform.
            </p>
            <p className="text-muted">
              After work hours, I enjoy spending time with my wife and two cats
              🐱
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
