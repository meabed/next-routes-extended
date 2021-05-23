import * as React from 'react'
import routes from './basic'

const { Link, Router } = routes

export function App () {
  const handleClick = () => {
    Router.pushRoute('settings', { id: '123' }, { shallow: false })
  }
  return (
    <div>
      <button onClick={() => handleClick()}>Test router</button>
      <Link route='settings' params={{ id: '123' }} passHref>
        <a>Link test</a>
      </Link>
    </div>
  )
}
