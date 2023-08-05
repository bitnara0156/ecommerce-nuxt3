export default function handleInput(left: number, right: number, minimalRange: number, inputSide: 'left' | 'right'): { left: number, right: number } {
    if (+right - +left < minimalRange) {
      if(inputSide === 'left') {
        left = right - minimalRange
      } else {
        right = left + minimalRange
      }
    }
    return { left, right }
  }