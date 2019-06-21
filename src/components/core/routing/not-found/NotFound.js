import React from 'react'
import { injectIntl, defineMessages } from 'react-intl'


const messages = defineMessages({
  title: {
    id: '404Page.title',
    defaultMessage: '404: Page not found'
  }
})


function NotFoundRaw (props) {
  const { intl: { formatMessage } } = props

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col">
          {formatMessage(messages.title)}
        </div>
      </div>
    </div>
  )
}

const NotFound = injectIntl(NotFoundRaw)
export { NotFound }
