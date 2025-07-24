import Card from './Card'
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
     <div className="bg-gradient-to-r from-[#ffe0f0] to-[#dbeafe] min-h-screen font-[Poppins] text-[#222] px-4 sm:px-8 md:px-12 lg:px-20">

  <header className="text-center py-16 sm:py-20 lg:py-24">
    <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-[#b388eb] mb-4 leading-tight">
      Moonwear 🌙
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-[#555] max-w-[600px] mx-auto mb-6 px-2 sm:px-0">
      Where comfy meets aesthetic. T-shirts & nightwear that vibe with your inner cool. Made for Gen-Z.
    </p>
    <button onClick={()=>navigate('/product')} className="bg-[#b388eb] text-white px-6 py-2 rounded-full text-sm sm:text-base hover:bg-[#9f6fe0] transition duration-300">
      Shop Collection
    </button>
  </header>

      <Card />

      <footer className="text-center py-12">
        <p className="text-sm text-[#777]">
          &copy; {new Date().getFullYear()} Moonwear. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home
