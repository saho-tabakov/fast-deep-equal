/**
 * Checks if the specified values are strictly equal to one another.
 *
 * Uses deep equality with objects, arrays and other complex types.
 * Checks equality of `Date` and `RegExp` objects by value.
 *
 * @param a - The first value to compare.
 * @param b - The second value to compare.
 * @returns - `true` if the values are deeply equal, `false` otherwise.
 */
declare function equal<T>(actual: any, expected: T): actual is T
export = equal
