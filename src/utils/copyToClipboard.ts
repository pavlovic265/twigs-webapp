import message from "utils/message";

const $textarea = document.createElement("textarea");

$textarea.setAttribute("readonly", "");
$textarea.style.position = "absolute";
$textarea.style.left = "-9999px";

export default function copyToClipboard(text: string) {
  $textarea.value = text;

  document.body.appendChild($textarea);

  $textarea.select();

  document.execCommand("copy");

  document.body.removeChild($textarea);
  message.info("Copied to clipboard");
}
