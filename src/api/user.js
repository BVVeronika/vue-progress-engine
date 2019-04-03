// import AjaxTool from '@/store/utils/ajax_tool';

// import { API } from '@/api/path';

export const getPersonalDetailsUserInChat = () => {
  // TODO Demo date
  return new Promise((resolve, reject) => {
    resolve(
      { // {object}
        name: 'Jessica Adams',
        photo: 'https://randomuser.me/api/portraits/women/33.jpg',
        age: '55',
        gender: 'Femael',
        height: '3\' 10\"',
        weight: '150'
      }
    );
  });
};
