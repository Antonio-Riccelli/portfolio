import styles from "./index.module.css";

export default function AboutSection() {
    return (
        <section id="about-section" className={styles.aboutSection}>
        <h2>Ciao!<span className={styles.hand}>👋🏻</span> I'm Antonio.</h2>
        <h3>Full Stack Developer</h3>
            <section id="personal-picture">
                <img src="https://i.ibb.co/P9pP5T9/IMG-20210206-100236115.jpg" alt="profile" className={styles["profile-pic"]}></img>
            </section>

            <section id="bio">
                <p>I love coding</p>
                <p>Playing guitar</p>
            </section>
        </section>
    )
}