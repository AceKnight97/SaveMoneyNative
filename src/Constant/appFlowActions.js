const APP_FLOW_ACTIONS = {
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_COMPLETE: 'LOGIN_COMPLETE',

  DELETE_ALL_NOTIFICATIONS_REQUEST: 'DELETE_ALL_NOTIFICATIONS_REQUEST', // just reducers
  DELETE_ALL_NOTIFICATIONS_COMPLETE: 'DELETE_ALL_NOTIFICATIONS_COMPLETE', // just reducers

  UPDATE_NOTIFICATIONS_REQUEST: 'UPDATE_NOTIFICATIONS_REQUEST', // new isRead = true OR REMOVE item in the list / just reducers
  UPDATE_NOTIFICATIONS_COMPLETE: 'UPDATE_NOTIFICATIONS_COMPLETE', // new isRead = true OR REMOVE item in the list / just reducers

  FETCH_NOTIFICATIONS_REQUEST: 'FETCH_NOTIFICATIONS_REQUEST',
  FETCH_NOTIFICATIONS_COMPLETE: 'FETCH_NOTIFICATIONS_COMPLETE',

  FETCH_NOTIFICATION_COMPLETE: 'FETCH_NOTIFICATION_COMPLETE', // new Notification comes reducer
  FETCH_NOTIFICATION_REQUEST: 'FETCH_NOTIFICATION_REQUEST', // new Notification comes SAGES

  UPDATE_UNREAD_NOTIFICATION_COUNT_REQUEST: 'UPDATE_UNREAD_NOTIFICATION_COUNT_REQUEST',

  ADD_UNREAD_NOTIFICATION_COUNT_REQUEST: 'ADD_UNREAD_NOTIFICATION_COUNT_REQUEST',

  UPDATE_IS_END_OF_NOTIFICATIONS_REQUEST: 'UPDATE_IS_END_OF_NOTIFICATIONS_REQUEST',

  RELOAD_PAGE_REQUEST: 'RELOAD_PAGE_REQUEST',

  LOGOUT_REQUEST: 'LOGOUT_REQUEST',

  DISPLAY_LOADING: 'DISPLAY_LOADING',
};

export default APP_FLOW_ACTIONS;
