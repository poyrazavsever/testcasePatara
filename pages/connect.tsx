import React from 'react'
import { Button } from '@/components/ui/button'
import { Forward } from 'lucide-react'
import Orbit from '@/components/Orbit'

const connect = () => {
  return (
    <div className='px-4'>

        <div className='flex items-start w-fit gap-12 mt-10 bg-[#181818] rounded-2xl min-h-[400px]'>

            <div className='flex flex-col justify-between h-full min-h-[400px] p-8 rounded-lg'>

                <div>
                    <h2 className='text-[32px] font-medium text-white'>Refer and Earn</h2>
                    <p className='text-neutral-600'>Invite your friends to Patara and earn a share of their on-chain rewards forever!</p>
                </div>

                <div className='flex flex-col gap-4'>  

                    <div className='w-full p-4 bg-[#282828] rounded-lg'>
                        <p className='text-sm text-neutral-500 mb-2'>Your Referral Link</p>
                        <p className='font-medium text-neutral-300 font-mono break-all'>
                            0x0e0Fcb520F76f3eAC0Aa764De4B97C53Eb366158
                        </p>
                    </div>

                    <div className='flex items-center gap-4 w-full'>
                        <Button className='bg-blue-700 hover:bg-blue-600 transition-all duration-200 w-1/2'>Copy Link</Button>

                        <Button className='text-neutral-400 bg-neutral-700 hover:bg-neutral-600 transition-all duration-200 w-1/2'>       
                            <Forward className='mr-2' />
                            Share
                        </Button>
                    </div>

                </div>
            </div>

            <div className='py-14 pl-8 pr-16'>

                <Orbit />
                
            </div>

        </div>

    </div>
  )
}

export default connect