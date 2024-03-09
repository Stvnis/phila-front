import React, { FC, ReactNode } from 'react';
import { Wrap } from './SectionWrapper.styles';

interface SectionWrapperProps {
  backgroundColor?: string;
  children: ReactNode;
}

export const SectionWrapper: FC<SectionWrapperProps> = ({ backgroundColor, children }) => {
  return <Wrap style={{ backgroundColor }}>{children}</Wrap>;
};
