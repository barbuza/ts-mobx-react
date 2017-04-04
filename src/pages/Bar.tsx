import baseDebug from "debug";
import * as React from "react";

const debug = baseDebug("ts-mobx-react:pages:Bar");

export interface IBarProps {
  bar: string;
}

export class Bar extends React.Component<IBarProps, void> {

  public static loadData() {
    debug("load data");
    return Promise.resolve({ bar: "bar" + Math.random() });
  }

  public render() {
    return (
      <div>{this.props.bar}</div>
    );
  }

}
