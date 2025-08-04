import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const Roles = (...roles: string[]) => SetMetadata('roles', roles);
