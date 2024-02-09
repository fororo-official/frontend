const getAllStudies = async (
  id_token: string | undefined,
  year: number | null,
  semester: number | null
) => {
  const URL = `${process.env.NEXT_PUBLIC_API_BASEURL}:${process.env.NEXT_PUBLIC_API_BASEPORT}`;
  const data: Response = await fetch(
    `${URL}/studies/all?year=${year}&semester=${semester}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${id_token}`,
      },
    }
  );
  return data.json();
};

export default getAllStudies;
