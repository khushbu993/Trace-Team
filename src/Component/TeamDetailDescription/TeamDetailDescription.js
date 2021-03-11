import React from 'react';
import './TeamDetailDescription.css';

const TeamDetailDescription = (props) => {
    const { strDescriptionEN, strStadiumDescription } = props.teamDetail;

    return (
        <div className="team-detail-description">
            <div className="row">
                <div className="col-md-12">
                    <p> {strDescriptionEN} </p>
                    <br />
                    <p> {strStadiumDescription} </p>
                </div>
            </div>
        </div>
    );
};

export default TeamDetailDescription;