export function savePhone(phone: string) {
  localStorage.setItem("ourhub_phone", phone);
}

export function getPhone() {
  return localStorage.getItem("ourhub_phone");
}

export function removePhone() {
  localStorage.removeItem("ourhub_phone");
}