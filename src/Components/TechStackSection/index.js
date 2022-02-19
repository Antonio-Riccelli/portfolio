import styles from "./index.module.css";
import {Icon} from "@iconify/react";

export default function TechStackSection() {



    return (
        <section id="tech-stack-container" className={styles.techContainer}>
            <figure className="skill">
                <Icon icon="vscode-icons:file-type-html" width="100" height="100" alt="HTML logo"  className={styles.logo}/>
                <figcaption class="skill-name">HTML</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-css" width="100" height="100" alt="CSS logo"  className={styles.logo}/>
            <figcaption class="skill-name">CSS</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:git-icon" width="100" height="100" alt="GIT logo"  className={styles.logo}/>
            <figcaption class="skill-name">GIT</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-js-official" width="100" height="100" alt="JS logo"  className={styles.logo}/>
                <figcaption class="skill-name">JavaScript</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:typescript-icon" width="100" height="100" alt="Typescript logo"  className={styles.logo}/>
                <figcaption class="skill-name">TypeScript</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:python" width="100" height="100" alt="Python logo"  className={styles.logo}/>
                <figcaption class="skill-name">Python</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:nodejs-icon" width="100" height="100" alt="NodeJS logo"  className={styles.logo}/>
                <figcaption class="skill-name">Node.JS</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:react" width="100" height="100" alt="React logo"  className={styles.logo}/>
                <figcaption class="skill-name">React</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:npm-icon" width="100" height="100" alt="NPM logo"  className={styles.logo}/>
                <figcaption class="skill-name">NPM</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:postgresql" width="100" height="100" alt="postgreSQL logo"  className={styles.logo}/>
                <figcaption class="skill-name">PostgreSQL</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-mongo" width="100" height="100" alt="MongoDB logo"  className={styles.logo}/>
                <figcaption class="skill-name">MongoDB</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:heroku-icon" width="100" height="100" alt="Heroku logo"  className={styles.logo}/>
                <figcaption class="skill-name">Postman</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:netlify" width="100" height="100" alt="Netlify logo"   className={styles.logo}/>
                <figcaption class="skill-name">Netlify</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:postman-icon" width="100" height="100" alt="Postman logo"  className={styles.logo} />
                <figcaption class="skill-name">Postman</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="vscode-icons:file-type-jest" width="100" height="100"   className={styles.logo}/>
                <figcaption class="skill-name">Jest</figcaption>
            </figure>

            <figure className="skill">
            <Icon icon="logos:cypress" width="100" height="100" alt="Cypress logo"  className={styles.logo} />
                <figcaption class="skill-name">Cypress</figcaption>
            </figure>
            
        </section>
    )
}