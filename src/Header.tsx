import * as React from 'react';

interface IProps {
  name?: string;
}

const Header: React.FC<IProps> = (props: IProps) => (
  <React.Fragment>
    <h1>Hello, {props.name}, Enrico, Kallen, Daniel!</h1> 
    <h2>Welcome to your first Continuous Integration/Continuous Deployment (CI/CD) pipeline.</h2>
  </React.Fragment>
);

Header.defaultProps = {
  name: 'world',
};

export default Header;