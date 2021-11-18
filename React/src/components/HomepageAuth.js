import { Layout,  Modal, Checkbox, Empty, Button, Card,message } from 'antd';
import { React, useState, useEffect } from 'react';
import './Homepage.css';
import { AuthHeader } from '../App';
import axios from 'axios';
import { logout } from './Authorization';
import { useNavigate } from 'react-router';
const {  Content } = Layout;
export let tests = []
const { Meta } = Card;



export let selected = { isSelected:false,checkbox:false};


export default function HomepageAuth(props) {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [Test, setTest] = useState([]);
  
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalVisible(true);
  

  };

  const handleOk = () => {
      
    if (selected.checkbox === true && selected.isSelected === true) {
      setIsModalVisible(false);
      navigate(`Test`)
      
    }
    else{
      setIsModalVisible(false);
      if (selected.isSelected === false) {
        message.error('choose test at first');
      }
      if (selected.checkbox === false) {
        message.error('Agree to the beginning of the text ');
      }
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  function onChange(e) {
    selected.checkbox= e.target.checked;
  }

  const OnSelect = (n,t) => {
    message.success(`You selected ${n}`)
    localStorage.setItem('TestId', t); 
    selected.isSelected = true;
   

  }

  useEffect(() => {
    (
        axios.get('api/UserTests/GetTests', AuthHeader())
          .then((response) => {

            for (let i = 0; i < response.data.length; i++) {

              let object = { Name: response.data[i].name, TestId: response.data[i].id, UserId: response.data[i].userId, Description: response.data[i].description }
             
              setTest(Test => [...Test, object]);;

              

            }
            
            

          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status === 401) {

                logout();
              } else if (error.request) {
                message.error('Ooops something gone wrong ');
              } else {
                message.error('Ooops something gone wrong ');
              }
            }
          }))
     
  }, []);



  return (
    <Layout style={{ padding: '0 24px 24px' }}>

      <Content

        style={{
          padding: 34,
          margin: 0,
          minHeight: 885,


        }}
      >


        <Modal title={"Do you agree?"} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer={[
          <Button key="back" onClick={handleOk}>
            Procced
          </Button>,
        ]}>
          <Checkbox onChange={onChange}>I agree to start</Checkbox>
        </Modal>
        {Test ?
          <>

            {Test.map(test => (

              <Card
                style={{ width: 200, height: 170, position: 'relative', marginBottom: 10 }}
                key = {test.Name}
                className="card"
                onClick={function () {
                  OnSelect(test.Name,test.TestId);
                }}

              >

                <Meta
                  
                  title={test.Name}
                  description = {test.Description}
                />
                
              </Card>


            ))}
          </>

          :
          <Empty image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 260,
            }} style={{ marginBottom: 30 }}
          />

        }

        <Button type="primary" onClick={showModal}>Start</Button>
        <Button type="primary" onClick={logout} style={{ display: 'block',marginTop:20 }} >Logout</Button>
      </Content>

      
    </Layout>
  )
}