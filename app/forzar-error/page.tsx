'use client';

import ErrorPage from '../error';

export default function Page() {

  const mockError = new Error('Oops! This is an error triggered for testing purposes.');
  Object.assign(mockError, { cause: { statusCode: 500 } });

  return <ErrorPage error={mockError} reset={() => {}} />;
}