import * as React from 'react'

export const PortalContext = React.createContext({
  loading: false,
  signUpTrigger: (type: string) => () => {}
})
