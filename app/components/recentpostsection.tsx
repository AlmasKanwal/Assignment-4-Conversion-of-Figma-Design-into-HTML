import RecentPost from "./recentpost";

export default function RecentPostsSection() {
    return (
        <div className="recent-post">
            <div className="container">

                <div className="main">
                <div className="heading">
                <h3 className="posts">Recent Posts</h3>
                <p className="view-all">View All</p>
                </div>

                <div className="card">
                <div className="post-card">
                <RecentPost title="Making a Design System from Scratch" date="12 Feb 2020" category="Design, Pattern" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
                </div>

                <div className="post-card">
                <RecentPost title="Making a Design System from Scratch" date="12 Feb 2020" category="Design, Pattern" description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." />
                </div>
                </div>
                
            </div>
            </div>
        </div>
    );
}



