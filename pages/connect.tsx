import React from 'react'
import { Button } from '@/components/ui/button'
import { Forward } from 'lucide-react'
import Orbit from '@/components/Orbit'
import Earnings from '@/components/Earnings'

const connect = () => {
  return (
    <div className='px-4'>

        <div className='flex items-center justify-between'>

            {/* Sol taraf */}
            <div className='flex items-start w-fit gap-12 mt-10 bg-[#181818] rounded-2xl min-h-[400px]'>

                <div className='flex flex-col justify-between h-full min-h-[370px] p-8 rounded-lg'>

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

            {/* Sağ taraf */}
            <div className='flex flex-col justify-between gap-4 mt-10 min-h-[400px]'>
                {/* Total Earned Fee Card */}
                <div className='bg-[#181818] p-4 rounded-xl flex items-center gap-4'>
                    <div className='bg-blue-500/10 p-3 rounded-lg'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2L19 5.5V10C19 15.5228 15.5228 19 10 19H5.5L2 12L12 2Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Total Earned Fee</p>
                        <p className='text-xl font-semibold text-white'>$1,000.00</p>
                    </div>
                </div>

                {/* Unclaimed Fee Card */}
                <div className='bg-[#181818] p-4 rounded-xl flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <div className='bg-blue-500/10 p-3 rounded-lg'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8V12M12 16H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div>
                            <p className='text-sm text-neutral-500'>Unclaimed Fee</p>
                            <p className='text-xl font-semibold text-white'>$500.00</p>
                        </div>
                    </div>
                    <Button className='bg-blue-600 hover:bg-blue-700 text-sm px-6'>
                        Claim
                    </Button>
                </div>

                {/* Total Referral Points Card */}
                <div className='bg-[#181818] p-4 rounded-xl flex items-center gap-4'>
                    <div className='bg-blue-500/10 p-3 rounded-lg'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 12V8H6C4.89543 8 4 7.10457 4 6V18C4 19.1046 4.89543 20 6 20H20V16" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Total Referral Points</p>
                        <p className='text-xl font-semibold text-white'>1289</p>
                    </div>
                </div>

                {/* Referrals Card */}
                <div className='bg-[#181818] p-4 rounded-xl flex items-center gap-4'>
                    <div className='bg-blue-500/10 p-3 rounded-lg'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#3B82F6" strokeWidth="1.5"/>
                            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#3B82F6" strokeWidth="1.5"/>
                        </svg>
                    </div>
                    <div>
                        <p className='text-sm text-neutral-500'>Referrals</p>
                        <p className='text-xl font-semibold text-white'>34</p>
                    </div>
                </div>
            </div>

        </div>


        <Earnings />

    </div>
  )
}

export default connect