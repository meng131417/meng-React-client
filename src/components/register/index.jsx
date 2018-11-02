import React,{Component} from 'react';
import {NavBar,List, InputItem,Button,Radio,WingBlank, WhiteSpace} from 'antd-mobile';
import Logo from '../logo';

const Item = List.Item;
class Register extends Component{
  //初始化状态
  state = {
    username: '',
    password: '',
    rePassword: '',
    type: 'laoban'
  }

  handleChange = (name,val) => {
    this.setState({
      [name]: val
    })
  }

  register = async() => {
    //获取表单数据
    const {username,password,rePassword,type} = this.state;
    //发送ajax，更新状态

  }
    render(){
        return (
          <div>
            <NavBar>硅 谷 直 聘</NavBar>
            <Logo/>
            <WingBlank>
              <form>
                <List>
                  <WhiteSpace/>
                  <InputItem
                    placeholder="请输入用户名"
                    onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
                  <WhiteSpace/>
                  <InputItem
                    placeholder="请输入密码"
                    type="password"
                    onChange={val => this.handleChange('password', val)}>密码：</InputItem>
                  <WhiteSpace/>
                  <InputItem
                    placeholder="请输入确认密码"
                    type="rePassword"
                    onChange={val => this.handleChange('rePassword', val)}>确认密码：</InputItem>
                  <WhiteSpace/>
                  <Item>
                    用户类型： &nbsp;&nbsp;
                    <Radio
                      className="my-radio"
                      // checked={type === 'dashen'}
                      onClick={() => this.handleChange('type', 'dashen')}
                    >大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
                    <Radio
                      className="my-radio"
                      // checked={type === 'laoban'}
                      onClick={() => this.handleChange('type', 'laoban')}
                    >老板</Radio>
                  </Item>
                  <WhiteSpace/>
                  <Button type="primary" onClick={this.register}>注 册</Button>
                  <WhiteSpace/>
                  <Button onClick={this.goLogin}>已经注册</Button>
                </List>
              </form>
            </WingBlank>
          </div>
        )
    }
}

export default Register;