'use client';

import ErrorPage from './error';

export default function NotFound() {
  
  const mockError = new Error("La página solicitada no existe.");
  Object.assign(mockError, { cause: { statusCode: 404 } });

  return <ErrorPage error={mockError} reset={() => {}} />;
}