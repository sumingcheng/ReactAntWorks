// sidebar.tsx
import React from 'react'
import {Menu} from 'antd'
import {getItem, MenuItem} from '@/layout/type'
import {PieChartOutlined, DesktopOutlined, UserOutlined, TeamOutlined, FileOutlined} from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider'

const items: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined/>),
  getItem('Option 2', '2', <DesktopOutlined/>),
  getItem('User', 'sub1', <UserOutlined/>, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined/>, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined/>),
]

const Sidebar: React.FC<{
  collapsed: boolean,
  onCollapse: (value: boolean) => void
}> = ({collapsed, onCollapse}) => {
  return (
      <Sider className="sidebar-menu" breakpoint="lg" collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="h-12 text-xl text-white bg-#002140 flex justify-center items-center">React-TS-Admin</div>
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline" items={items}/>
      </Sider>
  )
}

export default Sidebar