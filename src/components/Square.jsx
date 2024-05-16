import React from 'react'

export const Square = ({value = "", callback = () => {}}) =>
{
  return <button onClick={callback} className='square-button'><span className='square-value'>{value}</span></button>
  
}
