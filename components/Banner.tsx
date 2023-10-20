import { useEffect, useState } from 'react'
import { Banner as BannerType } from '@/types'

interface BannerProps {
  data?: BannerType
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className='rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover'>
        <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
          {data?.label ? (
            <div className='font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs'>
              {data?.label}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Banner
