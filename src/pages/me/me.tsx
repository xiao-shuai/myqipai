import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './me.scss'
import { AtTabBar,AtList, AtListItem } from 'taro-ui'
export default class me extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '详情'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <View className='at-article'>
  <View className='at-article__h1'>
    这是一级标题这是一级标题
  </View>
  <View className='at-article__info'>
    2017-05-07&nbsp;&nbsp;&nbsp;这是作者
  </View>
  <View className='at-article__content'>
    <View className='at-article__section'>
      <View className='at-article__h2'>这是二级标题</View>
      <View className='at-article__h3'>这是三级标题</View>
      <View className='at-article__p'>
        这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本落。这是文本段落。1234567890123456789012345678901234567890 ABCDEFGHIJKLMNOPQRSTUVWXYZ
      </View>
      <View className='at-article__p'>
        这是文本段落。这是文本段落。
      </View>
      
    </View>
  </View>
</View>
      </View>
    )
  }
}
