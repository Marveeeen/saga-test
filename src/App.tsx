import { useEffect } from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux'

import { store } from './lib/store';

function TodoApp() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state);

  useEffect(() => {
    dispatch({ type: "TODOS_FETCH_REQUESTED" });
  }, [])

  return <div className="App">{JSON.stringify(todos)}</div>
}

function App() {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  )
}

export default App
