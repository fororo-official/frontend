const handleSignIn = async (id_token: string | undefined) => {
  const URL = `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}`;
  const data: Response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${id_token}`,
    },
    cache: "default",
  });
  return data;
};

export default handleSignIn;
