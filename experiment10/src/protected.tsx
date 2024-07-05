// ProtectedPage.tsx
import React from 'react';

const ProtectedPage: React.FC = () => {
  return (
    <div> 
      <h1>This is the protected page</h1>
      <p>You've logged in via the custom login page.</p> 
    </div>
  );
};

export default ProtectedPage;