import styles from "./index.module.css";
import { Icon } from '@iconify/react';

export default function AboutSection() {
    return (
        <section  className={styles.aboutSection} id="about">
         <section id="personal-picture" class={styles.picWrapper}>
                <img src="https://i.ibb.co/P9pP5T9/IMG-20210206-100236115.jpg" alt="profile" className={styles["profile-pic"]}></img>
            </section>
        <section className={styles.descriptionWrapper}>
        <h2 className={styles.largerh2}>Ciao!<span className={styles.hand}>👋🏻</span> I'm Antonio.</h2>
        <h3 className={styles.larger}>Full Stack Developer <span className={styles.inBrackets}>(with a penchant for the Backend)</span></h3>
        <section id="bio" className={styles.bio}>
                <p className={styles.parBio}>Made in Italy <Icon icon="twemoji:flag-italy" /> based in the UK <Icon icon="flagpack:gb-ukm" /></p>
                <p className={styles.parBio}><a href="https://www.schoolofcode.co.uk/" className={styles["school-of-code"]}>School of Code</a> graduate. I've fallen in love with programming as it's one of the greatest expressions of creativity applied to logic. An intriguing fusion of Apollonian and Dionysian.</p>
                <p className={styles.parBio}>In my spare time, I'm a voracious reader, avid gym-goer, and musician.</p>
                <p className={styles.parBio}>As of late, my interests have been: Backend development, DevOps, Blockchain and Web3.</p>
               
            </section>

            <section id="resumeWrapper" className={styles.resumeWrapper}>
                <a href="https://drive.google.com/file/d/1Y_NYBAhwsxXYguoX4HZSlaX2wumOt7ye/view?usp=sharing" className={styles.cvButton} download target="_blank" rel="noreferrer">View my CV</a>
            </section>
        </section>
        
           
         
           
        </section>
    )
}