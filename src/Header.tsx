import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
  <h1>Hello, {props.name}! Welcome to your first Continuous Integration/Continuous Deployment (CI/CD) pipeline.</h1>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;