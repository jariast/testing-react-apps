// form testing
// http://localhost:3000/login

import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../../components/login';

test('submitting the form calls onSubmit with username and password', async () => {
  let submittedData = null;
  const mockData = {
    username: 'testUser',
    password: 'testPass',
  };
  const handleSubmit = data => (submittedData = data);
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  //
  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />);

  const usernameInput = screen.getByRole('textbox', {name: /username/i});
  const passwordInput = screen.getByLabelText(/password/i);
  //
  // 🐨 get the username and password fields via `getByLabelText`
  // 🐨 use `await userEvent.type...` to change the username and password fields to
  //    whatever you want
  //
  await userEvent.type(usernameInput, mockData.username);
  await userEvent.type(passwordInput, mockData.password);
  await userEvent.click(screen.getByRole('button', {name: /submit/i}));
  // 🐨 click on the button with the text "Submit"
  //
  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  expect(submittedData).toEqual(mockData);
});

/*
eslint
  no-unused-vars: "off",
*/
