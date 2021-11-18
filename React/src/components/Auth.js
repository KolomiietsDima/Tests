import 'antd/dist/antd.css'
import { Button } from 'antd';
import { UserOutlined} from '@ant-design/icons';
import React from 'react';
import { showModel } from './Authorization';
import './Auth.css'




export default function Auth(props) {

  return (
    
      
          <Button className="Auth" type="primary"   icon={<UserOutlined />} onClick={showModel} >
            Authorization
          </Button>

    

  )
}

