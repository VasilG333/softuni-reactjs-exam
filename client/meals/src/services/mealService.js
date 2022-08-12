import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/meals';

export const getAll = () => request.get(baseUrl);

export const getOne = (mealId) => request.get(`${baseUrl}/${mealId}`);

export const create = (mealData) => request.post(baseUrl, mealData);

export const edit = (mealId, mealData) => request.put(`${baseUrl}/${mealId}`, mealData);

export const remove = (mealId) => request.del(`${baseUrl}/${mealId}`);