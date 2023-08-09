import React from 'react'
import {Breadcrumb} from 'antd'

const App: React.FC = () => (
    <Breadcrumb
        className={`text-sm`}
        separator=">"
        items={[
          {
            title: 'Home',
          },
          {
            title: 'Application Center',
            href: '',
          },
          {
            title: 'Application List',
            href: '',
          },
          {
            title: 'An Application',
          },
        ]}
    />
)

export default App
