import moment from 'moment';

export const state = {
  users: [
    {_id:1,username : 'stephen',email:'stephen.white@callistaenterprise.se'},
    {_id:2,username : 'sedina',email:'sedina.oruc@callistaenterprise.se'},
    {_id:3,username : 'jonas',email:'jonas.behmer@callistaenterprise.com'}
  ],
  posts : [
    {_id:1, 'title':'Stephens Blog', body:'Ember Rocks!', userfk:1},
    {_id:2, 'title':'Jonases Blog', body:'A host, of golden daffodils', userfk:2},
    {_id:3, 'title':'Sedinas Blog', body:'I wandered lonely as a cloud', userfk:3}
  ],
  comments : [
    {_id:1, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:2, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:3, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:4, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:5, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:6, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:7, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:8, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:9, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:10, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:11, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:12, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:13, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:14, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:15, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:16, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:17, body:'like playing in mud', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:18, body:'moving to sand', updatedate:moment().format(), postfk:1, userfk: 3},
    {_id:19, body:'and then ... Beside the lake, beneath the trees', updatedate:moment().format(), postfk:2, userfk: 1},
    {_id:20, body:'Fluttering and dancing in the breeze', updatedate:moment().format(), postfk:2, userfk: 1},
    {_id:21, body:'That floats on high o er vales and hills', updatedate:moment().format(), postfk:3, userfk: 2},
    {_id:22, body:'Continuous as the stars that shine', updatedate:moment().format(), postfk:3, userfk: 2}
  ]
};

export function getPost(postId){
  return state.posts.find(post => post._id === postId);
}

export function getComments(postId){
  return state.comments.filter(comment => comment.postfk === postId);
}

export function newComment(postId){
  return {_id:state.comments.length+1, body:'', postfk:postId, userfk:1, updatedate:moment().format(), isNew:true};
}

export function pushComment(comment) {
  state.comments.unshift(comment);
}