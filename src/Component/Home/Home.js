import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import TeamList from '../TeamList/TeamList';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <TeamList></TeamList>
        </div>
    );
};

export default Home;