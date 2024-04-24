'use client'

// import storeRedux, { persistor } from '@/Redux/store'
import storeRedux from '@/Redux/store'
import { Provider } from 'react-redux'
// import { PersistGate } from 'redux-persist/integration/react'

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={storeRedux}>
      {/* <PersistGate persistor={persistor} /> */}
      {children}
    </Provider>
  )
}

export default ReduxProvider
