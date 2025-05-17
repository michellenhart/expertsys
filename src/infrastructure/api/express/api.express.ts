import express, { Express } from "express";
import { Api } from "../api";
import { Route } from "./routes/route";

export class ApiExpress implements Api {
  private app: Express;

  private constructor(routes: Route[]) {
    this.app = express();
    this.app.use(express.json());
    this.addRoutes(routes);
  }

  public static create(routes: Route[]) {
    return new ApiExpress(routes);
  }

  private addRoutes(routes: Route[]) {
    routes.forEach((route) => {
      const path = route.getPath();
      const method = route.getMethod();
      const handler = route.getHandler();

      this.app[method](path, handler);
    });
  }

  start(portNumber: number): void {
    this.app.listen(portNumber, () => {
      console.log(`Server running in port ${portNumber}`)
      this.listRoutes();
    })
  }

  private listRoutes() {
    const routes = this.app._router?.stack || []
      .filter((route: any) => route.route)
      .map((route: any) => {
        return {
          path: route.route.path,
          method: route.route.stack[0].method
        }
      });

    console.log(routes);
  }
}