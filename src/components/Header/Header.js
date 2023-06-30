import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import { Container, Div1, Div2, Div3, Navo, SocialIcons } from "./HeaderStyles";

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" />{" "}
          <span style={{ marginLeft: "5px" }}>Yassine Maamri</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Navo href="#projects" onClick={() => scrollToSection("projects")}>
          Projects
        </Navo>
      </li>
      <li>
        <Navo href="#tech" onClick={() => scrollToSection("tech")}>
          Technologies
        </Navo>
      </li>
      <li>
        <Navo href="#about" onClick={() => scrollToSection("about")}>
          About
        </Navo>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/ymaamri/" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/yassine-maamri/"
        target="_blank"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      {/* <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons> */}
    </Div3>
  </Container>
);

export default Header;
