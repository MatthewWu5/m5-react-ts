import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Root from './Root'
import registerServiceWorker from './registerServiceWorker'
import './antd-style'
import './styles/global-style.scss'
import { Provider } from 'react-redux'
// import { Router } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import store from '@/redux/store'
import globalStore from '@/globalStore'
import history from '@/redux/history'

globalStore.setStore(store)

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter dispatch action '@@router/LOCATION_CHANGE', but Router cannot do it */}
    <ConnectedRouter history={history}>
      <Root />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
