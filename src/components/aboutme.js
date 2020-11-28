
import React, {Component} from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills'

class About extends Component{
    render(){
        return(
            <div>
               <Grid>
                   <Cell col={4}>
                       <div style={{textAlign:'center'}}>
                            <img
                            src="/images/rambo.jpg"
                            alt="Rambo"
                            className="rambo"
                            
                            />
                       </div>
                       <h2 style={{paddingTop:'5px'}}>Josué Murhabazi</h2>
                       <h4 style={{color:'gray'}}>Full-Stack Web Developer</h4>
                       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>

                       <p>Budding IT professional with strong experience in web and mobile development, database management, and software project management. Enthusiastic about helping organizations thrive in the digital age and build exceptional customer experiences across multiple digital touchpoints. </p>

                       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                       <h5>Address</h5>
                       <p>South-B, Nairobi, KENYA</p>
                       <h5>Phone</h5>
                       <p>(+254) 728 938 006</p>
                       <h5>Email</h5>
                       <p>josuemurhabazi@gmail.com</p>
                       <hr style={{borderTop:'3px solid #833fb2', width:'50%'}}/>
                   </Cell>
                   <Cell className="about-right-col" col={8}>
                       <h2>Education</h2>

                       <Education
                       startYear={2014}
                       endYear={2019}
                       schoolName={"Daystar University"}
                       schoolDescription={"Completed courses like Structured Programming, Object Oriented Software Design and Development; System analysis and Design; Computer Networks and Data Communication; Computer Organization, Design and Architecture; Network Design and Management; Software Project Management; Computer System Security; Database Management Systems; Data and Database Administration; Mobile Application Development; Internet Application Design and Development."}
                       />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                       <h2>Experience</h2>

                       <Experience
                       startYear={2020}
                       endYear={2020}
                       jobName={"Database Developer & Client Support Intern"}
                       companyName={"The MicroPoint Systems Limited"}
                       jobDescription={"Developed relational databases to customize the PowerFinancials ERP suite for 6 SACCO institutions.	Resolved client challenges with ERP license renewals, system breakdowns, and functionality use."}
                       />

                        <Experience
                       startYear={2018}
                       endYear={2018}
                       jobName={"Android Developer Intern"}
                       companyName={"Kenya Universities Sports Association"}
                       jobDescription={"Analyzed and translated business and functional requirements into system features. Developed the front and back-end of a mobile-based sport management system for university teams. Tested and troubleshot system features to expose hitches and ensure superior user experience."}
                       />

                        <hr style={{borderTop:'3px solid #e22947'}}/>

                        <h2>Skills</h2>

                        <Skills
                            skill="HTML5"
                            progress={100}
                        />
                        <Skills
                            skill="CSS3"
                            progress={90}
                        />
                        <Skills
                            skill="JavaScript"
                            progress={80}
                        />
                        <Skills
                            skill="SQL"
                            progress={80}
                        />
                        <Skills
                            skill="Firebase"
                            progress={50}
                        />
                        <Skills
                            skill="React"
                            progress={30}
                        />
                        

                   </Cell>
               </Grid>
            </div>
        )
    }
}

export default About