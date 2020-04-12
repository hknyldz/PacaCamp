import React from 'react';

{/* <HostDescription spot={this.props.spot} users={this.props.users} fetchUsers={this.props.fetchUsers} /> */}

// line 287 in SpotShow

class HostDescription extends React.Component {
    constructor(props)  {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchUsers();
    // }

    render() {
        // if (this.props.users.length < 2) {
        //     return null;
        // }
        return (
            <div className="host-description">
                <div className="host">
                    <div className="avatar">
                        <img src={window.avatar} alt="avatar" />
                    </div>

                    <div className="credit">
                        <h2>Hosted by</h2>
                        <p>{this.props.users[this.props.spot.host_id].first_name}&nbsp; {this.props.users[this.props.spot.host_id].last_name[0]}.</p>
                    </div>
                </div>
    
                <div className="description">
                    {this.props.spot.description}
                </div>
            </div>
        );
    }
}

export default HostDescription;