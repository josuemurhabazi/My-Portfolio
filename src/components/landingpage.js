
import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';

class Landing extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className='landing-grid'>
                    <Cell col={12}>
                        <img
                        src="/images/josue.jpg" 
                        alt="Josue"
                        className="mypicture"
                        />

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr/>

                            <p>HTML5 | CSS3 | JavaScript | WordPress | React Js | NodeJs | SQL | Firebase | Flutter</p>

                            <div className="social-links">
                                {/*LinkedIn */}
                                <a href="https://www.linkedin.com/in/josuemurhabazi/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin" aria-hidden="true"/>
                                </a>

                                 {/*Github */}
                                 <a href="https://github.com/josuemurhabazi" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                                 {/*Stack Overflow */}
                                 <a href="https://stackoverflow.com/users/13405426/josue-murhabazi" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-stack-overflow" aria-hidden="true"/>
                                </a>

                                {/*Instagram */}
                                <a href="https://www.instagram.com/josuemurhabazi1/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
                
            </div>
        )
    }
}

export default Landing;