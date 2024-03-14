import '../index.css';

import { createContext, useContext } from 'react';

const CmeContext = createContext<{ publishableKey: string } | undefined>(
  undefined,
);

export function CmeProvider({
  publishableKey,
  children,
}: {
  publishableKey: `pk_${string}`;
  children: React.ReactNode;
}) {
  return (
    <CmeContext.Provider value={{ publishableKey }}>
      <div data-cme-component>{children}</div>
    </CmeContext.Provider>
  );
}

export function useCme() {
  const context = useContext(CmeContext);

  if (context === undefined) {
    throw new Error('useCme must be used within a CmeProvider');
  }

  return context;
}
