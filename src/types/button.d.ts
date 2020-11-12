import React from 'react'

export interface ButtonProps {
  children?: React.ReactNode;
  type?: 'ghost' | 'text' | 'toggle' | 'multiselect' | 'split';
  normal?: boolean;
  danger?: boolean;
  safety?: boolean;
  disable?: boolean;
  corner?: false | 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight' | 'leftDiagonal' | 'rightDiagonal' | 'left' | 'right' | 'all'
}
