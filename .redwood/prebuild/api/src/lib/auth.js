import _Array$isArray from "@babel/runtime-corejs3/core-js/array/is-array";
import _includesInstanceProperty from "@babel/runtime-corejs3/core-js/instance/includes";
import _someInstanceProperty from "@babel/runtime-corejs3/core-js/instance/some";
import { AuthenticationError, ForbiddenError, context } from '@redwoodjs/graphql-server';
import { db } from './db';

/**
 * The session object sent in as the first argument to getCurrentUser() will
 * have a single key `id` containing the unique ID of the logged in user
 * (whatever field you set as `authFields.id` in your auth function config).
 * You'll need to update the call to `db` below if you use a different model
 * name or unique field name, for example:
 *
 *   return await db.profile.findUnique({ where: { email: session.id } })
 *                   ───┬───                       ──┬──
 *      model accessor ─┘      unique id field name ─┘
 *
 * !! BEWARE !! Anything returned from this function will be available to the
 * client--it becomes the content of `currentUser` on the web side (as well as
 * `context.currentUser` on the api side). You should carefully add additional
 * fields to the `select` object below once you've decided they are safe to be
 * seen if someone were to open the Web Inspector in their browser.
 */
export const getCurrentUser = async session => {
  if (!session || typeof session.id !== 'number') {
    throw new Error('Invalid session');
  }
  return await db.user.findUnique({
    where: {
      id: session.id
    },
    select: {
      id: true,
      email: true
    }
  });
};

/**
 * The user is authenticated if there is a currentUser in the context
 *
 * @returns {boolean} - If the currentUser is authenticated
 */
export const isAuthenticated = () => {
  return !!context.currentUser;
};

/**
 * When checking role membership, roles can be a single value, a list, or none.
 * You can use Prisma enums too (if you're using them for roles), just import your enum type from `@prisma/client`
 */

/**
 * Checks if the currentUser is authenticated (and assigned one of the given roles)
 *
 * @param roles: {@link AllowedRoles} - Checks if the currentUser is assigned one of these roles
 *
 * @returns {boolean} - Returns true if the currentUser is logged in and assigned one of the given roles,
 * or when no roles are provided to check against. Otherwise returns false.
 */
export const hasRole = roles => {
  if (!isAuthenticated()) {
    return false;
  }
  const currentUserRoles = context.currentUser?.roles;
  if (typeof roles === 'string') {
    if (typeof currentUserRoles === 'string') {
      // roles to check is a string, currentUser.roles is a string
      return currentUserRoles === roles;
    } else if (_Array$isArray(currentUserRoles)) {
      // roles to check is a string, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => roles === allowedRole);
    }
  }
  if (_Array$isArray(roles)) {
    if (_Array$isArray(currentUserRoles)) {
      // roles to check is an array, currentUser.roles is an array
      return currentUserRoles?.some(allowedRole => _includesInstanceProperty(roles).call(roles, allowedRole));
    } else if (typeof currentUserRoles === 'string') {
      // roles to check is an array, currentUser.roles is a string
      return _someInstanceProperty(roles).call(roles, allowedRole => currentUserRoles === allowedRole);
    }
  }

  // roles not found
  return false;
};

/**
 * Use requireAuth in your services to check that a user is logged in,
 * whether or not they are assigned a role, and optionally raise an
 * error if they're not.
 *
 * @param roles: {@link AllowedRoles} - When checking role membership, these roles grant access.
 *
 * @returns - If the currentUser is authenticated (and assigned one of the given roles)
 *
 * @throws {@link AuthenticationError} - If the currentUser is not authenticated
 * @throws {@link ForbiddenError} If the currentUser is not allowed due to role permissions
 *
 * @see https://github.com/redwoodjs/redwood/tree/main/packages/auth for examples
 */
