import React from 'react'
import Flex from 'flexbox-react'
import Terminal from 'terminal-in-react'
import { Link } from 'carbon-components-react'
import { useHttp } from 'hooks/core/use-http/useMockHttp'
import { PageHeading } from 'components'
// import { useConsoleLogic } from './useConsoleLogic'
// import { } from './styled'


export default function Console () {
  const { post } = useHttp()
  // const { someValue } = useConsoleLogic()

  // user has pressed ENTER
  const handleCommand = (command, print) => {
    post('/console',{ command }, {}, { commandResponse: `${command} successfully executed`})
      .then(response => {
        print(response.commandResponse)
      })
  }

  // <div className="bx--col-sm-12" style={{ height: '30px' }}>
  //
  // </div>

  return (
    <div className="bx--grid">
      <div className="bx--row">
        <div className="bx--col-sm-12 bx--col-lg-6">
          <Terminal
            color='green'
            backgroundColor='black'
            barColor='black'
            style={{ fontWeight: "bold", fontSize: "1em" }}
            showActions={false}
            commandPassThrough={handleCommand}
            allowTabs={false}
            msg='Welcome to the Data Passports Console'
          />
        <div style={{ marginTop: '40px' }}>
            <Link href="">
              <PageHeading>
                Click here to download our PDF manual
              </PageHeading>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
