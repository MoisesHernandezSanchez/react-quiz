import './Result.css'
import { Button } from '@mui/material'
import React from 'react'

export default function Result({ score }) {
  console.log(`Score in Result: ${score}`)
  return (
    <div className='result'>
      <span className='title'>Final Score: {score}</span>
      <Button
        style={{ alignSelf: 'center', marginTop: 20 }}
        variant='contained'
        color='secondary'
        size='large'
        href='/'
      >
        Go back Home
      </Button>
    </div>
  )
}
