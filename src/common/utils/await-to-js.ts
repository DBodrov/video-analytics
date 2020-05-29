// Основано на https://github.com/scopsy/await-to-js
// Ошибка и data поменяны местами -- так удобнее обрабатывать http-ответы
/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export function to<T, U = Error>(
  promise: Promise<T>,
  errorExt?: object,
): Promise<[T | undefined, null | U]> {
  return promise
    .then<[T, null]>((data: T) => [data, null])
    .catch<[undefined, U]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [undefined, err];
    });
}
