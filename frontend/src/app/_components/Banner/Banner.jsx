import React from 'react'

const Banner = () => {
  return (
    <>
        <div class="relative isolate justify-center flex items-center gap-x-6 overflow-hidden bg-gray-900 px-6 py-2.5 sm:px-3.5">
          <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
            <p class="text-xs text-center leading-5 font-bold text-white">
              <strong class="font-semibold">MyCarz</strong><svg viewBox="0 0 2 2" class="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true"><circle cx="1" cy="1" r="1" /></svg>121 Boulevard Gambetta à Roubaix
            </p>
          </div>
        </div>
    </>
  )
}

export default Banner