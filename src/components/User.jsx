import React from 'react'

const User = ({name,email,children}) => {
    
  return (
    <div>
    <p>name=deepu</p>
    <p>email=deepu@gmail.com</p>
    <p>mobile=1234567890</p>
    {children}
    </div>
  )
}
export default User