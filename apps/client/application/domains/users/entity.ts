export type User = {
  id: number;
  name: string;
  age: number;
};

export type FormData = {
  addOne: User;
  addMany: {
    users: User[];
  };
};
