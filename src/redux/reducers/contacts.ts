import { handleActions, ReducerMap } from 'redux-actions'
import { ACTIONS } from '../actionTypes'
// import { requestTestData } from '@/request/api'
import { fromJS } from 'immutable'

const All_CONTACTS: Contact[] = [
  {
    id: '1',
    name: {
      first: 'John',
      last: 'Doe',
    },
    phone: '555',
    email: 'john@gmail.com',
  },
  {
    id: '2',
    name: {
      first: 'Bruce',
      last: 'Wayne',
    },
    phone: '777',
    email: 'bruce.wayne@gmail.com',
  },
  {
    id: '3',
    name: {
      first: 'Bruce',
      last: 'Wayne',
    },
    phone: '777',
    email: 'bruce.wayne@gmail.com',
  },
]

export const contactInitState: IStore.IContact = fromJS({
  items: All_CONTACTS,
  test: 'default test',
})

const actionHandle: ReducerMap<IStore.IContact, any> = {
  [ACTIONS.GET_CONTACTS]: (
    state: IStore.IContact,
    action: ReduxActions.Action<number>
  ) => {
    return state
      .set('test', 'filtered contacts')
      .set(
        'items',
        fromJS(All_CONTACTS.filter(x => x.id == action.payload.toString()))
      )
  },
  [ACTIONS.UPDATE_CONTACTS]: (
    state: IStore.IContact,
    action: ReduxActions.Action<any>
  ) => {
    return state.set('items', fromJS(action.payload.items))
  },
  [ACTIONS.SET_CONTACTS_EMAIL]: (
    state: IStore.IContact,
    action: ReduxActions.Action<{ id: number; email: string }>
  ) => {
    return state.set('test', action.payload.email)
  },
  [ACTIONS.TEST_ASYNC]: (
    state: IStore.IContact,
    action: ReduxActions.Action<any>
  ) => {
    // asyncOperation()
    return state.set('test', 'async test')
  },
}

// async function asyncOperation() {
//   const res = await requestTestData()
//   console.log(res.data)
// }

export default handleActions(actionHandle, contactInitState)
