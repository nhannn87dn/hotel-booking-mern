export const localStorageHelper = {
  get(key) {
      if (typeof window !== 'undefined') {
        // Perform localStorage action
        const stored = localStorage.getItem(key);
        return stored == null ? undefined : JSON.parse(stored);
      }
      return undefined
      
  },
  set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
  },
  update(key, fn) {
      this.store(key, fn(this.load(key)));
  },
  appendItemToArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => [...storage, item]);
  },
  removeItemFromArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => storage.filter(s => s !== item));
  },
  saveItemToObject: (item, storageID) => {
      this.modify(storageID, (storage = {}) => ({...storage, item}));
  },
  //...
};