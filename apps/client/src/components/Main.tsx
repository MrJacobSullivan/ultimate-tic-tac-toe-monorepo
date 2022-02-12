import * as React from 'react';
import { MainContainer } from './Main.styled';

interface IProps {
  children: React.ReactChildren | React.ReactElement;
}

const Main = ({ children }: IProps) => (
  <MainContainer>{children}</MainContainer>
);

export default Main;
