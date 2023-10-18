import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = () => {
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Bhupen Sahoo.
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewritterpara",
            }}
          />

          <div>
            <a href="mailto:bhupen@gmail.com">Email</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              + <span>100</span>
            </p>
            <span>Clients World Wide</span>
          </article>

          <aside>
            <article>
              <p>
                + <span>500</span>
              </p>
              <span>Project Made</span>
            </article>
            <article data-special>
              <p>Contact</p>
              <span>bhupensahoo200127@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt={"Bhupen"} />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
