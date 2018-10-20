import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return(
            <div>
                <form>
                <h1> Name </h1><input type='text' />
                <h1> Email </h1><input type='text' />
                <h1> Phone Number </h1><input type='text' />
                <h1> Subscribe to Email List </h1>
                <h1> Questions or Comments</h1> 
                <textarea />
                </form>
            </div>
        )
    }
}

export default Contact;