import Conversations from "./Conversations"
import LogoutButton from "./LogoutButton"
import SearchInput from "./SearchInput"

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-sky-500">
      <SearchInput/>
      <div className="divider py-3"/>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
