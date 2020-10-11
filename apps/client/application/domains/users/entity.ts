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
  setAll: {
    users: User[];
  };
  selectId: Pick<User, 'id'>;
  updateOne: User;
  updateMany: {
    users: User[];
  };
};
