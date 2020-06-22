// Обход кривых тайпингов, например в eventemitter3
// (раньше он и просто интерфейс принимал)
export type InterfaceToIndexed<I extends {}> = {
  [K in keyof I]: I[K];
};

export type EnumLike<T extends string> = { [K in T]: K };
