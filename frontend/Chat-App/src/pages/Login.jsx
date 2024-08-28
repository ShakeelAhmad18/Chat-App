
const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-xl text-black font-semibold ">Login</h1>
        <span className="text-blue-400">Chat App</span>
        <form>
            <label className="label p-2">
              <span className="label-text text-base">Username</span>
            </label>
            <input type="text" placeholder="Enter Username..." className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password..." className="w-full input input-bordered"/>
            <div>
                <button className="btn btn-sm btn-block mt-4">Login</button>
            </div>
            <a href="" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Don&apos;t have an account</a>
        </form>
      </div>
    </div>
  )
}

export default Login
