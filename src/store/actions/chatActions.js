export const SET_SELECTED_CONTACT = 'SET_SELECTED_CONTACT';
export const SET_CONTACTS = 'SET_CONTACTS';
export const ADD_MESSAGE_TO_CHAT = 'ADD_MESSAGE_TO_CHAT';

export const setSelectedContact = contact => ({ type: SET_SELECTED_CONTACT, payload: contact });
export const setContacts = contacts => ({ type: SET_CONTACTS, payload: contacts });
export const addMessageToChat = (chatId, message) => ({type: ADD_MESSAGE_TO_CHAT,payload: { chatId, message },});
