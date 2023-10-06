// button.component.tsx

import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material';

import './button.scss';


export const Button = ({ ...rest }: MuiButtonProps) => <div className='revedia-button'><MuiButton {...rest} /></div>;