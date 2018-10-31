import { Button } from 'reactstrap';
import ButtonLink from '../ButtonLink';
import TextTruncate from '../TextTruncate';
import './SubjectCard.scss';

const SubjectCard = (props) => {
    const item = {
        name: 'Service',
        icon: 'services',
        description: 'asdasdasdasd asdasdas dasdasd asdasd asdasd asasd asas asd',
        id: '1122334455',
        link: 'demo-section-page'
    };

    return (
        <div className="SubjectCard">
            <div className="subject-icon">
                <div className="dynamic-icon" style = {{
                    backgroundImage: `url(/static/svg/${item.icon.toLowerCase()}.svg)`
                }}></div>
                <img    src="/static/card-icon-bg.svg"
						alt="logo"
						width="201px"
						height="119px"
					/>
            </div>
            <div className="subject-info">
                <h3>{item.name}</h3>
                <TextTruncate
                    className="subject-description"
                    line={1}
                    truncateText="…"
                    text={item.description}
                />
            </div>
            <div className="card-action">
                <ButtonLink   href={`/page?id=${item.id}&link=${item.link}`}
                              hrefAs={`/page/${item.link}`}>
                   מידע נוסף
                </ButtonLink>
            </div>
        </div>
    );
};

export default SubjectCard;