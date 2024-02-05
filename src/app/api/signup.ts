// import type { NextApiRequest, NextApiResponse } from "next";
// import { getToken } from "next-auth/jwt";

import { NextApiRequest, NextApiResponse } from "next";

// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<any>
// ) {
//   const secret = process.env.NEXTAUTH_SECRET;
//   const token = getToken({ req, secret });
//   res.status(200).json({ message: JSON.stringify(token) });
// }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ name: "John Doe" });
}
