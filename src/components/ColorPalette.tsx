import React, { useState } from 'react'
import ColorCardClient from 'components/ColorCard' // Make sure to import the client-side component

interface ColorPaletteProps {
  initialIndex: number
  palettes: { colors: string[] }[] // or whatever the correct type is
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ initialIndex, palettes }) => {
  const [paletteIndex, setPaletteIndex] = useState(initialIndex)

  const changePalette = () => {
    const newIndex = Math.floor(Math.random() * palettes.length)
    setPaletteIndex(newIndex)
  }

  return (
    <div>
      <ul
        role='list'
        className='flex h-36 justify-between md:h-auto md:flex-wrap md:justify-center'
      >
        {palettes[paletteIndex].colors.map((color, index) => (
          <ColorCardClient hex={color} position={index + 1} key={color} />
        ))}
      </ul>

      <div className='mt-14 flex justify-center'>
        <div className='group relative inline-flex'>
          <div className='animate-tilt duration-5000 absolute -inset-px rounded-xl bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] opacity-70 blur-lg transition-all group-hover:-inset-1 group-hover:opacity-100 group-hover:duration-200'></div>
          <button
            onClick={changePalette}
            className='relative inline-flex items-center justify-center rounded-xl bg-gray-900 px-8 py-4 text-lg font-bold text-purple-2 transition-all duration-200 focus:outline-none focus:ring-gray-900 active:ring-2 active:ring-offset-2'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='mr-4 h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
            Change Palette
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
              className='ml-4 h-5 w-5'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ColorPalette
