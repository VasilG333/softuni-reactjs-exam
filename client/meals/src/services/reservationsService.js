import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/reservations';

export const getAll = () => request.get(baseUrl);

export const getOne = (resId) => request.get(`${baseUrl}/${resId}`);

export const create = (resData) => request.post(baseUrl, resData);

export const edit = (resId, resData) => request.put(`${baseUrl}/${resId}`, resData);

export const remove = (resId) => request.del(`${baseUrl}/${resId}`);