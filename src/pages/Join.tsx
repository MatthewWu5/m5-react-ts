import * as React from 'react'
import { connect } from 'react-redux'
import { getContacts } from '@/redux/actionCreators/contacts'

const styles = require('./index.scss')

interface PassProps {}

const mapStateToProps = (state: any) => ({
  contact: state.contact,
})

const mapDispatchToProps = {
  getContacts,
}

type Props = PassProps & {
  contact: any
} & typeof mapDispatchToProps

interface State {}

class Join extends React.Component<Props, State> {
  public render() {
    return <div className="wrapper">Join 0</div>
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Join)
