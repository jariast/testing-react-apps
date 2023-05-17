// form testing
// http://localhost:3000/login

import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/login';

test('submitting the form calls onSubmit with username and password', async () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  let submittedData;

  function handleSubmit(data) {
    submittedData = data;
  }
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />);
  const usernameField = screen.getByLabelText('Username');
  const passwordField = screen.getByLabelText('Password');
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  await userEvent.type(usernameField, 'user');
  await userEvent.type(passwordField, 'pass');
  // 🐨 click on the button with the text "Submit"
  const submitBtn = screen.getByRole('button', { name: /submit/i });

  await userEvent.click(submitBtn);

  expect(submittedData).toEqual({ username: 'user', password: 'pass' });
});

/*
eslint
  no-unused-vars: "off",
*/
