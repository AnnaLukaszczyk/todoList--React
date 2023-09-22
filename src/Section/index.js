import "./style.css"

const Section = ({title, body, extraHeaderContent}) => (
    <section className="section">
				<div className="section__area">
					<h2 className="section__title">{title}</h2>
					{extraHeaderContent}
				</div>
				<div className="tasksArea">
					{body}
				</div>
			</section>
)

export default Section;