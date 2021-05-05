import React, { Dispatch, SetStateAction } from 'react'
import { IInfoMessage } from './types'

import './style.scss'

const InfoMessage = (props: {
  infoMessage: IInfoMessage,
  setInfoMessage: Dispatch<SetStateAction<IInfoMessage>>
}) => {

  const {
    infoMessage,
    setInfoMessage
  } = props

  return (
    <div className='alert'
      style={{
        backgroundColor: infoMessage.severity === 'error'
          ? '#ff7777'
          : '#a9efff'
      }}>
      {infoMessage.message}
      <span className='close'
        onClick={() => setInfoMessage(prevState => (
          { ...prevState, isOpen: false })
        )}>
        X
      </span>
    </div >
  )
}

export default InfoMessage
