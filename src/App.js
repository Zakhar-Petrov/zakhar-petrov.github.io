import './App.css';
import IconLinks from './components/IconLinks';
import React from 'react';

const name = 'Zakhar Petrov';
const jobTitle = 'Java Team Lead';
const jobOrganization = 'Agisoft';
const jobSite = 'https://www.agisoft.com';

const iconLinks = [
    { title: 'Linkedin', href: 'https://www.linkedin.com/in/z-petrov', icon: 'linkedin' },
    { title: 'GitHub', href: 'https://github.com/Zakhar-Petrov', icon: 'github' }
];

function App() {
    return (
        <div className='wrapper'>
            <header className='header'>
                <div className='title'>
                    <div className='fade fade-first'>
                        <h1>{name}</h1>
                    </div>
                    <div className='fade fade-second'>
                        <span>
                            {jobTitle} at&nbsp;
                            <a className='link' href={jobSite} target='_blank' rel='noopener noreferrer'>
                                {jobOrganization}
                            </a>
                        </span>
                    </div>
                </div>
                <div className='fade fade-third'>
                    <IconLinks iconLinks={iconLinks} />
                </div>
            </header>
        </div>
    );
}

export default App;
