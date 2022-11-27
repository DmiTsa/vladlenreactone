import { Component } from 'react';
import styleClasses from './Layout.module.css';

class Layout extends Component {
  render() {
    return (
      <div className={styleClasses.Layout}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
