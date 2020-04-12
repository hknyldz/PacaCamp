import React from 'react';

const HostDescription = ({users, spot}) => {
    
    return (
        <div className="host-description">
            <div className="host">
                <div className="avatar">
                    <img src={window.avatar} alt="avatar" />
                </div>

                <div className="credit">
                    <h2>Hosted by</h2>
                    <p>{users[spot.host_id].first_name}&nbsp; {users[spot.host_id].last_name[0]}.</p>
                </div>
            </div>

            <div className="description">
                {spot.description}
            </div>
        </div>
    );
    
}

export default HostDescription;