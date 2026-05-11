import React from 'react';

export function Button({ asChild = false, className = '', size, variant, children, ...props }) {
  const classes = `inline-flex items-center justify-center font-semibold transition disabled:opacity-50 ${className}`;
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: `${classes} ${children.props.className || ''}`, ...props });
  }
  return <button className={classes} {...props}>{children}</button>;
}
