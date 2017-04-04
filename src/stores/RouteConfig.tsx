import { ComponentClass } from "react";

interface IPageConstructor<P> extends ComponentClass<P> {
  loadData(): Promise<P>;
}

export class RouteConfig<P> {
  public readonly path: string;
  public readonly component: IPageConstructor<P>;

  constructor(path: string, component: IPageConstructor<P>) {
    this.path = path;
    this.component = component;
  }
}
