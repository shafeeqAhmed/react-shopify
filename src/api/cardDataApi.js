import axiosClient from "./index";

const cardDataApi = {
    getCardData(date) {
        const url = `/data/${date.payload}`;
        return axiosClient.get(url);
    },
};

export default cardDataApi;
