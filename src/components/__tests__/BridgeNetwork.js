import React from 'react'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BridgeNetwork } from '../BridgeNetwork'

configure({ adapter: new Adapter() })

describe('BridgeNetwork', () => {
  it('should call showModal on More Info click', () => {
    const showModal = jest.fn()

    const wrapper = mount(
      <BridgeNetwork
        isHome={true}
        networkTitle={'POA'}
        showModal={showModal}
        networkData={{}}
        currency={'POA'}
        balance={5.83} />
    )

    expect(showModal).toHaveBeenCalledTimes(0)

    const showMoreContainer = wrapper.find(".bridge-network-data").at(0)

    showMoreContainer.simulate('click')

    expect(showModal).toHaveBeenCalledTimes(1)
  })

  it('should display Network name', () => {
    const networkData = {
      id: 77,
      name: 'Sokol'
    }
    const networkTitle = 'POA'

    const wrapper = mount(
      <BridgeNetwork
        isHome={false}
        networkTitle={networkTitle}
        showModal={()=>{}}
        networkData={networkData}
        currency={'POA'}
        balance={5.83} />
    )

    const networkTitleElement = wrapper.find(".network-title").at(0)

    expect(networkTitleElement.text()).toEqual(networkTitle)

    const networkNameElement = wrapper.find(".network-name").at(0)

    expect(networkNameElement.text()).toEqual(networkData.name)
  })

  it('should display user balance', () => {
    const balance = 5.38
    const currency = 'POA'

    const wrapper = mount(
      <BridgeNetwork
        isHome={true}
        networkTitle={'POA'}
        showModal={()=>{}}
        networkData={{}}
        currency={currency}
        balance={balance} />
    )

    const networkTitleElement = wrapper.find(".network-balance").at(0)

    expect(networkTitleElement.text().trim()).toEqual(`${balance} ${currency}`)
  })
})
