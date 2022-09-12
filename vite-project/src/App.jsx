import { useState } from 'react'
import Header from "./components/Header.jsx"
import Main from "./components/Main.jsx"

export default function Container() {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

