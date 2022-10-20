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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJjcmVhdGVHcmFwaFFMSGFuZGxlciIsImdldEN1cnJlbnRVc2VyIiwiZGIiLCJsb2dnZXIiLCJoYW5kbGVyIiwibG9nZ2VyQ29uZmlnIiwib3B0aW9ucyIsImRpcmVjdGl2ZXMiLCJzZGxzIiwic2VydmljZXMiLCJvbkV4Y2VwdGlvbiIsIiRkaXNjb25uZWN0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vYXBpL3NyYy9mdW5jdGlvbnMvZ3JhcGhxbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHcmFwaFFMSGFuZGxlciB9IGZyb20gJ0ByZWR3b29kanMvZ3JhcGhxbC1zZXJ2ZXInXG5cbmltcG9ydCBkaXJlY3RpdmVzIGZyb20gJ3NyYy9kaXJlY3RpdmVzLyoqLyoue2pzLHRzfSdcbmltcG9ydCBzZGxzIGZyb20gJ3NyYy9ncmFwaHFsLyoqLyouc2RsLntqcyx0c30nXG5pbXBvcnQgc2VydmljZXMgZnJvbSAnc3JjL3NlcnZpY2VzLyoqLyoue2pzLHRzfSdcblxuaW1wb3J0IHsgZ2V0Q3VycmVudFVzZXIgfSBmcm9tICdzcmMvbGliL2F1dGgnXG5pbXBvcnQgeyBkYiB9IGZyb20gJ3NyYy9saWIvZGInXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tICdzcmMvbGliL2xvZ2dlcidcblxuZXhwb3J0IGNvbnN0IGhhbmRsZXIgPSBjcmVhdGVHcmFwaFFMSGFuZGxlcih7XG4gIGdldEN1cnJlbnRVc2VyLFxuICBsb2dnZXJDb25maWc6IHsgbG9nZ2VyLCBvcHRpb25zOiB7fSB9LFxuICBkaXJlY3RpdmVzLFxuICBzZGxzLFxuICBzZXJ2aWNlcyxcbiAgb25FeGNlcHRpb246ICgpID0+IHtcbiAgICAvLyBEaXNjb25uZWN0IGZyb20geW91ciBkYXRhYmFzZSB3aXRoIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgZGIuJGRpc2Nvbm5lY3QoKVxuICB9LFxufSlcbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0Esb0JBQW9CLFFBQVEsMkJBQTJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1oRSxTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLEVBQUU7QUFDWCxTQUFTQyxNQUFNO0FBRWYsT0FBTyxNQUFNQyxPQUFPLEdBQUdKLG9CQUFvQixDQUFDO0VBQzFDQyxjQUFjO0VBQ2RJLFlBQVksRUFBRTtJQUFFRixNQUFNO0lBQUVHLE9BQU8sRUFBRSxDQUFDO0VBQUUsQ0FBQztFQUNyQ0MsVUFBVTtFQUNWQyxJQUFJO0VBQ0pDLFFBQVE7RUFDUkMsV0FBVyxFQUFFLE1BQU07SUFDakI7SUFDQVIsRUFBRSxDQUFDUyxXQUFXLEVBQUU7RUFDbEI7QUFDRixDQUFDLENBQUMifQ==