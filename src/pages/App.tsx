import * as React from 'react'
import TopBar from '@/components/TopBar'
import { connect } from 'react-redux'
import {
  getContacts,
  setContactsEmail,
  testAsync,
} from '@/redux/actionCreators/contacts'
import { Route, Switch, Redirect } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { replace, push } from 'react-router-redux'
import Join from '@/pages/Join'
import Login from '@/pages/Login'
import Main from '@/pages/Main'
import Portal from '@/pages/Portal'
import Profile from '@/pages/Profile'
import NotFound from '@/components/NotFound'
import Forbidden from '@/components/Forbidden'
import history from '@/redux/history'

import Stateless from '@/pages/Stateless'

interface PassProps {}

const mapStateToProps = (state: IStore.IRoot) => ({
  contacts: state.getIn(['contact', 'items']),
  test: state.getIn(['contact', 'test']),
})

const mapDispatchToProps = {
  getContacts,
  setContactsEmail,
  testAsync,
  replace,
  push,
}

type Props = PassProps & {
  contacts: any
  test: string
} & typeof mapDispatchToProps

interface State {}

class App extends React.Component<Props & RouteComponentProps<{}>, State> {
  onClick = () => {
    this.props.setContactsEmail({ id: 1, email: '1@changed.com' })
    this.props.testAsync()
  }

  componentDidMount() {
    this.props.getContacts(1)
  }

  renderProfile = (props: RouteComponentProps<null>) => {
    return <Profile {...props} />
  }

  public render() {
    return (
      <div className="wrapper">
        <TopBar />
        <Switch>
          <Route path="/join" component={Join} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/portal" component={Portal} />
          <Route path="/profile/:id&:name" component={this.renderProfile} />
          <Route path="/404" component={NotFound} />
          <Route path="/403" component={Forbidden} />
          <Redirect from="/admin" to="/" />
        </Switch>
        {/* <button onClick={this.onClick}>update email</button>
        <div>{this.props.test}</div> */}
        <Stateless />
        <div
          onClick={() => {
            // this.props.history.push('/join')
            this.props.push('/join')
            // history.push('/join')
          }}
        >
          to join
        </div>
        <div
          onClick={() => {
            // this.props.history.replace('/portal')
            this.props.replace('/portal')
            // history.replace('/portal')
          }}
        >
          to portal
        </div>
        <div
          onClick={() => {
            // this.props.history.push('/profile')
            this.props.push('/profile')
            // history.push('/profile')
          }}
        >
          to profile
        </div>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
