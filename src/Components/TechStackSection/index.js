import styles from "./index.module.css";
import {Icon} from "@iconify/react";

export default function TechStackSection() {



    return (
        <div class={styles.TechStackSection}>
        <h2 className={styles.title}>Technologies</h2>
        <section id="tech-stack-container" className={styles.techContainer}>
            <figure className={styles.skill}>
                <Icon icon="vscode-icons:file-type-html"  alt="HTML logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>HTML</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="vscode-icons:file-type-css"  alt="CSS logo"  className={styles.logo}/>
            <figcaption class={styles.skillName}>CSS</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:git-icon"  alt="GIT logo"  className={styles.logo}/>
            <figcaption class={styles.skillName}>GIT</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="vscode-icons:file-type-js-official"  alt="JS logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>JavaScript</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:typescript-icon"  alt="Typescript logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>TypeScript</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:python"  alt="Python logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>Python</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:nodejs-icon"  alt="NodeJS logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>Node.JS</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:react"  alt="React logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>React</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:npm-icon"  alt="NPM logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>NPM</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:postgresql"  alt="postgreSQL logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>PostgreSQL</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="vscode-icons:file-type-mongo" alt="MongoDB logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>MongoDB</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:heroku-icon"  alt="Heroku logo"  className={styles.logo}/>
                <figcaption class={styles.skillName}>Heroku</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:netlify"  alt="Netlify logo"   className={styles.logo}/>
                <figcaption class={styles.skillName}>Netlify</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:postman-icon"  alt="Postman logo"  className={styles.logo} />
                <figcaption class={styles.skillName}>Postman</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="vscode-icons:file-type-jest"    className={styles.logo}/>
                <figcaption class={styles.skillName}>Jest</figcaption>
            </figure>

            <figure className={styles.skill}>
            <Icon icon="logos:cypress"  alt="Cypress logo"  className={styles.logo} />
                <figcaption class={styles.skillName}>Cypress</figcaption>
            </figure>
            
        </section>
        </div>
    )
}