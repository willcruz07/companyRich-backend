import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import AppError from "../../error/AppError";
import AuthConfig from "../../../config/auth";

interface ITokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError("JWT Token not found.");

  try {
    const decodeToken = verify(authHeader, AuthConfig.jwt.secret);

    const { sub } = decodeToken as ITokenPayload;

    request.user = {
      id: sub,
    };

    return next();
  } catch (error) {
    throw new AppError("JWT Token invalid");
  }
}
