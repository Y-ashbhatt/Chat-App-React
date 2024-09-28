import Chat from "./Components/chat/Chat"
import Detail from "./Components/detail/Detail"
import List from "./Components/list/List"
import Login from "./Components/login/Login"

const App = () => {

  const user = false

  return (
    <div className='container'>
      {
        user ? (
          <>
          <List />
          <Chat />
          <Detail />
          </>
        ): (<Login />)
      }
    </div>
  )
}

export default App