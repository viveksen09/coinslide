import React from 'react';

const Logo = () => {
    return (
        <div>
            <img src={require('../images/logo.png')} alt='company logo' style={{width: '200px' }}/>
        </div>
    );
};

export default Logo;