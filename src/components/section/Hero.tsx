import paw from '../../assets/Group-1.svg'
import product from '../../assets/Group 11.svg'
import { ArrowRight } from 'lucide-react';
import tick from '../../assets/bitcoin-icons_check-filled.png'
const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">

      {/* 🐾 MANY PAWS */}
      <img src={paw} className="absolute top-20 left-10 w-32 opacity-10" />
      <img src={paw} className="absolute top-40 right-20 w-24 opacity-10 rotate-12" />
      <img src={paw} className="absolute bottom-40 left-20 w-40 opacity-10 rotate-6" />
      <img src={paw} className="absolute top-1/2 right-10 w-28 opacity-10 -rotate-12" />

      {/* 🎯 MAIN GRID */}
<div className="relative z-10 w-full h-full flex items-center justify-center">

  {/* 🟢 CENTER PRODUCT */}
    <div className="relative flex flex-col items-center text-center">

        <h1 className="text-white mt-3 font-[Talina] text-5xl md:text-6xl lg:text-7xl font-semi-bold whitespace-nowrap text-shadow-lg">
        Tiny Chew. Big Cheer.
        </h1>

        <p className="text-white/80 font-[Spinnaker] mt-4 text-lg max-w-xl">
        Prebiotic chew sticks that keep your dog’s gut healthy and digestion smooth.
        </p>

        {/* PRODUCT */}
        <img
        src={product}
        className="w-[320px] md:w-[420px] lg:w-[500px] drop-shadow-2xl"
        alt=""
        />

    {/* 🔵 LEFT TEXT (relative to product) */}
        <div className="absolute left-[-120px] bottom-[130px] w-[220px] text-2xl font-[Cookie] text-left text-[#4F815E]">
        <div className='relative'> 
            <span>
                because your dog’s tummy deserves better.
            </span>
            <div className='absolute right-[-90px] bottom-[50px]'>
                <svg width="153" height="89" viewBox="0 0 153 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.2797 53.9654L15.0517 47.5627M3.2797 53.9654L1.49657 39.8401M3.2797 53.9654C19.7058 15.1125 66.5983 -14.4403 100.438 10.9934C134.278 36.4271 101.72 85.5633 85.8583 71.7868C69.9944 58.0109 100.934 28.8681 120.706 33.7038C140.478 38.5398 141.963 57.2327 136.108 72.4394C130.253 87.646 118.059 89.9981 116.812 82.236C115.564 74.4719 136.881 68.3159 150.757 86.5422" stroke="#4F815E" stroke-width="3" stroke-miterlimit="16" stroke-linecap="round"/>
                </svg>
            </div>
        </div>

        </div>

    {/* 🟣 RIGHT CTA */}
        <div className="absolute right-[-60px] bottom-[100px] flex flex-col items-start gap-3">

        <div className="flex items-center gap-2 bg-[#4F815E]  px-6 py-3 rounded-xl font-extrabold">
            <button className="text-white font-[Talina] tracking-wider text-[26px] cursor-pointer">
            Buy chewcheer
            </button>
            <ArrowRight color="#fff" />
        </div>

        <ul className="text-left text-[#4F815E] font-[Spinnaker]">
            <li><img src={tick} className="inline mr-2"/>Vet friendly</li>
            <li><img src={tick} className="inline mr-2"/>Natural ingredients</li>
            <li><img src={tick} className="inline mr-2"/>Loved by dogs</li>
        </ul>

        </div>

    </div>
</div>
    </section>
  )
}

export default Hero