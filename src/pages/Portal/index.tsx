import * as React from 'react'
import { connect } from 'react-redux'
import { getPortalPackageJsonData } from '@/redux/actionCreators/portal'
import SignUp from './SignUp'
import { PortalContext } from '@/pages/context'

const styles = require('./index.scss')

interface PassProps {}

const mapStateToProps = (state: IStore.IRoot) => ({
  packageJson: state.getIn(['portal', 'packageJson']),
})

const mapDispatchToProps = {
  getPortalPackageJsonData,
}

type Props = PassProps & {
  packageJson: any
} & typeof mapDispatchToProps

interface State {
  loading: boolean
}

class Portal extends React.Component<Props, State> {
  state: State = {
    loading: false,
  }
  signUpTrigger = (type: string) => () => {
    this.setState({
      loading: type == 'SignUp',
    })
    this.props.getPortalPackageJsonData()
  }
  public render() {
    const jsonData = this.props.packageJson && this.props.packageJson.toJS()
    console.log(jsonData, this.props.packageJson)
    return (
      <div className="wrapper">
        Portal
        <PortalContext.Provider
          value={{
            loading: this.state.loading,
            signUpTrigger: this.signUpTrigger,
          }}
        >
          <SignUp />
        </PortalContext.Provider>
        {jsonData &&
          Object.keys(jsonData).map((item: string, index: number) => {
            return <div key={index}>{`${item}: ${jsonData[item]}`}</div>
          })}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Portal)
