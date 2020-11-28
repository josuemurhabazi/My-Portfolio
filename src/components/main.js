import React from 'react';
import { Route } from 'react-router-dom';

import LandingPage from './landingpage'; 
import AboutMe from './aboutme'
import Contact from './contact'


const Main=()=>(
    <switch>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/aboutme" component={AboutMe}/>
        <Route path="/contact" component={Contact}/>
        

    </switch>
)

export default Main;