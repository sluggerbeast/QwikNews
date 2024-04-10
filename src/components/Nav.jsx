import React from 'react'

function Nav({onTaskBarToggle}) {
    let showTaskBar = true
  return (
    <div
        style={{ display: onTaskBarToggle ? "block" : "none" }}
        className="text-center p-3 bg-slate-100  fixed w-full mb-2 shadow z-30"
      >
        <ul className="flex justify-between ">
          <li className="text-blue-500">Options</li>
          <li className="text-[1.1rem] font-normal">QwikNews</li>
          <li>
            <i class="fa fa-refresh text-blue-500" />
            {/* <i class="fa fa-arrow-up text-blue-500" /> */}

          </li>
        </ul>
      </div>
  )
}

export default Nav