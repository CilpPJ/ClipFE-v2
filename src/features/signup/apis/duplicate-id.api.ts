import { BASE_URL } from "@/shared";

interface DuplicateIdAPIRequest {
  userId: string;
}

export interface DuplicateIdAPIResponse {
  message: string;
  duplicated: boolean;
}

export const DUPLICATE_ID_API_PATH = (userId: string) => `${BASE_URL}/api/auth/check/duplicateId/${userId}`;

export const duplicateIdAPI = async ({ userId }: DuplicateIdAPIRequest): Promise<DuplicateIdAPIResponse> => {
  try {
    const url = DUPLICATE_ID_API_PATH(userId);

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
      }),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    const data: DuplicateIdAPIResponse = await response.json();
    return data;
  } catch (error) {
    console.error("duplicateNicknameAPI error:", error);
    throw error;
  }
};
