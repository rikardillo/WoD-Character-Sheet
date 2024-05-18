import { type Crud } from "..";

export const localStorageCrud = <T>(
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
    create: async (entity: any) => {
      const data = loadEntities();
      const result = {
        id: crypto.randomUUID(),
        ...entity,
        createdAt: new Date().toISOString(),
      };
      setEntities(data.concat(result));
      return result;
    },
    read: async (id: string) => {
      const data = loadEntities();
      const item = data.find((i) => i.id === id);
      return item;
    },
    filter: async (
      predicate?: (value: any, index: number, array: any[]) => Promise<T[]>
    ) => {
      const data = loadEntities();
      return predicate ? data.filter(predicate) : data;
    },
    update: async (id: string, payload: any) => {
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
    delete: async (id: string) => {
      const data = loadEntities();
      setEntities(data.filter((i) => i.id !== id));
      return;
    },
  } as Crud<T>;
};
