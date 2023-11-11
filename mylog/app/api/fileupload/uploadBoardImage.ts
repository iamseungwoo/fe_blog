import axios from "axios";
import { getAccessToken } from "../auth/token";

export const uploadBoardImage = async (formData: FormData) => {
  const accessToken = getAccessToken();
  try {
    return await axios.post(`https://8080-iamseungwoo-beblog-22aghdom0rr.ws-us105.gitpod.io/api/uploadFile`, formData, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } catch (err: any) {
    throw err;
  }
};