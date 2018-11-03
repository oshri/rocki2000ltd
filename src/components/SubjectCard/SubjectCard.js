import { Button } from 'reactstrap';
import ButtonLink from '../ButtonLink';
import TextTruncate from '../TextTruncate';
import './SubjectCard.scss';

const SubjectCard = props => {
	const { page } = props;

	return (
		<div className="SubjectCard">
			<div className="subject-icon">
				{page.icon ? (
					<div
						className="dynamic-icon"
						style={{
							backgroundImage: `url(/static/svg/${page.icon.toLowerCase()}.svg)`
						}}
					/>
				) : (
					''
				)}
				<img
					src="/static/card-icon-bg.svg"
					alt="logo"
					width="201px"
					height="119px"
				/>
			</div>
			<div className="subject-info">
				<h3>{page.name}</h3>
				<TextTruncate
					className="subject-description"
					line={1}
					truncateText="…"
					text={page.description}
				/>
			</div>
			<div className="card-action">
				<ButtonLink
					href={`/page?id=${page.id}&link=${page.link}`}
					hrefAs={`/page/${page.link}`}
				>
					מידע נוסף
				</ButtonLink>
			</div>
		</div>
	);
};

export default SubjectCard;
