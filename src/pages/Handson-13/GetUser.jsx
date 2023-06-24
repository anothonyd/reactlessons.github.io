import React, { Component } from 'react';
import { format } from 'date-fns';
import { cardStyle, formStyle } from '../../styles';

class GetUser extends Component {
    state = {
        user: null,
    };

    async componentDidMount() {
        try {
            const response = await fetch('https://randomuser.me/api');
            const data = await response.json();
            const user = data.results[0];
            this.setState({ user });
        } catch (error) {
            console.log('Error:', error);
        }
    }

    render() {
        const { user } = this.state;

        if (!user) {
            return <div>Loading...</div>;
        }

        const { name, picture, phone, email, dob } = user;
        const formattedDob = format(new Date(dob.date), 'MMMM d, yyyy');

        return (
            <div style={cardStyle}>
                <h3 className='mb-3'>{name.title} {name.first}</h3>
                <img src={picture.large} style={{ width: '250px' }} alt={name.first} />
                <div className='mt-3 pb-0' style={formStyle}>
                    <p>Mobile: {phone}</p>
                    <p className='small '>Email: {email}</p>
                    <p className='small'>Birthday: {formattedDob}</p>
                </div>
            </div>
        );
    }
}

export default GetUser;
