import styles from "./index.module.css";

export default function AboutSection() {
    return (
        <section  className={styles.aboutSection} id="about">
         <section id="personal-picture" class={styles.picWrapper}>
                <img src="https://i.ibb.co/P9pP5T9/IMG-20210206-100236115.jpg" alt="profile" className={styles["profile-pic"]}></img>
            </section>
        <section className={styles.descriptionWrapper}>
        <h2>Ciao!<span className={styles.hand}>👋🏻</span> I'm Antonio.</h2>
        <h3>Full Stack Developer</h3>
        <section id="bio" className={styles.bio}>
                <p className={styles.parBio}>Made in Italy, based in the UK.</p>
                <p className={styles.parBio}>I've fallen in love with programming as it's one of the greatest expressions of creativity applied to logic. An intriguing fusion of Apollonian and Dionysian.</p>
                <p className={styles.parBio}>In my spare time, I'm a voracious reader, avid gym-goer, and musician.</p>
                <p className={styles.parBio}>Currently training at the <a href="https://www.schoolofcode.co.uk/" className={styles["school-of-code"]}>School of Code</a>.</p>
               
            </section>
        </section>
        
           
         
           
        </section>
    )
}