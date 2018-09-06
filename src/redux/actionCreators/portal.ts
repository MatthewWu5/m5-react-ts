import { createAction } from 'redux-actions'
import { ACTIONS } from '../actionTypes'
import { requestPortalPackageJson } from '@/request/api'

export function getPortalPackageJsonData() {
  return async (dispatch: any) => {
    const res = await requestPortalPackageJson()
    dispatch({
      type: ACTIONS.SET_PORTAL_PACKAGE_JSON,
      payload: { packageJson: res.data },
    })
  }
}
