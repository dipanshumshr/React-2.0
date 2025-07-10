import { Suspense, useState } from 'react'
import './App.css'
import Card from './components/Card';
import Loading  from './components/Loading';

function App() {
  return (
    <> 
          <h1>Something blah blah</h1>
          <Suspense fallback={<Loading/>}>
              <Card/> 
          </Suspense>       
    </>
  )
}

export default App
