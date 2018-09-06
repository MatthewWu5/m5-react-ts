import contactsReducer, { contactInitState } from './contacts'
import { ACTIONS } from '../actionTypes'
test('Default test', () => {
  const id = 1
  const action = {
    type: ACTIONS.GET_CONTACTS,
    payload: id,
  }
  const resultState = contactsReducer(contactInitState, action)
  expect(resultState.get('test')).toEqual('filtered contacts')
  expect(resultState.get('items').toJS()).toEqual(
    contactInitState
      .get('items')
      .toJS()
      .filter((x: any) => x.id == id)
  )
})
