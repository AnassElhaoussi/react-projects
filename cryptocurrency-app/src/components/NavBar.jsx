
import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const NavBar = () => {
  return (
    <div className=''>
        <div className='flex gap-2 p-3 bg-slate-900'>
            <Avatar src={icon} size="large" />
            <Typography.Title level={2} className=''>
                <Link to='/'>CryptoVerse</Link>
            </Typography.Title>
        </div>
        <Menu theme='dark' className='h-screen'>
            <Menu.Item icon={<HomeOutlined/>} >
                <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined/>} >
                <Link to='/cryptocurrencies'>CryptoCurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined/>} >
                <Link to='/exchanges'>Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined/>} >
                <Link to='/news'>News</Link>
            </Menu.Item>
        </Menu>
    </div>
  )
}

export default NavBar