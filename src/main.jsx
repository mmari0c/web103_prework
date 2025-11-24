import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from './pages/Layout.jsx'
import ShowCreators from './pages/ShowCreators.jsx'
import AddCreator from './pages/AddCreator.jsx'
import EditCreator from './pages/EditCreator.jsx'
import ViewCreator from './pages/ViewCreator.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="creators"   element={<ShowCreators />} />
          <Route path="add" element={<AddCreator />} />
          <Route path="edit/:id" element={<EditCreator />} />
          <Route path="view/:id" element={<ViewCreator />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
