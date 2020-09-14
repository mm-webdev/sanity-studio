import React from "react";
import styles from "./padlet.css";

class Padlet extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>MM Web Development Tasks</h2>
        </header>{/* End of styles.header */}
        <div className={styles.content}>
            <iframe
                src="https://padlet.com/embed/as9arst4yymf7tv5"
                class={styles.embed}
                id={styles.scaled_frame}
                name="Embed"
                allow="fullscreen;camera;microphone;geolocation"
                referrerpolicy="origin-when-cross-origin"

            />{/* End of styles.embed_iframe */}
            <div class={styles.footer}>
              <a
                href="https://padlet.com?ref=embed"
                target="_blank"
                class={styles.footer_a}
              >
                <img
                  src="https://padlet.net/embeds/made_with_padlet.png"
                  alt="Made with Padlet"
                  class={styles.img}
                />{/* End of styles.img */}
              </a>{/* End of styles.footer_a */}
            </div>{/* End of styles.footer */}
        </div>{/* End of styles.content */}
      </div> /* End of styles.container */
    );
  }
}

export default {
    name: 'padlet',
    component: Padlet
  }