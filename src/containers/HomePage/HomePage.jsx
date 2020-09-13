import React from 'react';
import Button from '@material-ui/core/Button';
import Particles from 'react-particles-js';
import ParticlesParams from './particles.json'

function HomePage() {
    const background = {
        backgroundColor: "black"
    }

    const particlesParams = ParticlesParams

    return (
        <div className="HomePage" style={background}>
            <Particles
                params={ particlesParams }>
            </Particles>
        </div>
    );
}

export default HomePage
