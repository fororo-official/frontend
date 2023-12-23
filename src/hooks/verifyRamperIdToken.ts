import jwt, { JsonWebTokenError, JwtPayload } from "jsonwebtoken";
async function verifyRamperIdToken(idToken: string, apiSecret: string) {
  let payload: JwtPayload;
  try {
    payload = jwt.verify(idToken, apiSecret, { complete: false }) as JwtPayload;
  } catch (err) {
    const details = (err as JsonWebTokenError).message;
    throw new JsonWebTokenError("invalid ramper token" + details);
  }
  if (!payload) {
    throw new JsonWebTokenError("invalid ramper token" + "no JWT Payload");
  }
  if (payload.iss != "https://ramper.xyz" || !payload.id) {
    throw new JsonWebTokenError("invalid ramper token" + "invalid JWT Payload");
  }
  return payload.id;
}
export default verifyRamperIdToken;
