import styles from "./index.module.css";
import { Icon } from '@iconify/react';

export default function ContactSection() {

    return (
        <section className={styles.contactSectionWrapper} id="contact">
            <h2 className={styles.sectionTitle}>Let's connect!</h2>
            <section className={styles.contactLinks}>

            <a href="https://www.linkedin.com/in/antonioriccelli/" className={styles.socialLink} id="linkedin" title="Linkedin"><Icon icon="logos:linkedin-icon" className={styles.socialLogo} alt="Linkedin"/></a>

            <a href="https://twitter.com/AntonioRiccell1" className={styles.socialLink} id="twitter" title="Twitter" alt="Twitter"><Icon icon="logos:twitter" className={styles.socialLogo}/></a>

            <a href="https://github.com/Antonio-Riccelli" className={styles.socialLink} id="github" title="Github"><Icon icon="fontisto:github" className={styles.socialLogo} alt="Github"/></a>

   
            <a href="https://leetcode.com/AntonioRiccelli/" className={styles.socialLink} id="leetcode" title="LeetCode"><Icon icon="cib:leetcode" className={styles.socialLogo} alt="LeetCode"/></a>


            <a href="https://hashnode.com/@AntonioRiccelli" className={styles.socialLink} id="github" title="Hashnode"><Icon icon="logos:hashnode-icon" className={styles.socialLogo} alt="Hashnode"/></a>

            <a href="https://soundcloud.com/antonioriccelli" className={styles.socialLink} id="github" title="Soundcloud"><Icon icon="logos:soundcloud" className={styles.socialLogo} alt="Soundcloud"/></a>

            <a href="https://www.gog.com/u/AntonioRiccelli" className={styles.socialLink} id="gog" title="GOG"><Icon icon="cib:gog-com" className={styles.socialLogo} alt="GOG"/></a>
            <a href="https://steamcommunity.com/id/antonioriccelli" className={styles.socialLink} id="Steam" title="Steam"><Icon icon="bi:steam" className={styles.socialLogo} alt="Steam"/></a>

            </section>
        </section>
    )
}

// https://www.gog.com/u/AntonioRiccelli