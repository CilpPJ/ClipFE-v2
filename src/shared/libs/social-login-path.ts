import { BASE_URL } from "./fetch-instance";

export type Platform = "kakao" | "naver" | "google";

export const SOCIAL_LOGIN_PATH = (platform: Platform) => `${BASE_URL}/oauth2/authorization/${platform}`;
