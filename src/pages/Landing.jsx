import React from 'react';
import '../styles/landing.css';
import lock from '../assets/lock.svg';
import tiltOptions from '../assets/tiltOptions.json';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
export default function Landing() {
    return (
        <div className='landing-page'>
            <section className='landing-description'>
                <h1>
                    Manage Encrypting as well as  Decrypting all in one Place
                </h1>
            </section>
            <section className='landing-image'>
                <Tilt options={JSON.stringify(tiltOptions)}>
                    <img src={lock} alt='logo' draggable={false} />
                </Tilt>
            </section>
            <section className='landing-start'>
                <Link to={'/new'}> Start </Link>
            </section>
        </div>
    );
}