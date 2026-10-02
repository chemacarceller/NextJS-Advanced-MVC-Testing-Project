'use client';

import ErrorPage from './error';

export default function Page() {
  
  const mockError = new Error("The requested page does not exist");
  Object.assign(mockError, { cause: { statusCode: 404 } });

  return <ErrorPage error={mockError} reset={() => {}} />;
  
   // In not-found.tsx, you cannot throw an error in production; it works in development, just as it does on other pages.
  //throw new Error("⚠️ The requested page does not exist");
  //return <></>; 
}