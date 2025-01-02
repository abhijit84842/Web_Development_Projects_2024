import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
        <h1 className='text-5xl flex justify-center mt-10'>Admin Panel</h1>
        <div className='flex justify-center gap-20 mt-20'>
          <Link className='text-2xl text-green-500' href={"/admin/createadminac"}>Create Admin Ac</Link>
          <Link className='text-2xl text-red-500' href={"/admin/adminlogin"}>Admin Login</Link>
        </div>

        
    </div>
  )
}

export default page