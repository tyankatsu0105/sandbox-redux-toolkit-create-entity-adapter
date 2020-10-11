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
};

export type InputStyle = 'input' | 'select';
