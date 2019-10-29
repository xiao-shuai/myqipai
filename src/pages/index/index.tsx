import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
import { AtTabBar,AtList, AtListItem,AtNoticebar } from 'taro-ui'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      current: 0
    }
  }
  handleClick (value) {
    this.setState({
      current: value
    })
  }
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '棋牌资讯大全'
  }

  componentWillMount () { 
    Taro.request({
      url: 'https://www.fastmock.site/mock/06aa8560a1a219b7ef95bf3b025042f1/info/show',
     
    })
      .then(res => console.log('res1',res))
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
   jump(){
    Taro.navigateTo({
      url: '/pages/me/me'
    })
   }
  render () {
    let current=this.state.current
    console.log('current:',current);
    
    return (
      <View className='index'>
        {/* <Text>Hello world232342!</Text> */}
        <AtTabBar
        fixed
  tabList={[
    { title: '文章列表', iconType: 'bullet-list', },
    { title: '我的', iconType: 'user' }
    
  ]}
  onClick={this.handleClick.bind(this)}
  current={this.state.current}
/> 
{
   current==0?
   <View>
     <AtNoticebar icon='volume-plus' close={true}>
  这是 NoticeBar 通告栏，这是 NoticeBar 通告栏，这是 NoticeBar 通告栏
</AtNoticebar>
   <AtList>
   <AtListItem title='标题文字' arrow='right' 
    onClick={this.jump}
   />
   <AtListItem title='标题文字' arrow='right' 
    onClick={this.jump}
   />
   <AtListItem title='标题文字' arrow='right' 
    onClick={this.jump}
   />
   <AtListItem title='标题文字' arrow='right' 
    onClick={this.jump}
   />
   <AtListItem title='标题文字' arrow='right' 
    onClick={this.jump}
   />
 </AtList>
 </View>
 
   :
  <View className='about'>
    <View className='big'>
    <View className='ab'>关于我们</View>
    <View className='con'>
      简介：欢迎关注我们的小程序，这里汇聚了全网最新的资讯，如果感兴趣就请尽快加入我们吧！
    </View>
    </View>
  </View>

   
}
      </View>
    )
  }
}
