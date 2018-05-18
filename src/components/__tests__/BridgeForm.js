import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BridgeForm } from '../BridgeForm'

configure({ adapter: new Adapter() })

describe('BridgeForm', () => {
  it('should call onInputChange if field is modified', () => {

    const onInputChange = jest.fn()

    const wrapper = mount(
      <BridgeForm
        displayArrow={true}
        reverse={false}
        currency={'POA'}
        onTransfer={()=>{}}
        onInputChange={onInputChange} />
    )
    expect(onInputChange).toHaveBeenCalledTimes(0)

    const amountInput = wrapper.find("#amount").at(0)

    amountInput.simulate('change', { target: { value: '1234' } })

    expect(onInputChange).toHaveBeenCalledTimes(1)
  })

  it('should call onTransfer if form is submitted', () => {

    const onTransfer = jest.fn()

    const wrapper = mount(
      <BridgeForm
        displayArrow={true}
        reverse={false}
        currency={'POA'}
        onTransfer={onTransfer}
        onInputChange={()=>{}} />
    )
    expect(onTransfer).toHaveBeenCalledTimes(0)

    const form = wrapper.find(".bridge-form").at(0)

    form.simulate('submit')

    expect(onTransfer).toHaveBeenCalledTimes(1)
  })
})
