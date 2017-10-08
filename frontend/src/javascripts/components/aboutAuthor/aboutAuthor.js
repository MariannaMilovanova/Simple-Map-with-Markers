import React from 'react';
import { Button, Image, Header, Icon } from 'semantic-ui-react';
import UserProfile from '../userProfile/userProfile';
import photo from '../../../images/photo.jpg'
import { Link } from 'react-router';
import './aboutAuthor.scss'

const AboutAuthor = () => (
    <div className ='about-author-wrapper'>
        <div className ='about-author-header' >
          <Link to={'/'}><Button>Home</Button></Link>
          <UserProfile/>
        </div>
        <div className ='about-author-body' >
            <Header className='about-author-body-header' as='h3' block textAlign="center">Author The Author</Header>
            <div className='about-author-block'> 
                <div className='about-author-block-image'> 
                    <Image src={photo} size='medium' fluid/> 
                </div>
                <div className ='about-author-body-text'>
                    <Header as='h3' dividing textAlign="center">Marianna Milovanova</Header>
                    <div className ='about-author-personal-data'>
                        <div className='info-block'><Icon name='student' color='blue'/>Binary Studio Academy</div>
                        <div className='info-block'><Icon name='call' color='blue'/>+38 (093) 288-59-03</div>
                        <div className='info-block'><a href='mailto:marianna.v.milovanova@gmail.com'><Icon name='mail' color='blue'/>marianna.v.milovanova@gmail.com</a></div>
                        <div className='info-block'><a href='https://github.com/MariannaMilovanova'><Icon name='github' color='blue'/>https://github.com/MariannaMilovanova</a></div>
                        <div className='info-block'><Icon name='skype' color='blue'/>Skype: indomitable_temper</div>
                        <div className='info-block-tech'>Technology used to create this App:</div>
                        <div className='info-block-tech-info'>
                            <Icon name='code' color='brown'/>
                            FrontEnd: ReactJS, Redux / Redux-saga, HTML & CSS & SASS & Semantic UI, ECMAScript 6 / BABEL / Webpack
                        </div>
                        <div className='info-block-tech-info'>
                            <Icon name='settings' color='brown'/>
                            BackEnd: Node.js / Express, MongoDB / Mongoose, Passport
                        </div>
                        <div className='info-cv'><Icon name='id card outline' color='green'/>
                            My CV you can find <a href='https://drive.google.com/file/d/0B1J3pE3X1Dl8WG1yOGV2NWF2dG8/view?usp=sharing'>here</a></div>
                    </div>
                </div>
            </div>

        </div>
    </div>

);

export default AboutAuthor;
