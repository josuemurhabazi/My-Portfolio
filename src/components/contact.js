
import React, {Component} from 'react';
import { Cell, Grid, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Josué Murhabazi</h2>
                        <img
                        src="/images/joshSmall.jpg"
                        alt="Josh"
                        style={{height:'250px'}}
                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em'}}>In case you have a job for me or just want to chat! Holla at me</p>
                        
                    </Cell>
                    
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton'}}>     
                                        <i className="fa fa-envelope-square" aria-hidden="true"/>
                                        josuemurhabazi@gmail.com
                                     </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>  
            </div>
        )
    }
}

export default Contact;