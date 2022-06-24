export default function unpackLocalStorage(storageName) {
  const localStorageAppData = localStorage.getItem(storageName);
  if (localStorageAppData) {
    return [true, JSON.parse(localStorageAppData)];
  }
  return [false, {}];
}
