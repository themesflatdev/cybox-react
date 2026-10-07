import React from 'react';
import dataProject from '../assets/fake-data/dataProject';
import PageTitle from '../components/pagetitle';
import Project from '../features/project/nftitem';
import { Helmet } from 'react-helmet';


function NftItem(props) {
    return (
        <div className='page-nft'>
            <Helmet>
                <title>NFT Item</title>
            </Helmet>
            <PageTitle title='NFT ITEM’S' />

            <Project data={dataProject} />
        </div>
    );
}

export default NftItem;