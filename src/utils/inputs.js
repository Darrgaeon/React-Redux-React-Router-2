export const testPassword = (password: string): boolean => {
  return !!password && password.length >= 4
};