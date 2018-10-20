import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return(
            <div>
                <h1>You can find us at 11532
                   Palmbrush Trail, Lakewood Ranch (Bradenton), FL</h1>
                <h1> 941-725-4537</h1>
                <form className="EmailList">
                    <h3> Join our email list! </h3>
                    <input type='text' placeholder='email' className="emailList"/>
                    <button id="submitbutton">Submit</button>
                </form>
                <Link to="/Calendar" className="UpcomingEvents"> Upcoming Events! </Link>
               <section className="HoursandRegistry">
                <ul>
                    <li className="StoreHours">The Fall Store Hours are:</li>
                    <li className="StoreHours">Tue: 10 AM to 5 PM</li>
                    <li className="StoreHours">Wed: 10 AM to 5 PM</li>
                    <li className="StoreHours">Thurs: 10 AM to 7:00 PM</li>
                    <li className="StoreHours">Fri: 10 AM to 4 PM</li>
                    <li className="StoreHours">Sat: 10 AM to 4 PM</li>
                </ul>
                <ul>
                    <li className="StoreHours">If you would like to register for a class please email Nancy: ladybugspapercrafts@gmail.com 
                        or call 941.725.4537</li>
                    <li className="StoreHours">Classes must be paid for at the time of registration </li>
                </ul>
                </section>
                 <section className="ReturnandCancelation">
                     <h2>Return Policy</h2>
                     <p>Unopened and unused items returned within 30 days with a receipt will receive full amount of purchase. 
                         Items returned after 30 days will be issued store credit equal to the purchase price minus 15%. Items 
                         cannot be returned without a receipt at any time.</p>
                     <h2>Cancellation Policy</h2>
                     <p>If you have paid for a class and cannot attend the class, please notify us 72 hours in advance of 
                         the class. Registration for classes cancelled in advance will receive credit for another class. 
                         Class fees cannot be refunded nor can the credit be used for product purchases.  No credit will be 
                         issued for cancellations less than 72 hours before the class schedule date.</p>
                 </section>

            </div>
        )
    }
}

export default HomePage;