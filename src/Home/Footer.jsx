import React from 'react';

const Footer = () => {
    return (
        <div className="flex justify-between text-sm gradientText rotateColor">
            <div>
                <p>© 2021 kevinMEH</p>
            </div>
            <div className="flex items-center space-x-4">
                <a href="https://github.com/kevinMEH">GitHub</a>
                <a href="mailto:hello@liao.gg">Contact</a>
                <a href="https://github.com/kevinMEH/portfolio"></a>
            </div>
        </div>
    );
}

export default Footer;