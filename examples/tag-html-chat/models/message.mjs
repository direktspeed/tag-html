import { DefineMap, DefineList, superModel } from 'can';
//import loader from '@loader';
//only would work with steal

const Message = DefineMap.extend('Message', {
  seal: false
}, {
  'id': {
    type: 'any',
    identity: true
  },
  name: 'string',
  body: 'string'
});

Message.List = DefineList.extend('MessageList', {
  '#': Message
});

Message.connection = superModel({
  url: loader.serviceBaseURL + '/api/messages',
  Map: Message,
  List: Message.List,
  name: 'message'
});

//export getList ?
//getData ?
// save
export default Message;