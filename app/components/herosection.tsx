export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container">
        <div className="main-div">
          <div className="text-div">
            <h1 className="main-text">Hi, I am John,<br></br> Creative Technologist</h1>
            <p className="main-paragraph">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className="resume-button">Download Resume</button>
          </div>
          <div>
            <img src="/hero-image.png" width={292} height={299} alt="John" />
          </div>
        </div>
      </div>
    </div>
  );
}
