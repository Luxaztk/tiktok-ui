import React from 'react';
import Header from './Header';

function HeaderOnly({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
