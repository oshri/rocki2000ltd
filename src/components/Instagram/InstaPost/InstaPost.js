import TextTruncate from '../../TextTruncate';
import { Player, ControlBar, PlayToggle} from 'video-react';
import './InstaPost.scss';

const InstaPost = (props) => {
    const text = 'רוקי איכות ושירות מעל הכל!!!';

    return (
        <div className="InstaPost">
            <div className="InstaHeader">
                <div className="InstaAvatarContainer">
                    <a className="Avatar" target="_blank">
                        <img src="" alt="" />
                    </a>
                </div>
                <div className="InstaHeaderText">
                    <a className="Username" href="" target="_blank">
                        <span className="UsernameText">שם משתמש</span>
                    </a>
                    <span className="FollowerCountText">
                        עוקבים
                    </span>
                </div>
                <a className="LInkProfileButton" href="" target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteGlyph"></span>
                </a>
            </div>
            <div className="InstaContent">
                <a className="EmbeddedMedia" href="" target="_blank">
                    <img className="EmbeddedMediaImage" src=""/>
                </a>
            </div>
            <div className="InstaFeedback">
                <a className="Likes" href="" target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteHeartOpen"></span>
                    <span className="LiksCountText">{'12'} אהבו</span>
                </a>
                {/* <a className="Comments" href="" target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteComment"></span>
                </a> */}
                <a className="Save" href="" target="_blank">
                    <span className="InstaEmbedSpriteComment embedSpriteSaveOpen"></span>
                </a>
            </div>
            <div className="InstaDescription">
                <TextTruncate
                            className="Description"
                            line={3}
                            truncateText="…"
                            text={text}
                        />
            </div>
        </div>
    )
};

export default InstaPost;

