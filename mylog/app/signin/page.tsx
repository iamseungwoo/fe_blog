const Page = () => {
  return (
    <div className="h-[60vh] border rounded-md flex justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <div className="relative rounded-md shadow-sm">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none bg-white block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
          </div>
          <div>
            <div className="relative rounded-md shadow-sm">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none bg-white block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-zinc-900"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
