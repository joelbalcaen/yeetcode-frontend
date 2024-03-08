import axios from "axios";
import { Problem } from "./problems-models";

export const getAllProblems = () => axios.get<Array<Problem>>("http://localhost:8080/problems").then(res => res.data)