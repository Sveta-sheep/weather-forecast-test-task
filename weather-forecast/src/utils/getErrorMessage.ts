import axios from "axios";

export function getErrorMessage(error: Error): string | null {
  return (
    (axios.isAxiosError(error)
      ? error.response?.data?.message
      : error?.message) ?? null
  );
}