export const requireAuth = ({
  roles
} = {}) => {
  if (!isAuthenticated()) {
    throw new AuthenticationError("You don't have permission to do that.");
  }
  if (roles && !hasRole(roles)) {
    throw new ForbiddenError("You don't have access to do that.");
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBdXRoZW50aWNhdGlvbkVycm9yIiwiRm9yYmlkZGVuRXJyb3IiLCJjb250ZXh0IiwiZGIiLCJnZXRDdXJyZW50VXNlciIsInNlc3Npb24iLCJpZCIsIkVycm9yIiwidXNlciIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsInNlbGVjdCIsImVtYWlsIiwiaXNBdXRoZW50aWNhdGVkIiwiY3VycmVudFVzZXIiLCJoYXNSb2xlIiwicm9sZXMiLCJjdXJyZW50VXNlclJvbGVzIiwic29tZSIsImFsbG93ZWRSb2xlIiwicmVxdWlyZUF1dGgiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9hcGkvc3JjL2xpYi9hdXRoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1dGhlbnRpY2F0aW9uRXJyb3IsIEZvcmJpZGRlbkVycm9yIH0gZnJvbSAnQHJlZHdvb2Rqcy9ncmFwaHFsLXNlcnZlcidcblxuaW1wb3J0IHR5cGUgeyBEZWNvZGVkIH0gZnJvbSAnQHJlZHdvb2Rqcy9hcGknXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZGInXG5cbi8qKlxuICogVGhlIHNlc3Npb24gb2JqZWN0IHNlbnQgaW4gYXMgdGhlIGZpcnN0IGFyZ3VtZW50IHRvIGdldEN1cnJlbnRVc2VyKCkgd2lsbFxuICogaGF2ZSBhIHNpbmdsZSBrZXkgYGlkYCBjb250YWluaW5nIHRoZSB1bmlxdWUgSUQgb2YgdGhlIGxvZ2dlZCBpbiB1c2VyXG4gKiAod2hhdGV2ZXIgZmllbGQgeW91IHNldCBhcyBgYXV0aEZpZWxkcy5pZGAgaW4geW91ciBhdXRoIGZ1bmN0aW9uIGNvbmZpZykuXG4gKiBZb3UnbGwgbmVlZCB0byB1cGRhdGUgdGhlIGNhbGwgdG8gYGRiYCBiZWxvdyBpZiB5b3UgdXNlIGEgZGlmZmVyZW50IG1vZGVsXG4gKiBuYW1lIG9yIHVuaXF1ZSBmaWVsZCBuYW1lLCBmb3IgZXhhbXBsZTpcbiAqXG4gKiAgIHJldHVybiBhd2FpdCBkYi5wcm9maWxlLmZpbmRVbmlxdWUoeyB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi5pZCB9IH0pXG4gKiAgICAgICAgICAgICAgICAgICDilIDilIDilIDilKzilIDilIDilIAgICAgICAgICAgICAgICAgICAgICAgIOKUgOKUgOKUrOKUgOKUgFxuICogICAgICBtb2RlbCBhY2Nlc3NvciDilIDilJggICAgICB1bmlxdWUgaWQgZmllbGQgbmFtZSDilIDilJhcbiAqXG4gKiAhISBCRVdBUkUgISEgQW55dGhpbmcgcmV0dXJuZWQgZnJvbSB0aGlzIGZ1bmN0aW9uIHdpbGwgYmUgYXZhaWxhYmxlIHRvIHRoZVxuICogY2xpZW50LS1pdCBiZWNvbWVzIHRoZSBjb250ZW50IG9mIGBjdXJyZW50VXNlcmAgb24gdGhlIHdlYiBzaWRlIChhcyB3ZWxsIGFzXG4gKiBgY29udGV4dC5jdXJyZW50VXNlcmAgb24gdGhlIGFwaSBzaWRlKS4gWW91IHNob3VsZCBjYXJlZnVsbHkgYWRkIGFkZGl0aW9uYWxcbiAqIGZpZWxkcyB0byB0aGUgYHNlbGVjdGAgb2JqZWN0IGJlbG93IG9uY2UgeW91J3ZlIGRlY2lkZWQgdGhleSBhcmUgc2FmZSB0byBiZVxuICogc2VlbiBpZiBzb21lb25lIHdlcmUgdG8gb3BlbiB0aGUgV2ViIEluc3BlY3RvciBpbiB0aGVpciBicm93c2VyLlxuICovXG5leHBvcnQgY29uc3QgZ2V0Q3VycmVudFVzZXIgPSBhc3luYyAoc2Vzc2lvbjogRGVjb2RlZCkgPT4ge1xuICBpZiAoIXNlc3Npb24gfHwgdHlwZW9mIHNlc3Npb24uaWQgIT09ICdudW1iZXInKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHNlc3Npb24nKVxuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGRiLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IHNlc3Npb24uaWQgfSxcbiAgICBzZWxlY3Q6IHsgaWQ6IHRydWUsIGVtYWlsOiB0cnVlIH0sXG4gIH0pXG59XG5cbi8qKlxuICogVGhlIHVzZXIgaXMgYXV0aGVudGljYXRlZCBpZiB0aGVyZSBpcyBhIGN1cnJlbnRVc2VyIGluIHRoZSBjb250ZXh0XG4gKlxuICogQHJldHVybnMge2Jvb2xlYW59IC0gSWYgdGhlIGN1cnJlbnRVc2VyIGlzIGF1dGhlbnRpY2F0ZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICgpOiBib29sZWFuID0+IHtcbiAgcmV0dXJuICEhY29udGV4dC5jdXJyZW50VXNlclxufVxuXG4vKipcbiAqIFdoZW4gY2hlY2tpbmcgcm9sZSBtZW1iZXJzaGlwLCByb2xlcyBjYW4gYmUgYSBzaW5nbGUgdmFsdWUsIGEgbGlzdCwgb3Igbm9uZS5cbiAqIFlvdSBjYW4gdXNlIFByaXNtYSBlbnVtcyB0b28gKGlmIHlvdSdyZSB1c2luZyB0aGVtIGZvciByb2xlcyksIGp1c3QgaW1wb3J0IHlvdXIgZW51bSB0eXBlIGZyb20gYEBwcmlzbWEvY2xpZW50YFxuICovXG50eXBlIEFsbG93ZWRSb2xlcyA9IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkXG5cbi8qKlxuICogQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcbiAqXG4gKiBAcGFyYW0gcm9sZXM6IHtAbGluayBBbGxvd2VkUm9sZXN9IC0gQ2hlY2tzIGlmIHRoZSBjdXJyZW50VXNlciBpcyBhc3NpZ25lZCBvbmUgb2YgdGhlc2Ugcm9sZXNcbiAqXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gLSBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnRVc2VyIGlzIGxvZ2dlZCBpbiBhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcyxcbiAqIG9yIHdoZW4gbm8gcm9sZXMgYXJlIHByb3ZpZGVkIHRvIGNoZWNrIGFnYWluc3QuIE90aGVyd2lzZSByZXR1cm5zIGZhbHNlLlxuICovXG5leHBvcnQgY29uc3QgaGFzUm9sZSA9IChyb2xlczogQWxsb3dlZFJvbGVzKTogYm9vbGVhbiA9PiB7XG4gIGlmICghaXNBdXRoZW50aWNhdGVkKCkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IGN1cnJlbnRVc2VyUm9sZXMgPSBjb250ZXh0LmN1cnJlbnRVc2VyPy5yb2xlc1xuXG4gIGlmICh0eXBlb2Ygcm9sZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHR5cGVvZiBjdXJyZW50VXNlclJvbGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYSBzdHJpbmcsIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGEgc3RyaW5nXG4gICAgICByZXR1cm4gY3VycmVudFVzZXJSb2xlcyA9PT0gcm9sZXNcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFVzZXJSb2xlcykpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGEgc3RyaW5nLCBjdXJyZW50VXNlci5yb2xlcyBpcyBhbiBhcnJheVxuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXM/LnNvbWUoKGFsbG93ZWRSb2xlKSA9PiByb2xlcyA9PT0gYWxsb3dlZFJvbGUpXG4gICAgfVxuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkocm9sZXMpKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFVzZXJSb2xlcykpIHtcbiAgICAgIC8vIHJvbGVzIHRvIGNoZWNrIGlzIGFuIGFycmF5LCBjdXJyZW50VXNlci5yb2xlcyBpcyBhbiBhcnJheVxuICAgICAgcmV0dXJuIGN1cnJlbnRVc2VyUm9sZXM/LnNvbWUoKGFsbG93ZWRSb2xlKSA9PlxuICAgICAgICByb2xlcy5pbmNsdWRlcyhhbGxvd2VkUm9sZSlcbiAgICAgIClcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBjdXJyZW50VXNlclJvbGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gcm9sZXMgdG8gY2hlY2sgaXMgYW4gYXJyYXksIGN1cnJlbnRVc2VyLnJvbGVzIGlzIGEgc3RyaW5nXG4gICAgICByZXR1cm4gcm9sZXMuc29tZSgoYWxsb3dlZFJvbGUpID0+IGN1cnJlbnRVc2VyUm9sZXMgPT09IGFsbG93ZWRSb2xlKVxuICAgIH1cbiAgfVxuXG4gIC8vIHJvbGVzIG5vdCBmb3VuZFxuICByZXR1cm4gZmFsc2Vcbn1cblxuLyoqXG4gKiBVc2UgcmVxdWlyZUF1dGggaW4geW91ciBzZXJ2aWNlcyB0byBjaGVjayB0aGF0IGEgdXNlciBpcyBsb2dnZWQgaW4sXG4gKiB3aGV0aGVyIG9yIG5vdCB0aGV5IGFyZSBhc3NpZ25lZCBhIHJvbGUsIGFuZCBvcHRpb25hbGx5IHJhaXNlIGFuXG4gKiBlcnJvciBpZiB0aGV5J3JlIG5vdC5cbiAqXG4gKiBAcGFyYW0gcm9sZXM6IHtAbGluayBBbGxvd2VkUm9sZXN9IC0gV2hlbiBjaGVja2luZyByb2xlIG1lbWJlcnNoaXAsIHRoZXNlIHJvbGVzIGdyYW50IGFjY2Vzcy5cbiAqXG4gKiBAcmV0dXJucyAtIElmIHRoZSBjdXJyZW50VXNlciBpcyBhdXRoZW50aWNhdGVkIChhbmQgYXNzaWduZWQgb25lIG9mIHRoZSBnaXZlbiByb2xlcylcbiAqXG4gKiBAdGhyb3dzIHtAbGluayBBdXRoZW50aWNhdGlvbkVycm9yfSAtIElmIHRoZSBjdXJyZW50VXNlciBpcyBub3QgYXV0aGVudGljYXRlZFxuICogQHRocm93cyB7QGxpbmsgRm9yYmlkZGVuRXJyb3J9IElmIHRoZSBjdXJyZW50VXNlciBpcyBub3QgYWxsb3dlZCBkdWUgdG8gcm9sZSBwZXJtaXNzaW9uc1xuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3JlZHdvb2Rqcy9yZWR3b29kL3RyZWUvbWFpbi9wYWNrYWdlcy9hdXRoIGZvciBleGFtcGxlc1xuICovXG5leHBvcnQgY29uc3QgcmVxdWlyZUF1dGggPSAoeyByb2xlcyB9OiB7IHJvbGVzPzogQWxsb3dlZFJvbGVzIH0gPSB7fSkgPT4ge1xuICBpZiAoIWlzQXV0aGVudGljYXRlZCgpKSB7XG4gICAgdGhyb3cgbmV3IEF1dGhlbnRpY2F0aW9uRXJyb3IoXCJZb3UgZG9uJ3QgaGF2ZSBwZXJtaXNzaW9uIHRvIGRvIHRoYXQuXCIpXG4gIH1cblxuICBpZiAocm9sZXMgJiYgIWhhc1JvbGUocm9sZXMpKSB7XG4gICAgdGhyb3cgbmV3IEZvcmJpZGRlbkVycm9yKFwiWW91IGRvbid0IGhhdmUgYWNjZXNzIHRvIGRvIHRoYXQuXCIpXG4gIH1cbn1cbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsU0FBU0EsbUJBQW1CLEVBQUVDLGNBQWMsRUF1Q2pDQyxPQUFPLFFBdkNrQywyQkFBMkI7QUFHL0UsU0FBU0MsRUFBRSxRQUFRLE1BQU07O0FBRXpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLGNBQWMsR0FBRyxNQUFPQyxPQUFnQixJQUFLO0VBQ3hELElBQUksQ0FBQ0EsT0FBTyxJQUFJLE9BQU9BLE9BQU8sQ0FBQ0MsRUFBRSxLQUFLLFFBQVEsRUFBRTtJQUM5QyxNQUFNLElBQUlDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQztFQUNwQztFQUVBLE9BQU8sTUFBTUosRUFBRSxDQUFDSyxJQUFJLENBQUNDLFVBQVUsQ0FBQztJQUM5QkMsS0FBSyxFQUFFO01BQUVKLEVBQUUsRUFBRUQsT0FBTyxDQUFDQztJQUFHLENBQUM7SUFDekJLLE1BQU0sRUFBRTtNQUFFTCxFQUFFLEVBQUUsSUFBSTtNQUFFTSxLQUFLLEVBQUU7SUFBSztFQUNsQyxDQUFDLENBQUM7QUFDSixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLE1BQU1DLGVBQWUsR0FBRyxNQUFlO0VBQzVDLE9BQU8sQ0FBQyxDQUFDWCxPQUFPLENBQUNZLFdBQVc7QUFDOUIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQyxPQUFPLEdBQUlDLEtBQW1CLElBQWM7RUFDdkQsSUFBSSxDQUFDSCxlQUFlLEVBQUUsRUFBRTtJQUN0QixPQUFPLEtBQUs7RUFDZDtFQUVBLE1BQU1JLGdCQUFnQixHQUFHZixPQUFPLENBQUNZLFdBQVcsRUFBRUUsS0FBSztFQUVuRCxJQUFJLE9BQU9BLEtBQUssS0FBSyxRQUFRLEVBQUU7SUFDN0IsSUFBSSxPQUFPQyxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7TUFDeEM7TUFDQSxPQUFPQSxnQkFBZ0IsS0FBS0QsS0FBSztJQUNuQyxDQUFDLE1BQU0sSUFBSSxlQUFjQyxnQkFBZ0IsQ0FBQyxFQUFFO01BQzFDO01BQ0EsT0FBT0EsZ0JBQWdCLEVBQUVDLElBQUksQ0FBRUMsV0FBVyxJQUFLSCxLQUFLLEtBQUtHLFdBQVcsQ0FBQztJQUN2RTtFQUNGO0VBRUEsSUFBSSxlQUFjSCxLQUFLLENBQUMsRUFBRTtJQUN4QixJQUFJLGVBQWNDLGdCQUFnQixDQUFDLEVBQUU7TUFDbkM7TUFDQSxPQUFPQSxnQkFBZ0IsRUFBRUMsSUFBSSxDQUFFQyxXQUFXLElBQ3hDLDBCQUFBSCxLQUFLLE9BQUxBLEtBQUssRUFBVUcsV0FBVyxDQUFDLENBQzVCO0lBQ0gsQ0FBQyxNQUFNLElBQUksT0FBT0YsZ0JBQWdCLEtBQUssUUFBUSxFQUFFO01BQy9DO01BQ0EsT0FBTyxzQkFBQUQsS0FBSyxPQUFMQSxLQUFLLEVBQU9HLFdBQVcsSUFBS0YsZ0JBQWdCLEtBQUtFLFdBQVcsQ0FBQztJQUN0RTtFQUNGOztFQUVBO0VBQ0EsT0FBTyxLQUFLO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxNQUFNQyxXQUFXLEdBQUcsQ0FBQztFQUFFSjtBQUFnQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7RUFDdkUsSUFBSSxDQUFDSCxlQUFlLEVBQUUsRUFBRTtJQUN0QixNQUFNLElBQUliLG1CQUFtQixDQUFDLHVDQUF1QyxDQUFDO0VBQ3hFO0VBRUEsSUFBSWdCLEtBQUssSUFBSSxDQUFDRCxPQUFPLENBQUNDLEtBQUssQ0FBQyxFQUFFO0lBQzVCLE1BQU0sSUFBSWYsY0FBYyxDQUFDLG1DQUFtQyxDQUFDO0VBQy9EO0FBQ0YsQ0FBQyJ9