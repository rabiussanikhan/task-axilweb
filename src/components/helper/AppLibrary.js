export default {
    data() {
        return {}
    },
    mounted() {
        this.$nextTick(() => {
            this.initFeather();
        });
    },
    methods: {
        initFeather() {
            const feather = require('feather-icons');
            feather.replace();
            window.addEventListener('resize', () => {
                const feather = require('feather-icons');
                feather.replace();
            })
        }
    }
}