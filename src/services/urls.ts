import requests from "utils/request";
import { Url, AddUrl } from "store/urls/types";

export async function addUrl(payload: AddUrl): Promise<Url> {
  const response = await requests.post("/urls", { url: payload });

  const { url } = response.data;

  return url;
}

export async function removeUrl(payload: string): Promise<void> {
  await requests.delete(`/urls/${payload}`);
}

export async function editUrl(payload: Url): Promise<void> {
  await requests.put("/urls/", { url: payload });
}

export async function fetchTitles(payload: string): Promise<string[]> {
  const response = await requests.get(
    `/urls/titles/${encodeURIComponent(payload)}`,
  );

  const { titles } = response.data;

  return titles;
}
