import React from 'react'
import { useCollection } from '../Hooks/useCollection'

const UserList = () => {
      const { document  } = useCollection('users')
  return (
    <div className='mt-12'>
        <div className='flex gap-5 items-center flex-wrap'>
            {document ? document.map((user)=>(
                <img src={user.image} alt={user.name} className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full" key={user.id}/>
            )): <p>Loading</p> }
        </div>
    </div>
  )
}

export default UserList