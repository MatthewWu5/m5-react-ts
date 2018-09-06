import { handleActions, ReducerMap } from 'redux-actions'
import { ACTIONS } from '../actionTypes'
import { requestTestData } from '@/request/api'
import { fromJS } from 'immutable'

const portalInitState: IStore.IPortal = fromJS({
  title: 'Built for developers',
  description: 'GitHub is a development platform inspired by the way you work',
})

const actionHandle: ReducerMap<IStore.IPortal, any> = {
  [ACTIONS.SET_PORTAL_PACKAGE_JSON]: (
    state: IStore.IPortal,
    action: ReduxActions.Action<IStore.portal>
  ) => {
    return state.set('packageJson', fromJS(action.payload.packageJson))
  },
}

export default handleActions(actionHandle, portalInitState)
