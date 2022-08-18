import React, {useState} from "react";
import './index.css';
import {Modal,Form,Input,Radio,Button} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
const {Item} = Form;

function App() {
  const [form] = Form.useForm();
  const [titleInfo] = useState('Portfolios and/or accounts will be excluded from the Needs Attention sections that meet the following criteria.');
  const show = useSelector(state => state.showSetting);
  const dispatch = useDispatch();

  const dispare = () => {
    dispatch({type:'setting',payload:false})
  };

  const upload = () => {
    const value = form.getFieldsValue();
    console.log(value);
    dispatch({type:'setting',payload:false});
  }

  return (
    <Modal
        width={'50%'}
        visible={show}
        title={'Settings'}
        closable={false}
        centered={true}
        wrapClassName={'settingModal'}
        destroyOnClose
        footer={[
            <Button onClick={upload} style={{marginRight:18}} size="large" type="primary">Apply</Button>,
            <Button onClick={dispare} size="large" type="primary">Cancel</Button>
        ]}
    >
        <p style={{fontSize:12}}>{titleInfo}</p>
        <Form
            form={form}
        >
            <label style={{fontSize:18,fontWeight:600}}>Drift Threshold(%)</label>
            <Item style={{marginTop:8}} validateFirst name={'Drift'}>
                <Input style={{height: 45, borderRadius:8}} placeholder="input Drift" />
            </Item>
            <label style={{fontSize:18,fontWeight:600,display:'flex', width:'60%',justifyContent:'space-between'}}>
                <span>Raise Cash Threshold</span>
                <Item name={'RaiseLabel'} style={{margin: 0}}>
                    <Radio.Group>
                        <Radio value='Percent'>Percent</Radio>
                        <Radio value='Dollar'>Dollar</Radio>
                    </Radio.Group>
                </Item>
            </label>
            <Item style={{marginTop:8}} validateFirst name={'Raise'}>
                <Input style={{height: 45, borderRadius:8}} placeholder="input Drift" />
            </Item>
            <label style={{fontSize:18,fontWeight:600,display:'flex', width:'60%',justifyContent:'space-between'}}>
                <span>Allocate Cash Threshold</span>
                <Item name={'AllocateLabel'} style={{margin: 0}}>
                    <Radio.Group>
                        <Radio value='Percent'>Percent</Radio>
                        <Radio value='Dollar'>Dollar</Radio>
                    </Radio.Group>
                </Item>
            </label>
            <Item style={{marginTop:8}} validateFirst name={'Allocate'}>
                <Input style={{height: 45, borderRadius:8}} placeholder="input Drift" />
            </Item>
            <label style={{fontSize:18,fontWeight:600,display:'flex', width:'60%',justifyContent:'space-between'}}>
                <span>Loss Oppertunity Threshold</span>
                <Item name={'LossLabel'} style={{margin: 0}}>
                    <Radio.Group>
                        <Radio value='Percent'>Percent</Radio>
                        <Radio value='Dollar'>Dollar</Radio>
                    </Radio.Group>
                </Item>
            </label>
            <Item style={{marginTop:8}} validateFirst name={'Loss'}>
                <Input style={{height: 45, borderRadius:8}} placeholder="input Drift" />
            </Item>
        </Form>
    </Modal>
  );
}

export default App;
