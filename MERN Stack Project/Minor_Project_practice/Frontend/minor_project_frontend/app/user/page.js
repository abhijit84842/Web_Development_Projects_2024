import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-5xl flex justify-center mt-10 '>User Panel</h1>
        <div className='flex justify-center gap-20 text-2xl mt-20'>
          <Link href={"/user/createuserac"}>Create User Ac</Link>
          <Link href={"/user/userlogin"}>User Login</Link>
        </div>

    </div>
  )
}

export default page