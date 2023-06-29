import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          My name is <b>Yassine Maamri</b> and I transform UI into clean and
          functional code.
        </SectionText>
        <Button
          onClick={() =>
            (window.location.href = "mailto:yassinealmaamri@gmail.com")
          }
        >
          Let's Collaborate
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
