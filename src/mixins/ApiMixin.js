export default {
    data() {
        return {
            data: {},
        };
    },
    
    methods: {
        async getDataApi(url, queryParams = {}) {
            Object.keys(queryParams).forEach((key) => {
                if (queryParams[key] === "") delete queryParams[key];
            });

            const queryParamsURL = new URLSearchParams({
                ...queryParams,
            }).toString();

            const urlValidate = queryParamsURL ? `${url}&${queryParamsURL}` : url 


            await fetch(urlValidate)
                .then((resp) => resp.json())
                .then((resp) => (this.data = resp));
        },
    },
}