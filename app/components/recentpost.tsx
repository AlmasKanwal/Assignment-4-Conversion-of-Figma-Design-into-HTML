export default function RecentPost({ title, date, category, description }: { title: string, date: string, category: string, description: string }) {
    return (
        <div>
            <h2 className="post-card-heading">{title}</h2><br></br>
            <p className="date-text">{date} | {category}</p><br></br>
            <p className="desc">{description}</p>
        </div>
    );
}




