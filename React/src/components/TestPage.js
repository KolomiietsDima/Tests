import { Layout, Tabs, Checkbox, Row, Col, Modal,Button ,message} from 'antd';
import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { logout } from './Authorization';
import { AuthHeader } from '../App';
import { useNavigate } from 'react-router';



const { TabPane } = Tabs;
const { Content } = Layout;


export default function TestPage(props) {
  const [Question, setQuestion] = useState([]);
  const [Result, setResult] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();


  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    navigate('/Home')
  };

 



  function onChange(checkedValues) {
    if (checkedValues[0] === Question[0].Answer && checkedValues.length < 2 && Result < 1) {
      setResult(Result + 1);


    }
    if (checkedValues[0] !== Question[0].Answer && checkedValues.length < 2 && Result > 0 ) {
      setResult(Result - 1);

    }
  }
  function onChange2(checkedValues) {
    if (checkedValues[0] === Question[1].Answer && checkedValues.length < 2 && Result < 2) {
      setResult(Result + 1)
    }
    if (checkedValues[0] !== Question[1].Answer && checkedValues.length < 2 && Result > 1) {
      setResult(Result - 1);

    }
  }
  function onChange3(checkedValues) {
    if (checkedValues[0] === Question[2].Answer && checkedValues.length < 2 && Result < 3) {
      setResult(Result + 1);
    }
    if (checkedValues[0] !== Question[2].Answer && checkedValues.length < 2 && Result > 2) {
      setResult(Result - 1);

    }
  }
  useEffect(() => {
    (

      axios.get(`api/Questions/GetQuestionsByTestId?testId=${localStorage.getItem('TestId')}`, AuthHeader())
        .then((response) => {
          for (let i = 0; i < response.data.length; i++) {
            let object = { Body: response.data[i].body, Answer: response.data[i].answer }
            setQuestion(Question => [...Question, object]);

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
        })



    )
  }, []);





  return (
    <Layout style={{ padding: '0 24px 24px' }}>

      <Content

        style={{
          padding: 24,
          margin: 0,
          minHeight: 885,


        }}
      >
        <Tabs defaultActiveKey="1" centered>
          <TabPane tab="Question 1" key="1">
            {Question.length > 2 ?
              Question[0].Body : null
            }

            <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
              <Row>
                <Col span={4}>

                  <Checkbox value={Question.length > 2 ? Question[1].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[1].Answer : null}
                  </Checkbox>
                </Col>
                <Col span={4}>
                  <Checkbox value={Question.length > 2 ? Question[2].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[2].Answer : null}
                  </Checkbox>
                </Col>
                <Col span={4}>

                  <Checkbox value={Question.length > 2 ? Question[0].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[0].Answer : null}
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </TabPane>


          <TabPane tab="Question 2" key="2">
            {Question.length > 2 ?
              Question[1].Body : null
            }
            <Checkbox.Group style={{ width: '100%' }} onChange={onChange2}>
              <Row>
                <Col span={4}>

                  <Checkbox value={Question.length > 2 ? Question[1].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[1].Answer : null}
                  </Checkbox>
                </Col>
                <Col span={4}>
                  <Checkbox value={Question.length > 2 ? Question[0].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[0].Answer : null}
                  </Checkbox>
                </Col>
                <Col span={4}>

                  <Checkbox value={Question.length > 2 ? Question[2].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[2].Answer : null}
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>

          </TabPane>
          <TabPane tab="Question 3" key="3">
            {Question.length > 2 ?
              Question[2].Body : null
            }

            <Checkbox.Group style={{ width: '100%' }} onChange={onChange3}>
              <Row>
                <Col span={4}>

                  <Checkbox value={Question.length > 2 ? Question[0].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[0].Answer : null}
                  </Checkbox>
                </Col>
                <Col span={4}>
                  <Checkbox value={Question.length > 2 ? Question[1].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[1].Answer : null}
                  </Checkbox>
                </Col>
                <Col span={4}>

                  <Checkbox value={Question.length > 2 ? Question[2].Answer : null} style={{ marginLeft: 20, marginTop: 20 }} >
                    {Question.length > 2 ? Question[2].Answer : null}
                  </Checkbox>

                </Col>
                <Col span={4}>
                  <Button key="back" onClick={showModal}>
                    Finish
                  </Button>
                </Col>
              </Row>
            </Checkbox.Group>
          </TabPane>
        </Tabs>

        <Modal title="You have successfully completed the test" visible={isModalVisible} footer={[<Button key="back" onClick={handleOk}> Back to the tests</Button>,]}>
          <p>Your result is {Result}/3</p>
          
        </Modal>

      </Content>
    </Layout>
  )
}