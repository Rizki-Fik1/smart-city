import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Card = ({ className, ...props }) => {
  return (
    <div
      className={twMerge(
        'rounded-md shadow-2xl bg-white overflow-hidden',
        className
      )}
      {...props}
    />
  );
};

export const CardHeader = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge('px-6 py-4 border-b', className)}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({ className, children, ...props }) => {
  return (
    <h3
      className={twMerge('text-lg font-medium text-gray-900', className)}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardContent = ({ className, children, ...props }) => {
  return (
    <div
      className={twMerge('px-6 py-4', className)}
      {...props}
    >
      {children}
    </div>
  );
};