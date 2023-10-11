import React from 'react'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

interface ColorCardClientProps {
  hex: string
  position: number
}

const ColorCardClient: React.FC<ColorCardClientProps> = ({ hex, position }) => {
  const copyToClipboard = async (hex: string, textColor: string) => {
    try {
      await navigator.clipboard.writeText(hex)
      Toastify({
        text: 'copied!',
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
        style: {
          background: hex,
          color: textColor,
        },
      }).showToast()
    } catch (err) {
      Toastify({
        text: `Failed to copy hex value`,
        duration: 2000,
        gravity: 'bottom',
        position: 'right',
      }).showToast()
    }
  }

  const determineTextColor = (hexColor: string) => {
    const r = parseInt(hexColor.substring(1, 3), 16)
    const g = parseInt(hexColor.substring(3, 5), 16)
    const b = parseInt(hexColor.substring(5, 7), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

    return {
      className: luminance > 0.5 ? 'text-black' : 'text-white',
      hex: luminance > 0.5 ? '#000' : '#fff',
    }
  }

  const textColor = determineTextColor(hex)

  const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault()
    copyToClipboard(hex, textColor.hex)
  }

  return (
    <li
      onClick={handleClick}
      data-position={position}
      className='color-card flex flex-1 cursor-pointer list-none items-center justify-center p-4 tracking-wide md:p-10'
      style={{
        backgroundColor: hex,
        flex: '1 1 0%',
        transition: 'flex 0.5s cubic-bezier(0.075, 0.82, 0.165, 1)',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.flex = '3')}
      onMouseLeave={(e) => (e.currentTarget.style.flex = '1 1 0%')}
    >
      <p className={`font-mono select-none text-sm ${textColor.className}`}>{hex}</p>
    </li>
  )
}
export default ColorCardClient
