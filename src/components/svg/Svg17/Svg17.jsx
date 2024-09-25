import React, { useEffect, useRef } from "react";
import Container from "../../Container/Container";
import styles from "./Svg17.module.css";
import imagesHTML from "../../../images/17/imageHTML.png";
import imagesCSS from "../../../images/17/imageCSS.png";
import imagesCSS_2 from "../../../images/17/imageCSS_2.png";
const Svg17 = () => {
  const sectionRef = useRef();
  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const bottom = section.getBoundingClientRect().bottom;
      const height = section.getBoundingClientRect().height;
      const scroll = (bottom - height * 2) * -1;
      section.style.clipPath = `circle(${scroll}px at center)`;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Container number={17} images={[imagesHTML, imagesCSS, imagesCSS_2]}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Scroll To See Magic Again...</h2>
        <section className={styles.section} ref={sectionRef}></section>
        <div className={styles.container}>
          <h2>Also watch part 1 and 2</h2>
          <p>
            But I must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter consequences that are extremely painful. Nor
            again is there anyone who loves or pursues or desires to obtain pain
            of itself, because it is pain, but because occasionally
            circumstances occur in which toil and pain can procure him some
            great pleasure. To take a trivial example, which of us ever
            undertakes laborious physical exercise, except to obtain some
            advantage from it? But who has any right to find fault with a man
            who chooses to enjoy a pleasure that has no annoying consequences,
            or one who avoids a pain that produces no resultant pleasure? At
            vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Svg17;
