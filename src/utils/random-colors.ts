type HSL = [number, number, number]

function hexToHsl(hex: string): HSL {
  let r = parseInt(hex.slice(1, 3), 16) / 255
  let g = parseInt(hex.slice(3, 5), 16) / 255
  let b = parseInt(hex.slice(5, 7), 16) / 255

  let max = Math.max(r, g, b),
    min = Math.min(r, g, b)

  let h = 0 // Initialized to 0
  let s = 0 // Initialized to 0
  let l = (max + min) / 2

  if (max === min) {
    h = s = 0 // achromatic
  } else {
    let d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }

  return [h, s, l]
}

function hslToHex([h, s, l]: HSL): string {
  let r: number, g: number, b: number

  if (s === 0) {
    r = g = b = l // achromatic
  } else {
    function hue2rgb(p: number, q: number, t: number): number {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    let q = l < 0.5 ? l * (1 + s) : l + s - l * s
    let p = 2 * l - q
    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  return `#${Math.round(r * 255)
    .toString(16)
    .padStart(2, '0')}${Math.round(g * 255)
    .toString(16)
    .padStart(2, '0')}${Math.round(b * 255)
    .toString(16)
    .padStart(2, '0')}`
}

export function generateTriadicColors(hex: string): string[] {
  const [h, s, l] = hexToHsl(hex)

  // Generate triadic colors by adjusting the hue
  return [
    hslToHex([h, s, l]),
    hslToHex([(h + 1 / 3) % 1, s, l]),
    hslToHex([(h + 2 / 3) % 1, s, l]),
    hslToHex([(h + 1 / 4) % 1, s, l]),
    hslToHex([(h + 3 / 4) % 1, s, l]),
  ]
}

export const randomColor = () => {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
  return color
}
