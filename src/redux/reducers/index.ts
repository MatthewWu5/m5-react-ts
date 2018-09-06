// ensure the mapped state is immutable => const mapStateToProps = (state: IStore.IRoot) => { ensure root state is immutable }
// import { combineReducers } from 'redux'
import { combineReducers } from 'redux-immutable'
import contact from './contacts'
import portal from './portal'
import { LOCATION_CHANGE } from 'react-router-redux'
import { fromJS } from 'immutable'

let initState = fromJS({ location: undefined })

let routing = (
  state = initState,
  action: { payload: object; type: String }
) => {
  if (action.type === LOCATION_CHANGE) {
    return state.merge({ location: action.payload })
  }
  return state
}

const reducers = {
  contact,
  portal,
  routing,
}

export default combineReducers(reducers)
