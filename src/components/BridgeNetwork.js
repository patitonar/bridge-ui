import React from 'react'
import infoIcon from '../assets/images/icons/icon-info.svg'
import { formatBalance } from './utils/utils'

export const BridgeNetwork = ({
  isHome,
  networkTitle,
  networkData,
  currency,
  balance,
  showModal
}) => {
  const containerName = isHome ? 'home' : 'foreign'
  const formattedBalance = formatBalance(balance)

  const showMore = () => isHome ?
    (<div className="bridge-network-data" onClick={showModal}>
      <img className="info-icon-left" src={infoIcon} alt=""/>
      <span className="network-show-more">Show More</span>
    </div>)
    :
    (<div className="bridge-network-data" onClick={showModal}>
      <span className="network-show-more">Show More</span>
      <img className="info-icon-right" src={infoIcon} alt=""/>
    </div>)

  return (
    <div className={`network-container-${containerName}`}>
      <p>
        <span className="network-title">{networkTitle}</span>
        <span className="network-name">{networkData.name}</span>
      </p>
      <p>
        <span className="network-basic-label">Balance:</span>
        <span className="network-balance"> {formattedBalance} {currency}</span>
      </p>
      {showMore()}
    </div>
 )
}
