import React from 'react'

const Layout = (props) => {
  return (
    <main className="w-full" id="main">
        <div className="w-full" id="main-content">
            {props.children}
        </div>
    </main>
  )
}

export default Layout
