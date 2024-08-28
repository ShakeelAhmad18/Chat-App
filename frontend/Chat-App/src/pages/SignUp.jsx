import GenderCheckBox from "../components/GenderCheckBox"

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto overflow-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-green-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-center text-xl text-black font-semibold ">Sign Up</h1>
        <span className="text-blue-400">Chat App</span>
        <form>
            <label className="label p-2">
              <span className="label-text text-base">Full Name</span>
            </label>
            <input type="text" placeholder="Enter Fullname..." className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">User Name</span>
            </label>
            <input type="text" placeholder="Enter Username..." className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter Password..." className="w-full input input-bordered"/>
            <label className="label p-2">
              <span className="label-text text-base">Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter Password..." className="w-full input input-bordered"/>
             <GenderCheckBox/>
            <div>
                <button className="btn btn-sm btn-block mt-4">Sign Up</button>
            </div>
            <a href="" className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account</a>
        </form>
      </div>
    </div>
  )
}

export default SignUp
