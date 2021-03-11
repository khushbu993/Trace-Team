import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailHeader from '../DetailHeader/DetailHeader';
import TeamDetailDescription from '../TeamDetailDescription/TeamDetailDescription';
import TeamDetailInfo from '../TeamDetailInfo/TeamDetailInfo';
import TeamSocialLink from '../TeamSocialLink/TeamSocialLink';
import './TeamDetail.css';

const TeamDetail = () => {
    const { teamId } = useParams();

    const [teamDetail, setTeamDetail] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeamDetail(data.teams[0]))
    }, [teamId])
    return (
        <>
            <DetailHeader teamDetail={teamDetail} />
            <div className="team-detail">
                <div className="container">
                    <TeamDetailInfo teamDetail={teamDetail} />
                    <TeamDetailDescription teamDetail={teamDetail} />
                    <TeamSocialLink teamDetail={teamDetail} />
                </div>
            </div>
        </>
    );
};

export default TeamDetail;