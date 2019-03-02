'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import User from './User.jsx';

export default class Users extends Component {
    static get propTypes() {
        return {
            users: PropTypes.array
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {users} = this.props;
        return <div>
            <table>
                <thead>
                <tr>
                    <th>ID</th> /home/student/.npm/_logs/2019-03-02T07_02_21_464Z-debug.log
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map(user => {
                        return <User key={user.id} user={user}/>
                    })

                }
                </tbody>
            </table>
        </div>;
    }

}