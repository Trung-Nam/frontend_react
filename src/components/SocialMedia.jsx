import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <FaFacebookF />
        </div>
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
    </div>
);

export default SocialMedia;