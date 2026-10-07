import React from 'react';
import dataAbout from '../assets/fake-data/data-about';
import dataPartner from '../assets/fake-data/data-partner';
import dataTeam from '../assets/fake-data/data-team';
import PageTitle from '../components/pagetitle';
import About from '../features/about/home-v3';
import Partner from '../features/partner';
import Team from '../features/team';
import { Helmet } from 'react-helmet';

function AboutTwo(props) {
    return (
        <div className='about-v2'>
            <Helmet>
                <title>About 02</title>
            </Helmet>
            <PageTitle title='About Us' />

            <About data={dataAbout} />

            <Team data={dataTeam} />

            <Partner data={dataPartner} />
        </div>
    );
}

export default AboutTwo;