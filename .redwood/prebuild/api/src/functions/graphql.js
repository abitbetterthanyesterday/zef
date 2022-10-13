import { createGraphQLHandler } from '@redwoodjs/graphql-server';
let directives = {};
import * as directives_requireAuth_requireAuth from "../directives/requireAuth/requireAuth";
directives.requireAuth_requireAuth = directives_requireAuth_requireAuth;
import * as directives_skipAuth_skipAuth from "../directives/skipAuth/skipAuth";
directives.skipAuth_skipAuth = directives_skipAuth_skipAuth;
let sdls = {};
import * as sdls_users_sdl from "../graphql/users.sdl";
sdls.users_sdl = sdls_users_sdl;
let services = {};
import * as services_users_users from "../services/users/users";
services.users_users = services_users_users;
import { getCurrentUser } from "../lib/auth";
import { db } from "../lib/db";
import { logger } from "../lib/logger";
export const handler = createGraphQLHandler({
  getCurrentUser,
  loggerConfig: {
    logger,
    options: {}
  },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect();
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVHcmFwaFFMSGFuZGxlciIsImdldEN1cnJlbnRVc2VyIiwiZGIiLCJsb2dnZXIiLCJoYW5kbGVyIiwibG9nZ2VyQ29uZmlnIiwib3B0aW9ucyIsImRpcmVjdGl2ZXMiLCJzZGxzIiwic2VydmljZXMiLCJvbkV4Y2VwdGlvbiIsIiRkaXNjb25uZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9mdW5jdGlvbnMvZ3JhcGhxbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHcmFwaFFMSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCBkaXJlY3RpdmVzIGZyb20gJ3NyYy9kaXJlY3RpdmVzLyoqLyoue2pzLHRzfSdcbmltcG9ydCBzZGxzIGZyb20gJ3NyYy9ncmFwaHFsLyoqLyouc2RsLntqcyx0c30nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdzcmMvbGliL2F1dGgnXG5cbmltcG9ydCB7IGRiIH0gZnJvbSAnc3JjL2xpYi9kYidcbmltcG9ydCB7IGxvZ2dlciB9IGZyb20gJ3NyYy9saWIvbG9nZ2VyJ1xuXG5leHBvcnQgY29uc3QgaGFuZGxlciA9IGNyZWF0ZUdyYXBoUUxIYW5kbGVyKHtcbiAgZ2V0Q3VycmVudFVzZXIsXG4gIGxvZ2dlckNvbmZpZzogeyBsb2dnZXIsIG9wdGlvbnM6IHt9IH0sXG4gIGRpcmVjdGl2ZXMsXG4gIHNkbHMsXG4gIHNlcnZpY2VzLFxuICBvbkV4Y2VwdGlvbjogKCkgPT4ge1xuICAgIC8vIERpc2Nvbm5lY3QgZnJvbSB5b3VyIGRhdGFiYXNlIHdpdGggYW4gdW5oYW5kbGVkIGV4Y2VwdGlvbi5cbiAgICBkYi4kZGlzY29ubmVjdCgpXG4gIH0sXG59KVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxvQkFBb0IsUUFBUSwyQkFBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTWhFLFNBQVNDLGNBQWM7QUFFdkIsU0FBU0MsRUFBRTtBQUNYLFNBQVNDLE1BQU07QUFFZixPQUFPLE1BQU1DLE9BQU8sR0FBR0osb0JBQW9CLENBQUM7RUFDMUNDLGNBQWM7RUFDZEksWUFBWSxFQUFFO0lBQUVGLE1BQU07SUFBRUcsT0FBTyxFQUFFLENBQUM7RUFBRSxDQUFDO0VBQ3JDQyxVQUFVO0VBQ1ZDLElBQUk7RUFDSkMsUUFBUTtFQUNSQyxXQUFXLEVBQUUsTUFBTTtJQUNqQjtJQUNBUixFQUFFLENBQUNTLFdBQVcsRUFBRTtFQUNsQjtBQUNGLENBQUMsQ0FBQyJ9