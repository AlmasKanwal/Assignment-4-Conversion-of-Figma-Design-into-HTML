export default function FeaturedWorkComponent({ title, date, category, description}: { title: string, date: string, category: string, description: string}) {
  return (
      <div>
              <h2>{title}</h2>
                <div className="badge-parent">
                <p className="badge">{date}</p>
                <p className="dashboard">{category}</p>
                </div>
              <p>{description}</p>
      </div>
  )
}


  