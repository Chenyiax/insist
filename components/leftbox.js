import React , {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Letterbox(navigation){
  const userText = useState("未登录，点击登录");
  const minute = useState(0);
  const step = useState(0);

  return (
    <View style={styles.main}>
      <TouchableOpacity >
        <View style={styles.user}>
          <Image source={require('../images/head.png')} style={{height: 60, width: 60}}/>
          <Text style={styles.userText}>{userText}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.boxes}>
        <View style={styles.box1}>
          <Text style={styles.text}>今日运动{"\n"}<Text style={styles.large}>{minute}</Text> 分钟{"\n"}消耗了0千卡</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>今日步数{"\n"}<Text style={styles.large}>{step}</Text> 步{"\n"}目标6000步</Text>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.kind}>
          <Image style={styles.kindImg} source={require('../images/collection.png')} />
          <Text style={styles.kindText}>我的收藏</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.kind}>
          <Image style={styles.kindImg} source={require('../images/history.png')} />
          <Text style={styles.kindText}>历史记录</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.kind}>
          <Image style={styles.kindImg} source={require('../images/add.png')} />
          <Text style={styles.kindText}>设备与应用</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.kind}>
          <Image style={styles.kindImg} source={require('../images/help.png')} />
          <Text style={styles.kindText}>帮助中心</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.kind}>
          <Image style={styles.kindImg} source={require('../images/set.png')} />
          <Text style={styles.kindText}>设置</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  kindImg: {
    marginLeft: 30
  },
  kindText: {
    paddingLeft: 30,
    fontSize: 18,
  },
  kind: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
    height: 50,
    width: 300,
  },
  large: {
    color: 'black',
    fontSize: 20
  },
  user: {
    paddingLeft: 10,
    paddingTop: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  userText: {
    paddingLeft:10,
    fontSize: 15,
    color: 'black'
  },
  text: {
    height: 100,
    lineHeight: 30
  },
  main: {
    backgroundColor: 'rgb(254,254,254)',
  },
  boxes: {
    width: 300,
    height: 180,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-around',
    paddingTop: 20
  },
  box1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    backgroundColor: 'rgb(233,244,254)',
    height: 120,
    width: 120,
    paddingLeft:10,
    paddingTop: 10,
    borderRadius: 9,
  },
  box2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    backgroundColor: 'rgb(232,252,243)',
    height: 120,
    width: 120,
    paddingLeft:10,
    paddingTop: 10,
    borderRadius: 9,
  }
});

