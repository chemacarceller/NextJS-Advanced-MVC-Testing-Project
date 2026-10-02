'use client';

import ErrorPage from './error';

export default function Page() {
  
  const mockError = new Error("La página solicitada no existe.");
  Object.assign(mockError, { cause: { statusCode: 404 } });

  return <ErrorPage error={mockError} reset={() => {}} />;
}