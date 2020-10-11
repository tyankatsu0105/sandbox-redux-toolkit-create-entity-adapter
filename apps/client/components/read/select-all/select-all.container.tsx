import * as React from 'react';
import * as ReactRedux from 'react-redux';

import * as Presentation from './select-all.presentation';

import * as EntitiesUsers from '~client/store/entities/users';

// ===============================
// types
// ===============================

type Props = {};

// ===============================
// component
// ===============================
export const Component: React.FC = (props) => {
  const all = ReactRedux.useSelector(EntitiesUsers.allSelector);

  return <Presentation.Component all={all} />;
};

// ===============================
// styles
// ===============================
