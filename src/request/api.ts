import request from './index'
import { AxiosPromise } from 'axios'

export const requestLoginUrl = 'http://localhost:8081/react-ts/login'
export const requestContactsUrl =
  'http://localhost:8081/react-ts/contacts?phone='

export const requestTestData = (): AxiosPromise<any> =>
  request.get('https://www.baidu.com/')

export const requestPortalPackageJson = (): AxiosPromise<any> =>
  request.get('http://localhost:8081/test')

export const requestPreLoginInfo = (): AxiosPromise<PreLoginInfo> =>
  request.get('http://localhost:8081/react-ts/preLogin')

export const requestLogin = (
  username: string,
  password: string
): AxiosPromise<any> => request.post(requestLoginUrl)

export const requestContacts = (phoneNumber: string): AxiosPromise<any> =>
  request.get(requestContactsUrl + phoneNumber)
