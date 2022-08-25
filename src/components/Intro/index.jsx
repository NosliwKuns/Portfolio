import { Suspense, cloneElement, useEffect, useState } from 'react'

function Ready({ setReady }) {
  useEffect(() => () => void setReady(true), [])
  return null
}

const Intro = ({ children }) => {
  const [clicked, setClicked] = useState(false)
  const [ready, setReady] = useState(false)
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      {children}
    </Suspense>
  )
};

export default Intro;

