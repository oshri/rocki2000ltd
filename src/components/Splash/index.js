import React from 'react';
import TextTruncate from '../TextTruncate';
import ButtonLink from '../ButtonLink';
import Link from 'next/link';

import './Splash.scss';

const Splash = (props) => {
    const { size } = props;

    const item = {
        name: 'Service',
        icon: 'services',
        description: 'asdasdasdasd asdasdas dasdasd asdasd asdasd asasd asas asd',
        id: '1122334455',
        link: 'demo-section-page'
    };

    return (
        <div className="Splash">
            <div className="splash-card">
                <div className="splash-info">
                    <h1 className="splash-title">{item.name}</h1>
                    <TextTruncate
                        className="splash-description"
                        line={4}
                        truncateText="…"
                        text={item.description}
                    />
                    <div className="splash-action">
                        <ButtonLink   
                            href={`/page?id=${item.id}&link=${item.link}`}
                            hrefAs={`/page/${item.link}`}>
                        מידע נוסף
                        </ButtonLink>
                    </div>
                </div>
                <div className="splash-images">

                </div>
            </div>
        </div>
    );
};


export default Splash;