import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLayout from './pages/PageLayout.tsx'
import Main from './pages/Main.tsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path="/" element={<Main />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
