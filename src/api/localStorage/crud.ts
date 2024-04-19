export const localStorageCrud = (
  collection: string,
  initialValue: any[] = []
) => {
  const localStorageKey = `${collection}-db`;

  const setEntities = (data: any[]) => {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  };

  const loadEntities = (): any[] => {
    return JSON.parse(localStorage.getItem(localStorageKey) || "[]");
  };

  if (loadEntities().length < 1) {
    setEntities(initialValue);
  }

  return {
    create: (entity: any) => {
      const data = loadEntities();
      const result = {
        id: crypto.randomUUID(),
        ...entity,
        createdAt: new Date().toISOString(),
      };
      setEntities(data.concat(result));
      return result;
    },
    read: (id: string) => {
      const data = loadEntities();
      const item = data.find((i) => i.id === id);
      return item;
    },
    filter: (predicate?: (value: any, index: number, array: any[]) => any) => {
      const data = loadEntities();
      return predicate ? data.filter(predicate) : data;
    },
    update: (id: string, payload: any) => {
      const data = loadEntities();
      const index = data.findIndex((i) => i.id === id);
      if (index > -1) {
        data[index] = {
          ...data[index],
          ...payload,
          updatedAt: new Date().toISOString(),
        };
      }
      setEntities(data);
      return data[index];
    },
    delete: (id: string) => {
      const data = loadEntities();
      setEntities(data.filter((i) => i.id !== id));
      return;
    },
  };
};
