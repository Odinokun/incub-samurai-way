export type PostType = {
  id: number
  message: string
  likes: number
}
export type DialogType = {
  id: number
  name: string
}
export type MessageType = {
  id: number
  message: string
}
export type FriendsType = {
  id: number
  name: string
}
export type ProfilePageType = {
  post: Array<PostType>
}
export type DialogsPageType = {
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
export type SideBarType = {
  friends: Array<FriendsType>
}
export type RootStateType = {
  profilePage: ProfilePageType
  dialogsPage: DialogsPageType
  sideBar: SideBarType
}

export const state: RootStateType = {
  profilePage: {
    post: [
      {id: 1, message: 'My first message', likes: 21},
      {id: 2, message: 'Hello world', likes: 2},
      {id: 3, message: 'I learn React', likes: 109},
      {id: 4, message: 'Open to work', likes: 63},
    ],
  },
  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Odinokun'},
      {id: 2, name: 'Olcha'},
      {id: 3, name: 'Kema'},
      {id: 4, name: 'Dancer'},
      {id: 5, name: 'Chife'},
    ],
    messages: [
      {id: 1, message: 'First message'},
      {id: 2, message: 'Second message'},
      {id: 3, message: 'Third message'},
      {id: 4, message: 'Fourth message'},
      {id: 5, message: 'Yo-yo'},
      {id: 6, message: 'Hello world'},
      {id: 7, message: 'React-redux'},
    ]
  },
  sideBar: {
    friends: [
      {id: 3, name: 'Kema'},
      {id: 4, name: 'Dancer'},
      {id: 5, name: 'Chife'},
    ]
  }
}

