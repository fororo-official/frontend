import api from "@/api/api";

type checkSignUpType = null | {
  studentId: string;
  studentName: string;
  department: string;
};

/**
 * 회원가입한 상태인지 확인한다.
 * @param publicKey
 * @returns 학생 이름 | undefined | err
 */
const checkSignUp = async (publicKey: string) => {
  try {
    const res: checkSignUpType = await api.get(`student/${publicKey}`);
    return res ? res.studentName : undefined;
  } catch (err) {
    return JSON.stringify(err);
  }
};

export default checkSignUp;
