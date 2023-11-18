import Link from 'next/link';

const SignInBtn = () => {
  return (
    <Link
      href={`/signin`}
      className="className={`
        px-3 hoveflex items-center rounded-lg transition-all hover:bg-secondary text-primary font-semibold px-3 py-1.5r:bg-secondary
`}"
    >
      SignIn
    </Link>
  );
};

export default SignInBtn;
