import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (id, content) => {
  console.error('putDb not implemented');
  const contentDB = await openDB("content", 1);
  const tx = contentDB.transaction("content", "readwrite");
  const store = tx.objectStore("content");
  const request = store.put({id: id, content: content});
  const result = await request;
  return result
}

export const getDb = async () => {
  console.error('getDb not implemented');
  const contentDB = await openDB("content", 1);
  const tx = contentDB.transaction('content', 'readonly');
  const store = tx.objectStore('content');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
  return result;
}

initdb();
