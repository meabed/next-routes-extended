import {IncomingMessage, ServerResponse} from "http";
import {ComponentType} from "react";
import {LinkProps as NextLinkProps} from "next/link";
import {SingletonRouter} from "next/router";
import {NextServer} from "next/dist/server/next";
import {PrefetchOptions} from "next/dist/next-server/lib/router/router";

export type HTTPHandler = (
  request: IncomingMessage,
  response: ServerResponse
) => void;

export type RouteParams = {
  [k: string]: string | number;
};

export interface LinkProps extends Partial<NextLinkProps> {
  route: string;
  params?: RouteParams;
}

export interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export interface Router extends SingletonRouter {
  pushRoute(
    route: string,
    params?: RouteParams,
    options?: TransitionOptions
  ): Promise<boolean>;

  replaceRoute(
    route: string,
    params?: RouteParams,
    options?: TransitionOptions
  ): Promise<boolean>;

  prefetchRoute(
    route: string,
    params?: RouteParams,
    options?: PrefetchOptions
  ): Promise<React.ComponentType<any>>;
}

export interface Registry {
  getRequestHandler(app: NextServer, custom?: HTTPHandler): HTTPHandler;

  add(name: string, pattern?: string, page?: string): this;

  add(pattern: string, page: string): this;

  add(options: { name: string; pattern?: string; page?: string }): this;

  Link: ComponentType<LinkProps>;
  Router: Router;
}

export default class Routes implements Registry {

  getRequestHandler(app: NextServer, custom?: HTTPHandler): HTTPHandler;

  add(name: string, pattern?: string, page?: string): this;
  add(pattern: string, page: string): this;
  add(options: { name: string; pattern?: string; page?: string }): this;

  Link: ComponentType<LinkProps>;
  Router: Router;
}
