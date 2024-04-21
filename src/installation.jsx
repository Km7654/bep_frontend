import React, { useState } from 'react';
import './installation.css';
import Content from './installcont'; 

function Installation() {
    const [selectedContent, setSelectedContent] = useState('installation'); 
    const [activeButton, setActiveButton] = useState('installation');

    const handleButtonClick = (content) => {
        setSelectedContent(content);
        setActiveButton(content);
    };

    return (
        <div className='installation' id='install'>
            <div className='buttonclass'>
                <button className={activeButton === 'installation' ? 'active button' : 'button'} onClick={() => handleButtonClick('installation')}>Installation</button>
                <button className={activeButton === 'commands' ? 'active button' : 'button'} onClick={() => handleButtonClick('commands')}>Commands</button>
            </div>
            <Content content={selectedContent} />
        </div>
    );
}

export default Installation;
