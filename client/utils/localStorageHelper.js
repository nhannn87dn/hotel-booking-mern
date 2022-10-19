export const localStorageHelper = {
  get(key) {
      if (typeof window !== 'undefined' && localStorage.hasOwnProperty(key)) {
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
  delete(key){
    localStorage.removeItem(key);
  },
  appendItemToArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => [...storage, item]);
  },
  removeItemFromArray: (item, storageID) => {
      this.modify(storageID, (storage = []) => storage.filter(s => s !== item));
  },
  setItemToObject: (item, storageID) => {
      this.modify(storageID, (storage = {}) => ({...storage, item}));
  },
  getItemObject(key,obj){
    return obj !== undefined && obj[key] ? obj[key] : undefined;
  },
  //...
};