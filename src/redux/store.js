import dialogReducer from './dialogsReducer';
import profileReducer from './profileReducer';

const store = {

  _state: {

    profilePage: {

      posts: [
        {id: 1, messageText: 'Hello New-Facebook', likesCount: 10},
        {id: 2, messageText: 'Hello React', likesCount: 5},
      ],
      textareaValue: '',
    },

    dialogsPage: {

      dialogs: [
        {id: 1, name: 'Zeka'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Kolek'}
      ],

      messagesIn: [
        {id: 1, messageText: 'Hello'},
        {id: 2, messageText: 'It\'s my first message'},
        {id: 3, messageText: 'lol'}
      ],

      messagesOut: [
        {id: 1, messageText: 'Hello React'},
        {id: 2, messageText: 'Ok'},
        {id: 3, messageText: 'Bye Bye'}
      ],

      messageTextareaValue: ''
    },

    friends: [
      {id: 1, name: 'Oleg'},
      {id: 2, name: 'Vanek'},
      {id: 3, name: 'Kolek'},
      {id: 4, name: 'Igor'},
      {id: 5, name: 'Vasia'},
      {id: 6, name: 'Pitr'},
      {id: 7, name: 'Serega'}
    ]
  },

  _callSubscriber() {
    console.log('reRenderTree');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },


  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

    this._callSubscriber();
  },
}


export default store;
