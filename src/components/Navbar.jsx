import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlines, MenuOutlined, FundOutlined } from '@ant-design/icons';
// import img1 from './cryptocurrency.png';

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <img src="https://i.ibb.co/Z11pcGG/cryptocurrency.png" size='large' alt='img'/>
            <Typography.Title level={2} className="logo">
                <Link to="/">Cryptoverse</Link>
                {/* <h1>ccccccc</h1> */}
            </Typography.Title>
        </div>
        <Menu theme="dark">
            <Menu.Item icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item icon={<FundOutlined />}>
                <Link to="/cryptocurrencies">Cryptocurrencies</Link>
            </Menu.Item>
            <Menu.Item icon={<MoneyCollectOutlined />}>
                <Link to="/exchanges">Exchanges</Link>
            </Menu.Item>
            <Menu.Item icon={<BulbOutlined />}>
                <Link to="/news">News</Link>
            </Menu.Item>
        </Menu>
    </div>
    
  )
}

export default Navbar