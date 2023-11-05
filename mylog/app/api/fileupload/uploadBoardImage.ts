import axios from "axios";

export const uploadBoardImage = async (formData: FormData) => {
    try {
      return await axios.post(`https://8080-iamseungwoo-beblog-22aghdom0rr.ws-us105.gitpod.io/api/uploadFile`, formData, {
        // headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (err: any) {
      throw err;
    }
  };