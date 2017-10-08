import React from 'react';
import { Button } from 'semantic-ui-react';
import UserProfile from '../../userProfile/userProfile';
import { Link } from 'react-router';
import './header.less';

let HomePageHeader = () => {
    return (
        <div className ='home-page-header' >
            <Link to={'/author'}><Button className='about-author'>About Author</Button></Link>
            <UserProfile/>
        </div>
  );
}

export default HomePageHeader;