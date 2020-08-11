function getItem(key: string) {
  try {
    return localStorage.getItem(attachPrefix(key));
  } catch (e) {
    console.error(e);
  }
}

function setItem(key: string, value: any) {
  return localStorage.setItem(attachPrefix(key), value);
}

function removeItem(key: string): void {
  localStorage.removeItem(attachPrefix(key));
}

function clearItems() {
  localStorage.clear();
}

function attachPrefix(key: string) {
  return `MEMBER_BERRIES_${key.toLocaleUpperCase()}`;
}

export default {
  getItem,
  setItem,
  removeItem,
  clearItems,
};
