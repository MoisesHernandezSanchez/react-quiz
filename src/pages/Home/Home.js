import { TextField, MenuItem, Button } from '@mui/material'
import Categories from '../../Data/Categories'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

export default function Home({ name, setName, fetchQuestions }) {
  const [category, setCategory] = useState('')
  const [difficulty, setDifficulty] = useState('')
  const [error, setError] = useState(false)

  const navigate = useNavigate()

  function handleSubmit() {
    if (!category || !difficulty || !name) {
      setError(true)
      return
    } else {
      setError(false)
      fetchQuestions(category, difficulty)
      navigate('/quiz')
    }
  }

  return (
    <div className='content'>
      <div className='settings'>
        <span style={{ fontSize: 30 }}>Quiz Settings</span>

        <div className='settings-select'>
          {error && <ErrorMessage>Please Fill out all Fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label='Enter your Name'
            variant='outlined'
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
            label='Select Category'
            variant='outlined'
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            select
            label='Select Difficulty'
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant='outlined'
            style={{ marginBottom: 30 }}
          >
            <MenuItem key='Easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard
            </MenuItem>
          </TextField>

          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>

      <img src='/quiz.svg' className='banner' alt='Quiz Image'></img>
    </div>
  )
}
