import { BASE_URL } from "@/shared";

interface SignupAPIRequest {
  userId: string;
  password: string;
  nickname: string;
}

export interface SignupResponse {
  userId: string;
  nickname: string;
}

export const SIGNUP_API_PATH = `${BASE_URL}/api/auth/signup`;

export const signupAPI = async ({ userId, password, nickname }: SignupAPIRequest): Promise<SignupResponse> => {
  try {
    const response = await fetch(SIGNUP_API_PATH, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        password,
        nickname,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: SignupResponse = await response.json();
    return data;
  } catch (error) {
    console.error("signupAPI error:", error);
    throw error;
  }
};
