import React from 'react';
import { motion } from 'framer-motion';

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[80vh]">
      {children}
    </div>
  );
};

export default PageWrapper;
