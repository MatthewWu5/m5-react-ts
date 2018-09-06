declare namespace IStore {
  interface IRoot extends Immutable.Map<string, any> {
    toJS(): {
      contact: contact
      portal: portal

      get(key: 'contact'): IContact
      get(key: 'portal'): IPortal
    }
  }

  interface IContact extends Immutable.Map<string, any> {
    toJS(): contact
  }
  interface contact {
    items: Contact[]
    test: string
  }
  interface IPortal extends Immutable.Map<string, any> {
    toJS(): portal
  }
  interface portal {
    title: string
    description: string
    packageJson: any
  }
}
