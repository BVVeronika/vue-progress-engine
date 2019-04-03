import * as Api from '@/api';

export default {
  name: 'UserPanel',
  data: () => {
    return {
      userInfo: {}
    };
  },
  mounted() {
    Api.getPersonalDetailsUserInChat()
      .then((response) => {
        this.userInfo = response;
      })
      .catch(() => {});
  }
};
