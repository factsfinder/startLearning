import Link from 'next/link';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  flex-direction: row;
`;

const Logo = styled.img``;

const NavbarRight = styled.div``;

const NavLink = styled.a`
  text-decoration: none;
`;

export default () => {
  return (
    <Navbar>
      <Logo />
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