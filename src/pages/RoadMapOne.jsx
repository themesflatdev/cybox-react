import React from 'react';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import PageTitle from '../components/pagetitle';
import RoadMap from '../features/roadmap';
import { Helmet } from 'react-helmet';

function RoadMapOne(props) {
    return (
        <div className='page-roadmap'>
            <Helmet>
                <title>Road Map 01</title>
            </Helmet>
            <PageTitle title='Roadmap' />

            <RoadMap data={dataRoadmap} />
        </div>
    );
}

export default RoadMapOne;