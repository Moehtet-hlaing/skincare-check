import React from 'react'

const Button = ({slot,path}) => {
  return (
    <a
          href={path}
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-full border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-700 focus:z-10 focus:ring-4 focus:ring-neutral-100 "
        >
          {slot}
        </a>
  )
}

export default Button