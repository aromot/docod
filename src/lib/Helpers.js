export function makePath(prefix, path) {
  return prefix + path.replace(/^\//, '')
}