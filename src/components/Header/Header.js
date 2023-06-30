import { Link as ScrollLink } from 'react-scroll';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';
import { Container, Div1, Div2, Div3, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <ScrollLink
        to="home"
        spy={true}
        smooth={true}
        duration={500}
        offset={-70}
      >
        <a style={{ display: 'flex', alignItems: 'center', color: 'white' }}>
          <DiCssdeck size="3rem" />{' '}
          <span style={{ marginLeft: '5px' }}>Yassine Maamri</span>
        </a>
      </ScrollLink>
    </Div1>
    <Div2>
      <li>
        <ScrollLink
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <a>Projects</a>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="tech"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <a>Technologies</a>
        </ScrollLink>
      </li>
      <li>
        <ScrollLink
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
        >
          <a>About</a>
        </ScrollLink>
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
