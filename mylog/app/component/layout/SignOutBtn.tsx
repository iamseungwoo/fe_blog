import Link from 'next/link';

const SignOutBtn = ({ onSignout }: { onSignout: any }) => {
  const clickSignOut = () => {
    localStorage.removeItem('accessToken');
    onSignout();
  };
  return (
    <div
      className="className={`
        px-3 hoveflex items-center rounded-lg transition-all hover:bg-secondary text-primary font-semibold px-3 py-1.5r:bg-secondary
`}"
      onClick={clickSignOut}
    >
      SignOut
    </div>
  );
};

export default SignOutBtn;
