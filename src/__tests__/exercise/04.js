// form testing
// http://localhost:3000/login

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/login';

test('submitting the form calls onSubmit with username and password', async () => {
  const handleSubmit = jest.fn();
  const testUser = 'user';
  const testPass = 'pass';

  render(<Login onSubmit={handleSubmit} />);
  const usernameField = screen.getByLabelText('Username');
  const passwordField = screen.getByLabelText('Password');

  await userEvent.type(usernameField, testUser);
  await userEvent.type(passwordField, testPass);
  const submitBtn = screen.getByRole('button', { name: /submit/i });

  await userEvent.click(submitBtn);

  expect(handleSubmit).toHaveBeenCalledWith({
    username: testUser,
    password: testPass,
  });
});

/*
eslint
  no-unused-vars: "off",
*/
