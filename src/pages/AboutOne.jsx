import React from 'react';

import PageTitle from '../components/pagetitle';
import About from '../features/about/home-v2';
import dataAbout from '../assets/fake-data/data-about';
import Team from '../features/team/home-v2';
import dataTeam from '../assets/fake-data/data-team';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import { Helmet } from 'react-helmet';


function AboutOne(props) {
    return (
        <div className='about'>
            <Helmet>
                <title>About 01</title>
            </Helmet>
            <PageTitle title='About Us' />

            <About data={dataAbout} />

            <Team data={dataTeam} />

            <Partner data={dataPartner} />

        </div>
    );
}

export default AboutOne;