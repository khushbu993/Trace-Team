import React from 'react';
import './TeamSocialLink.css';
import twitterIcon from '../../Icon/Twitter.png';
import facebookIcon from '../../Icon/Facebook.png';
import youtubeIcon from '../../Icon/YouTube.png';

const TeamSocialLink = (props) => {
    const { strFacebook, strTwitter, strYoutube } = props.teamDetail;
    return (
        <div className="team-social-links text-center">
            <a href={strTwitter}>
                <img src= {twitterIcon} alt=""/>
            </a>
            <a href={strFacebook}>
                <img src= {facebookIcon} alt=""/>
            </a>
            <a href={strYoutube}>
                <img src= {youtubeIcon} alt=""/>
            </a>
        </div>
    );
};

export default TeamSocialLink;