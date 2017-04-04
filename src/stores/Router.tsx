import { action, computed, observable } from "mobx";
import { createElement } from "react";
import { RouteConfig } from "./RouteConfig";

export class Router {

  @observable
  public path: string;

  @observable.ref
  private data: any;

  @observable
  private dataPath: string;

  @observable
  private dataLoaded: boolean = false;

  private readonly routes: Array<RouteConfig<any>>;
  private readonly loadingElement: JSX.Element;

  public constructor(path: string, routes: Array<RouteConfig<any>>, loadingElement: JSX.Element) {
    this.path = path;
    this.routes = routes;
    this.loadingElement = loadingElement;
  }

  @computed
  public get ready() {
    return this.dataLoaded;
  }

  public run() {
    const route = this.route;
    if (route && this.path !== this.dataPath) {
      this.dataLoaded = false;
      this.dataPath = this.path;
      route.component.loadData().then((data) => {
        this.setData(route.path, data);
      });
    }
  }

  @computed
  public get element(): JSX.Element {
    const route = this.route;
    if (route) {
      if (this.path === this.dataPath) {
        if (this.dataLoaded) {
          return createElement(route.component, this.data);
        }
      }
    }
    return this.loadingElement;
  }

  @action
  private setData(path: string, data: any) {
    if (path === this.dataPath) {
      this.dataLoaded = true;
      this.data = data;
    }
  }

  @computed
  private get route(): RouteConfig<any> | null {
    for (const route of this.routes) {
      if (route.path === this.path) {
        return route;
      }
    }
    return null;
  }

}
