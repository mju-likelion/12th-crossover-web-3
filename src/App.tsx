import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './pages/PageLayout.tsx'
import Main from './pages/Main.tsx'
import Detail from './pages/Detail.tsx'
import Write from './pages/Write.tsx'
import LogIn from './pages/LogIn.tsx'
import SignUp from './pages/SignUp.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/:postId" element={<Detail />} />
          <Route path="/write" element={<Write />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
