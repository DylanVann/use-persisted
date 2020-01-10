import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { InputExample } from './InputExample'
import { CounterExample } from './CounterExample'

const Pre: React.FC<{}> = props => (
  <pre style={{ display: 'inline' }} {...props} />
)

function App() {
  return (
    <>
      <h1>
        <Pre>use-persisted</Pre>
      </h1>
      <p>Try using the input or counter and refreshing the page.</p>
      <p>
        You can also open your browser devtools to inspect the values in{' '}
        <Pre>localStorage</Pre>
      </p>
      <h2>
        Input Example (<Pre>createUseStatePersisted</Pre>)
      </h2>
      <InputExample />
      <h2>
        Counter Example (<Pre>createUseReducerPersisted</Pre>)
      </h2>
      <CounterExample />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
