import { BASE_URL } from "@/shared";

interface DuplicateNicknameAPIRequest {
  nickname: string;
}

export interface DuplicateNicknameAPIResponse {
  message: string;
  duplicated: boolean;
}

export const DUPLICATE_NICKNAME_API_PATH = (nickname: string) =>
  `${BASE_URL}/api/auth/check/duplicateNickname/${nickname}`;

export const duplicateNicknameAPI = async ({
  nickname,
}: DuplicateNicknameAPIRequest): Promise<DuplicateNicknameAPIResponse> => {
  try {
    const url = DUPLICATE_NICKNAME_API_PATH(nickname);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nickname,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: DuplicateNicknameAPIResponse = await response.json();
    return data;
  } catch (error) {
    console.error("duplicateNicknameAPI error:", error);
    throw error;
  }
};
