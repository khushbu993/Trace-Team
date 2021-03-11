import React from 'react';
import './TeamDetailInfo.css';
import founded from '../../Icon/found 1.png';
import flag from '../../Icon/flag (1) 1.png';
import football from '../../Icon/football (1) 1.png';
import gender from '../../Icon/gender-sign 1.png';
import malePlayerImage from '../../Photo/male.png';
import femalePlayerImage from '../../Photo/female.png';


const TeamDetailInfo = (props) => {
    const { intFormedYear, strCountry, strTeam, strGender } = props.teamDetail;

    return (
        <div className="team-detail-info">
            <div className="row">
                <div className="col-md-6">
                    <div className="team-info-left">
                        <div className="team-info-name">
                            <h3>{strTeam}</h3>
                        </div>
                        <div className="team-info">
                            <div className="team-info-icon">
                                <img src={founded} alt="teamInfoIcon" />
                                <img src={flag} alt="teamInfoIcon" />
                                <img src={football} alt="teamInfoIcon" />
                                <img src={gender} alt="teamInfoIcon" />
                            </div>
                            <div className="team-info-text">
                                <p>Founded: {intFormedYear}</p>
                                <p>Country : {strCountry}</p>
                                <p>Sports type : Football</p>
                                <p>Gender: {strGender}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="player-image">
                        {strGender === "Male" && <img src={malePlayerImage} alt="malePlayerImage" />}
                        {strGender === "Female" && <img src={femalePlayerImage} alt="femalePlayerImage" />}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailInfo;