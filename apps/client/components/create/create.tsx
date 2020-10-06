import * as React from 'react';

import * as ReactHookForm from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import * as MaterialUI from '@material-ui/core';

// ===============================
// types
// ===============================
type FormData = {
  name: string;
  age: number;
};

// ===============================
// schema
// ===============================
const schema = yup.object().shape<FormData>({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
});

// ===============================
// component
// ===============================
export const Component: React.FC = (props) => {
  const { register, handleSubmit, watch, errors } = ReactHookForm.useForm<
    FormData
  >({
    resolver: yupResolver(schema),
  });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <MaterialUI.Box>
        <MaterialUI.TextField
          name="name"
          label="name"
          variant="outlined"
          inputRef={register({ required: true })}
          error={!!errors.name}
          helperText={errors.name?.message}
        />
      </MaterialUI.Box>
      <MaterialUI.Box marginTop={2}>
        <MaterialUI.TextField
          name="age"
          label="age"
          variant="outlined"
          type="number"
          inputRef={register({ required: true })}
          error={!!errors.age}
          helperText={errors.age?.message}
        />
      </MaterialUI.Box>

      <MaterialUI.Box marginTop={2}>
        <MaterialUI.Button variant="contained" color="primary" type="submit">
          追加
        </MaterialUI.Button>
      </MaterialUI.Box>
    </form>
  );
};

// ===============================
// styles
// ===============================
