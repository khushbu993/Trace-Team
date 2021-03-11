import React from 'react';
import './SingleTeam.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const SingleTeam = (props) => {
    const { strTeamBadge, strTeam, idTeam } = props.team;
    return (
        <div className="col-md-4">
            <div className="single-team">
                <div className="single-team-logo">
                    <img src={strTeamBadge} alt="Logo" />
                </div>
                <div className="single-team-name">
                    <h3>{strTeam}</h3>
                    <p>Sports type: Football</p>
                </div>
                <Link to = {`/teamDetail/${idTeam}`}>
                    <div className="single-team-button">
                        <button>
                            Explore  <FontAwesomeIcon className="fa-icon" icon={faArrowRight} />
                        </button>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default SingleTeam;