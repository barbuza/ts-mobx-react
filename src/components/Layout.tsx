import * as React from "react";

export class Layout extends React.Component<void, void> {
  public render() {
    return (
      <div>
        layout
        {this.props.children}
      </div>
    );
  }
}
