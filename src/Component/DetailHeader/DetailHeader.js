import React from 'react';
import './DetailHeader.css';
import headerImage from '../../Photo/header-bg.jpg';

const DetailHeader = (props) => {
    console.log(props)
    const {strTeamBadge} = props.teamDetail;
    return (
        <div>
            <div className = "header">
                <img src= {headerImage} alt="headerBackground"/>
            </div>
            <div className = "detail-header-overlay">
                <div className = "header-logo">
                    <img src= {strTeamBadge} alt="logo"/>
                </div>
            </div>
        </div>
    );
};

export default DetailHeader;