import React, { useEffect, useState } from 'react';
import SingleTeam from '../SingleTeam/SingleTeam';
import './TeamList.css';

const TeamList = () => {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, [teams])

    return (
        <div className="teamList-container">
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <SingleTeam key={team.idTeam} team={team}></SingleTeam>)
                    }
                </div>
            </div>
        </div>
    );
};

export default TeamList;