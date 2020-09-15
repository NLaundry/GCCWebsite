import React from 'react';
import Button from '@material-ui/core/Button';
import Particles from 'react-particles-js';
import ParticlesParams from './particles.json'
import TypeWriter from '../../components/TypeWriter/TypeWriter'
import BottomBar from '../../components/BottomBar/BottomBar'
import styles from './HomePage.module.css'


function HomePage() {
    const consoleDiv = {
        margin: "5em",
        marginTop: "15em",
        display: "flex",
        justifyContent: "center",
    }

    const particlesParams = ParticlesParams

    return (
        <div className={styles.background}>
            <div className={styles.consoleDiv}>
                <TypeWriter> </TypeWriter>
            </div>
            <Particles className={styles.background} 
                params={particlesParams}>
            </Particles>
            <div className={styles.footer}>
                <BottomBar/>
            </div>
            
        </div>
    );
}

export default HomePage
