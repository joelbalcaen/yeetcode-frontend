import axios from "axios";
import { Problem } from "./problems-models";
import { config } from "../../constants";

const problemsPath = "/problems"

export const getAllProblems = () =>
  axios
    .get<Array<Problem>>(config.url.API_BASE_URL + problemsPath)
    .then((res) => res.data);

export const getProblem = (id: string) =>
  axios
    .get<Problem>(config.url.API_BASE_URL + problemsPath + "/" + id)
    .then((res) => res.data);
