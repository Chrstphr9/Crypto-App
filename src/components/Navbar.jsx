import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { HomeOutlined, MoneyCollecOutlined, BulbOutlined, FundOutlines, MenuOutlined } from '@ant-design/icons';
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
            {/* <Button className='menu-control-container'>

            </Button> */}
        </div>
    </div>
    
  )
}

export default Navbar