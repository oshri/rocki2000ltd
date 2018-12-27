import { Button } from 'reactstrap';
import ButtonLink from '../ButtonLink';
import TextTruncate from '../TextTruncate';
import Image from '../Image';
import './PageCard.scss';

const PageCard = props => {
    const { page } = props;
    
    const classMode = page.isPromote ? 'PageCardPromote' : 'PageCard';

	return (
		<div className={classMode}>
			<div className="page-image">
				<Image src={page.thumbnail} alt={page.name} className="img-responsive" />
			</div>
			<div className="page-info">
				<h3>{page.name}</h3>
				<TextTruncate
					className="page-description"
					line={page.isPromote ? 3 : 1}
					truncateText="…"
					text={page.description}
				/>
                <div className="card-action">
                    <ButtonLink
                        href={`/page?id=${page._id}&link=${page.link}`}
                        hrefAs={`/page/${page.link}`}
                    >
                        מידע נוסף
                    </ButtonLink>
                </div>
			</div>
		</div>
	);
};

export default PageCard;
