import Logo from './logo';
import Nav from './nav';

const Header = () => {
  return (
    <nav
      className={`text-secondary flex w-full select-none items-end pt-8 pb-12`}
    >
      <Logo />
      <Nav />
    </nav>
  );
};

export default Header;
