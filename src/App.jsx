import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
      <div className="container">
        <div className='flex justify-center'>
          <div class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
            <div class="md:flex">
              <div class="p-8">
                <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                  Incredible accommodation for your team
                </a>
                <p class="mt-2 text-gray-500">
                  Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                  places to do just that.
                </p>
              </div>
            </div>
          </div>
          <div class="mx-auto max-w-md overflow-hidden rounded-xl border-4 border-teal-500 shadow-md md:max-w-2xl">
            <div class="md:flex">
              <div class="p-8">
                <div class="text-sm font-semibold tracking-wide text-indigo-500 uppercase">Company retreats</div>
                <a href="#" class="mt-1 block text-lg leading-tight font-medium text-black hover:underline">
                  Incredible accommodation for your team
                </a>
                <p class="mt-2 text-gray-500">
                  Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of
                  places to do just that.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
