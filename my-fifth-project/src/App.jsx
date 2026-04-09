import React, { useState } from 'react'

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <h1>Welcome</h1> : <h1>Sign in</h1>}

      <button onClick={() => setLoggedIn(!isLoggedIn)}>
        Toggle
      </button>
    </>
  ) 
}

export default App