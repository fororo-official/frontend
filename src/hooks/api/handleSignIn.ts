export type signInResponseType = {
  data: {
    id: number;
    email: string;
    userName: string;
    department: string;
    image: string;
    userAuthorization: "관리자" | "유저" | "운영진";
  };
};

const handleSignIn = async (id_token: string | undefined) => {
  const data = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/signin`, {
    headers: {
      Authorization: `Bearer ${id_token}`,
    },
  });
  const signInResponse: signInResponseType = await data.json();
  return signInResponse;
};

export default handleSignIn;
