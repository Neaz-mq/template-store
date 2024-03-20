const NavBar = () => {
    return (
        <div>
            <div className="navbar bg-[#EDEEF7] py-7">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0}  className="lg:hidden ml-7">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content -mt-16 z-[1] p-8 leading-8 shadow bg-base-100 w-52 text-center -ml-2 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] font-semibold">
      <a href="/" className="text-xl mt-10 ml-4 mr-1 mb-8"><img src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg" alt="" /></a>
      
      <a>Template</a> 
      <a>Company</a>
      <a>Contact Us</a>
     
      </ul>
    </div>
    <a href="/" className="text-xl ml-20 mr-1 lg:block hidden"><img src="https://prographr.vercel.app/_next/static/media/logo.426fb6b7.svg" alt="" /></a>
    <a href="/" className="text-xl ml-4 mr-1 block lg:hidden"><img src="https://prographr.vercel.app/_next/static/media/icon.87854914.svg" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex mr-36 -ml-14">
    <ul className="menu text-base menu-horizontal px-2 lg:flex flex-row gap-10 font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#1e1c27] font-semibold">
     <a>Template</a> 
      <a>Company</a>
      <a>Contact Us</a>
    </ul>
  </div>

<div className="navbar-end gap-3 lg:gap-0">
  <button className="btn btn-sm bg-transparent  capitalize hover:bg-[#C8C5F0] rounded-full font-['__gellix_0bf537, __gellix_Fallback_0bf537'] text-[#241e2f] gap-4 shadow-none px-7    hover:bg-primary/30 !border-[#5D4987] lg:mr-14 ml-2 -mr-2 lg:-ml-7"><span>Sign in</span> </button>

  <button className="btn  btn-sm hover:bg-[#7666E3] bg-[#6658C5] font-['__gellix_0bf537, __gellix_Fallback_0bf537'] capitalize text-white rounded-full gap-4 px-6 py-4 lg:mr-28 lg:-ml-9"><span className="-mt-2">Sign up</span></button>
  </div>
</div>
</div>
       
    );
};

export default NavBar;