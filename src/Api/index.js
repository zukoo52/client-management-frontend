import axios from "axios";
//import { toast } from "@/Toast/toast";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT,

});



