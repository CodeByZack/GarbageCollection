import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtTabBar } from 'taro-ui'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    current : 0
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick (value){
    this.setState({
      current: value
    })
  }

  render () {
    let { current } = this.state;
    let tabContent ;
    
    if( current == 0 ){
      tabContent = <Text>Hello world!1</Text>
    }else if( current == 1){
      tabContent = <Text>Hello world!2</Text>
    }else if( current == 2){
      tabContent = <Text>Hello world!3</Text>
    }


    return (
      <View className='index'>
        {tabContent}
        <AtTabBar
          fixed
          tabList={[
            { title: '首页', iconType: 'bullet-list' },
            { title: '讨论', iconType: 'camera' },
            { title: '新增分类', iconType: 'folder' }
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.state.current}
        />
      </View>
      
    )
  }
}
