import baseDebug from "debug";
import * as React from "react";

const debug = baseDebug("ts-mobx-react:pages:Index");

export interface IIndexProps {
  index: string;
}

export class Index extends React.Component<IIndexProps, void> {

  public static loadData() {
    debug("load data");
    return Promise.resolve({ index: "index" + Math.random() });
  }

  public render() {
    return (
      <div>{this.props.index}</div>
    );
  }

}
