export default {
  name: 'MessageRecord',
  data: () => {
    return {
      isActiveMic: false,
      isActiveCamera: false
    };
  },
  methods: {
    onActiveMicRec(event) {
      this.isActiveMic ? this.isActiveMic = false : this.isActiveMic = true;
    },

    onActiveVideoRec() {
      this.isActiveCamera ? this.isActiveCamera = false : this.isActiveCamera = true;
    }
  }
};
