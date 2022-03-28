interface ErrorHandler {
  [key: string]: string;
}

const err: ErrorHandler = {
  username: 'Username should be more than or eq 6 char',
  email: 'blah blah',
};
