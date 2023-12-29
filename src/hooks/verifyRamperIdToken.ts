import * as jwt from "jsonwebtoken";

/**
 * Validate Ramper's ID token by JWT.
 * @returns Ramper user ID
 */
async function verifyRamperIdToken(idToken: string, apiSecret: string) {
  let payload: jwt.JwtPayload;
  try {
    payload = jwt.verify(idToken, apiSecret, {
      complete: false,
    }) as jwt.JwtPayload;
  } catch (err) {
    throw new jwt.JsonWebTokenError(
      `invalid ramper token`,
      err as jwt.JsonWebTokenError
    );
  }
  if (!payload) {
    throw new jwt.JsonWebTokenError(`invalid ramper token : no JWT payload`);
  }
  if (payload.iss !== "https://ramper.xyz" || !payload.id) {
    throw new jwt.JsonWebTokenError(
      `invalid ramper token : invalid JWT payload: ${JSON.stringify(payload)}`
    );
  }
  return payload.id;
}

export default verifyRamperIdToken;
