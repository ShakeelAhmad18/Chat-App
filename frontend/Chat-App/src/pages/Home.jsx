import MessageContainer from "../components/MessageContainer"
import Sidebar from "../components/Sidebar"

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] overflow-hidden bg-clip-padding mb-3 bg-gray-400 backdrop-blur-lg backdrop-filter bg-opacity-0">
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default Home
