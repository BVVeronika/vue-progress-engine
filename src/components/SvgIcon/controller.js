export default {
  name: 'SvgIcon',

  props: {
    name: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: null
    },

    svgClass: {
      type: String,
      default: null
    }
  },

  computed: {
    iconPath () {
      return require(`@/assets/svg/${this.name}.svg`).default.url;
    },

    className () {
      if (this.svgClass) {
        return 'svg-icon svg-icon--' + this.svgClass;
      }

      return 'svg-icon';
    }
  }
};
