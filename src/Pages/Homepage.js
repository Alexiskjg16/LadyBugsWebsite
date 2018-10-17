import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>You can find us at 11532
                   Palmbrush Trail, Lakewood Ranch (Bradenton), FL</h1>
                <h1> 941 725 4537</h1>
                <h1>We are in the same plaza as SEA STAR CAFE</h1>
                <Link to="/Calendar" className="NavLinks"> Upcoming Events! </Link>
                <ul>
                    <li>The Fall Store Hours are:</li>
                    <li>Tue: 10 AM to 5 PM
                    <li>Wed: 10 AM to 5 PM</li>
Thurs: 10 AM to 7:00 PM
Fri: 10 AM to 4 PM
Sat: 10 AM to 4 PM
</li>
                </ul>
            </div>
        )
    }
}

export default HomePage;