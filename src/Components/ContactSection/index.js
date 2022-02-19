import styles from "./index.module.css";
import { Icon } from '@iconify/react';

export default function ContactSection() {

    return (
        <section className={styles.contactSectionWrapper}>
            <h2 className={styles.sectionTitle}>Let's connect!</h2>
            <section className={styles.contactLinks}>

            <a href="https://www.linkedin.com/in/antonioriccelli/" className={styles.socialLink} id="linkedin" title="Linkedin"><Icon icon="logos:linkedin-icon" className={styles.socialLogo} alt="Linkedin"/></a>

            <a href="https://twitter.com/AntonioRiccell1" className={styles.socialLink} id="twitter" title="Twitter" alt="Twitter"><Icon icon="logos:twitter" className={styles.socialLogo}/></a>

            <a href="https://github.com/Antonio-Riccelli" className={styles.socialLink} id="github" title="Github"><Icon icon="fontisto:github" className={styles.socialLogo} alt="Github"/></a>

            <a href="https://hashnode.com/@AntonioRiccelli" className={styles.socialLink} id="github" title="Hashnode"><Icon icon="logos:hashnode-icon" className={styles.socialLogo} alt="Hashnode"/></a>

            <a href="https://soundcloud.com/antonioriccelli" className={styles.socialLink} id="github" title="Soundcloud"><Icon icon="logos:soundcloud" className={styles.socialLogo} alt="Soundcloud"/></a>

            </section>
        </section>
    )
}