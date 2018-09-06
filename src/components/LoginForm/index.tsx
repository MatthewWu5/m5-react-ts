import * as React from 'react'
import { requestLoginUrl } from '@/request/api'
import { Form, Input, Checkbox, Button } from 'antd'

const styles = require('./index.scss')
const FormItem = Form.Item

type Props = {
  form: any
}

type State = {
  confirmDirty: boolean
}
class LoginForm extends React.Component<Props, State> {
  state: State = {
    confirmDirty: false,
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleConfirmBlur = e => {
    console.log('onBlur')
    const value = e.target.value
    this.setState({ confirmDirty: this.state.confirmDirty || !!value })
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!')
    } else {
      callback()
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true })
    }
    callback()
  }

  renderBasicFormItem = (renderNumber: number) => {
    const { getFieldDecorator } = this.props.form

    const basicFormItem = (index: number) => (
      <FormItem label={'Field' + index}>
        {getFieldDecorator('field' + index, {
          rules: [
            {
              required: true,
              message: 'Please input your field!',
            },
          ],
        })(<Input />)}
      </FormItem>
    )
    const result = []
    for (let index = 0; index < renderNumber; index++) {
      result.push(basicFormItem(index))
    }
    return result
  }

  public render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div className={styles.wrapper}>
        {/* <form action={requestLoginUrl} method="post">
          <label htmlFor="login_field">Username or email address</label>
          <input type="text" id="login_field" name="username" />
          <label htmlFor="password">Password</label>
          <input type="text" id="password" name="password" />
          <input
            type="submit"
            value="Sign in"
            className={styles.submit}
            onClick={this.onLogin}
          />
        </form> */}
        <Form onSubmit={this.handleSubmit}>
          <FormItem label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ],
            })(<Input />)}
          </FormItem>
          <FormItem label="Password">
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Please input your password!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input type="password" />)}
          </FormItem>
          <FormItem label="Confirm Password">
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input type="password" onBlur={this.handleConfirmBlur} />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('agreement', {
              valuePropName: 'checked',
            })(
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            )}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </FormItem>
        </Form>
      </div>
    )
  }
}

export default Form.create()(LoginForm)
