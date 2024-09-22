import ChatList from './chatList/ChatList.jsx'
import './list.css'
import UserInfo from './userInfo/UserInfo.jsx'

export default function List() {
  return (
    <div className='list'>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}
