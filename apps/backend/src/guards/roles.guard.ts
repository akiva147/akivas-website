import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { IS_PUBLIC_KEY } from '../decorators/publicRoute.decorator';
import { ROLES_KEY, Role } from '../decorators/roles.decorator';
import { Request } from '../types/express.type';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  async canActivate(context: ExecutionContext) {
    if (this.devMode()) {
      return true;
    }

    const publicRoute = this.isPublic(context);
    if (publicRoute) return true;

    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles || requiredRoles[0] === Role.AllAuthenticated) {
      return true;
    }

    const req: Request = context.switchToHttp().getRequest();
    const { user }: any = req;

    return requiredRoles.some((role) => user.role.type === role);
  }

  private devMode() {
    if (process.env.NODE_ENV === 'development') {
      return true;
    }
    return false;
  }

  private isPublic(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) return true;

    return false;
  }
}
