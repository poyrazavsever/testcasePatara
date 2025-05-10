import React from 'react'
import Image from 'next/image'

const Orbit = () => {
  return (
    <div className="relative w-64 h-64 mx-auto mb-6">
    
        {/* Orbit circles */}
        <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full border border-gray-800 absolute" />
                <div className="w-10/12 h-10/12 rounded-full border border-gray-700 absolute" />
                <div className="w-8/12 h-8/12 rounded-full border border-gray-700 absolute" />
                <div className="w-6/12 h-6/12 rounded-full border border-gray-700 bg-neutral-950 absolute" />
                <div className="w-32 h-32 rounded-full bg-sky-300 blur-3xl  opacity-70 absolute" />
              </div>
    
              {/* Center logo */}
              <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 z-10">
                <Image
                  src="/design.png"
                  alt="Patara Logo"
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
    
              {/* Orbiting initials */}
              {[
                { letter: 'P', style: '-top-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-red-500 via-red-300 to-white' },
                { letter: 'M', style: 'top-4 -right-1 bg-gradient-to-bl from-yellow-300 via-yellow-200 to-white' },
                { letter: 'A', style: 'top-1/2 -right-7 -translate-y-1/2 bg-gradient-to-br  from-red-300 via-blue-200 to-white' },
                { letter: 'W', style: 'bottom-2 right-0 bg-gradient-to-bl from-green-300 via-blue-200 to-white' },
                { letter: 'C', style: '-bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-b from-purple-300 to-red-400' }, 
                { letter: 'G', style: 'bottom-2 left-0 bg-gradient-to-b from-purple-300 to-yellow-400' },
                { letter: 'S', style: 'top-1/2 -left-8 -translate-y-1/2 bg-gradient-to-bl from-purple-400 to-sky-300' },
                { letter: 'F', style: 'top-4 -left-1 bg-gradient-to-bl from-yellow-300 to-emerald-300' },
              ].map(({ letter, style }, index) => (
                <div
                  key={index}
                  className={`absolute ${style} text-3xl w-14 h-14  text-[#181818] font-medium text-center leading-10 rounded-full  shadow-md flex items-center justify-center`}
                >
                  {letter}
                </div>
              ))}
    
    </div>
  )
}

export default Orbit