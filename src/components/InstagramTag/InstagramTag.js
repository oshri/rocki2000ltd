import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextTruncate from '../TextTruncate';
import './InstagramTag.scss';

const InstagramTag = (props) => {
    const { tag }  = props;

    // { showHeader && <Header /> }

    // <div className="header">
    //                     <ul className="menu-content">
    //                         <li>
    //                             <div className="fa fa-cubes">
    //                                 {tag.likes.count}
    //                             </div>
    //                         </li>
    //                         <li>
    //                             <div className="fa fa-heart">
    //                                 <span>{tag.comments.count}</span>
    //                             </div>
    //                         </li>
    //                         <li>
    //                             <div className="fa fa-users">
    //                                 <span>following</span>
    //                             </div>
    //                         </li>
    //                     </ul>
    //                 </div>
    const renderTag = () => {
        
		if(tag) {
		  return (
			<div className="Tag">
                <div className="image-wrapper">
                    <img src={tag.images.low_resolution.url}/>
                </div>
                <div className="info">
                    <div className="counters">
                        <div className="count">
                            <FontAwesomeIcon icon="heart" />
                            <span>{tag.likes.count}</span>
                        </div>
                        <div className="count">
                            <FontAwesomeIcon icon="comment" />
                            <span>{tag.comments.count}</span>
                        </div>
                    </div>

                    <TextTruncate
                        className="page-description"
                        line={3}
                        truncateText="…"
                        text={tag.caption.text}
                    />
                    
                    <div className="bg"></div>
                </div>
            </div>
		  )
		} else {
		  return (
			 <div>loading</div>
		  )
		}
	};
    
    return (
        renderTag()
    )
};

export default InstagramTag;

// style={ {backgroundImage: `url(${tag.images.low_resolution.url})`} }

{/* <div className="data">
                        <div className="content">
                        <div className="headerWrap">
                            <h1 className="title">
                                {tag.user.username}
                            </h1>
                        </div>
                        <p className="text">{tag.caption.text}</p>
                        <a href={`https://github.com/${tag.login}`} target="_blank" rel="noopener noreferrer" className="button">Read more</a>
                        </div>
                    </div> */}