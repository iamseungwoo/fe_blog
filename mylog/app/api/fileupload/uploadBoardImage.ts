import axios from "axios";

export const uploadBoardImage = async (formData: FormData) => {
    try {
      return await axios.post(`api/fileupload`, formData, {
        // headers: { Authorization: `Bearer ${accessToken}` },
      });
    } catch (err: any) {
      throw err;
    }
  };