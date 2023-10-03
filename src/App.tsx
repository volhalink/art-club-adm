import { useAppDispatch, useAppSelector } from './app/hooks'
import { amountAdded } from './features/learning-path/learning-path-slice'
import { useFetchLearningPathesQuery } from './features/learning-path/learning-path-api-slice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react'

function App() {
  const count = useAppSelector(state => state.learningPath.value);
  const dispatch = useAppDispatch();
  const onClick = () => {
    dispatch(amountAdded(5));
  }
  const [limit, setLimit] = useState(10);
  const { data = [], isFetching } = useFetchLearningPathesQuery(limit);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <p>Number of learning pathes fethched: {data.length}</p>
        {data.map(lp => <div>{lp.id} - {lp.languages.join(' | ')}</div>)}
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
