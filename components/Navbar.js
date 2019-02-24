import Link from 'next/link';
import styled from 'styled-components';
import appLogo from '../images/startLearning-logo.png';

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img``;

const NavbarRight = styled.div``;

const NavLink = styled.a`
  text-decoration: none;
  color: black;
`;

export default () => {
  return (
    <Navbar>
      <Logo src={appLogo} />
      <NavbarRight>
        <Link href='/courses'>
          <NavLink>Courses</NavLink>
        </Link>
        <Link href='/about'>
          <NavLink>About</NavLink>
        </Link>
      </NavbarRight>
    </Navbar>
  );
};