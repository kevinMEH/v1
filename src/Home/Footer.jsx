import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-between text-sm md:text-base lg:text-lg gradientText rotateColor">
            <div>
                <p>© 2021 kevinMEH</p>
            </div>
            <div className="flex items-center space-x-4 md:space-x-14 lg:space-x-24">
                <a href="https://github.com/kevinMEH">GitHub</a>
                <a href="mailto:hello@liao.gg">Contact</a>
            </div>
        </div>
    );
}

export default Footer;