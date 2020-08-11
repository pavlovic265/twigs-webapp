// import requests from "utils/request";
// import { Label, AddLabel } from "store/labels/types";

// export async function addLabel(payload: AddLabel): Promise<Label> {
//   const response = await requests.post("/labels", { label: payload });

//   const { label } = response.data;

//   return label;
// }

// export async function removeLabel(payload: string): Promise<void> {
//   await requests.delete(`/labels/${payload}`);
// }

// export async function editLabel(label: Label): Promise<void> {
//   await requests.put("/labels", { label });
// }
