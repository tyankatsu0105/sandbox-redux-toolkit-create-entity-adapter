import * as React from 'react';
import * as ReduxToolkit from '@reduxjs/toolkit';
import styled from 'styled-components';

import * as MaterialUI from '@material-ui/core';

import * as Store from '~client/store';

import * as ReactHookForm from 'react-hook-form';

import * as UsersEntity from '~client/application/domains/users/entity';

// ===============================
// types
// ===============================
type Props = {
  onSubmit: () => void;
  hookFormMethods: ReactHookForm.UseFormMethods<
    UsersEntity.FormData['selectId']
  >;
  entityByID: ReturnType<
    ReduxToolkit.EntitySelectors<
      UsersEntity.User,
      Store.RootState
    >['selectById']
  >;
  ids: ReturnType<
    ReduxToolkit.EntitySelectors<UsersEntity.User, Store.RootState>['selectIds']
  >;
  inputStyle: UsersEntity.InputStyle;
  handleChangeInputStyle: (inputStyle: UsersEntity.InputStyle) => void;
};

// ===============================
// component
// ===============================
export const Component = (props: Props): React.ReactElement => {
  return (
    <>
      <MaterialUI.Box display="flex">
        <MaterialUI.Box>
          <MaterialUI.Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => props.handleChangeInputStyle('input')}
          >
            input
          </MaterialUI.Button>
        </MaterialUI.Box>

        <MaterialUI.Box marginLeft={2}>
          <MaterialUI.Button
            variant="contained"
            color="primary"
            type="button"
            onClick={() => props.handleChangeInputStyle('select')}
          >
            select
          </MaterialUI.Button>
        </MaterialUI.Box>
      </MaterialUI.Box>
      <form onSubmit={props.onSubmit}>
        <MaterialUI.Box marginTop={1}>
          {props.inputStyle === 'input' && (
            <MaterialUI.TextField
              name="id"
              label="input id"
              variant="outlined"
              type="number"
              inputRef={props.hookFormMethods.register}
              error={!!props.hookFormMethods.errors.id}
              helperText={props.hookFormMethods.errors.id?.message}
            />
          )}

          {props.inputStyle === 'select' && (
            <MaterialUI.Box width={218}>
              <ReactHookForm.Controller
                name="id"
                control={props.hookFormMethods.control}
                as={
                  <MaterialUI.TextField
                    select
                    label="select id"
                    variant="outlined"
                    type="number"
                    inputRef={props.hookFormMethods.register}
                    fullWidth
                    error={!!props.hookFormMethods.errors.id}
                    helperText={props.hookFormMethods.errors.id?.message}
                  >
                    {props.ids.map((id) => (
                      <MaterialUI.MenuItem key={id} value={id}>
                        {id}
                      </MaterialUI.MenuItem>
                    ))}
                  </MaterialUI.TextField>
                }
              />
            </MaterialUI.Box>
          )}
        </MaterialUI.Box>

        <MaterialUI.Box marginTop={2}>
          <MaterialUI.Button variant="contained" color="primary" type="submit">
            submit
          </MaterialUI.Button>
        </MaterialUI.Box>
      </form>

      <MaterialUI.Paper>
        <StyledPre>
          <MaterialUI.Typography variant="subtitle2">
            <code>{JSON.stringify(props.entityByID, null, 4)}</code>
          </MaterialUI.Typography>
        </StyledPre>
      </MaterialUI.Paper>
    </>
  );
};

// ===============================
// styles
// ===============================
const StyledPre = styled.pre`
  height: 300px;
  overflow: scroll;
`;
