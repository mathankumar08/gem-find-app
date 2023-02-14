import axios, { AxiosError } from "axios";
import { DIAMOND_DETAIL, DIAMOND_LIST, FILTER, NAVIGATION, parseAxiosError } from "../common/constants";

export const navigation = async () => {

    try {
        const { data } = await axios.get(NAVIGATION);
        return data;

    } catch (error) {
        return parseAxiosError(error as AxiosError)
    }
};

export const filterPilot = async () => {

    try {
        const { data } = await axios.get(FILTER);
        return data;

    } catch (error) {
        return parseAxiosError(error as AxiosError)
    }
};


export const diamondList = async () => {

    try {
        const { data } = await axios.get(DIAMOND_LIST);
        return data;

    } catch (error) {
        return parseAxiosError(error as AxiosError)
    }
};

export const diamondDetail = async () => {

    try {
        const { data } = await axios.get(DIAMOND_DETAIL);
        return data;

    } catch (error) {
        return parseAxiosError(error as AxiosError)
    }
};

