import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './reducers/store'
import RootNavigator from './navigation/RootNavigator'
import { Background } from './components/Background'

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
        <Background />
      </PersistGate>
    </Provider>
  )
}

export default App
