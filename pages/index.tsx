'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Orbit from '@/components/Orbit'

const circles = [
  { letter: 'P', position: 'top-24 left-48' },
  { letter: 'S', position: 'top-72 left-36' },
  { letter: 'F', position: 'bottom-64 left-56' },
  { letter: 'W', position: 'top-1/2 right-20' },
  { letter: 'A', position: 'bottom-20 right-36' },
  { letter: 'C', position: 'top-72 right-64' },
  { letter: 'G', position: 'bottom-28 left-24' },
  { letter: 'M', position: 'top-28 right-12' },
]

export default function Home() {

  
  return (
    <main className="min-h-screen flex items-center justify-center pb-16 bg-[#0e0e0e]">

      {circles.map((circle, index) => (
        <div
          key={index}
          className={`fixed ${circle.position} w-[60px] h-[60px] rounded-full bg-gradient-to-r from-neutral-900 to-neutral-800 flex items-center justify-center text-neutral-500 font-bold text-4xl z-10 blur-xs`}
        >
          {circle.letter}
        </div>
      ))}

      <div className="bg-[#181818] border border-[#282828] text-white rounded-2xl px-6 py-16 w-[464px] text-center shadow-lg flex flex-col items-center gap-10">
        
        {/* Orbit container */}
        <Orbit />

        <div className='flex flex-col items-center gap-5'>
          {/* Text content */}
          <div className='flex flex-col items-center gap-3'>
            <h2 className="text-2xl font-semibold mb-1">Refer friends and earn with Patara!</h2>
            <p className="text-sm text-gray-400 mb-4">
              Invite your friends to Patara and earn a share of their on-chain rewards forever!
            </p>
          </div>

          {/* Button */}
          <Button className="bg-blue-600 hover:bg-blue-700 text-sm">Connect/Sign in</Button>
        </div>
        
      </div>

    </main>

  )
}
