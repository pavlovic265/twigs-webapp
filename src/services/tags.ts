import requests from "utils/request";
import { Tag, AddTag } from "store/tags/types";

export async function addTag(tag: AddTag): Promise<Tag> {
  const response = await requests.post("/labels", { label: tag });

  const { label } = response.data;

  return label;
}

export async function removeTag(tagId: string): Promise<void> {
  await requests.delete(`/labels/${tagId}`);
}

export async function editTag(tag: Tag): Promise<void> {
  await requests.put("/labels", { tag });
}
