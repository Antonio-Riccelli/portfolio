import styles from "./index.module.css";


export default function AboutDropDowns() {

    return (
        <section className={styles.dropdownContainer}>
            <details className={styles.dropdownTop}>
                <summary>Some more about me</summary>
                <ul>
                    <li>I've worked in different fields: hospitality, retail banking and pharmauceticals supply chain.</li>
                    <li>I love teamwork, giving back to the community and contributing to apps and products I like and use. I try to be active on the freeCodeCamp forum and I've recently contributed some entries to the Codecademy docs:
                        <ul className={styles.sublist}>
                            <li>
                                <a href="https://www.codecademy.com/resources/docs/html/tags/q">HTML - <code>&lt;q&gt;</code> tag</a>
                            </li>
                            <li>
                                <a href="https://www.codecademy.com/resources/docs/html/semantic-html/mark">HTML - <code>&lt;mark&gt;</code> tag</a>
                            </li>
                            <li>
                                <a href="https://www.codecademy.com/resources/docs/html/semantic-html/time">HTML - <code>&lt;time&gt;</code> tag</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Working on the Italian localisation for the <a href="https://axios-http.com/docs/intro">Axios docs</a>.
                    </li>
                </ul>
                <section className={styles.top5container}>
                <p>Some random top 5 lists.</p>
                    <details className={styles.dropdown}>
                        <summary className={styles.summary}>Favourite Albums [artist - album]</summary>
                        <ul>
                          <li>Helloween - Keeper of the Seven Keys pt.2</li>  
                          <li>King Crimson - Discipline</li>
                          <li>Aphex Twin - Richard D. James Album</li>
                          <li>Animals as Leaders - Weightless</li>
                          <li>Solefald - Black for Death: An Icelandic Odyssey Part II</li>
                        </ul>
                    </details>

                    <details className={styles.dropdown}>
                        <summary className={styles.summary}>Favourite books [non-narrative]</summary>
                        <ul>
                          <li>Rudolf Steiner - Intuitive Thinking as a Spiritual Path</li>  
                          <li>Rudolf Steiner - An Outline of Esoteric Science</li>
                          <li>Massimo Scaligero - Reincarnation and Karma</li>
                          <li>Robert Greene - Mastery</li>
                          <li>Friedrich Nietzsche - Thus Spoke Zarathustra</li>
                        </ul>
                    </details>

                    <details className={styles.dropdown}>
                        <summary className={styles.summary}>Books [narrative]</summary>
                        <ul>
                          <li>H.P. Lovecraft - Collected Works</li>  
                          <li>G.I. Gurdjieff - Meetings with Remarkable Men</li>
                          <li>Ayn Rand - The Fountainhead</li>
                          <li>Edgar Allan Poe - Collected Works</li>
                          <li>Edwin Abbott Abbott - Flatland: A Romance of Many Dimensions</li>
                        </ul>
                    </details>

                    <details className={styles.dropdown}>
                        <summary className={styles.summary}>Favourite videogames</summary>
                        <ul>
                          <li>Realms of the Haunting</li>  
                          <li>The Elder Scrolls III: Morrowind</li>
                          <li>Gabriel Knight: Sins of the Fathers</li>
                          <li>Deus Ex</li>
                          <li>Shadow Hearts</li>
                        </ul>
                    </details>

                    <details className={styles.dropdown}>
                        <summary className={styles.summary}>Favourite movies</summary>
                        <ul>
                          <li>Tetsuo: The Iron Man</li>  
                          <li>Revolver</li>
                          <li>Collateral</li>
                          <li>The Dark Knight</li>
                          <li>Seven</li>
                        </ul>
                    </details>

                    <details className={styles.dropdown}>
                        <summary className={styles.summary}>Favourite series</summary>
                        <ul>
                          <li>Twin Peaks</li>  
                          <li>The Kingdom</li>
                          <li>Homicide: Life on the Street</li>
                          <li>Seinfeld</li>
                          <li>Louie</li>
                        </ul>
                    </details>
                </section>
            </details>
        </section>
    )
}