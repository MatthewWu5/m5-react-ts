import * as React from 'react'
import { connect } from 'react-redux'
import { PortalContext } from '@/pages/context'
import classNames from 'classnames'

const styles = require('./index.scss')

interface PassProps {}

const mapStateToProps = (state: IStore.IRoot) => ({})

const mapDispatchToProps = {}

type Props = PassProps & {} & typeof mapDispatchToProps

interface State {}

class SignUp extends React.Component<Props, State> {
  public render() {
    return (
      <div className="wrapper">
        <PortalContext.Consumer>
          {({ loading, signUpTrigger }) => (
            <div className={classNames({ [styles.loadingMask]: loading })}>
              Username
              <input type="text" />
              <button onClick={signUpTrigger('SignUp')}>Sign Up</button>
              <button onClick={signUpTrigger('Back')}>Back</button>
            </div>
          )}
        </PortalContext.Consumer>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)
