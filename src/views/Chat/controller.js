import LeftPanel from '@/components/LeftPanel';
import * as Api from '@/api';

export default {
  name: 'Chat',
  components: {
    LeftPanel
  },
  data: () => {
    return {
      consultationList: []
    };
  },
  mounted() {
    Api.getConsultationList()
      .then((response) => {
        this.consultationList = response;
      })
      .catch(() => {});
  }
};
