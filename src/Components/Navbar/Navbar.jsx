import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <div>
        <div className="navbar bg-base-100 container mx-auto flex items-center justify-center  ">
  <div className="flex-1">
    
    <a className="btn btn-link text-xl w-60 h-0 flex items-center justify-center ">
        <NavLink to={'/'}>
        <img src="https://i.postimg.cc/RVGgWdtM/schb.gif" alt="schbang" />

        </NavLink>
        
    </a>
  </div>
  <div className="flex-none ">
    <ul className="menu menu-horizontal px-1 font-semibold">
      <li><a>Work</a></li>
      <li>
        <details>
          <summary>Solutions</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>About</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Resources</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>

      
      <li>
        <NavLink to={'/careers'}>
        Careers
        </NavLink>
      </li>

      <button className="btn-ghost rounded-full px-5 py-3   border-[black] bg-black  text-white ">
            
            Contact Us →
            
        </button>
        
        
       

    </ul>
  </div>
</div>
    </div>
  )
}

export default Navbar