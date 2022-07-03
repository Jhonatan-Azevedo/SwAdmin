export default {
    data() {
        return {
            data: {},
        };
    },
    
    methods: {
        getDataApi(url) {
        fetch(url)
            .then((resp) => resp.json())
            .then((resp) => (this.data = resp));
        },
    },
}