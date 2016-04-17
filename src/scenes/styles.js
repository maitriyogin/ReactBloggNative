import React, {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
  sceneStyle: {
    backgroundColor:'#e1eaea'
  },
  container: {
    flex:1,
    backgroundColor:"transparent",
    justifyContent: "center",
    alignItems: "center"
  },
  baseText: {
    fontFamily: 'Gill Sans'
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  sidebar: {
    flex:1,
    backgroundColor:"#699696",
    justifyContent: "center",
    alignItems: "center"
  },
  navContainer: {
    paddingTop: 64,
    flex:1,
    backgroundColor:"transparent",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  listView:{
    paddingTop: 64,
    flex: 1,
    alignItems: "flex-start",
    flexDirection: 'column'
  },
  list: {
    backgroundColor: '#eeeeee',
    marginTop: 10,

    alignSelf: 'stretch'
  },
  group: {
    backgroundColor: 'white',
  },
  groupSpace: {
    height: 15,
  },
  line: {
    backgroundColor: '#bbbbbb',
    height: StyleSheet.hairlineWidth,
  },
  row: {
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 15,
    flex: 1,
    alignItems: "flex-start",
    flexDirection: 'column',
    alignSelf: 'stretch'
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#bbbbbb',
    marginLeft: 15,
  },
  rowNote: {
    fontSize: 17,
  },
  rowText: {
    fontSize: 17,
    fontWeight: '500',
    alignSelf: 'flex-start',
  },
  rowFooter: {
    fontSize: 10,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  commentEdit: {
    height: 35,
    fontSize: 17
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    alignSelf: 'stretch',
    flexDirection: 'column'
  },
  textTouch: {
    alignSelf: 'stretch',
    flex: 1
  },
  text: {
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#699696',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flex: 1
  },
  textEdit: {
    borderStyle: 'dotted',
    borderWidth: 6,
    borderColor: '#ff9933',
    borderRadius: 5,
    padding: 15,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    alignSelf: 'stretch',
    flex: 1
  },
  textHeading: {
    fontSize: 17,
    fontWeight: '500',
    alignSelf: 'flex-start'
  },
  textFooter: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  }
});

export default styles;