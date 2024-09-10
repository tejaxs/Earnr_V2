

function Navbar() {
  return (
    <div className=' flex justify-between md:px-24 px-6 py-6 items-center'>
        <img className="md:w-[218px] w-[140px] md:h-[62px] h-[40px]" src="/assets/earnr_white@4x 1.png" alt="" />
        <button className="border-2 z-20 border-[#FFE3E3] rounded bg-transparent md:px-10 px-2 md:py-3 py-2 text-[#FFE3E3] flex justify-center items-center md:text-lg text-sm">Coming soon...</button>
        <div className="absolute right-0 opacity-20 z-0">
          <img src="/assets/earnr_5@4x.png" alt="" className="w-[670px] h-[505px] z-0"/>
        </div>
    </div>
  )
}

export default Navbar