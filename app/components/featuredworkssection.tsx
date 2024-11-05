import FeaturedWorkComponent from "./featuredworkcomponent";

export default function FeaturedWorksSection() {
  return (
    <div className="featured-work">
      <div className="container">
        <div className="main">
          <div className="main-heading">
            <h3>Featured Works</h3>
          </div>

          <div className="card-parent">
            <div className="card">
              <img
                src="/Featured works-1.png"
                width={330}
                height={180}
                alt="picture-1"
              />

              <div className="card-content">
                <FeaturedWorkComponent 
                  title="Designing Dashboards"
                  date="2020"
                  category="Dashboard"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
              </div>
            </div>

            <div className="card">
              <img
                src="/Featured works-2.png"
                width={330}
                height={180}
                alt="picture-1"
              />

              <div className="card-content">
                <FeaturedWorkComponent
                  title="Designing Dashboards"
                  date="2020"
                  category="Dashboard"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
              </div>
            </div>

            <div className="card">
              <img
                src="/Featured works-3.png"
                width={330}
                height={180}
                alt="picture-1"
              />

              <div className="card-content">
                <FeaturedWorkComponent
                  title="Designing Dashboards"
                  date="2020"
                  category="Dashboard"
                  description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
