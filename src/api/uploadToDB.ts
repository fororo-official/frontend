import axios from "axios";
type userInfo = {
  idToken: string;
  username: string;
  studentId: string;
  profileImage: string;
};

const uploadToDB = ({
  idToken,
  username,
  studentId,
  profileImage,
}: userInfo) => {
  const apiUrl = "";
  axios({
    method: "post",
    headers: { Authorization: idToken },
    url: "",
    data: {
      username: username,
      studentId: studentId,
      profileImage: profileImage,
    },
  });
};
