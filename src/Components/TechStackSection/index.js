import styles from "./index.module.css";
import {Icon} from "@iconify/react";

export default function TechStackSection() {



    return (
        <div class={styles.TechStackSection}>
        <h2>Technologies</h2>
        <section id="tech-stack-container" className={styles.techContainer}>
            <figure className="skill">
                <Icon icon="vscode-icons:file-type-html"  alt="HTML logo"  className={styles.logo}/>
                <figcaption class="skill-name">HTML</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-css"  alt="CSS logo"  className={styles.logo}/>
            <figcaption class="skill-name">CSS</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:git-icon"  alt="GIT logo"  className={styles.logo}/>
            <figcaption class="skill-name">GIT</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-js-official"  alt="JS logo"  className={styles.logo}/>
                <figcaption class="skill-name">JavaScript</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:typescript-icon"  alt="Typescript logo"  className={styles.logo}/>
                <figcaption class="skill-name">TypeScript</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:python"  alt="Python logo"  className={styles.logo}/>
                <figcaption class="skill-name">Python</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:nodejs-icon"  alt="NodeJS logo"  className={styles.logo}/>
                <figcaption class="skill-name">Node.JS</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:react"  alt="React logo"  className={styles.logo}/>
                <figcaption class="skill-name">React</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:npm-icon"  alt="NPM logo"  className={styles.logo}/>
                <figcaption class="skill-name">NPM</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:postgresql"  alt="postgreSQL logo"  className={styles.logo}/>
                <figcaption class="skill-name">PostgreSQL</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-mongo" alt="MongoDB logo"  className={styles.logo}/>
                <figcaption class="skill-name">MongoDB</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:heroku-icon"  alt="Heroku logo"  className={styles.logo}/>
                <figcaption class="skill-name">Postman</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:netlify"  alt="Netlify logo"   className={styles.logo}/>
                <figcaption class="skill-name">Netlify</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:postman-icon"  alt="Postman logo"  className={styles.logo} />
                <figcaption class="skill-name">Postman</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-jest"    className={styles.logo}/>
                <figcaption class="skill-name">Jest</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:cypress"  alt="Cypress logo"  className={styles.logo} />
                <figcaption class="skill-name">Cypress</figcaption>
            </figure>
            
        </section>
        </div>
    )
}