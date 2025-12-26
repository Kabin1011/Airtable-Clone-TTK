
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Base
 * 
 */
export type Base = $Result.DefaultSelection<Prisma.$BasePayload>
/**
 * Model Table
 * 
 */
export type Table = $Result.DefaultSelection<Prisma.$TablePayload>
/**
 * Model Field
 * 
 */
export type Field = $Result.DefaultSelection<Prisma.$FieldPayload>
/**
 * Model Record
 * 
 */
export type Record = $Result.DefaultSelection<Prisma.$RecordPayload>
/**
 * Model Cell
 * 
 */
export type Cell = $Result.DefaultSelection<Prisma.$CellPayload>
/**
 * Model View
 * 
 */
export type View = $Result.DefaultSelection<Prisma.$ViewPayload>
/**
 * Model Filter
 * 
 */
export type Filter = $Result.DefaultSelection<Prisma.$FilterPayload>
/**
 * Model Sort
 * 
 */
export type Sort = $Result.DefaultSelection<Prisma.$SortPayload>
/**
 * Model HiddenField
 * 
 */
export type HiddenField = $Result.DefaultSelection<Prisma.$HiddenFieldPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const FieldType: {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER',
  DATE: 'DATE',
  CHECKBOX: 'CHECKBOX',
  SELECT: 'SELECT',
  MULTI_SELECT: 'MULTI_SELECT',
  URL: 'URL',
  EMAIL: 'EMAIL',
  PHONE: 'PHONE',
  ATTACHMENT: 'ATTACHMENT',
  LONG_TEXT: 'LONG_TEXT'
};

export type FieldType = (typeof FieldType)[keyof typeof FieldType]


export const FilterOperator: {
  EQUALS: 'EQUALS',
  NOT_EQUALS: 'NOT_EQUALS',
  CONTAINS: 'CONTAINS',
  NOT_CONTAINS: 'NOT_CONTAINS',
  IS_EMPTY: 'IS_EMPTY',
  IS_NOT_EMPTY: 'IS_NOT_EMPTY',
  GREATER_THAN: 'GREATER_THAN',
  LESS_THAN: 'LESS_THAN',
  GREATER_THAN_OR_EQUAL: 'GREATER_THAN_OR_EQUAL',
  LESS_THAN_OR_EQUAL: 'LESS_THAN_OR_EQUAL'
};

export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator]


export const SortDirection: {
  ASC: 'ASC',
  DESC: 'DESC'
};

export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection]

}

export type FieldType = $Enums.FieldType

export const FieldType: typeof $Enums.FieldType

export type FilterOperator = $Enums.FilterOperator

export const FilterOperator: typeof $Enums.FilterOperator

export type SortDirection = $Enums.SortDirection

export const SortDirection: typeof $Enums.SortDirection

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Bases
 * const bases = await prisma.base.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Bases
   * const bases = await prisma.base.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.base`: Exposes CRUD operations for the **Base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bases
    * const bases = await prisma.base.findMany()
    * ```
    */
  get base(): Prisma.BaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.table`: Exposes CRUD operations for the **Table** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tables
    * const tables = await prisma.table.findMany()
    * ```
    */
  get table(): Prisma.TableDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.field`: Exposes CRUD operations for the **Field** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fields
    * const fields = await prisma.field.findMany()
    * ```
    */
  get field(): Prisma.FieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.record`: Exposes CRUD operations for the **Record** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.record.findMany()
    * ```
    */
  get record(): Prisma.RecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cell`: Exposes CRUD operations for the **Cell** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cells
    * const cells = await prisma.cell.findMany()
    * ```
    */
  get cell(): Prisma.CellDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.view`: Exposes CRUD operations for the **View** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.view.findMany()
    * ```
    */
  get view(): Prisma.ViewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.filter`: Exposes CRUD operations for the **Filter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Filters
    * const filters = await prisma.filter.findMany()
    * ```
    */
  get filter(): Prisma.FilterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sort`: Exposes CRUD operations for the **Sort** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sorts
    * const sorts = await prisma.sort.findMany()
    * ```
    */
  get sort(): Prisma.SortDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hiddenField`: Exposes CRUD operations for the **HiddenField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HiddenFields
    * const hiddenFields = await prisma.hiddenField.findMany()
    * ```
    */
  get hiddenField(): Prisma.HiddenFieldDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.1
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Base: 'Base',
    Table: 'Table',
    Field: 'Field',
    Record: 'Record',
    Cell: 'Cell',
    View: 'View',
    Filter: 'Filter',
    Sort: 'Sort',
    HiddenField: 'HiddenField'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "base" | "table" | "field" | "record" | "cell" | "view" | "filter" | "sort" | "hiddenField"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Base: {
        payload: Prisma.$BasePayload<ExtArgs>
        fields: Prisma.BaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findFirst: {
            args: Prisma.BaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          findMany: {
            args: Prisma.BaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          create: {
            args: Prisma.BaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          createMany: {
            args: Prisma.BaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          delete: {
            args: Prisma.BaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          update: {
            args: Prisma.BaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          deleteMany: {
            args: Prisma.BaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>[]
          }
          upsert: {
            args: Prisma.BaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BasePayload>
          }
          aggregate: {
            args: Prisma.BaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBase>
          }
          groupBy: {
            args: Prisma.BaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<BaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.BaseCountArgs<ExtArgs>
            result: $Utils.Optional<BaseCountAggregateOutputType> | number
          }
        }
      }
      Table: {
        payload: Prisma.$TablePayload<ExtArgs>
        fields: Prisma.TableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findFirst: {
            args: Prisma.TableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          findMany: {
            args: Prisma.TableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          create: {
            args: Prisma.TableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          createMany: {
            args: Prisma.TableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          delete: {
            args: Prisma.TableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          update: {
            args: Prisma.TableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          deleteMany: {
            args: Prisma.TableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>[]
          }
          upsert: {
            args: Prisma.TableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TablePayload>
          }
          aggregate: {
            args: Prisma.TableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTable>
          }
          groupBy: {
            args: Prisma.TableGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableCountArgs<ExtArgs>
            result: $Utils.Optional<TableCountAggregateOutputType> | number
          }
        }
      }
      Field: {
        payload: Prisma.$FieldPayload<ExtArgs>
        fields: Prisma.FieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findFirst: {
            args: Prisma.FieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          findMany: {
            args: Prisma.FieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          create: {
            args: Prisma.FieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          createMany: {
            args: Prisma.FieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          delete: {
            args: Prisma.FieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          update: {
            args: Prisma.FieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          deleteMany: {
            args: Prisma.FieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>[]
          }
          upsert: {
            args: Prisma.FieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FieldPayload>
          }
          aggregate: {
            args: Prisma.FieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateField>
          }
          groupBy: {
            args: Prisma.FieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<FieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.FieldCountArgs<ExtArgs>
            result: $Utils.Optional<FieldCountAggregateOutputType> | number
          }
        }
      }
      Record: {
        payload: Prisma.$RecordPayload<ExtArgs>
        fields: Prisma.RecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findFirst: {
            args: Prisma.RecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          findMany: {
            args: Prisma.RecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          create: {
            args: Prisma.RecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          createMany: {
            args: Prisma.RecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          delete: {
            args: Prisma.RecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          update: {
            args: Prisma.RecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          deleteMany: {
            args: Prisma.RecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>[]
          }
          upsert: {
            args: Prisma.RecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RecordPayload>
          }
          aggregate: {
            args: Prisma.RecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRecord>
          }
          groupBy: {
            args: Prisma.RecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<RecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordCountArgs<ExtArgs>
            result: $Utils.Optional<RecordCountAggregateOutputType> | number
          }
        }
      }
      Cell: {
        payload: Prisma.$CellPayload<ExtArgs>
        fields: Prisma.CellFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CellFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CellFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          findFirst: {
            args: Prisma.CellFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CellFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          findMany: {
            args: Prisma.CellFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          create: {
            args: Prisma.CellCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          createMany: {
            args: Prisma.CellCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CellCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          delete: {
            args: Prisma.CellDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          update: {
            args: Prisma.CellUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          deleteMany: {
            args: Prisma.CellDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CellUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CellUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>[]
          }
          upsert: {
            args: Prisma.CellUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CellPayload>
          }
          aggregate: {
            args: Prisma.CellAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCell>
          }
          groupBy: {
            args: Prisma.CellGroupByArgs<ExtArgs>
            result: $Utils.Optional<CellGroupByOutputType>[]
          }
          count: {
            args: Prisma.CellCountArgs<ExtArgs>
            result: $Utils.Optional<CellCountAggregateOutputType> | number
          }
        }
      }
      View: {
        payload: Prisma.$ViewPayload<ExtArgs>
        fields: Prisma.ViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findFirst: {
            args: Prisma.ViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          findMany: {
            args: Prisma.ViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          create: {
            args: Prisma.ViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          createMany: {
            args: Prisma.ViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          delete: {
            args: Prisma.ViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          update: {
            args: Prisma.ViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          deleteMany: {
            args: Prisma.ViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>[]
          }
          upsert: {
            args: Prisma.ViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViewPayload>
          }
          aggregate: {
            args: Prisma.ViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateView>
          }
          groupBy: {
            args: Prisma.ViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViewCountArgs<ExtArgs>
            result: $Utils.Optional<ViewCountAggregateOutputType> | number
          }
        }
      }
      Filter: {
        payload: Prisma.$FilterPayload<ExtArgs>
        fields: Prisma.FilterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          findFirst: {
            args: Prisma.FilterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          findMany: {
            args: Prisma.FilterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>[]
          }
          create: {
            args: Prisma.FilterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          createMany: {
            args: Prisma.FilterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>[]
          }
          delete: {
            args: Prisma.FilterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          update: {
            args: Prisma.FilterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          deleteMany: {
            args: Prisma.FilterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>[]
          }
          upsert: {
            args: Prisma.FilterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilterPayload>
          }
          aggregate: {
            args: Prisma.FilterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFilter>
          }
          groupBy: {
            args: Prisma.FilterGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilterGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilterCountArgs<ExtArgs>
            result: $Utils.Optional<FilterCountAggregateOutputType> | number
          }
        }
      }
      Sort: {
        payload: Prisma.$SortPayload<ExtArgs>
        fields: Prisma.SortFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SortFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SortFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>
          }
          findFirst: {
            args: Prisma.SortFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SortFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>
          }
          findMany: {
            args: Prisma.SortFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>[]
          }
          create: {
            args: Prisma.SortCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>
          }
          createMany: {
            args: Prisma.SortCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SortCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>[]
          }
          delete: {
            args: Prisma.SortDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>
          }
          update: {
            args: Prisma.SortUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>
          }
          deleteMany: {
            args: Prisma.SortDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SortUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SortUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>[]
          }
          upsert: {
            args: Prisma.SortUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SortPayload>
          }
          aggregate: {
            args: Prisma.SortAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSort>
          }
          groupBy: {
            args: Prisma.SortGroupByArgs<ExtArgs>
            result: $Utils.Optional<SortGroupByOutputType>[]
          }
          count: {
            args: Prisma.SortCountArgs<ExtArgs>
            result: $Utils.Optional<SortCountAggregateOutputType> | number
          }
        }
      }
      HiddenField: {
        payload: Prisma.$HiddenFieldPayload<ExtArgs>
        fields: Prisma.HiddenFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HiddenFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HiddenFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>
          }
          findFirst: {
            args: Prisma.HiddenFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HiddenFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>
          }
          findMany: {
            args: Prisma.HiddenFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>[]
          }
          create: {
            args: Prisma.HiddenFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>
          }
          createMany: {
            args: Prisma.HiddenFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HiddenFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>[]
          }
          delete: {
            args: Prisma.HiddenFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>
          }
          update: {
            args: Prisma.HiddenFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>
          }
          deleteMany: {
            args: Prisma.HiddenFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HiddenFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HiddenFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>[]
          }
          upsert: {
            args: Prisma.HiddenFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HiddenFieldPayload>
          }
          aggregate: {
            args: Prisma.HiddenFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHiddenField>
          }
          groupBy: {
            args: Prisma.HiddenFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<HiddenFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.HiddenFieldCountArgs<ExtArgs>
            result: $Utils.Optional<HiddenFieldCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    base?: BaseOmit
    table?: TableOmit
    field?: FieldOmit
    record?: RecordOmit
    cell?: CellOmit
    view?: ViewOmit
    filter?: FilterOmit
    sort?: SortOmit
    hiddenField?: HiddenFieldOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type BaseCountOutputType
   */

  export type BaseCountOutputType = {
    tables: number
  }

  export type BaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | BaseCountOutputTypeCountTablesArgs
  }

  // Custom InputTypes
  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BaseCountOutputType
     */
    select?: BaseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountTablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
  }


  /**
   * Count Type TableCountOutputType
   */

  export type TableCountOutputType = {
    fields: number
    records: number
    views: number
  }

  export type TableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | TableCountOutputTypeCountFieldsArgs
    records?: boolean | TableCountOutputTypeCountRecordsArgs
    views?: boolean | TableCountOutputTypeCountViewsArgs
  }

  // Custom InputTypes
  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableCountOutputType
     */
    select?: TableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
  }

  /**
   * TableCountOutputType without action
   */
  export type TableCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
  }


  /**
   * Count Type FieldCountOutputType
   */

  export type FieldCountOutputType = {
    cells: number
    filters: number
    sorts: number
  }

  export type FieldCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | FieldCountOutputTypeCountCellsArgs
    filters?: boolean | FieldCountOutputTypeCountFiltersArgs
    sorts?: boolean | FieldCountOutputTypeCountSortsArgs
  }

  // Custom InputTypes
  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FieldCountOutputType
     */
    select?: FieldCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterWhereInput
  }

  /**
   * FieldCountOutputType without action
   */
  export type FieldCountOutputTypeCountSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SortWhereInput
  }


  /**
   * Count Type RecordCountOutputType
   */

  export type RecordCountOutputType = {
    cells: number
  }

  export type RecordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cells?: boolean | RecordCountOutputTypeCountCellsArgs
  }

  // Custom InputTypes
  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RecordCountOutputType
     */
    select?: RecordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RecordCountOutputType without action
   */
  export type RecordCountOutputTypeCountCellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
  }


  /**
   * Count Type ViewCountOutputType
   */

  export type ViewCountOutputType = {
    filters: number
    sorts: number
    hiddenFields: number
  }

  export type ViewCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    filters?: boolean | ViewCountOutputTypeCountFiltersArgs
    sorts?: boolean | ViewCountOutputTypeCountSortsArgs
    hiddenFields?: boolean | ViewCountOutputTypeCountHiddenFieldsArgs
  }

  // Custom InputTypes
  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViewCountOutputType
     */
    select?: ViewCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountFiltersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterWhereInput
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountSortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SortWhereInput
  }

  /**
   * ViewCountOutputType without action
   */
  export type ViewCountOutputTypeCountHiddenFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HiddenFieldWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Base
   */

  export type AggregateBase = {
    _count: BaseCountAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  export type BaseMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BaseCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BaseMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BaseCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Base to aggregate.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bases
    **/
    _count?: true | BaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BaseMaxAggregateInputType
  }

  export type GetBaseAggregateType<T extends BaseAggregateArgs> = {
        [P in keyof T & keyof AggregateBase]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBase[P]>
      : GetScalarType<T[P], AggregateBase[P]>
  }




  export type BaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BaseWhereInput
    orderBy?: BaseOrderByWithAggregationInput | BaseOrderByWithAggregationInput[]
    by: BaseScalarFieldEnum[] | BaseScalarFieldEnum
    having?: BaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BaseCountAggregateInputType | true
    _min?: BaseMinAggregateInputType
    _max?: BaseMaxAggregateInputType
  }

  export type BaseGroupByOutputType = {
    id: string
    name: string
    description: string | null
    icon: string | null
    createdAt: Date
    updatedAt: Date
    _count: BaseCountAggregateOutputType | null
    _min: BaseMinAggregateOutputType | null
    _max: BaseMaxAggregateOutputType | null
  }

  type GetBaseGroupByPayload<T extends BaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BaseGroupByOutputType[P]>
            : GetScalarType<T[P], BaseGroupByOutputType[P]>
        }
      >
    >


  export type BaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tables?: boolean | Base$tablesArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["base"]>

  export type BaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "createdAt" | "updatedAt", ExtArgs["result"]["base"]>
  export type BaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tables?: boolean | Base$tablesArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Base"
    objects: {
      tables: Prisma.$TablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      icon: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["base"]>
    composites: {}
  }

  type BaseGetPayload<S extends boolean | null | undefined | BaseDefaultArgs> = $Result.GetResult<Prisma.$BasePayload, S>

  type BaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BaseCountAggregateInputType | true
    }

  export interface BaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Base'], meta: { name: 'Base' } }
    /**
     * Find zero or one Base that matches the filter.
     * @param {BaseFindUniqueArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BaseFindUniqueArgs>(args: SelectSubset<T, BaseFindUniqueArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Base that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BaseFindUniqueOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BaseFindUniqueOrThrowArgs>(args: SelectSubset<T, BaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BaseFindFirstArgs>(args?: SelectSubset<T, BaseFindFirstArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Base that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindFirstOrThrowArgs} args - Arguments to find a Base
     * @example
     * // Get one Base
     * const base = await prisma.base.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BaseFindFirstOrThrowArgs>(args?: SelectSubset<T, BaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bases
     * const bases = await prisma.base.findMany()
     * 
     * // Get first 10 Bases
     * const bases = await prisma.base.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const baseWithIdOnly = await prisma.base.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BaseFindManyArgs>(args?: SelectSubset<T, BaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Base.
     * @param {BaseCreateArgs} args - Arguments to create a Base.
     * @example
     * // Create one Base
     * const Base = await prisma.base.create({
     *   data: {
     *     // ... data to create a Base
     *   }
     * })
     * 
     */
    create<T extends BaseCreateArgs>(args: SelectSubset<T, BaseCreateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bases.
     * @param {BaseCreateManyArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BaseCreateManyArgs>(args?: SelectSubset<T, BaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bases and returns the data saved in the database.
     * @param {BaseCreateManyAndReturnArgs} args - Arguments to create many Bases.
     * @example
     * // Create many Bases
     * const base = await prisma.base.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BaseCreateManyAndReturnArgs>(args?: SelectSubset<T, BaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Base.
     * @param {BaseDeleteArgs} args - Arguments to delete one Base.
     * @example
     * // Delete one Base
     * const Base = await prisma.base.delete({
     *   where: {
     *     // ... filter to delete one Base
     *   }
     * })
     * 
     */
    delete<T extends BaseDeleteArgs>(args: SelectSubset<T, BaseDeleteArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Base.
     * @param {BaseUpdateArgs} args - Arguments to update one Base.
     * @example
     * // Update one Base
     * const base = await prisma.base.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BaseUpdateArgs>(args: SelectSubset<T, BaseUpdateArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bases.
     * @param {BaseDeleteManyArgs} args - Arguments to filter Bases to delete.
     * @example
     * // Delete a few Bases
     * const { count } = await prisma.base.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BaseDeleteManyArgs>(args?: SelectSubset<T, BaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BaseUpdateManyArgs>(args: SelectSubset<T, BaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bases and returns the data updated in the database.
     * @param {BaseUpdateManyAndReturnArgs} args - Arguments to update many Bases.
     * @example
     * // Update many Bases
     * const base = await prisma.base.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Bases and only return the `id`
     * const baseWithIdOnly = await prisma.base.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BaseUpdateManyAndReturnArgs>(args: SelectSubset<T, BaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Base.
     * @param {BaseUpsertArgs} args - Arguments to update or create a Base.
     * @example
     * // Update or create a Base
     * const base = await prisma.base.upsert({
     *   create: {
     *     // ... data to create a Base
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Base we want to update
     *   }
     * })
     */
    upsert<T extends BaseUpsertArgs>(args: SelectSubset<T, BaseUpsertArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseCountArgs} args - Arguments to filter Bases to count.
     * @example
     * // Count the number of Bases
     * const count = await prisma.base.count({
     *   where: {
     *     // ... the filter for the Bases we want to count
     *   }
     * })
    **/
    count<T extends BaseCountArgs>(
      args?: Subset<T, BaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BaseAggregateArgs>(args: Subset<T, BaseAggregateArgs>): Prisma.PrismaPromise<GetBaseAggregateType<T>>

    /**
     * Group by Base.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BaseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BaseGroupByArgs['orderBy'] }
        : { orderBy?: BaseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Base model
   */
  readonly fields: BaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Base.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tables<T extends Base$tablesArgs<ExtArgs> = {}>(args?: Subset<T, Base$tablesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Base model
   */
  interface BaseFieldRefs {
    readonly id: FieldRef<"Base", 'String'>
    readonly name: FieldRef<"Base", 'String'>
    readonly description: FieldRef<"Base", 'String'>
    readonly icon: FieldRef<"Base", 'String'>
    readonly createdAt: FieldRef<"Base", 'DateTime'>
    readonly updatedAt: FieldRef<"Base", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Base findUnique
   */
  export type BaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findUniqueOrThrow
   */
  export type BaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base findFirst
   */
  export type BaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findFirstOrThrow
   */
  export type BaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Base to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bases.
     */
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base findMany
   */
  export type BaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter, which Bases to fetch.
     */
    where?: BaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bases to fetch.
     */
    orderBy?: BaseOrderByWithRelationInput | BaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bases.
     */
    cursor?: BaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bases.
     */
    skip?: number
    distinct?: BaseScalarFieldEnum | BaseScalarFieldEnum[]
  }

  /**
   * Base create
   */
  export type BaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Base.
     */
    data: XOR<BaseCreateInput, BaseUncheckedCreateInput>
  }

  /**
   * Base createMany
   */
  export type BaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base createManyAndReturn
   */
  export type BaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * The data used to create many Bases.
     */
    data: BaseCreateManyInput | BaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Base update
   */
  export type BaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Base.
     */
    data: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
    /**
     * Choose, which Base to update.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base updateMany
   */
  export type BaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to update.
     */
    limit?: number
  }

  /**
   * Base updateManyAndReturn
   */
  export type BaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * The data used to update Bases.
     */
    data: XOR<BaseUpdateManyMutationInput, BaseUncheckedUpdateManyInput>
    /**
     * Filter which Bases to update
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to update.
     */
    limit?: number
  }

  /**
   * Base upsert
   */
  export type BaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Base to update in case it exists.
     */
    where: BaseWhereUniqueInput
    /**
     * In case the Base found by the `where` argument doesn't exist, create a new Base with this data.
     */
    create: XOR<BaseCreateInput, BaseUncheckedCreateInput>
    /**
     * In case the Base was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BaseUpdateInput, BaseUncheckedUpdateInput>
  }

  /**
   * Base delete
   */
  export type BaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
    /**
     * Filter which Base to delete.
     */
    where: BaseWhereUniqueInput
  }

  /**
   * Base deleteMany
   */
  export type BaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bases to delete
     */
    where?: BaseWhereInput
    /**
     * Limit how many Bases to delete.
     */
    limit?: number
  }

  /**
   * Base.tables
   */
  export type Base$tablesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    where?: TableWhereInput
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    cursor?: TableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Base without action
   */
  export type BaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Base
     */
    select?: BaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Base
     */
    omit?: BaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BaseInclude<ExtArgs> | null
  }


  /**
   * Model Table
   */

  export type AggregateTable = {
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  export type TableAvgAggregateOutputType = {
    order: number | null
  }

  export type TableSumAggregateOutputType = {
    order: number | null
  }

  export type TableMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    baseId: string | null
  }

  export type TableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    icon: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    baseId: string | null
  }

  export type TableCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    order: number
    createdAt: number
    updatedAt: number
    baseId: number
    _all: number
  }


  export type TableAvgAggregateInputType = {
    order?: true
  }

  export type TableSumAggregateInputType = {
    order?: true
  }

  export type TableMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    baseId?: true
  }

  export type TableMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    baseId?: true
  }

  export type TableCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    baseId?: true
    _all?: true
  }

  export type TableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Table to aggregate.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tables
    **/
    _count?: true | TableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableMaxAggregateInputType
  }

  export type GetTableAggregateType<T extends TableAggregateArgs> = {
        [P in keyof T & keyof AggregateTable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTable[P]>
      : GetScalarType<T[P], AggregateTable[P]>
  }




  export type TableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableWhereInput
    orderBy?: TableOrderByWithAggregationInput | TableOrderByWithAggregationInput[]
    by: TableScalarFieldEnum[] | TableScalarFieldEnum
    having?: TableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableCountAggregateInputType | true
    _avg?: TableAvgAggregateInputType
    _sum?: TableSumAggregateInputType
    _min?: TableMinAggregateInputType
    _max?: TableMaxAggregateInputType
  }

  export type TableGroupByOutputType = {
    id: string
    name: string
    description: string | null
    icon: string | null
    order: number
    createdAt: Date
    updatedAt: Date
    baseId: string
    _count: TableCountAggregateOutputType | null
    _avg: TableAvgAggregateOutputType | null
    _sum: TableSumAggregateOutputType | null
    _min: TableMinAggregateOutputType | null
    _max: TableMaxAggregateOutputType | null
  }

  type GetTableGroupByPayload<T extends TableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableGroupByOutputType[P]>
            : GetScalarType<T[P], TableGroupByOutputType[P]>
        }
      >
    >


  export type TableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    fields?: boolean | Table$fieldsArgs<ExtArgs>
    records?: boolean | Table$recordsArgs<ExtArgs>
    views?: boolean | Table$viewsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["table"]>

  export type TableSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    baseId?: boolean
  }

  export type TableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "order" | "createdAt" | "updatedAt" | "baseId", ExtArgs["result"]["table"]>
  export type TableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    fields?: boolean | Table$fieldsArgs<ExtArgs>
    records?: boolean | Table$recordsArgs<ExtArgs>
    views?: boolean | Table$viewsArgs<ExtArgs>
    _count?: boolean | TableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }
  export type TableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }

  export type $TablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Table"
    objects: {
      base: Prisma.$BasePayload<ExtArgs>
      fields: Prisma.$FieldPayload<ExtArgs>[]
      records: Prisma.$RecordPayload<ExtArgs>[]
      views: Prisma.$ViewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      icon: string | null
      order: number
      createdAt: Date
      updatedAt: Date
      baseId: string
    }, ExtArgs["result"]["table"]>
    composites: {}
  }

  type TableGetPayload<S extends boolean | null | undefined | TableDefaultArgs> = $Result.GetResult<Prisma.$TablePayload, S>

  type TableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableCountAggregateInputType | true
    }

  export interface TableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Table'], meta: { name: 'Table' } }
    /**
     * Find zero or one Table that matches the filter.
     * @param {TableFindUniqueArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableFindUniqueArgs>(args: SelectSubset<T, TableFindUniqueArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Table that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableFindUniqueOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableFindUniqueOrThrowArgs>(args: SelectSubset<T, TableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableFindFirstArgs>(args?: SelectSubset<T, TableFindFirstArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Table that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindFirstOrThrowArgs} args - Arguments to find a Table
     * @example
     * // Get one Table
     * const table = await prisma.table.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableFindFirstOrThrowArgs>(args?: SelectSubset<T, TableFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tables
     * const tables = await prisma.table.findMany()
     * 
     * // Get first 10 Tables
     * const tables = await prisma.table.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableWithIdOnly = await prisma.table.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableFindManyArgs>(args?: SelectSubset<T, TableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Table.
     * @param {TableCreateArgs} args - Arguments to create a Table.
     * @example
     * // Create one Table
     * const Table = await prisma.table.create({
     *   data: {
     *     // ... data to create a Table
     *   }
     * })
     * 
     */
    create<T extends TableCreateArgs>(args: SelectSubset<T, TableCreateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tables.
     * @param {TableCreateManyArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableCreateManyArgs>(args?: SelectSubset<T, TableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tables and returns the data saved in the database.
     * @param {TableCreateManyAndReturnArgs} args - Arguments to create many Tables.
     * @example
     * // Create many Tables
     * const table = await prisma.table.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableCreateManyAndReturnArgs>(args?: SelectSubset<T, TableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Table.
     * @param {TableDeleteArgs} args - Arguments to delete one Table.
     * @example
     * // Delete one Table
     * const Table = await prisma.table.delete({
     *   where: {
     *     // ... filter to delete one Table
     *   }
     * })
     * 
     */
    delete<T extends TableDeleteArgs>(args: SelectSubset<T, TableDeleteArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Table.
     * @param {TableUpdateArgs} args - Arguments to update one Table.
     * @example
     * // Update one Table
     * const table = await prisma.table.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUpdateArgs>(args: SelectSubset<T, TableUpdateArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tables.
     * @param {TableDeleteManyArgs} args - Arguments to filter Tables to delete.
     * @example
     * // Delete a few Tables
     * const { count } = await prisma.table.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableDeleteManyArgs>(args?: SelectSubset<T, TableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUpdateManyArgs>(args: SelectSubset<T, TableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tables and returns the data updated in the database.
     * @param {TableUpdateManyAndReturnArgs} args - Arguments to update many Tables.
     * @example
     * // Update many Tables
     * const table = await prisma.table.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tables and only return the `id`
     * const tableWithIdOnly = await prisma.table.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TableUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Table.
     * @param {TableUpsertArgs} args - Arguments to update or create a Table.
     * @example
     * // Update or create a Table
     * const table = await prisma.table.upsert({
     *   create: {
     *     // ... data to create a Table
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Table we want to update
     *   }
     * })
     */
    upsert<T extends TableUpsertArgs>(args: SelectSubset<T, TableUpsertArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableCountArgs} args - Arguments to filter Tables to count.
     * @example
     * // Count the number of Tables
     * const count = await prisma.table.count({
     *   where: {
     *     // ... the filter for the Tables we want to count
     *   }
     * })
    **/
    count<T extends TableCountArgs>(
      args?: Subset<T, TableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TableAggregateArgs>(args: Subset<T, TableAggregateArgs>): Prisma.PrismaPromise<GetTableAggregateType<T>>

    /**
     * Group by Table.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableGroupByArgs['orderBy'] }
        : { orderBy?: TableGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Table model
   */
  readonly fields: TableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Table.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    base<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    fields<T extends Table$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Table$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    records<T extends Table$recordsArgs<ExtArgs> = {}>(args?: Subset<T, Table$recordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    views<T extends Table$viewsArgs<ExtArgs> = {}>(args?: Subset<T, Table$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Table model
   */
  interface TableFieldRefs {
    readonly id: FieldRef<"Table", 'String'>
    readonly name: FieldRef<"Table", 'String'>
    readonly description: FieldRef<"Table", 'String'>
    readonly icon: FieldRef<"Table", 'String'>
    readonly order: FieldRef<"Table", 'Int'>
    readonly createdAt: FieldRef<"Table", 'DateTime'>
    readonly updatedAt: FieldRef<"Table", 'DateTime'>
    readonly baseId: FieldRef<"Table", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Table findUnique
   */
  export type TableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findUniqueOrThrow
   */
  export type TableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table findFirst
   */
  export type TableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findFirstOrThrow
   */
  export type TableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Table to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tables.
     */
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table findMany
   */
  export type TableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter, which Tables to fetch.
     */
    where?: TableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tables to fetch.
     */
    orderBy?: TableOrderByWithRelationInput | TableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tables.
     */
    cursor?: TableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tables.
     */
    skip?: number
    distinct?: TableScalarFieldEnum | TableScalarFieldEnum[]
  }

  /**
   * Table create
   */
  export type TableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to create a Table.
     */
    data: XOR<TableCreateInput, TableUncheckedCreateInput>
  }

  /**
   * Table createMany
   */
  export type TableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Table createManyAndReturn
   */
  export type TableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to create many Tables.
     */
    data: TableCreateManyInput | TableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table update
   */
  export type TableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The data needed to update a Table.
     */
    data: XOR<TableUpdateInput, TableUncheckedUpdateInput>
    /**
     * Choose, which Table to update.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table updateMany
   */
  export type TableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
  }

  /**
   * Table updateManyAndReturn
   */
  export type TableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * The data used to update Tables.
     */
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyInput>
    /**
     * Filter which Tables to update
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Table upsert
   */
  export type TableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * The filter to search for the Table to update in case it exists.
     */
    where: TableWhereUniqueInput
    /**
     * In case the Table found by the `where` argument doesn't exist, create a new Table with this data.
     */
    create: XOR<TableCreateInput, TableUncheckedCreateInput>
    /**
     * In case the Table was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUpdateInput, TableUncheckedUpdateInput>
  }

  /**
   * Table delete
   */
  export type TableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
    /**
     * Filter which Table to delete.
     */
    where: TableWhereUniqueInput
  }

  /**
   * Table deleteMany
   */
  export type TableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tables to delete
     */
    where?: TableWhereInput
    /**
     * Limit how many Tables to delete.
     */
    limit?: number
  }

  /**
   * Table.fields
   */
  export type Table$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    cursor?: FieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Table.records
   */
  export type Table$recordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    cursor?: RecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Table.views
   */
  export type Table$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    cursor?: ViewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * Table without action
   */
  export type TableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Table
     */
    select?: TableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Table
     */
    omit?: TableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableInclude<ExtArgs> | null
  }


  /**
   * Model Field
   */

  export type AggregateField = {
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  export type FieldAvgAggregateOutputType = {
    order: number | null
  }

  export type FieldSumAggregateOutputType = {
    order: number | null
  }

  export type FieldMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.FieldType | null
    order: number | null
    description: string | null
    isPrimary: boolean | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type FieldMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: $Enums.FieldType | null
    order: number | null
    description: string | null
    isPrimary: boolean | null
    isRequired: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type FieldCountAggregateOutputType = {
    id: number
    name: number
    type: number
    order: number
    description: number
    config: number
    isPrimary: number
    isRequired: number
    createdAt: number
    updatedAt: number
    tableId: number
    _all: number
  }


  export type FieldAvgAggregateInputType = {
    order?: true
  }

  export type FieldSumAggregateInputType = {
    order?: true
  }

  export type FieldMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    description?: true
    isPrimary?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type FieldMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    description?: true
    isPrimary?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type FieldCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    order?: true
    description?: true
    config?: true
    isPrimary?: true
    isRequired?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type FieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Field to aggregate.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fields
    **/
    _count?: true | FieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FieldMaxAggregateInputType
  }

  export type GetFieldAggregateType<T extends FieldAggregateArgs> = {
        [P in keyof T & keyof AggregateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateField[P]>
      : GetScalarType<T[P], AggregateField[P]>
  }




  export type FieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FieldWhereInput
    orderBy?: FieldOrderByWithAggregationInput | FieldOrderByWithAggregationInput[]
    by: FieldScalarFieldEnum[] | FieldScalarFieldEnum
    having?: FieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FieldCountAggregateInputType | true
    _avg?: FieldAvgAggregateInputType
    _sum?: FieldSumAggregateInputType
    _min?: FieldMinAggregateInputType
    _max?: FieldMaxAggregateInputType
  }

  export type FieldGroupByOutputType = {
    id: string
    name: string
    type: $Enums.FieldType
    order: number
    description: string | null
    config: JsonValue | null
    isPrimary: boolean
    isRequired: boolean
    createdAt: Date
    updatedAt: Date
    tableId: string
    _count: FieldCountAggregateOutputType | null
    _avg: FieldAvgAggregateOutputType | null
    _sum: FieldSumAggregateOutputType | null
    _min: FieldMinAggregateOutputType | null
    _max: FieldMaxAggregateOutputType | null
  }

  type GetFieldGroupByPayload<T extends FieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FieldGroupByOutputType[P]>
            : GetScalarType<T[P], FieldGroupByOutputType[P]>
        }
      >
    >


  export type FieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    description?: boolean
    config?: boolean
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Field$cellsArgs<ExtArgs>
    filters?: boolean | Field$filtersArgs<ExtArgs>
    sorts?: boolean | Field$sortsArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    description?: boolean
    config?: boolean
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    description?: boolean
    config?: boolean
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["field"]>

  export type FieldSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    order?: boolean
    description?: boolean
    config?: boolean
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
  }

  export type FieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "order" | "description" | "config" | "isPrimary" | "isRequired" | "createdAt" | "updatedAt" | "tableId", ExtArgs["result"]["field"]>
  export type FieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Field$cellsArgs<ExtArgs>
    filters?: boolean | Field$filtersArgs<ExtArgs>
    sorts?: boolean | Field$sortsArgs<ExtArgs>
    _count?: boolean | FieldCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type FieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $FieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Field"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      cells: Prisma.$CellPayload<ExtArgs>[]
      filters: Prisma.$FilterPayload<ExtArgs>[]
      sorts: Prisma.$SortPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: $Enums.FieldType
      order: number
      description: string | null
      config: Prisma.JsonValue | null
      isPrimary: boolean
      isRequired: boolean
      createdAt: Date
      updatedAt: Date
      tableId: string
    }, ExtArgs["result"]["field"]>
    composites: {}
  }

  type FieldGetPayload<S extends boolean | null | undefined | FieldDefaultArgs> = $Result.GetResult<Prisma.$FieldPayload, S>

  type FieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FieldCountAggregateInputType | true
    }

  export interface FieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Field'], meta: { name: 'Field' } }
    /**
     * Find zero or one Field that matches the filter.
     * @param {FieldFindUniqueArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FieldFindUniqueArgs>(args: SelectSubset<T, FieldFindUniqueArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Field that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FieldFindUniqueOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FieldFindUniqueOrThrowArgs>(args: SelectSubset<T, FieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FieldFindFirstArgs>(args?: SelectSubset<T, FieldFindFirstArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Field that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindFirstOrThrowArgs} args - Arguments to find a Field
     * @example
     * // Get one Field
     * const field = await prisma.field.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FieldFindFirstOrThrowArgs>(args?: SelectSubset<T, FieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fields
     * const fields = await prisma.field.findMany()
     * 
     * // Get first 10 Fields
     * const fields = await prisma.field.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fieldWithIdOnly = await prisma.field.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FieldFindManyArgs>(args?: SelectSubset<T, FieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Field.
     * @param {FieldCreateArgs} args - Arguments to create a Field.
     * @example
     * // Create one Field
     * const Field = await prisma.field.create({
     *   data: {
     *     // ... data to create a Field
     *   }
     * })
     * 
     */
    create<T extends FieldCreateArgs>(args: SelectSubset<T, FieldCreateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fields.
     * @param {FieldCreateManyArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FieldCreateManyArgs>(args?: SelectSubset<T, FieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fields and returns the data saved in the database.
     * @param {FieldCreateManyAndReturnArgs} args - Arguments to create many Fields.
     * @example
     * // Create many Fields
     * const field = await prisma.field.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FieldCreateManyAndReturnArgs>(args?: SelectSubset<T, FieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Field.
     * @param {FieldDeleteArgs} args - Arguments to delete one Field.
     * @example
     * // Delete one Field
     * const Field = await prisma.field.delete({
     *   where: {
     *     // ... filter to delete one Field
     *   }
     * })
     * 
     */
    delete<T extends FieldDeleteArgs>(args: SelectSubset<T, FieldDeleteArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Field.
     * @param {FieldUpdateArgs} args - Arguments to update one Field.
     * @example
     * // Update one Field
     * const field = await prisma.field.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FieldUpdateArgs>(args: SelectSubset<T, FieldUpdateArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fields.
     * @param {FieldDeleteManyArgs} args - Arguments to filter Fields to delete.
     * @example
     * // Delete a few Fields
     * const { count } = await prisma.field.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FieldDeleteManyArgs>(args?: SelectSubset<T, FieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FieldUpdateManyArgs>(args: SelectSubset<T, FieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fields and returns the data updated in the database.
     * @param {FieldUpdateManyAndReturnArgs} args - Arguments to update many Fields.
     * @example
     * // Update many Fields
     * const field = await prisma.field.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fields and only return the `id`
     * const fieldWithIdOnly = await prisma.field.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FieldUpdateManyAndReturnArgs>(args: SelectSubset<T, FieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Field.
     * @param {FieldUpsertArgs} args - Arguments to update or create a Field.
     * @example
     * // Update or create a Field
     * const field = await prisma.field.upsert({
     *   create: {
     *     // ... data to create a Field
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Field we want to update
     *   }
     * })
     */
    upsert<T extends FieldUpsertArgs>(args: SelectSubset<T, FieldUpsertArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldCountArgs} args - Arguments to filter Fields to count.
     * @example
     * // Count the number of Fields
     * const count = await prisma.field.count({
     *   where: {
     *     // ... the filter for the Fields we want to count
     *   }
     * })
    **/
    count<T extends FieldCountArgs>(
      args?: Subset<T, FieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FieldAggregateArgs>(args: Subset<T, FieldAggregateArgs>): Prisma.PrismaPromise<GetFieldAggregateType<T>>

    /**
     * Group by Field.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FieldGroupByArgs['orderBy'] }
        : { orderBy?: FieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Field model
   */
  readonly fields: FieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Field.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends Field$cellsArgs<ExtArgs> = {}>(args?: Subset<T, Field$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    filters<T extends Field$filtersArgs<ExtArgs> = {}>(args?: Subset<T, Field$filtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sorts<T extends Field$sortsArgs<ExtArgs> = {}>(args?: Subset<T, Field$sortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Field model
   */
  interface FieldFieldRefs {
    readonly id: FieldRef<"Field", 'String'>
    readonly name: FieldRef<"Field", 'String'>
    readonly type: FieldRef<"Field", 'FieldType'>
    readonly order: FieldRef<"Field", 'Int'>
    readonly description: FieldRef<"Field", 'String'>
    readonly config: FieldRef<"Field", 'Json'>
    readonly isPrimary: FieldRef<"Field", 'Boolean'>
    readonly isRequired: FieldRef<"Field", 'Boolean'>
    readonly createdAt: FieldRef<"Field", 'DateTime'>
    readonly updatedAt: FieldRef<"Field", 'DateTime'>
    readonly tableId: FieldRef<"Field", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Field findUnique
   */
  export type FieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findUniqueOrThrow
   */
  export type FieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field findFirst
   */
  export type FieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findFirstOrThrow
   */
  export type FieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Field to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fields.
     */
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field findMany
   */
  export type FieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter, which Fields to fetch.
     */
    where?: FieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fields to fetch.
     */
    orderBy?: FieldOrderByWithRelationInput | FieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fields.
     */
    cursor?: FieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fields.
     */
    skip?: number
    distinct?: FieldScalarFieldEnum | FieldScalarFieldEnum[]
  }

  /**
   * Field create
   */
  export type FieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to create a Field.
     */
    data: XOR<FieldCreateInput, FieldUncheckedCreateInput>
  }

  /**
   * Field createMany
   */
  export type FieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Field createManyAndReturn
   */
  export type FieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * The data used to create many Fields.
     */
    data: FieldCreateManyInput | FieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Field update
   */
  export type FieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The data needed to update a Field.
     */
    data: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
    /**
     * Choose, which Field to update.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field updateMany
   */
  export type FieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
  }

  /**
   * Field updateManyAndReturn
   */
  export type FieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * The data used to update Fields.
     */
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyInput>
    /**
     * Filter which Fields to update
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Field upsert
   */
  export type FieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * The filter to search for the Field to update in case it exists.
     */
    where: FieldWhereUniqueInput
    /**
     * In case the Field found by the `where` argument doesn't exist, create a new Field with this data.
     */
    create: XOR<FieldCreateInput, FieldUncheckedCreateInput>
    /**
     * In case the Field was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FieldUpdateInput, FieldUncheckedUpdateInput>
  }

  /**
   * Field delete
   */
  export type FieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
    /**
     * Filter which Field to delete.
     */
    where: FieldWhereUniqueInput
  }

  /**
   * Field deleteMany
   */
  export type FieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fields to delete
     */
    where?: FieldWhereInput
    /**
     * Limit how many Fields to delete.
     */
    limit?: number
  }

  /**
   * Field.cells
   */
  export type Field$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    where?: CellWhereInput
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    cursor?: CellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Field.filters
   */
  export type Field$filtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    where?: FilterWhereInput
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    cursor?: FilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Field.sorts
   */
  export type Field$sortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    where?: SortWhereInput
    orderBy?: SortOrderByWithRelationInput | SortOrderByWithRelationInput[]
    cursor?: SortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SortScalarFieldEnum | SortScalarFieldEnum[]
  }

  /**
   * Field without action
   */
  export type FieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Field
     */
    select?: FieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Field
     */
    omit?: FieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FieldInclude<ExtArgs> | null
  }


  /**
   * Model Record
   */

  export type AggregateRecord = {
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  export type RecordAvgAggregateOutputType = {
    order: number | null
  }

  export type RecordSumAggregateOutputType = {
    order: number | null
  }

  export type RecordMinAggregateOutputType = {
    id: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type RecordMaxAggregateOutputType = {
    id: string | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type RecordCountAggregateOutputType = {
    id: number
    order: number
    createdAt: number
    updatedAt: number
    tableId: number
    _all: number
  }


  export type RecordAvgAggregateInputType = {
    order?: true
  }

  export type RecordSumAggregateInputType = {
    order?: true
  }

  export type RecordMinAggregateInputType = {
    id?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type RecordMaxAggregateInputType = {
    id?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type RecordCountAggregateInputType = {
    id?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type RecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Record to aggregate.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordMaxAggregateInputType
  }

  export type GetRecordAggregateType<T extends RecordAggregateArgs> = {
        [P in keyof T & keyof AggregateRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecord[P]>
      : GetScalarType<T[P], AggregateRecord[P]>
  }




  export type RecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordWhereInput
    orderBy?: RecordOrderByWithAggregationInput | RecordOrderByWithAggregationInput[]
    by: RecordScalarFieldEnum[] | RecordScalarFieldEnum
    having?: RecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordCountAggregateInputType | true
    _avg?: RecordAvgAggregateInputType
    _sum?: RecordSumAggregateInputType
    _min?: RecordMinAggregateInputType
    _max?: RecordMaxAggregateInputType
  }

  export type RecordGroupByOutputType = {
    id: string
    order: number
    createdAt: Date
    updatedAt: Date
    tableId: string
    _count: RecordCountAggregateOutputType | null
    _avg: RecordAvgAggregateOutputType | null
    _sum: RecordSumAggregateOutputType | null
    _min: RecordMinAggregateOutputType | null
    _max: RecordMaxAggregateOutputType | null
  }

  type GetRecordGroupByPayload<T extends RecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordGroupByOutputType[P]>
            : GetScalarType<T[P], RecordGroupByOutputType[P]>
        }
      >
    >


  export type RecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Record$cellsArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["record"]>

  export type RecordSelectScalar = {
    id?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
  }

  export type RecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order" | "createdAt" | "updatedAt" | "tableId", ExtArgs["result"]["record"]>
  export type RecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    cells?: boolean | Record$cellsArgs<ExtArgs>
    _count?: boolean | RecordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type RecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $RecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Record"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      cells: Prisma.$CellPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order: number
      createdAt: Date
      updatedAt: Date
      tableId: string
    }, ExtArgs["result"]["record"]>
    composites: {}
  }

  type RecordGetPayload<S extends boolean | null | undefined | RecordDefaultArgs> = $Result.GetResult<Prisma.$RecordPayload, S>

  type RecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RecordCountAggregateInputType | true
    }

  export interface RecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Record'], meta: { name: 'Record' } }
    /**
     * Find zero or one Record that matches the filter.
     * @param {RecordFindUniqueArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RecordFindUniqueArgs>(args: SelectSubset<T, RecordFindUniqueArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Record that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RecordFindUniqueOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RecordFindUniqueOrThrowArgs>(args: SelectSubset<T, RecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RecordFindFirstArgs>(args?: SelectSubset<T, RecordFindFirstArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindFirstOrThrowArgs} args - Arguments to find a Record
     * @example
     * // Get one Record
     * const record = await prisma.record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RecordFindFirstOrThrowArgs>(args?: SelectSubset<T, RecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.record.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.record.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordWithIdOnly = await prisma.record.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RecordFindManyArgs>(args?: SelectSubset<T, RecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Record.
     * @param {RecordCreateArgs} args - Arguments to create a Record.
     * @example
     * // Create one Record
     * const Record = await prisma.record.create({
     *   data: {
     *     // ... data to create a Record
     *   }
     * })
     * 
     */
    create<T extends RecordCreateArgs>(args: SelectSubset<T, RecordCreateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Records.
     * @param {RecordCreateManyArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RecordCreateManyArgs>(args?: SelectSubset<T, RecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Records and returns the data saved in the database.
     * @param {RecordCreateManyAndReturnArgs} args - Arguments to create many Records.
     * @example
     * // Create many Records
     * const record = await prisma.record.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RecordCreateManyAndReturnArgs>(args?: SelectSubset<T, RecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Record.
     * @param {RecordDeleteArgs} args - Arguments to delete one Record.
     * @example
     * // Delete one Record
     * const Record = await prisma.record.delete({
     *   where: {
     *     // ... filter to delete one Record
     *   }
     * })
     * 
     */
    delete<T extends RecordDeleteArgs>(args: SelectSubset<T, RecordDeleteArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Record.
     * @param {RecordUpdateArgs} args - Arguments to update one Record.
     * @example
     * // Update one Record
     * const record = await prisma.record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RecordUpdateArgs>(args: SelectSubset<T, RecordUpdateArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Records.
     * @param {RecordDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RecordDeleteManyArgs>(args?: SelectSubset<T, RecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RecordUpdateManyArgs>(args: SelectSubset<T, RecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records and returns the data updated in the database.
     * @param {RecordUpdateManyAndReturnArgs} args - Arguments to update many Records.
     * @example
     * // Update many Records
     * const record = await prisma.record.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Records and only return the `id`
     * const recordWithIdOnly = await prisma.record.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RecordUpdateManyAndReturnArgs>(args: SelectSubset<T, RecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Record.
     * @param {RecordUpsertArgs} args - Arguments to update or create a Record.
     * @example
     * // Update or create a Record
     * const record = await prisma.record.upsert({
     *   create: {
     *     // ... data to create a Record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Record we want to update
     *   }
     * })
     */
    upsert<T extends RecordUpsertArgs>(args: SelectSubset<T, RecordUpsertArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.record.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordCountArgs>(
      args?: Subset<T, RecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordAggregateArgs>(args: Subset<T, RecordAggregateArgs>): Prisma.PrismaPromise<GetRecordAggregateType<T>>

    /**
     * Group by Record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordGroupByArgs['orderBy'] }
        : { orderBy?: RecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Record model
   */
  readonly fields: RecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cells<T extends Record$cellsArgs<ExtArgs> = {}>(args?: Subset<T, Record$cellsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Record model
   */
  interface RecordFieldRefs {
    readonly id: FieldRef<"Record", 'String'>
    readonly order: FieldRef<"Record", 'Int'>
    readonly createdAt: FieldRef<"Record", 'DateTime'>
    readonly updatedAt: FieldRef<"Record", 'DateTime'>
    readonly tableId: FieldRef<"Record", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Record findUnique
   */
  export type RecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findUniqueOrThrow
   */
  export type RecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record findFirst
   */
  export type RecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findFirstOrThrow
   */
  export type RecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Record to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record findMany
   */
  export type RecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordOrderByWithRelationInput | RecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordScalarFieldEnum | RecordScalarFieldEnum[]
  }

  /**
   * Record create
   */
  export type RecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to create a Record.
     */
    data: XOR<RecordCreateInput, RecordUncheckedCreateInput>
  }

  /**
   * Record createMany
   */
  export type RecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Record createManyAndReturn
   */
  export type RecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to create many Records.
     */
    data: RecordCreateManyInput | RecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record update
   */
  export type RecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The data needed to update a Record.
     */
    data: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
    /**
     * Choose, which Record to update.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record updateMany
   */
  export type RecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
  }

  /**
   * Record updateManyAndReturn
   */
  export type RecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * The data used to update Records.
     */
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Record upsert
   */
  export type RecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * The filter to search for the Record to update in case it exists.
     */
    where: RecordWhereUniqueInput
    /**
     * In case the Record found by the `where` argument doesn't exist, create a new Record with this data.
     */
    create: XOR<RecordCreateInput, RecordUncheckedCreateInput>
    /**
     * In case the Record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordUpdateInput, RecordUncheckedUpdateInput>
  }

  /**
   * Record delete
   */
  export type RecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
    /**
     * Filter which Record to delete.
     */
    where: RecordWhereUniqueInput
  }

  /**
   * Record deleteMany
   */
  export type RecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordWhereInput
    /**
     * Limit how many Records to delete.
     */
    limit?: number
  }

  /**
   * Record.cells
   */
  export type Record$cellsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    where?: CellWhereInput
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    cursor?: CellWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Record without action
   */
  export type RecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Record
     */
    select?: RecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Record
     */
    omit?: RecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RecordInclude<ExtArgs> | null
  }


  /**
   * Model Cell
   */

  export type AggregateCell = {
    _count: CellCountAggregateOutputType | null
    _min: CellMinAggregateOutputType | null
    _max: CellMaxAggregateOutputType | null
  }

  export type CellMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fieldId: string | null
    recordId: string | null
  }

  export type CellMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    fieldId: string | null
    recordId: string | null
  }

  export type CellCountAggregateOutputType = {
    id: number
    value: number
    createdAt: number
    updatedAt: number
    fieldId: number
    recordId: number
    _all: number
  }


  export type CellMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fieldId?: true
    recordId?: true
  }

  export type CellMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    fieldId?: true
    recordId?: true
  }

  export type CellCountAggregateInputType = {
    id?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    fieldId?: true
    recordId?: true
    _all?: true
  }

  export type CellAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cell to aggregate.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cells
    **/
    _count?: true | CellCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CellMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CellMaxAggregateInputType
  }

  export type GetCellAggregateType<T extends CellAggregateArgs> = {
        [P in keyof T & keyof AggregateCell]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCell[P]>
      : GetScalarType<T[P], AggregateCell[P]>
  }




  export type CellGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CellWhereInput
    orderBy?: CellOrderByWithAggregationInput | CellOrderByWithAggregationInput[]
    by: CellScalarFieldEnum[] | CellScalarFieldEnum
    having?: CellScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CellCountAggregateInputType | true
    _min?: CellMinAggregateInputType
    _max?: CellMaxAggregateInputType
  }

  export type CellGroupByOutputType = {
    id: string
    value: JsonValue | null
    createdAt: Date
    updatedAt: Date
    fieldId: string
    recordId: string
    _count: CellCountAggregateOutputType | null
    _min: CellMinAggregateOutputType | null
    _max: CellMaxAggregateOutputType | null
  }

  type GetCellGroupByPayload<T extends CellGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CellGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CellGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CellGroupByOutputType[P]>
            : GetScalarType<T[P], CellGroupByOutputType[P]>
        }
      >
    >


  export type CellSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    recordId?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
    record?: boolean | RecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    recordId?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
    record?: boolean | RecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    recordId?: boolean
    field?: boolean | FieldDefaultArgs<ExtArgs>
    record?: boolean | RecordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cell"]>

  export type CellSelectScalar = {
    id?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    fieldId?: boolean
    recordId?: boolean
  }

  export type CellOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "createdAt" | "updatedAt" | "fieldId" | "recordId", ExtArgs["result"]["cell"]>
  export type CellInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
    record?: boolean | RecordDefaultArgs<ExtArgs>
  }
  export type CellIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
    record?: boolean | RecordDefaultArgs<ExtArgs>
  }
  export type CellIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    field?: boolean | FieldDefaultArgs<ExtArgs>
    record?: boolean | RecordDefaultArgs<ExtArgs>
  }

  export type $CellPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cell"
    objects: {
      field: Prisma.$FieldPayload<ExtArgs>
      record: Prisma.$RecordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      fieldId: string
      recordId: string
    }, ExtArgs["result"]["cell"]>
    composites: {}
  }

  type CellGetPayload<S extends boolean | null | undefined | CellDefaultArgs> = $Result.GetResult<Prisma.$CellPayload, S>

  type CellCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CellFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CellCountAggregateInputType | true
    }

  export interface CellDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cell'], meta: { name: 'Cell' } }
    /**
     * Find zero or one Cell that matches the filter.
     * @param {CellFindUniqueArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CellFindUniqueArgs>(args: SelectSubset<T, CellFindUniqueArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cell that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CellFindUniqueOrThrowArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CellFindUniqueOrThrowArgs>(args: SelectSubset<T, CellFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cell that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindFirstArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CellFindFirstArgs>(args?: SelectSubset<T, CellFindFirstArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cell that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindFirstOrThrowArgs} args - Arguments to find a Cell
     * @example
     * // Get one Cell
     * const cell = await prisma.cell.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CellFindFirstOrThrowArgs>(args?: SelectSubset<T, CellFindFirstOrThrowArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cells that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cells
     * const cells = await prisma.cell.findMany()
     * 
     * // Get first 10 Cells
     * const cells = await prisma.cell.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cellWithIdOnly = await prisma.cell.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CellFindManyArgs>(args?: SelectSubset<T, CellFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cell.
     * @param {CellCreateArgs} args - Arguments to create a Cell.
     * @example
     * // Create one Cell
     * const Cell = await prisma.cell.create({
     *   data: {
     *     // ... data to create a Cell
     *   }
     * })
     * 
     */
    create<T extends CellCreateArgs>(args: SelectSubset<T, CellCreateArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cells.
     * @param {CellCreateManyArgs} args - Arguments to create many Cells.
     * @example
     * // Create many Cells
     * const cell = await prisma.cell.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CellCreateManyArgs>(args?: SelectSubset<T, CellCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cells and returns the data saved in the database.
     * @param {CellCreateManyAndReturnArgs} args - Arguments to create many Cells.
     * @example
     * // Create many Cells
     * const cell = await prisma.cell.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cells and only return the `id`
     * const cellWithIdOnly = await prisma.cell.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CellCreateManyAndReturnArgs>(args?: SelectSubset<T, CellCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cell.
     * @param {CellDeleteArgs} args - Arguments to delete one Cell.
     * @example
     * // Delete one Cell
     * const Cell = await prisma.cell.delete({
     *   where: {
     *     // ... filter to delete one Cell
     *   }
     * })
     * 
     */
    delete<T extends CellDeleteArgs>(args: SelectSubset<T, CellDeleteArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cell.
     * @param {CellUpdateArgs} args - Arguments to update one Cell.
     * @example
     * // Update one Cell
     * const cell = await prisma.cell.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CellUpdateArgs>(args: SelectSubset<T, CellUpdateArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cells.
     * @param {CellDeleteManyArgs} args - Arguments to filter Cells to delete.
     * @example
     * // Delete a few Cells
     * const { count } = await prisma.cell.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CellDeleteManyArgs>(args?: SelectSubset<T, CellDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cells
     * const cell = await prisma.cell.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CellUpdateManyArgs>(args: SelectSubset<T, CellUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cells and returns the data updated in the database.
     * @param {CellUpdateManyAndReturnArgs} args - Arguments to update many Cells.
     * @example
     * // Update many Cells
     * const cell = await prisma.cell.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cells and only return the `id`
     * const cellWithIdOnly = await prisma.cell.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CellUpdateManyAndReturnArgs>(args: SelectSubset<T, CellUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cell.
     * @param {CellUpsertArgs} args - Arguments to update or create a Cell.
     * @example
     * // Update or create a Cell
     * const cell = await prisma.cell.upsert({
     *   create: {
     *     // ... data to create a Cell
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cell we want to update
     *   }
     * })
     */
    upsert<T extends CellUpsertArgs>(args: SelectSubset<T, CellUpsertArgs<ExtArgs>>): Prisma__CellClient<$Result.GetResult<Prisma.$CellPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cells.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellCountArgs} args - Arguments to filter Cells to count.
     * @example
     * // Count the number of Cells
     * const count = await prisma.cell.count({
     *   where: {
     *     // ... the filter for the Cells we want to count
     *   }
     * })
    **/
    count<T extends CellCountArgs>(
      args?: Subset<T, CellCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CellCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CellAggregateArgs>(args: Subset<T, CellAggregateArgs>): Prisma.PrismaPromise<GetCellAggregateType<T>>

    /**
     * Group by Cell.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CellGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CellGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CellGroupByArgs['orderBy'] }
        : { orderBy?: CellGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CellGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCellGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cell model
   */
  readonly fields: CellFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cell.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CellClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    record<T extends RecordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RecordDefaultArgs<ExtArgs>>): Prisma__RecordClient<$Result.GetResult<Prisma.$RecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cell model
   */
  interface CellFieldRefs {
    readonly id: FieldRef<"Cell", 'String'>
    readonly value: FieldRef<"Cell", 'Json'>
    readonly createdAt: FieldRef<"Cell", 'DateTime'>
    readonly updatedAt: FieldRef<"Cell", 'DateTime'>
    readonly fieldId: FieldRef<"Cell", 'String'>
    readonly recordId: FieldRef<"Cell", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cell findUnique
   */
  export type CellFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell findUniqueOrThrow
   */
  export type CellFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell findFirst
   */
  export type CellFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cells.
     */
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell findFirstOrThrow
   */
  export type CellFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cell to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cells.
     */
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell findMany
   */
  export type CellFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter, which Cells to fetch.
     */
    where?: CellWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cells to fetch.
     */
    orderBy?: CellOrderByWithRelationInput | CellOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cells.
     */
    cursor?: CellWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cells from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cells.
     */
    skip?: number
    distinct?: CellScalarFieldEnum | CellScalarFieldEnum[]
  }

  /**
   * Cell create
   */
  export type CellCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The data needed to create a Cell.
     */
    data: XOR<CellCreateInput, CellUncheckedCreateInput>
  }

  /**
   * Cell createMany
   */
  export type CellCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cells.
     */
    data: CellCreateManyInput | CellCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cell createManyAndReturn
   */
  export type CellCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * The data used to create many Cells.
     */
    data: CellCreateManyInput | CellCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cell update
   */
  export type CellUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The data needed to update a Cell.
     */
    data: XOR<CellUpdateInput, CellUncheckedUpdateInput>
    /**
     * Choose, which Cell to update.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell updateMany
   */
  export type CellUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cells.
     */
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyInput>
    /**
     * Filter which Cells to update
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to update.
     */
    limit?: number
  }

  /**
   * Cell updateManyAndReturn
   */
  export type CellUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * The data used to update Cells.
     */
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyInput>
    /**
     * Filter which Cells to update
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Cell upsert
   */
  export type CellUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * The filter to search for the Cell to update in case it exists.
     */
    where: CellWhereUniqueInput
    /**
     * In case the Cell found by the `where` argument doesn't exist, create a new Cell with this data.
     */
    create: XOR<CellCreateInput, CellUncheckedCreateInput>
    /**
     * In case the Cell was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CellUpdateInput, CellUncheckedUpdateInput>
  }

  /**
   * Cell delete
   */
  export type CellDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
    /**
     * Filter which Cell to delete.
     */
    where: CellWhereUniqueInput
  }

  /**
   * Cell deleteMany
   */
  export type CellDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cells to delete
     */
    where?: CellWhereInput
    /**
     * Limit how many Cells to delete.
     */
    limit?: number
  }

  /**
   * Cell without action
   */
  export type CellDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cell
     */
    select?: CellSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cell
     */
    omit?: CellOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CellInclude<ExtArgs> | null
  }


  /**
   * Model View
   */

  export type AggregateView = {
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  export type ViewAvgAggregateOutputType = {
    order: number | null
  }

  export type ViewSumAggregateOutputType = {
    order: number | null
  }

  export type ViewMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type ViewMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    order: number | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    tableId: string | null
  }

  export type ViewCountAggregateOutputType = {
    id: number
    name: number
    description: number
    order: number
    isDefault: number
    createdAt: number
    updatedAt: number
    tableId: number
    _all: number
  }


  export type ViewAvgAggregateInputType = {
    order?: true
  }

  export type ViewSumAggregateInputType = {
    order?: true
  }

  export type ViewMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type ViewMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
  }

  export type ViewCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    order?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    tableId?: true
    _all?: true
  }

  export type ViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which View to aggregate.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Views
    **/
    _count?: true | ViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewMaxAggregateInputType
  }

  export type GetViewAggregateType<T extends ViewAggregateArgs> = {
        [P in keyof T & keyof AggregateView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateView[P]>
      : GetScalarType<T[P], AggregateView[P]>
  }




  export type ViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViewWhereInput
    orderBy?: ViewOrderByWithAggregationInput | ViewOrderByWithAggregationInput[]
    by: ViewScalarFieldEnum[] | ViewScalarFieldEnum
    having?: ViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewCountAggregateInputType | true
    _avg?: ViewAvgAggregateInputType
    _sum?: ViewSumAggregateInputType
    _min?: ViewMinAggregateInputType
    _max?: ViewMaxAggregateInputType
  }

  export type ViewGroupByOutputType = {
    id: string
    name: string
    description: string | null
    order: number
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    tableId: string
    _count: ViewCountAggregateOutputType | null
    _avg: ViewAvgAggregateOutputType | null
    _sum: ViewSumAggregateOutputType | null
    _min: ViewMinAggregateOutputType | null
    _max: ViewMaxAggregateOutputType | null
  }

  type GetViewGroupByPayload<T extends ViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewGroupByOutputType[P]>
            : GetScalarType<T[P], ViewGroupByOutputType[P]>
        }
      >
    >


  export type ViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
    filters?: boolean | View$filtersArgs<ExtArgs>
    sorts?: boolean | View$sortsArgs<ExtArgs>
    hiddenFields?: boolean | View$hiddenFieldsArgs<ExtArgs>
    _count?: boolean | ViewCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
    table?: boolean | TableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["view"]>

  export type ViewSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    order?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    tableId?: boolean
  }

  export type ViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "order" | "isDefault" | "createdAt" | "updatedAt" | "tableId", ExtArgs["result"]["view"]>
  export type ViewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
    filters?: boolean | View$filtersArgs<ExtArgs>
    sorts?: boolean | View$sortsArgs<ExtArgs>
    hiddenFields?: boolean | View$hiddenFieldsArgs<ExtArgs>
    _count?: boolean | ViewCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }
  export type ViewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    table?: boolean | TableDefaultArgs<ExtArgs>
  }

  export type $ViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "View"
    objects: {
      table: Prisma.$TablePayload<ExtArgs>
      filters: Prisma.$FilterPayload<ExtArgs>[]
      sorts: Prisma.$SortPayload<ExtArgs>[]
      hiddenFields: Prisma.$HiddenFieldPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      order: number
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      tableId: string
    }, ExtArgs["result"]["view"]>
    composites: {}
  }

  type ViewGetPayload<S extends boolean | null | undefined | ViewDefaultArgs> = $Result.GetResult<Prisma.$ViewPayload, S>

  type ViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ViewCountAggregateInputType | true
    }

  export interface ViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['View'], meta: { name: 'View' } }
    /**
     * Find zero or one View that matches the filter.
     * @param {ViewFindUniqueArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViewFindUniqueArgs>(args: SelectSubset<T, ViewFindUniqueArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one View that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ViewFindUniqueOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViewFindUniqueOrThrowArgs>(args: SelectSubset<T, ViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViewFindFirstArgs>(args?: SelectSubset<T, ViewFindFirstArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first View that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindFirstOrThrowArgs} args - Arguments to find a View
     * @example
     * // Get one View
     * const view = await prisma.view.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViewFindFirstOrThrowArgs>(args?: SelectSubset<T, ViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.view.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.view.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewWithIdOnly = await prisma.view.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViewFindManyArgs>(args?: SelectSubset<T, ViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a View.
     * @param {ViewCreateArgs} args - Arguments to create a View.
     * @example
     * // Create one View
     * const View = await prisma.view.create({
     *   data: {
     *     // ... data to create a View
     *   }
     * })
     * 
     */
    create<T extends ViewCreateArgs>(args: SelectSubset<T, ViewCreateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Views.
     * @param {ViewCreateManyArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViewCreateManyArgs>(args?: SelectSubset<T, ViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Views and returns the data saved in the database.
     * @param {ViewCreateManyAndReturnArgs} args - Arguments to create many Views.
     * @example
     * // Create many Views
     * const view = await prisma.view.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViewCreateManyAndReturnArgs>(args?: SelectSubset<T, ViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a View.
     * @param {ViewDeleteArgs} args - Arguments to delete one View.
     * @example
     * // Delete one View
     * const View = await prisma.view.delete({
     *   where: {
     *     // ... filter to delete one View
     *   }
     * })
     * 
     */
    delete<T extends ViewDeleteArgs>(args: SelectSubset<T, ViewDeleteArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one View.
     * @param {ViewUpdateArgs} args - Arguments to update one View.
     * @example
     * // Update one View
     * const view = await prisma.view.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViewUpdateArgs>(args: SelectSubset<T, ViewUpdateArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Views.
     * @param {ViewDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.view.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViewDeleteManyArgs>(args?: SelectSubset<T, ViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViewUpdateManyArgs>(args: SelectSubset<T, ViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views and returns the data updated in the database.
     * @param {ViewUpdateManyAndReturnArgs} args - Arguments to update many Views.
     * @example
     * // Update many Views
     * const view = await prisma.view.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Views and only return the `id`
     * const viewWithIdOnly = await prisma.view.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ViewUpdateManyAndReturnArgs>(args: SelectSubset<T, ViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one View.
     * @param {ViewUpsertArgs} args - Arguments to update or create a View.
     * @example
     * // Update or create a View
     * const view = await prisma.view.upsert({
     *   create: {
     *     // ... data to create a View
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the View we want to update
     *   }
     * })
     */
    upsert<T extends ViewUpsertArgs>(args: SelectSubset<T, ViewUpsertArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.view.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends ViewCountArgs>(
      args?: Subset<T, ViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ViewAggregateArgs>(args: Subset<T, ViewAggregateArgs>): Prisma.PrismaPromise<GetViewAggregateType<T>>

    /**
     * Group by View.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViewGroupByArgs['orderBy'] }
        : { orderBy?: ViewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the View model
   */
  readonly fields: ViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for View.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    table<T extends TableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableDefaultArgs<ExtArgs>>): Prisma__TableClient<$Result.GetResult<Prisma.$TablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    filters<T extends View$filtersArgs<ExtArgs> = {}>(args?: Subset<T, View$filtersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sorts<T extends View$sortsArgs<ExtArgs> = {}>(args?: Subset<T, View$sortsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    hiddenFields<T extends View$hiddenFieldsArgs<ExtArgs> = {}>(args?: Subset<T, View$hiddenFieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the View model
   */
  interface ViewFieldRefs {
    readonly id: FieldRef<"View", 'String'>
    readonly name: FieldRef<"View", 'String'>
    readonly description: FieldRef<"View", 'String'>
    readonly order: FieldRef<"View", 'Int'>
    readonly isDefault: FieldRef<"View", 'Boolean'>
    readonly createdAt: FieldRef<"View", 'DateTime'>
    readonly updatedAt: FieldRef<"View", 'DateTime'>
    readonly tableId: FieldRef<"View", 'String'>
  }
    

  // Custom InputTypes
  /**
   * View findUnique
   */
  export type ViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findUniqueOrThrow
   */
  export type ViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View findFirst
   */
  export type ViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findFirstOrThrow
   */
  export type ViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which View to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Views.
     */
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View findMany
   */
  export type ViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter, which Views to fetch.
     */
    where?: ViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Views to fetch.
     */
    orderBy?: ViewOrderByWithRelationInput | ViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Views.
     */
    cursor?: ViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Views.
     */
    skip?: number
    distinct?: ViewScalarFieldEnum | ViewScalarFieldEnum[]
  }

  /**
   * View create
   */
  export type ViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to create a View.
     */
    data: XOR<ViewCreateInput, ViewUncheckedCreateInput>
  }

  /**
   * View createMany
   */
  export type ViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * View createManyAndReturn
   */
  export type ViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to create many Views.
     */
    data: ViewCreateManyInput | ViewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * View update
   */
  export type ViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The data needed to update a View.
     */
    data: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
    /**
     * Choose, which View to update.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View updateMany
   */
  export type ViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
  }

  /**
   * View updateManyAndReturn
   */
  export type ViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * The data used to update Views.
     */
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyInput>
    /**
     * Filter which Views to update
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * View upsert
   */
  export type ViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * The filter to search for the View to update in case it exists.
     */
    where: ViewWhereUniqueInput
    /**
     * In case the View found by the `where` argument doesn't exist, create a new View with this data.
     */
    create: XOR<ViewCreateInput, ViewUncheckedCreateInput>
    /**
     * In case the View was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViewUpdateInput, ViewUncheckedUpdateInput>
  }

  /**
   * View delete
   */
  export type ViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
    /**
     * Filter which View to delete.
     */
    where: ViewWhereUniqueInput
  }

  /**
   * View deleteMany
   */
  export type ViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Views to delete
     */
    where?: ViewWhereInput
    /**
     * Limit how many Views to delete.
     */
    limit?: number
  }

  /**
   * View.filters
   */
  export type View$filtersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    where?: FilterWhereInput
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    cursor?: FilterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * View.sorts
   */
  export type View$sortsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    where?: SortWhereInput
    orderBy?: SortOrderByWithRelationInput | SortOrderByWithRelationInput[]
    cursor?: SortWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SortScalarFieldEnum | SortScalarFieldEnum[]
  }

  /**
   * View.hiddenFields
   */
  export type View$hiddenFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    where?: HiddenFieldWhereInput
    orderBy?: HiddenFieldOrderByWithRelationInput | HiddenFieldOrderByWithRelationInput[]
    cursor?: HiddenFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HiddenFieldScalarFieldEnum | HiddenFieldScalarFieldEnum[]
  }

  /**
   * View without action
   */
  export type ViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the View
     */
    select?: ViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the View
     */
    omit?: ViewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViewInclude<ExtArgs> | null
  }


  /**
   * Model Filter
   */

  export type AggregateFilter = {
    _count: FilterCountAggregateOutputType | null
    _avg: FilterAvgAggregateOutputType | null
    _sum: FilterSumAggregateOutputType | null
    _min: FilterMinAggregateOutputType | null
    _max: FilterMaxAggregateOutputType | null
  }

  export type FilterAvgAggregateOutputType = {
    order: number | null
  }

  export type FilterSumAggregateOutputType = {
    order: number | null
  }

  export type FilterMinAggregateOutputType = {
    id: string | null
    fieldId: string | null
    operator: $Enums.FilterOperator | null
    order: number | null
    viewId: string | null
  }

  export type FilterMaxAggregateOutputType = {
    id: string | null
    fieldId: string | null
    operator: $Enums.FilterOperator | null
    order: number | null
    viewId: string | null
  }

  export type FilterCountAggregateOutputType = {
    id: number
    fieldId: number
    operator: number
    value: number
    order: number
    viewId: number
    _all: number
  }


  export type FilterAvgAggregateInputType = {
    order?: true
  }

  export type FilterSumAggregateInputType = {
    order?: true
  }

  export type FilterMinAggregateInputType = {
    id?: true
    fieldId?: true
    operator?: true
    order?: true
    viewId?: true
  }

  export type FilterMaxAggregateInputType = {
    id?: true
    fieldId?: true
    operator?: true
    order?: true
    viewId?: true
  }

  export type FilterCountAggregateInputType = {
    id?: true
    fieldId?: true
    operator?: true
    value?: true
    order?: true
    viewId?: true
    _all?: true
  }

  export type FilterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filter to aggregate.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Filters
    **/
    _count?: true | FilterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilterMaxAggregateInputType
  }

  export type GetFilterAggregateType<T extends FilterAggregateArgs> = {
        [P in keyof T & keyof AggregateFilter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFilter[P]>
      : GetScalarType<T[P], AggregateFilter[P]>
  }




  export type FilterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilterWhereInput
    orderBy?: FilterOrderByWithAggregationInput | FilterOrderByWithAggregationInput[]
    by: FilterScalarFieldEnum[] | FilterScalarFieldEnum
    having?: FilterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilterCountAggregateInputType | true
    _avg?: FilterAvgAggregateInputType
    _sum?: FilterSumAggregateInputType
    _min?: FilterMinAggregateInputType
    _max?: FilterMaxAggregateInputType
  }

  export type FilterGroupByOutputType = {
    id: string
    fieldId: string
    operator: $Enums.FilterOperator
    value: JsonValue | null
    order: number
    viewId: string
    _count: FilterCountAggregateOutputType | null
    _avg: FilterAvgAggregateOutputType | null
    _sum: FilterSumAggregateOutputType | null
    _min: FilterMinAggregateOutputType | null
    _max: FilterMaxAggregateOutputType | null
  }

  type GetFilterGroupByPayload<T extends FilterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilterGroupByOutputType[P]>
            : GetScalarType<T[P], FilterGroupByOutputType[P]>
        }
      >
    >


  export type FilterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    order?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filter"]>

  export type FilterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    order?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filter"]>

  export type FilterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    order?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["filter"]>

  export type FilterSelectScalar = {
    id?: boolean
    fieldId?: boolean
    operator?: boolean
    value?: boolean
    order?: boolean
    viewId?: boolean
  }

  export type FilterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fieldId" | "operator" | "value" | "order" | "viewId", ExtArgs["result"]["filter"]>
  export type FilterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type FilterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type FilterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }

  export type $FilterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Filter"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      field: Prisma.$FieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fieldId: string
      operator: $Enums.FilterOperator
      value: Prisma.JsonValue | null
      order: number
      viewId: string
    }, ExtArgs["result"]["filter"]>
    composites: {}
  }

  type FilterGetPayload<S extends boolean | null | undefined | FilterDefaultArgs> = $Result.GetResult<Prisma.$FilterPayload, S>

  type FilterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilterCountAggregateInputType | true
    }

  export interface FilterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Filter'], meta: { name: 'Filter' } }
    /**
     * Find zero or one Filter that matches the filter.
     * @param {FilterFindUniqueArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilterFindUniqueArgs>(args: SelectSubset<T, FilterFindUniqueArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Filter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilterFindUniqueOrThrowArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilterFindUniqueOrThrowArgs>(args: SelectSubset<T, FilterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterFindFirstArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilterFindFirstArgs>(args?: SelectSubset<T, FilterFindFirstArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Filter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterFindFirstOrThrowArgs} args - Arguments to find a Filter
     * @example
     * // Get one Filter
     * const filter = await prisma.filter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilterFindFirstOrThrowArgs>(args?: SelectSubset<T, FilterFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Filters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Filters
     * const filters = await prisma.filter.findMany()
     * 
     * // Get first 10 Filters
     * const filters = await prisma.filter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filterWithIdOnly = await prisma.filter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilterFindManyArgs>(args?: SelectSubset<T, FilterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Filter.
     * @param {FilterCreateArgs} args - Arguments to create a Filter.
     * @example
     * // Create one Filter
     * const Filter = await prisma.filter.create({
     *   data: {
     *     // ... data to create a Filter
     *   }
     * })
     * 
     */
    create<T extends FilterCreateArgs>(args: SelectSubset<T, FilterCreateArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Filters.
     * @param {FilterCreateManyArgs} args - Arguments to create many Filters.
     * @example
     * // Create many Filters
     * const filter = await prisma.filter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilterCreateManyArgs>(args?: SelectSubset<T, FilterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Filters and returns the data saved in the database.
     * @param {FilterCreateManyAndReturnArgs} args - Arguments to create many Filters.
     * @example
     * // Create many Filters
     * const filter = await prisma.filter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Filters and only return the `id`
     * const filterWithIdOnly = await prisma.filter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilterCreateManyAndReturnArgs>(args?: SelectSubset<T, FilterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Filter.
     * @param {FilterDeleteArgs} args - Arguments to delete one Filter.
     * @example
     * // Delete one Filter
     * const Filter = await prisma.filter.delete({
     *   where: {
     *     // ... filter to delete one Filter
     *   }
     * })
     * 
     */
    delete<T extends FilterDeleteArgs>(args: SelectSubset<T, FilterDeleteArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Filter.
     * @param {FilterUpdateArgs} args - Arguments to update one Filter.
     * @example
     * // Update one Filter
     * const filter = await prisma.filter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilterUpdateArgs>(args: SelectSubset<T, FilterUpdateArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Filters.
     * @param {FilterDeleteManyArgs} args - Arguments to filter Filters to delete.
     * @example
     * // Delete a few Filters
     * const { count } = await prisma.filter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilterDeleteManyArgs>(args?: SelectSubset<T, FilterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Filters
     * const filter = await prisma.filter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilterUpdateManyArgs>(args: SelectSubset<T, FilterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Filters and returns the data updated in the database.
     * @param {FilterUpdateManyAndReturnArgs} args - Arguments to update many Filters.
     * @example
     * // Update many Filters
     * const filter = await prisma.filter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Filters and only return the `id`
     * const filterWithIdOnly = await prisma.filter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilterUpdateManyAndReturnArgs>(args: SelectSubset<T, FilterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Filter.
     * @param {FilterUpsertArgs} args - Arguments to update or create a Filter.
     * @example
     * // Update or create a Filter
     * const filter = await prisma.filter.upsert({
     *   create: {
     *     // ... data to create a Filter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Filter we want to update
     *   }
     * })
     */
    upsert<T extends FilterUpsertArgs>(args: SelectSubset<T, FilterUpsertArgs<ExtArgs>>): Prisma__FilterClient<$Result.GetResult<Prisma.$FilterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Filters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterCountArgs} args - Arguments to filter Filters to count.
     * @example
     * // Count the number of Filters
     * const count = await prisma.filter.count({
     *   where: {
     *     // ... the filter for the Filters we want to count
     *   }
     * })
    **/
    count<T extends FilterCountArgs>(
      args?: Subset<T, FilterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilterAggregateArgs>(args: Subset<T, FilterAggregateArgs>): Prisma.PrismaPromise<GetFilterAggregateType<T>>

    /**
     * Group by Filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilterGroupByArgs['orderBy'] }
        : { orderBy?: FilterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Filter model
   */
  readonly fields: FilterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Filter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Filter model
   */
  interface FilterFieldRefs {
    readonly id: FieldRef<"Filter", 'String'>
    readonly fieldId: FieldRef<"Filter", 'String'>
    readonly operator: FieldRef<"Filter", 'FilterOperator'>
    readonly value: FieldRef<"Filter", 'Json'>
    readonly order: FieldRef<"Filter", 'Int'>
    readonly viewId: FieldRef<"Filter", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Filter findUnique
   */
  export type FilterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter findUniqueOrThrow
   */
  export type FilterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter findFirst
   */
  export type FilterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filters.
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filters.
     */
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Filter findFirstOrThrow
   */
  export type FilterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filter to fetch.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Filters.
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Filters.
     */
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Filter findMany
   */
  export type FilterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter, which Filters to fetch.
     */
    where?: FilterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Filters to fetch.
     */
    orderBy?: FilterOrderByWithRelationInput | FilterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Filters.
     */
    cursor?: FilterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Filters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Filters.
     */
    skip?: number
    distinct?: FilterScalarFieldEnum | FilterScalarFieldEnum[]
  }

  /**
   * Filter create
   */
  export type FilterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * The data needed to create a Filter.
     */
    data: XOR<FilterCreateInput, FilterUncheckedCreateInput>
  }

  /**
   * Filter createMany
   */
  export type FilterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Filters.
     */
    data: FilterCreateManyInput | FilterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Filter createManyAndReturn
   */
  export type FilterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * The data used to create many Filters.
     */
    data: FilterCreateManyInput | FilterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filter update
   */
  export type FilterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * The data needed to update a Filter.
     */
    data: XOR<FilterUpdateInput, FilterUncheckedUpdateInput>
    /**
     * Choose, which Filter to update.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter updateMany
   */
  export type FilterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Filters.
     */
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyInput>
    /**
     * Filter which Filters to update
     */
    where?: FilterWhereInput
    /**
     * Limit how many Filters to update.
     */
    limit?: number
  }

  /**
   * Filter updateManyAndReturn
   */
  export type FilterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * The data used to update Filters.
     */
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyInput>
    /**
     * Filter which Filters to update
     */
    where?: FilterWhereInput
    /**
     * Limit how many Filters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Filter upsert
   */
  export type FilterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * The filter to search for the Filter to update in case it exists.
     */
    where: FilterWhereUniqueInput
    /**
     * In case the Filter found by the `where` argument doesn't exist, create a new Filter with this data.
     */
    create: XOR<FilterCreateInput, FilterUncheckedCreateInput>
    /**
     * In case the Filter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilterUpdateInput, FilterUncheckedUpdateInput>
  }

  /**
   * Filter delete
   */
  export type FilterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
    /**
     * Filter which Filter to delete.
     */
    where: FilterWhereUniqueInput
  }

  /**
   * Filter deleteMany
   */
  export type FilterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Filters to delete
     */
    where?: FilterWhereInput
    /**
     * Limit how many Filters to delete.
     */
    limit?: number
  }

  /**
   * Filter without action
   */
  export type FilterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Filter
     */
    select?: FilterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Filter
     */
    omit?: FilterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilterInclude<ExtArgs> | null
  }


  /**
   * Model Sort
   */

  export type AggregateSort = {
    _count: SortCountAggregateOutputType | null
    _avg: SortAvgAggregateOutputType | null
    _sum: SortSumAggregateOutputType | null
    _min: SortMinAggregateOutputType | null
    _max: SortMaxAggregateOutputType | null
  }

  export type SortAvgAggregateOutputType = {
    order: number | null
  }

  export type SortSumAggregateOutputType = {
    order: number | null
  }

  export type SortMinAggregateOutputType = {
    id: string | null
    fieldId: string | null
    direction: $Enums.SortDirection | null
    order: number | null
    viewId: string | null
  }

  export type SortMaxAggregateOutputType = {
    id: string | null
    fieldId: string | null
    direction: $Enums.SortDirection | null
    order: number | null
    viewId: string | null
  }

  export type SortCountAggregateOutputType = {
    id: number
    fieldId: number
    direction: number
    order: number
    viewId: number
    _all: number
  }


  export type SortAvgAggregateInputType = {
    order?: true
  }

  export type SortSumAggregateInputType = {
    order?: true
  }

  export type SortMinAggregateInputType = {
    id?: true
    fieldId?: true
    direction?: true
    order?: true
    viewId?: true
  }

  export type SortMaxAggregateInputType = {
    id?: true
    fieldId?: true
    direction?: true
    order?: true
    viewId?: true
  }

  export type SortCountAggregateInputType = {
    id?: true
    fieldId?: true
    direction?: true
    order?: true
    viewId?: true
    _all?: true
  }

  export type SortAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sort to aggregate.
     */
    where?: SortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorts to fetch.
     */
    orderBy?: SortOrderByWithRelationInput | SortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sorts
    **/
    _count?: true | SortCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SortAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SortSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SortMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SortMaxAggregateInputType
  }

  export type GetSortAggregateType<T extends SortAggregateArgs> = {
        [P in keyof T & keyof AggregateSort]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSort[P]>
      : GetScalarType<T[P], AggregateSort[P]>
  }




  export type SortGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SortWhereInput
    orderBy?: SortOrderByWithAggregationInput | SortOrderByWithAggregationInput[]
    by: SortScalarFieldEnum[] | SortScalarFieldEnum
    having?: SortScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SortCountAggregateInputType | true
    _avg?: SortAvgAggregateInputType
    _sum?: SortSumAggregateInputType
    _min?: SortMinAggregateInputType
    _max?: SortMaxAggregateInputType
  }

  export type SortGroupByOutputType = {
    id: string
    fieldId: string
    direction: $Enums.SortDirection
    order: number
    viewId: string
    _count: SortCountAggregateOutputType | null
    _avg: SortAvgAggregateOutputType | null
    _sum: SortSumAggregateOutputType | null
    _min: SortMinAggregateOutputType | null
    _max: SortMaxAggregateOutputType | null
  }

  type GetSortGroupByPayload<T extends SortGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SortGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SortGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SortGroupByOutputType[P]>
            : GetScalarType<T[P], SortGroupByOutputType[P]>
        }
      >
    >


  export type SortSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sort"]>

  export type SortSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sort"]>

  export type SortSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sort"]>

  export type SortSelectScalar = {
    id?: boolean
    fieldId?: boolean
    direction?: boolean
    order?: boolean
    viewId?: boolean
  }

  export type SortOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fieldId" | "direction" | "order" | "viewId", ExtArgs["result"]["sort"]>
  export type SortInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type SortIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }
  export type SortIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
    field?: boolean | FieldDefaultArgs<ExtArgs>
  }

  export type $SortPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sort"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
      field: Prisma.$FieldPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fieldId: string
      direction: $Enums.SortDirection
      order: number
      viewId: string
    }, ExtArgs["result"]["sort"]>
    composites: {}
  }

  type SortGetPayload<S extends boolean | null | undefined | SortDefaultArgs> = $Result.GetResult<Prisma.$SortPayload, S>

  type SortCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SortFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SortCountAggregateInputType | true
    }

  export interface SortDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sort'], meta: { name: 'Sort' } }
    /**
     * Find zero or one Sort that matches the filter.
     * @param {SortFindUniqueArgs} args - Arguments to find a Sort
     * @example
     * // Get one Sort
     * const sort = await prisma.sort.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SortFindUniqueArgs>(args: SelectSubset<T, SortFindUniqueArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sort that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SortFindUniqueOrThrowArgs} args - Arguments to find a Sort
     * @example
     * // Get one Sort
     * const sort = await prisma.sort.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SortFindUniqueOrThrowArgs>(args: SelectSubset<T, SortFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sort that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortFindFirstArgs} args - Arguments to find a Sort
     * @example
     * // Get one Sort
     * const sort = await prisma.sort.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SortFindFirstArgs>(args?: SelectSubset<T, SortFindFirstArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sort that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortFindFirstOrThrowArgs} args - Arguments to find a Sort
     * @example
     * // Get one Sort
     * const sort = await prisma.sort.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SortFindFirstOrThrowArgs>(args?: SelectSubset<T, SortFindFirstOrThrowArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sorts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sorts
     * const sorts = await prisma.sort.findMany()
     * 
     * // Get first 10 Sorts
     * const sorts = await prisma.sort.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sortWithIdOnly = await prisma.sort.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SortFindManyArgs>(args?: SelectSubset<T, SortFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sort.
     * @param {SortCreateArgs} args - Arguments to create a Sort.
     * @example
     * // Create one Sort
     * const Sort = await prisma.sort.create({
     *   data: {
     *     // ... data to create a Sort
     *   }
     * })
     * 
     */
    create<T extends SortCreateArgs>(args: SelectSubset<T, SortCreateArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sorts.
     * @param {SortCreateManyArgs} args - Arguments to create many Sorts.
     * @example
     * // Create many Sorts
     * const sort = await prisma.sort.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SortCreateManyArgs>(args?: SelectSubset<T, SortCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sorts and returns the data saved in the database.
     * @param {SortCreateManyAndReturnArgs} args - Arguments to create many Sorts.
     * @example
     * // Create many Sorts
     * const sort = await prisma.sort.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sorts and only return the `id`
     * const sortWithIdOnly = await prisma.sort.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SortCreateManyAndReturnArgs>(args?: SelectSubset<T, SortCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sort.
     * @param {SortDeleteArgs} args - Arguments to delete one Sort.
     * @example
     * // Delete one Sort
     * const Sort = await prisma.sort.delete({
     *   where: {
     *     // ... filter to delete one Sort
     *   }
     * })
     * 
     */
    delete<T extends SortDeleteArgs>(args: SelectSubset<T, SortDeleteArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sort.
     * @param {SortUpdateArgs} args - Arguments to update one Sort.
     * @example
     * // Update one Sort
     * const sort = await prisma.sort.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SortUpdateArgs>(args: SelectSubset<T, SortUpdateArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sorts.
     * @param {SortDeleteManyArgs} args - Arguments to filter Sorts to delete.
     * @example
     * // Delete a few Sorts
     * const { count } = await prisma.sort.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SortDeleteManyArgs>(args?: SelectSubset<T, SortDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sorts
     * const sort = await prisma.sort.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SortUpdateManyArgs>(args: SelectSubset<T, SortUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sorts and returns the data updated in the database.
     * @param {SortUpdateManyAndReturnArgs} args - Arguments to update many Sorts.
     * @example
     * // Update many Sorts
     * const sort = await prisma.sort.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sorts and only return the `id`
     * const sortWithIdOnly = await prisma.sort.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SortUpdateManyAndReturnArgs>(args: SelectSubset<T, SortUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sort.
     * @param {SortUpsertArgs} args - Arguments to update or create a Sort.
     * @example
     * // Update or create a Sort
     * const sort = await prisma.sort.upsert({
     *   create: {
     *     // ... data to create a Sort
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sort we want to update
     *   }
     * })
     */
    upsert<T extends SortUpsertArgs>(args: SelectSubset<T, SortUpsertArgs<ExtArgs>>): Prisma__SortClient<$Result.GetResult<Prisma.$SortPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sorts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortCountArgs} args - Arguments to filter Sorts to count.
     * @example
     * // Count the number of Sorts
     * const count = await prisma.sort.count({
     *   where: {
     *     // ... the filter for the Sorts we want to count
     *   }
     * })
    **/
    count<T extends SortCountArgs>(
      args?: Subset<T, SortCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SortCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SortAggregateArgs>(args: Subset<T, SortAggregateArgs>): Prisma.PrismaPromise<GetSortAggregateType<T>>

    /**
     * Group by Sort.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SortGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SortGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SortGroupByArgs['orderBy'] }
        : { orderBy?: SortGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SortGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSortGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sort model
   */
  readonly fields: SortFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sort.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SortClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    field<T extends FieldDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FieldDefaultArgs<ExtArgs>>): Prisma__FieldClient<$Result.GetResult<Prisma.$FieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sort model
   */
  interface SortFieldRefs {
    readonly id: FieldRef<"Sort", 'String'>
    readonly fieldId: FieldRef<"Sort", 'String'>
    readonly direction: FieldRef<"Sort", 'SortDirection'>
    readonly order: FieldRef<"Sort", 'Int'>
    readonly viewId: FieldRef<"Sort", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sort findUnique
   */
  export type SortFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * Filter, which Sort to fetch.
     */
    where: SortWhereUniqueInput
  }

  /**
   * Sort findUniqueOrThrow
   */
  export type SortFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * Filter, which Sort to fetch.
     */
    where: SortWhereUniqueInput
  }

  /**
   * Sort findFirst
   */
  export type SortFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * Filter, which Sort to fetch.
     */
    where?: SortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorts to fetch.
     */
    orderBy?: SortOrderByWithRelationInput | SortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorts.
     */
    cursor?: SortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorts.
     */
    distinct?: SortScalarFieldEnum | SortScalarFieldEnum[]
  }

  /**
   * Sort findFirstOrThrow
   */
  export type SortFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * Filter, which Sort to fetch.
     */
    where?: SortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorts to fetch.
     */
    orderBy?: SortOrderByWithRelationInput | SortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sorts.
     */
    cursor?: SortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sorts.
     */
    distinct?: SortScalarFieldEnum | SortScalarFieldEnum[]
  }

  /**
   * Sort findMany
   */
  export type SortFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * Filter, which Sorts to fetch.
     */
    where?: SortWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sorts to fetch.
     */
    orderBy?: SortOrderByWithRelationInput | SortOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sorts.
     */
    cursor?: SortWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sorts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sorts.
     */
    skip?: number
    distinct?: SortScalarFieldEnum | SortScalarFieldEnum[]
  }

  /**
   * Sort create
   */
  export type SortCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * The data needed to create a Sort.
     */
    data: XOR<SortCreateInput, SortUncheckedCreateInput>
  }

  /**
   * Sort createMany
   */
  export type SortCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sorts.
     */
    data: SortCreateManyInput | SortCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sort createManyAndReturn
   */
  export type SortCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * The data used to create many Sorts.
     */
    data: SortCreateManyInput | SortCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sort update
   */
  export type SortUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * The data needed to update a Sort.
     */
    data: XOR<SortUpdateInput, SortUncheckedUpdateInput>
    /**
     * Choose, which Sort to update.
     */
    where: SortWhereUniqueInput
  }

  /**
   * Sort updateMany
   */
  export type SortUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sorts.
     */
    data: XOR<SortUpdateManyMutationInput, SortUncheckedUpdateManyInput>
    /**
     * Filter which Sorts to update
     */
    where?: SortWhereInput
    /**
     * Limit how many Sorts to update.
     */
    limit?: number
  }

  /**
   * Sort updateManyAndReturn
   */
  export type SortUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * The data used to update Sorts.
     */
    data: XOR<SortUpdateManyMutationInput, SortUncheckedUpdateManyInput>
    /**
     * Filter which Sorts to update
     */
    where?: SortWhereInput
    /**
     * Limit how many Sorts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sort upsert
   */
  export type SortUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * The filter to search for the Sort to update in case it exists.
     */
    where: SortWhereUniqueInput
    /**
     * In case the Sort found by the `where` argument doesn't exist, create a new Sort with this data.
     */
    create: XOR<SortCreateInput, SortUncheckedCreateInput>
    /**
     * In case the Sort was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SortUpdateInput, SortUncheckedUpdateInput>
  }

  /**
   * Sort delete
   */
  export type SortDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
    /**
     * Filter which Sort to delete.
     */
    where: SortWhereUniqueInput
  }

  /**
   * Sort deleteMany
   */
  export type SortDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sorts to delete
     */
    where?: SortWhereInput
    /**
     * Limit how many Sorts to delete.
     */
    limit?: number
  }

  /**
   * Sort without action
   */
  export type SortDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sort
     */
    select?: SortSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sort
     */
    omit?: SortOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SortInclude<ExtArgs> | null
  }


  /**
   * Model HiddenField
   */

  export type AggregateHiddenField = {
    _count: HiddenFieldCountAggregateOutputType | null
    _min: HiddenFieldMinAggregateOutputType | null
    _max: HiddenFieldMaxAggregateOutputType | null
  }

  export type HiddenFieldMinAggregateOutputType = {
    id: string | null
    fieldId: string | null
    viewId: string | null
  }

  export type HiddenFieldMaxAggregateOutputType = {
    id: string | null
    fieldId: string | null
    viewId: string | null
  }

  export type HiddenFieldCountAggregateOutputType = {
    id: number
    fieldId: number
    viewId: number
    _all: number
  }


  export type HiddenFieldMinAggregateInputType = {
    id?: true
    fieldId?: true
    viewId?: true
  }

  export type HiddenFieldMaxAggregateInputType = {
    id?: true
    fieldId?: true
    viewId?: true
  }

  export type HiddenFieldCountAggregateInputType = {
    id?: true
    fieldId?: true
    viewId?: true
    _all?: true
  }

  export type HiddenFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HiddenField to aggregate.
     */
    where?: HiddenFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HiddenFields to fetch.
     */
    orderBy?: HiddenFieldOrderByWithRelationInput | HiddenFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HiddenFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HiddenFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HiddenFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HiddenFields
    **/
    _count?: true | HiddenFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HiddenFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HiddenFieldMaxAggregateInputType
  }

  export type GetHiddenFieldAggregateType<T extends HiddenFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateHiddenField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHiddenField[P]>
      : GetScalarType<T[P], AggregateHiddenField[P]>
  }




  export type HiddenFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HiddenFieldWhereInput
    orderBy?: HiddenFieldOrderByWithAggregationInput | HiddenFieldOrderByWithAggregationInput[]
    by: HiddenFieldScalarFieldEnum[] | HiddenFieldScalarFieldEnum
    having?: HiddenFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HiddenFieldCountAggregateInputType | true
    _min?: HiddenFieldMinAggregateInputType
    _max?: HiddenFieldMaxAggregateInputType
  }

  export type HiddenFieldGroupByOutputType = {
    id: string
    fieldId: string
    viewId: string
    _count: HiddenFieldCountAggregateOutputType | null
    _min: HiddenFieldMinAggregateOutputType | null
    _max: HiddenFieldMaxAggregateOutputType | null
  }

  type GetHiddenFieldGroupByPayload<T extends HiddenFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HiddenFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HiddenFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HiddenFieldGroupByOutputType[P]>
            : GetScalarType<T[P], HiddenFieldGroupByOutputType[P]>
        }
      >
    >


  export type HiddenFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hiddenField"]>

  export type HiddenFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hiddenField"]>

  export type HiddenFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fieldId?: boolean
    viewId?: boolean
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hiddenField"]>

  export type HiddenFieldSelectScalar = {
    id?: boolean
    fieldId?: boolean
    viewId?: boolean
  }

  export type HiddenFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fieldId" | "viewId", ExtArgs["result"]["hiddenField"]>
  export type HiddenFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }
  export type HiddenFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }
  export type HiddenFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    view?: boolean | ViewDefaultArgs<ExtArgs>
  }

  export type $HiddenFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HiddenField"
    objects: {
      view: Prisma.$ViewPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fieldId: string
      viewId: string
    }, ExtArgs["result"]["hiddenField"]>
    composites: {}
  }

  type HiddenFieldGetPayload<S extends boolean | null | undefined | HiddenFieldDefaultArgs> = $Result.GetResult<Prisma.$HiddenFieldPayload, S>

  type HiddenFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HiddenFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HiddenFieldCountAggregateInputType | true
    }

  export interface HiddenFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HiddenField'], meta: { name: 'HiddenField' } }
    /**
     * Find zero or one HiddenField that matches the filter.
     * @param {HiddenFieldFindUniqueArgs} args - Arguments to find a HiddenField
     * @example
     * // Get one HiddenField
     * const hiddenField = await prisma.hiddenField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HiddenFieldFindUniqueArgs>(args: SelectSubset<T, HiddenFieldFindUniqueArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one HiddenField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HiddenFieldFindUniqueOrThrowArgs} args - Arguments to find a HiddenField
     * @example
     * // Get one HiddenField
     * const hiddenField = await prisma.hiddenField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HiddenFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, HiddenFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HiddenField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldFindFirstArgs} args - Arguments to find a HiddenField
     * @example
     * // Get one HiddenField
     * const hiddenField = await prisma.hiddenField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HiddenFieldFindFirstArgs>(args?: SelectSubset<T, HiddenFieldFindFirstArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first HiddenField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldFindFirstOrThrowArgs} args - Arguments to find a HiddenField
     * @example
     * // Get one HiddenField
     * const hiddenField = await prisma.hiddenField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HiddenFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, HiddenFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more HiddenFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HiddenFields
     * const hiddenFields = await prisma.hiddenField.findMany()
     * 
     * // Get first 10 HiddenFields
     * const hiddenFields = await prisma.hiddenField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hiddenFieldWithIdOnly = await prisma.hiddenField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HiddenFieldFindManyArgs>(args?: SelectSubset<T, HiddenFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a HiddenField.
     * @param {HiddenFieldCreateArgs} args - Arguments to create a HiddenField.
     * @example
     * // Create one HiddenField
     * const HiddenField = await prisma.hiddenField.create({
     *   data: {
     *     // ... data to create a HiddenField
     *   }
     * })
     * 
     */
    create<T extends HiddenFieldCreateArgs>(args: SelectSubset<T, HiddenFieldCreateArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many HiddenFields.
     * @param {HiddenFieldCreateManyArgs} args - Arguments to create many HiddenFields.
     * @example
     * // Create many HiddenFields
     * const hiddenField = await prisma.hiddenField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HiddenFieldCreateManyArgs>(args?: SelectSubset<T, HiddenFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HiddenFields and returns the data saved in the database.
     * @param {HiddenFieldCreateManyAndReturnArgs} args - Arguments to create many HiddenFields.
     * @example
     * // Create many HiddenFields
     * const hiddenField = await prisma.hiddenField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HiddenFields and only return the `id`
     * const hiddenFieldWithIdOnly = await prisma.hiddenField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HiddenFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, HiddenFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a HiddenField.
     * @param {HiddenFieldDeleteArgs} args - Arguments to delete one HiddenField.
     * @example
     * // Delete one HiddenField
     * const HiddenField = await prisma.hiddenField.delete({
     *   where: {
     *     // ... filter to delete one HiddenField
     *   }
     * })
     * 
     */
    delete<T extends HiddenFieldDeleteArgs>(args: SelectSubset<T, HiddenFieldDeleteArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one HiddenField.
     * @param {HiddenFieldUpdateArgs} args - Arguments to update one HiddenField.
     * @example
     * // Update one HiddenField
     * const hiddenField = await prisma.hiddenField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HiddenFieldUpdateArgs>(args: SelectSubset<T, HiddenFieldUpdateArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more HiddenFields.
     * @param {HiddenFieldDeleteManyArgs} args - Arguments to filter HiddenFields to delete.
     * @example
     * // Delete a few HiddenFields
     * const { count } = await prisma.hiddenField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HiddenFieldDeleteManyArgs>(args?: SelectSubset<T, HiddenFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HiddenFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HiddenFields
     * const hiddenField = await prisma.hiddenField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HiddenFieldUpdateManyArgs>(args: SelectSubset<T, HiddenFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HiddenFields and returns the data updated in the database.
     * @param {HiddenFieldUpdateManyAndReturnArgs} args - Arguments to update many HiddenFields.
     * @example
     * // Update many HiddenFields
     * const hiddenField = await prisma.hiddenField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more HiddenFields and only return the `id`
     * const hiddenFieldWithIdOnly = await prisma.hiddenField.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HiddenFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, HiddenFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one HiddenField.
     * @param {HiddenFieldUpsertArgs} args - Arguments to update or create a HiddenField.
     * @example
     * // Update or create a HiddenField
     * const hiddenField = await prisma.hiddenField.upsert({
     *   create: {
     *     // ... data to create a HiddenField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HiddenField we want to update
     *   }
     * })
     */
    upsert<T extends HiddenFieldUpsertArgs>(args: SelectSubset<T, HiddenFieldUpsertArgs<ExtArgs>>): Prisma__HiddenFieldClient<$Result.GetResult<Prisma.$HiddenFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of HiddenFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldCountArgs} args - Arguments to filter HiddenFields to count.
     * @example
     * // Count the number of HiddenFields
     * const count = await prisma.hiddenField.count({
     *   where: {
     *     // ... the filter for the HiddenFields we want to count
     *   }
     * })
    **/
    count<T extends HiddenFieldCountArgs>(
      args?: Subset<T, HiddenFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HiddenFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HiddenField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HiddenFieldAggregateArgs>(args: Subset<T, HiddenFieldAggregateArgs>): Prisma.PrismaPromise<GetHiddenFieldAggregateType<T>>

    /**
     * Group by HiddenField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HiddenFieldGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HiddenFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HiddenFieldGroupByArgs['orderBy'] }
        : { orderBy?: HiddenFieldGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HiddenFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHiddenFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HiddenField model
   */
  readonly fields: HiddenFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HiddenField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HiddenFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    view<T extends ViewDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViewDefaultArgs<ExtArgs>>): Prisma__ViewClient<$Result.GetResult<Prisma.$ViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HiddenField model
   */
  interface HiddenFieldFieldRefs {
    readonly id: FieldRef<"HiddenField", 'String'>
    readonly fieldId: FieldRef<"HiddenField", 'String'>
    readonly viewId: FieldRef<"HiddenField", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HiddenField findUnique
   */
  export type HiddenFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * Filter, which HiddenField to fetch.
     */
    where: HiddenFieldWhereUniqueInput
  }

  /**
   * HiddenField findUniqueOrThrow
   */
  export type HiddenFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * Filter, which HiddenField to fetch.
     */
    where: HiddenFieldWhereUniqueInput
  }

  /**
   * HiddenField findFirst
   */
  export type HiddenFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * Filter, which HiddenField to fetch.
     */
    where?: HiddenFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HiddenFields to fetch.
     */
    orderBy?: HiddenFieldOrderByWithRelationInput | HiddenFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HiddenFields.
     */
    cursor?: HiddenFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HiddenFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HiddenFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HiddenFields.
     */
    distinct?: HiddenFieldScalarFieldEnum | HiddenFieldScalarFieldEnum[]
  }

  /**
   * HiddenField findFirstOrThrow
   */
  export type HiddenFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * Filter, which HiddenField to fetch.
     */
    where?: HiddenFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HiddenFields to fetch.
     */
    orderBy?: HiddenFieldOrderByWithRelationInput | HiddenFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HiddenFields.
     */
    cursor?: HiddenFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HiddenFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HiddenFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HiddenFields.
     */
    distinct?: HiddenFieldScalarFieldEnum | HiddenFieldScalarFieldEnum[]
  }

  /**
   * HiddenField findMany
   */
  export type HiddenFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * Filter, which HiddenFields to fetch.
     */
    where?: HiddenFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HiddenFields to fetch.
     */
    orderBy?: HiddenFieldOrderByWithRelationInput | HiddenFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HiddenFields.
     */
    cursor?: HiddenFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HiddenFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HiddenFields.
     */
    skip?: number
    distinct?: HiddenFieldScalarFieldEnum | HiddenFieldScalarFieldEnum[]
  }

  /**
   * HiddenField create
   */
  export type HiddenFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a HiddenField.
     */
    data: XOR<HiddenFieldCreateInput, HiddenFieldUncheckedCreateInput>
  }

  /**
   * HiddenField createMany
   */
  export type HiddenFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HiddenFields.
     */
    data: HiddenFieldCreateManyInput | HiddenFieldCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HiddenField createManyAndReturn
   */
  export type HiddenFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * The data used to create many HiddenFields.
     */
    data: HiddenFieldCreateManyInput | HiddenFieldCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * HiddenField update
   */
  export type HiddenFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a HiddenField.
     */
    data: XOR<HiddenFieldUpdateInput, HiddenFieldUncheckedUpdateInput>
    /**
     * Choose, which HiddenField to update.
     */
    where: HiddenFieldWhereUniqueInput
  }

  /**
   * HiddenField updateMany
   */
  export type HiddenFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HiddenFields.
     */
    data: XOR<HiddenFieldUpdateManyMutationInput, HiddenFieldUncheckedUpdateManyInput>
    /**
     * Filter which HiddenFields to update
     */
    where?: HiddenFieldWhereInput
    /**
     * Limit how many HiddenFields to update.
     */
    limit?: number
  }

  /**
   * HiddenField updateManyAndReturn
   */
  export type HiddenFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * The data used to update HiddenFields.
     */
    data: XOR<HiddenFieldUpdateManyMutationInput, HiddenFieldUncheckedUpdateManyInput>
    /**
     * Filter which HiddenFields to update
     */
    where?: HiddenFieldWhereInput
    /**
     * Limit how many HiddenFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * HiddenField upsert
   */
  export type HiddenFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the HiddenField to update in case it exists.
     */
    where: HiddenFieldWhereUniqueInput
    /**
     * In case the HiddenField found by the `where` argument doesn't exist, create a new HiddenField with this data.
     */
    create: XOR<HiddenFieldCreateInput, HiddenFieldUncheckedCreateInput>
    /**
     * In case the HiddenField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HiddenFieldUpdateInput, HiddenFieldUncheckedUpdateInput>
  }

  /**
   * HiddenField delete
   */
  export type HiddenFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
    /**
     * Filter which HiddenField to delete.
     */
    where: HiddenFieldWhereUniqueInput
  }

  /**
   * HiddenField deleteMany
   */
  export type HiddenFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HiddenFields to delete
     */
    where?: HiddenFieldWhereInput
    /**
     * Limit how many HiddenFields to delete.
     */
    limit?: number
  }

  /**
   * HiddenField without action
   */
  export type HiddenFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HiddenField
     */
    select?: HiddenFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the HiddenField
     */
    omit?: HiddenFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HiddenFieldInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const BaseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum]


  export const TableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    baseId: 'baseId'
  };

  export type TableScalarFieldEnum = (typeof TableScalarFieldEnum)[keyof typeof TableScalarFieldEnum]


  export const FieldScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    order: 'order',
    description: 'description',
    config: 'config',
    isPrimary: 'isPrimary',
    isRequired: 'isRequired',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type FieldScalarFieldEnum = (typeof FieldScalarFieldEnum)[keyof typeof FieldScalarFieldEnum]


  export const RecordScalarFieldEnum: {
    id: 'id',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type RecordScalarFieldEnum = (typeof RecordScalarFieldEnum)[keyof typeof RecordScalarFieldEnum]


  export const CellScalarFieldEnum: {
    id: 'id',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    fieldId: 'fieldId',
    recordId: 'recordId'
  };

  export type CellScalarFieldEnum = (typeof CellScalarFieldEnum)[keyof typeof CellScalarFieldEnum]


  export const ViewScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    order: 'order',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    tableId: 'tableId'
  };

  export type ViewScalarFieldEnum = (typeof ViewScalarFieldEnum)[keyof typeof ViewScalarFieldEnum]


  export const FilterScalarFieldEnum: {
    id: 'id',
    fieldId: 'fieldId',
    operator: 'operator',
    value: 'value',
    order: 'order',
    viewId: 'viewId'
  };

  export type FilterScalarFieldEnum = (typeof FilterScalarFieldEnum)[keyof typeof FilterScalarFieldEnum]


  export const SortScalarFieldEnum: {
    id: 'id',
    fieldId: 'fieldId',
    direction: 'direction',
    order: 'order',
    viewId: 'viewId'
  };

  export type SortScalarFieldEnum = (typeof SortScalarFieldEnum)[keyof typeof SortScalarFieldEnum]


  export const HiddenFieldScalarFieldEnum: {
    id: 'id',
    fieldId: 'fieldId',
    viewId: 'viewId'
  };

  export type HiddenFieldScalarFieldEnum = (typeof HiddenFieldScalarFieldEnum)[keyof typeof HiddenFieldScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'FieldType'
   */
  export type EnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType'>
    


  /**
   * Reference to a field of type 'FieldType[]'
   */
  export type ListEnumFieldTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FieldType[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'FilterOperator'
   */
  export type EnumFilterOperatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FilterOperator'>
    


  /**
   * Reference to a field of type 'FilterOperator[]'
   */
  export type ListEnumFilterOperatorFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FilterOperator[]'>
    


  /**
   * Reference to a field of type 'SortDirection'
   */
  export type EnumSortDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SortDirection'>
    


  /**
   * Reference to a field of type 'SortDirection[]'
   */
  export type ListEnumSortDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SortDirection[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type BaseWhereInput = {
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    id?: StringFilter<"Base"> | string
    name?: StringFilter<"Base"> | string
    description?: StringNullableFilter<"Base"> | string | null
    icon?: StringNullableFilter<"Base"> | string | null
    createdAt?: DateTimeFilter<"Base"> | Date | string
    updatedAt?: DateTimeFilter<"Base"> | Date | string
    tables?: TableListRelationFilter
  }

  export type BaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tables?: TableOrderByRelationAggregateInput
  }

  export type BaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    name?: StringFilter<"Base"> | string
    description?: StringNullableFilter<"Base"> | string | null
    icon?: StringNullableFilter<"Base"> | string | null
    createdAt?: DateTimeFilter<"Base"> | Date | string
    updatedAt?: DateTimeFilter<"Base"> | Date | string
    tables?: TableListRelationFilter
  }, "id">

  export type BaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BaseCountOrderByAggregateInput
    _max?: BaseMaxOrderByAggregateInput
    _min?: BaseMinOrderByAggregateInput
  }

  export type BaseScalarWhereWithAggregatesInput = {
    AND?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    OR?: BaseScalarWhereWithAggregatesInput[]
    NOT?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Base"> | string
    name?: StringWithAggregatesFilter<"Base"> | string
    description?: StringNullableWithAggregatesFilter<"Base"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Base"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Base"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Base"> | Date | string
  }

  export type TableWhereInput = {
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    id?: StringFilter<"Table"> | string
    name?: StringFilter<"Table"> | string
    description?: StringNullableFilter<"Table"> | string | null
    icon?: StringNullableFilter<"Table"> | string | null
    order?: IntFilter<"Table"> | number
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    baseId?: StringFilter<"Table"> | string
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    fields?: FieldListRelationFilter
    records?: RecordListRelationFilter
    views?: ViewListRelationFilter
  }

  export type TableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
    base?: BaseOrderByWithRelationInput
    fields?: FieldOrderByRelationAggregateInput
    records?: RecordOrderByRelationAggregateInput
    views?: ViewOrderByRelationAggregateInput
  }

  export type TableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TableWhereInput | TableWhereInput[]
    OR?: TableWhereInput[]
    NOT?: TableWhereInput | TableWhereInput[]
    name?: StringFilter<"Table"> | string
    description?: StringNullableFilter<"Table"> | string | null
    icon?: StringNullableFilter<"Table"> | string | null
    order?: IntFilter<"Table"> | number
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    baseId?: StringFilter<"Table"> | string
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    fields?: FieldListRelationFilter
    records?: RecordListRelationFilter
    views?: ViewListRelationFilter
  }, "id">

  export type TableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
    _count?: TableCountOrderByAggregateInput
    _avg?: TableAvgOrderByAggregateInput
    _max?: TableMaxOrderByAggregateInput
    _min?: TableMinOrderByAggregateInput
    _sum?: TableSumOrderByAggregateInput
  }

  export type TableScalarWhereWithAggregatesInput = {
    AND?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    OR?: TableScalarWhereWithAggregatesInput[]
    NOT?: TableScalarWhereWithAggregatesInput | TableScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Table"> | string
    name?: StringWithAggregatesFilter<"Table"> | string
    description?: StringNullableWithAggregatesFilter<"Table"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Table"> | string | null
    order?: IntWithAggregatesFilter<"Table"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Table"> | Date | string
    baseId?: StringWithAggregatesFilter<"Table"> | string
  }

  export type FieldWhereInput = {
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    id?: StringFilter<"Field"> | string
    name?: StringFilter<"Field"> | string
    type?: EnumFieldTypeFilter<"Field"> | $Enums.FieldType
    order?: IntFilter<"Field"> | number
    description?: StringNullableFilter<"Field"> | string | null
    config?: JsonNullableFilter<"Field">
    isPrimary?: BoolFilter<"Field"> | boolean
    isRequired?: BoolFilter<"Field"> | boolean
    createdAt?: DateTimeFilter<"Field"> | Date | string
    updatedAt?: DateTimeFilter<"Field"> | Date | string
    tableId?: StringFilter<"Field"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
    filters?: FilterListRelationFilter
    sorts?: SortListRelationFilter
  }

  export type FieldOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    description?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    cells?: CellOrderByRelationAggregateInput
    filters?: FilterOrderByRelationAggregateInput
    sorts?: SortOrderByRelationAggregateInput
  }

  export type FieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FieldWhereInput | FieldWhereInput[]
    OR?: FieldWhereInput[]
    NOT?: FieldWhereInput | FieldWhereInput[]
    name?: StringFilter<"Field"> | string
    type?: EnumFieldTypeFilter<"Field"> | $Enums.FieldType
    order?: IntFilter<"Field"> | number
    description?: StringNullableFilter<"Field"> | string | null
    config?: JsonNullableFilter<"Field">
    isPrimary?: BoolFilter<"Field"> | boolean
    isRequired?: BoolFilter<"Field"> | boolean
    createdAt?: DateTimeFilter<"Field"> | Date | string
    updatedAt?: DateTimeFilter<"Field"> | Date | string
    tableId?: StringFilter<"Field"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
    filters?: FilterListRelationFilter
    sorts?: SortListRelationFilter
  }, "id">

  export type FieldOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    description?: SortOrderInput | SortOrder
    config?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    _count?: FieldCountOrderByAggregateInput
    _avg?: FieldAvgOrderByAggregateInput
    _max?: FieldMaxOrderByAggregateInput
    _min?: FieldMinOrderByAggregateInput
    _sum?: FieldSumOrderByAggregateInput
  }

  export type FieldScalarWhereWithAggregatesInput = {
    AND?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    OR?: FieldScalarWhereWithAggregatesInput[]
    NOT?: FieldScalarWhereWithAggregatesInput | FieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Field"> | string
    name?: StringWithAggregatesFilter<"Field"> | string
    type?: EnumFieldTypeWithAggregatesFilter<"Field"> | $Enums.FieldType
    order?: IntWithAggregatesFilter<"Field"> | number
    description?: StringNullableWithAggregatesFilter<"Field"> | string | null
    config?: JsonNullableWithAggregatesFilter<"Field">
    isPrimary?: BoolWithAggregatesFilter<"Field"> | boolean
    isRequired?: BoolWithAggregatesFilter<"Field"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Field"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Field"> | Date | string
    tableId?: StringWithAggregatesFilter<"Field"> | string
  }

  export type RecordWhereInput = {
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    id?: StringFilter<"Record"> | string
    order?: IntFilter<"Record"> | number
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    tableId?: StringFilter<"Record"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
  }

  export type RecordOrderByWithRelationInput = {
    id?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    cells?: CellOrderByRelationAggregateInput
  }

  export type RecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordWhereInput | RecordWhereInput[]
    OR?: RecordWhereInput[]
    NOT?: RecordWhereInput | RecordWhereInput[]
    order?: IntFilter<"Record"> | number
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    tableId?: StringFilter<"Record"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    cells?: CellListRelationFilter
  }, "id">

  export type RecordOrderByWithAggregationInput = {
    id?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    _count?: RecordCountOrderByAggregateInput
    _avg?: RecordAvgOrderByAggregateInput
    _max?: RecordMaxOrderByAggregateInput
    _min?: RecordMinOrderByAggregateInput
    _sum?: RecordSumOrderByAggregateInput
  }

  export type RecordScalarWhereWithAggregatesInput = {
    AND?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    OR?: RecordScalarWhereWithAggregatesInput[]
    NOT?: RecordScalarWhereWithAggregatesInput | RecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Record"> | string
    order?: IntWithAggregatesFilter<"Record"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Record"> | Date | string
    tableId?: StringWithAggregatesFilter<"Record"> | string
  }

  export type CellWhereInput = {
    AND?: CellWhereInput | CellWhereInput[]
    OR?: CellWhereInput[]
    NOT?: CellWhereInput | CellWhereInput[]
    id?: StringFilter<"Cell"> | string
    value?: JsonNullableFilter<"Cell">
    createdAt?: DateTimeFilter<"Cell"> | Date | string
    updatedAt?: DateTimeFilter<"Cell"> | Date | string
    fieldId?: StringFilter<"Cell"> | string
    recordId?: StringFilter<"Cell"> | string
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    record?: XOR<RecordScalarRelationFilter, RecordWhereInput>
  }

  export type CellOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
    recordId?: SortOrder
    field?: FieldOrderByWithRelationInput
    record?: RecordOrderByWithRelationInput
  }

  export type CellWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fieldId_recordId?: CellFieldIdRecordIdCompoundUniqueInput
    AND?: CellWhereInput | CellWhereInput[]
    OR?: CellWhereInput[]
    NOT?: CellWhereInput | CellWhereInput[]
    value?: JsonNullableFilter<"Cell">
    createdAt?: DateTimeFilter<"Cell"> | Date | string
    updatedAt?: DateTimeFilter<"Cell"> | Date | string
    fieldId?: StringFilter<"Cell"> | string
    recordId?: StringFilter<"Cell"> | string
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
    record?: XOR<RecordScalarRelationFilter, RecordWhereInput>
  }, "id" | "fieldId_recordId">

  export type CellOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
    recordId?: SortOrder
    _count?: CellCountOrderByAggregateInput
    _max?: CellMaxOrderByAggregateInput
    _min?: CellMinOrderByAggregateInput
  }

  export type CellScalarWhereWithAggregatesInput = {
    AND?: CellScalarWhereWithAggregatesInput | CellScalarWhereWithAggregatesInput[]
    OR?: CellScalarWhereWithAggregatesInput[]
    NOT?: CellScalarWhereWithAggregatesInput | CellScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cell"> | string
    value?: JsonNullableWithAggregatesFilter<"Cell">
    createdAt?: DateTimeWithAggregatesFilter<"Cell"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cell"> | Date | string
    fieldId?: StringWithAggregatesFilter<"Cell"> | string
    recordId?: StringWithAggregatesFilter<"Cell"> | string
  }

  export type ViewWhereInput = {
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    id?: StringFilter<"View"> | string
    name?: StringFilter<"View"> | string
    description?: StringNullableFilter<"View"> | string | null
    order?: IntFilter<"View"> | number
    isDefault?: BoolFilter<"View"> | boolean
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    tableId?: StringFilter<"View"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    filters?: FilterListRelationFilter
    sorts?: SortListRelationFilter
    hiddenFields?: HiddenFieldListRelationFilter
  }

  export type ViewOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    table?: TableOrderByWithRelationInput
    filters?: FilterOrderByRelationAggregateInput
    sorts?: SortOrderByRelationAggregateInput
    hiddenFields?: HiddenFieldOrderByRelationAggregateInput
  }

  export type ViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViewWhereInput | ViewWhereInput[]
    OR?: ViewWhereInput[]
    NOT?: ViewWhereInput | ViewWhereInput[]
    name?: StringFilter<"View"> | string
    description?: StringNullableFilter<"View"> | string | null
    order?: IntFilter<"View"> | number
    isDefault?: BoolFilter<"View"> | boolean
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    tableId?: StringFilter<"View"> | string
    table?: XOR<TableScalarRelationFilter, TableWhereInput>
    filters?: FilterListRelationFilter
    sorts?: SortListRelationFilter
    hiddenFields?: HiddenFieldListRelationFilter
  }, "id">

  export type ViewOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
    _count?: ViewCountOrderByAggregateInput
    _avg?: ViewAvgOrderByAggregateInput
    _max?: ViewMaxOrderByAggregateInput
    _min?: ViewMinOrderByAggregateInput
    _sum?: ViewSumOrderByAggregateInput
  }

  export type ViewScalarWhereWithAggregatesInput = {
    AND?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    OR?: ViewScalarWhereWithAggregatesInput[]
    NOT?: ViewScalarWhereWithAggregatesInput | ViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"View"> | string
    name?: StringWithAggregatesFilter<"View"> | string
    description?: StringNullableWithAggregatesFilter<"View"> | string | null
    order?: IntWithAggregatesFilter<"View"> | number
    isDefault?: BoolWithAggregatesFilter<"View"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"View"> | Date | string
    tableId?: StringWithAggregatesFilter<"View"> | string
  }

  export type FilterWhereInput = {
    AND?: FilterWhereInput | FilterWhereInput[]
    OR?: FilterWhereInput[]
    NOT?: FilterWhereInput | FilterWhereInput[]
    id?: StringFilter<"Filter"> | string
    fieldId?: StringFilter<"Filter"> | string
    operator?: EnumFilterOperatorFilter<"Filter"> | $Enums.FilterOperator
    value?: JsonNullableFilter<"Filter">
    order?: IntFilter<"Filter"> | number
    viewId?: StringFilter<"Filter"> | string
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }

  export type FilterOrderByWithRelationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    value?: SortOrderInput | SortOrder
    order?: SortOrder
    viewId?: SortOrder
    view?: ViewOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
  }

  export type FilterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilterWhereInput | FilterWhereInput[]
    OR?: FilterWhereInput[]
    NOT?: FilterWhereInput | FilterWhereInput[]
    fieldId?: StringFilter<"Filter"> | string
    operator?: EnumFilterOperatorFilter<"Filter"> | $Enums.FilterOperator
    value?: JsonNullableFilter<"Filter">
    order?: IntFilter<"Filter"> | number
    viewId?: StringFilter<"Filter"> | string
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }, "id">

  export type FilterOrderByWithAggregationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    value?: SortOrderInput | SortOrder
    order?: SortOrder
    viewId?: SortOrder
    _count?: FilterCountOrderByAggregateInput
    _avg?: FilterAvgOrderByAggregateInput
    _max?: FilterMaxOrderByAggregateInput
    _min?: FilterMinOrderByAggregateInput
    _sum?: FilterSumOrderByAggregateInput
  }

  export type FilterScalarWhereWithAggregatesInput = {
    AND?: FilterScalarWhereWithAggregatesInput | FilterScalarWhereWithAggregatesInput[]
    OR?: FilterScalarWhereWithAggregatesInput[]
    NOT?: FilterScalarWhereWithAggregatesInput | FilterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Filter"> | string
    fieldId?: StringWithAggregatesFilter<"Filter"> | string
    operator?: EnumFilterOperatorWithAggregatesFilter<"Filter"> | $Enums.FilterOperator
    value?: JsonNullableWithAggregatesFilter<"Filter">
    order?: IntWithAggregatesFilter<"Filter"> | number
    viewId?: StringWithAggregatesFilter<"Filter"> | string
  }

  export type SortWhereInput = {
    AND?: SortWhereInput | SortWhereInput[]
    OR?: SortWhereInput[]
    NOT?: SortWhereInput | SortWhereInput[]
    id?: StringFilter<"Sort"> | string
    fieldId?: StringFilter<"Sort"> | string
    direction?: EnumSortDirectionFilter<"Sort"> | $Enums.SortDirection
    order?: IntFilter<"Sort"> | number
    viewId?: StringFilter<"Sort"> | string
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }

  export type SortOrderByWithRelationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
    view?: ViewOrderByWithRelationInput
    field?: FieldOrderByWithRelationInput
  }

  export type SortWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SortWhereInput | SortWhereInput[]
    OR?: SortWhereInput[]
    NOT?: SortWhereInput | SortWhereInput[]
    fieldId?: StringFilter<"Sort"> | string
    direction?: EnumSortDirectionFilter<"Sort"> | $Enums.SortDirection
    order?: IntFilter<"Sort"> | number
    viewId?: StringFilter<"Sort"> | string
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
    field?: XOR<FieldScalarRelationFilter, FieldWhereInput>
  }, "id">

  export type SortOrderByWithAggregationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
    _count?: SortCountOrderByAggregateInput
    _avg?: SortAvgOrderByAggregateInput
    _max?: SortMaxOrderByAggregateInput
    _min?: SortMinOrderByAggregateInput
    _sum?: SortSumOrderByAggregateInput
  }

  export type SortScalarWhereWithAggregatesInput = {
    AND?: SortScalarWhereWithAggregatesInput | SortScalarWhereWithAggregatesInput[]
    OR?: SortScalarWhereWithAggregatesInput[]
    NOT?: SortScalarWhereWithAggregatesInput | SortScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sort"> | string
    fieldId?: StringWithAggregatesFilter<"Sort"> | string
    direction?: EnumSortDirectionWithAggregatesFilter<"Sort"> | $Enums.SortDirection
    order?: IntWithAggregatesFilter<"Sort"> | number
    viewId?: StringWithAggregatesFilter<"Sort"> | string
  }

  export type HiddenFieldWhereInput = {
    AND?: HiddenFieldWhereInput | HiddenFieldWhereInput[]
    OR?: HiddenFieldWhereInput[]
    NOT?: HiddenFieldWhereInput | HiddenFieldWhereInput[]
    id?: StringFilter<"HiddenField"> | string
    fieldId?: StringFilter<"HiddenField"> | string
    viewId?: StringFilter<"HiddenField"> | string
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
  }

  export type HiddenFieldOrderByWithRelationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    viewId?: SortOrder
    view?: ViewOrderByWithRelationInput
  }

  export type HiddenFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    viewId_fieldId?: HiddenFieldViewIdFieldIdCompoundUniqueInput
    AND?: HiddenFieldWhereInput | HiddenFieldWhereInput[]
    OR?: HiddenFieldWhereInput[]
    NOT?: HiddenFieldWhereInput | HiddenFieldWhereInput[]
    fieldId?: StringFilter<"HiddenField"> | string
    viewId?: StringFilter<"HiddenField"> | string
    view?: XOR<ViewScalarRelationFilter, ViewWhereInput>
  }, "id" | "viewId_fieldId">

  export type HiddenFieldOrderByWithAggregationInput = {
    id?: SortOrder
    fieldId?: SortOrder
    viewId?: SortOrder
    _count?: HiddenFieldCountOrderByAggregateInput
    _max?: HiddenFieldMaxOrderByAggregateInput
    _min?: HiddenFieldMinOrderByAggregateInput
  }

  export type HiddenFieldScalarWhereWithAggregatesInput = {
    AND?: HiddenFieldScalarWhereWithAggregatesInput | HiddenFieldScalarWhereWithAggregatesInput[]
    OR?: HiddenFieldScalarWhereWithAggregatesInput[]
    NOT?: HiddenFieldScalarWhereWithAggregatesInput | HiddenFieldScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HiddenField"> | string
    fieldId?: StringWithAggregatesFilter<"HiddenField"> | string
    viewId?: StringWithAggregatesFilter<"HiddenField"> | string
  }

  export type BaseCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tables?: TableUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tables?: TableUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type BaseCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: StringFieldUpdateOperationsInput | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: string
  }

  export type TableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: StringFieldUpdateOperationsInput | string
  }

  export type FieldCreateInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutFieldsInput
    cells?: CellCreateNestedManyWithoutFieldInput
    filters?: FilterCreateNestedManyWithoutFieldInput
    sorts?: SortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    cells?: CellUncheckedCreateNestedManyWithoutFieldInput
    filters?: FilterUncheckedCreateNestedManyWithoutFieldInput
    sorts?: SortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    cells?: CellUpdateManyWithoutFieldNestedInput
    filters?: FilterUpdateManyWithoutFieldNestedInput
    sorts?: SortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    cells?: CellUncheckedUpdateManyWithoutFieldNestedInput
    filters?: FilterUncheckedUpdateManyWithoutFieldNestedInput
    sorts?: SortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldCreateManyInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type FieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type RecordCreateInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutRecordsInput
    cells?: CellCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    cells?: CellUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutRecordsNestedInput
    cells?: CellUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    cells?: CellUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordCreateManyInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type RecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type CellCreateInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field: FieldCreateNestedOneWithoutCellsInput
    record: RecordCreateNestedOneWithoutCellsInput
  }

  export type CellUncheckedCreateInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId: string
    recordId: string
  }

  export type CellUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutCellsNestedInput
    record?: RecordUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
  }

  export type CellCreateManyInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId: string
    recordId: string
  }

  export type CellUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: StringFieldUpdateOperationsInput | string
    recordId?: StringFieldUpdateOperationsInput | string
  }

  export type ViewCreateInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: FilterCreateNestedManyWithoutViewInput
    sorts?: SortCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    filters?: FilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: SortUncheckedCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: FilterUpdateManyWithoutViewNestedInput
    sorts?: SortUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    filters?: FilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: SortUncheckedUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type ViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCreateInput = {
    id?: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    view: ViewCreateNestedOneWithoutFiltersInput
    field: FieldCreateNestedOneWithoutFiltersInput
  }

  export type FilterUncheckedCreateInput = {
    id?: string
    fieldId: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    viewId: string
  }

  export type FilterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
    field?: FieldUpdateOneRequiredWithoutFiltersNestedInput
  }

  export type FilterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCreateManyInput = {
    id?: string
    fieldId: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    viewId: string
  }

  export type FilterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
  }

  export type FilterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type SortCreateInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number
    view: ViewCreateNestedOneWithoutSortsInput
    field: FieldCreateNestedOneWithoutSortsInput
  }

  export type SortUncheckedCreateInput = {
    id?: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number
    viewId: string
  }

  export type SortUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutSortsNestedInput
    field?: FieldUpdateOneRequiredWithoutSortsNestedInput
  }

  export type SortUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type SortCreateManyInput = {
    id?: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number
    viewId: string
  }

  export type SortUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SortUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type HiddenFieldCreateInput = {
    id?: string
    fieldId: string
    view: ViewCreateNestedOneWithoutHiddenFieldsInput
  }

  export type HiddenFieldUncheckedCreateInput = {
    id?: string
    fieldId: string
    viewId: string
  }

  export type HiddenFieldUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    view?: ViewUpdateOneRequiredWithoutHiddenFieldsNestedInput
  }

  export type HiddenFieldUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type HiddenFieldCreateManyInput = {
    id?: string
    fieldId: string
    viewId: string
  }

  export type HiddenFieldUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type HiddenFieldUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TableListRelationFilter = {
    every?: TableWhereInput
    some?: TableWhereInput
    none?: TableWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BaseScalarRelationFilter = {
    is?: BaseWhereInput
    isNot?: BaseWhereInput
  }

  export type FieldListRelationFilter = {
    every?: FieldWhereInput
    some?: FieldWhereInput
    none?: FieldWhereInput
  }

  export type RecordListRelationFilter = {
    every?: RecordWhereInput
    some?: RecordWhereInput
    none?: RecordWhereInput
  }

  export type ViewListRelationFilter = {
    every?: ViewWhereInput
    some?: ViewWhereInput
    none?: ViewWhereInput
  }

  export type FieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
  }

  export type TableAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type TableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
  }

  export type TableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    baseId?: SortOrder
  }

  export type TableSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TableScalarRelationFilter = {
    is?: TableWhereInput
    isNot?: TableWhereInput
  }

  export type CellListRelationFilter = {
    every?: CellWhereInput
    some?: CellWhereInput
    none?: CellWhereInput
  }

  export type FilterListRelationFilter = {
    every?: FilterWhereInput
    some?: FilterWhereInput
    none?: FilterWhereInput
  }

  export type SortListRelationFilter = {
    every?: SortWhereInput
    some?: SortWhereInput
    none?: SortWhereInput
  }

  export type CellOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SortOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FieldCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    description?: SortOrder
    config?: SortOrder
    isPrimary?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type FieldAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FieldMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type FieldMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    order?: SortOrder
    description?: SortOrder
    isPrimary?: SortOrder
    isRequired?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type FieldSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RecordCountOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type RecordAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type RecordMaxOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type RecordMinOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type RecordSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FieldScalarRelationFilter = {
    is?: FieldWhereInput
    isNot?: FieldWhereInput
  }

  export type RecordScalarRelationFilter = {
    is?: RecordWhereInput
    isNot?: RecordWhereInput
  }

  export type CellFieldIdRecordIdCompoundUniqueInput = {
    fieldId: string
    recordId: string
  }

  export type CellCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
    recordId?: SortOrder
  }

  export type CellMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
    recordId?: SortOrder
  }

  export type CellMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    fieldId?: SortOrder
    recordId?: SortOrder
  }

  export type HiddenFieldListRelationFilter = {
    every?: HiddenFieldWhereInput
    some?: HiddenFieldWhereInput
    none?: HiddenFieldWhereInput
  }

  export type HiddenFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViewCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ViewAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ViewMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ViewMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    order?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    tableId?: SortOrder
  }

  export type ViewSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFilterOperatorFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterOperator | EnumFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterOperatorFilter<$PrismaModel> | $Enums.FilterOperator
  }

  export type ViewScalarRelationFilter = {
    is?: ViewWhereInput
    isNot?: ViewWhereInput
  }

  export type FilterCountOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    value?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
  }

  export type FilterAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type FilterMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
  }

  export type FilterMinOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    operator?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
  }

  export type FilterSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumFilterOperatorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterOperator | EnumFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterOperatorWithAggregatesFilter<$PrismaModel> | $Enums.FilterOperator
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFilterOperatorFilter<$PrismaModel>
    _max?: NestedEnumFilterOperatorFilter<$PrismaModel>
  }

  export type EnumSortDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionFilter<$PrismaModel> | $Enums.SortDirection
  }

  export type SortCountOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
  }

  export type SortAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SortMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
  }

  export type SortMinOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    direction?: SortOrder
    order?: SortOrder
    viewId?: SortOrder
  }

  export type SortSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type EnumSortDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SortDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSortDirectionFilter<$PrismaModel>
    _max?: NestedEnumSortDirectionFilter<$PrismaModel>
  }

  export type HiddenFieldViewIdFieldIdCompoundUniqueInput = {
    viewId: string
    fieldId: string
  }

  export type HiddenFieldCountOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    viewId?: SortOrder
  }

  export type HiddenFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    viewId?: SortOrder
  }

  export type HiddenFieldMinOrderByAggregateInput = {
    id?: SortOrder
    fieldId?: SortOrder
    viewId?: SortOrder
  }

  export type TableCreateNestedManyWithoutBaseInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type TableUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TableUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutBaseInput | TableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutBaseInput | TableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TableUpdateManyWithWhereWithoutBaseInput | TableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type TableUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput> | TableCreateWithoutBaseInput[] | TableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: TableCreateOrConnectWithoutBaseInput | TableCreateOrConnectWithoutBaseInput[]
    upsert?: TableUpsertWithWhereUniqueWithoutBaseInput | TableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: TableCreateManyBaseInputEnvelope
    set?: TableWhereUniqueInput | TableWhereUniqueInput[]
    disconnect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    delete?: TableWhereUniqueInput | TableWhereUniqueInput[]
    connect?: TableWhereUniqueInput | TableWhereUniqueInput[]
    update?: TableUpdateWithWhereUniqueWithoutBaseInput | TableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: TableUpdateManyWithWhereWithoutBaseInput | TableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: TableScalarWhereInput | TableScalarWhereInput[]
  }

  export type BaseCreateNestedOneWithoutTablesInput = {
    create?: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutTablesInput
    connect?: BaseWhereUniqueInput
  }

  export type FieldCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
  }

  export type RecordCreateNestedManyWithoutTableInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type ViewCreateNestedManyWithoutTableInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type FieldUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
  }

  export type RecordUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
  }

  export type ViewUncheckedCreateNestedManyWithoutTableInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BaseUpdateOneRequiredWithoutTablesNestedInput = {
    create?: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutTablesInput
    upsert?: BaseUpsertWithoutTablesInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutTablesInput, BaseUpdateWithoutTablesInput>, BaseUncheckedUpdateWithoutTablesInput>
  }

  export type FieldUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput | FieldUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    set?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    disconnect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    delete?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    update?: FieldUpdateWithWhereUniqueWithoutTableInput | FieldUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput | FieldUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldScalarWhereInput | FieldScalarWhereInput[]
  }

  export type RecordUpdateManyWithoutTableNestedInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutTableInput | RecordUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutTableInput | RecordUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutTableInput | RecordUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type ViewUpdateManyWithoutTableNestedInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutTableInput | ViewUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutTableInput | ViewUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutTableInput | ViewUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type FieldUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput> | FieldCreateWithoutTableInput[] | FieldUncheckedCreateWithoutTableInput[]
    connectOrCreate?: FieldCreateOrConnectWithoutTableInput | FieldCreateOrConnectWithoutTableInput[]
    upsert?: FieldUpsertWithWhereUniqueWithoutTableInput | FieldUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: FieldCreateManyTableInputEnvelope
    set?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    disconnect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    delete?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    connect?: FieldWhereUniqueInput | FieldWhereUniqueInput[]
    update?: FieldUpdateWithWhereUniqueWithoutTableInput | FieldUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: FieldUpdateManyWithWhereWithoutTableInput | FieldUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: FieldScalarWhereInput | FieldScalarWhereInput[]
  }

  export type RecordUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput> | RecordCreateWithoutTableInput[] | RecordUncheckedCreateWithoutTableInput[]
    connectOrCreate?: RecordCreateOrConnectWithoutTableInput | RecordCreateOrConnectWithoutTableInput[]
    upsert?: RecordUpsertWithWhereUniqueWithoutTableInput | RecordUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: RecordCreateManyTableInputEnvelope
    set?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    disconnect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    delete?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    connect?: RecordWhereUniqueInput | RecordWhereUniqueInput[]
    update?: RecordUpdateWithWhereUniqueWithoutTableInput | RecordUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: RecordUpdateManyWithWhereWithoutTableInput | RecordUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: RecordScalarWhereInput | RecordScalarWhereInput[]
  }

  export type ViewUncheckedUpdateManyWithoutTableNestedInput = {
    create?: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput> | ViewCreateWithoutTableInput[] | ViewUncheckedCreateWithoutTableInput[]
    connectOrCreate?: ViewCreateOrConnectWithoutTableInput | ViewCreateOrConnectWithoutTableInput[]
    upsert?: ViewUpsertWithWhereUniqueWithoutTableInput | ViewUpsertWithWhereUniqueWithoutTableInput[]
    createMany?: ViewCreateManyTableInputEnvelope
    set?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    disconnect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    delete?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    connect?: ViewWhereUniqueInput | ViewWhereUniqueInput[]
    update?: ViewUpdateWithWhereUniqueWithoutTableInput | ViewUpdateWithWhereUniqueWithoutTableInput[]
    updateMany?: ViewUpdateManyWithWhereWithoutTableInput | ViewUpdateManyWithWhereWithoutTableInput[]
    deleteMany?: ViewScalarWhereInput | ViewScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutFieldsInput = {
    create?: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput
    connect?: TableWhereUniqueInput
  }

  export type CellCreateNestedManyWithoutFieldInput = {
    create?: XOR<CellCreateWithoutFieldInput, CellUncheckedCreateWithoutFieldInput> | CellCreateWithoutFieldInput[] | CellUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellCreateOrConnectWithoutFieldInput | CellCreateOrConnectWithoutFieldInput[]
    createMany?: CellCreateManyFieldInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type FilterCreateNestedManyWithoutFieldInput = {
    create?: XOR<FilterCreateWithoutFieldInput, FilterUncheckedCreateWithoutFieldInput> | FilterCreateWithoutFieldInput[] | FilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutFieldInput | FilterCreateOrConnectWithoutFieldInput[]
    createMany?: FilterCreateManyFieldInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type SortCreateNestedManyWithoutFieldInput = {
    create?: XOR<SortCreateWithoutFieldInput, SortUncheckedCreateWithoutFieldInput> | SortCreateWithoutFieldInput[] | SortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: SortCreateOrConnectWithoutFieldInput | SortCreateOrConnectWithoutFieldInput[]
    createMany?: SortCreateManyFieldInputEnvelope
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
  }

  export type CellUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<CellCreateWithoutFieldInput, CellUncheckedCreateWithoutFieldInput> | CellCreateWithoutFieldInput[] | CellUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellCreateOrConnectWithoutFieldInput | CellCreateOrConnectWithoutFieldInput[]
    createMany?: CellCreateManyFieldInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type FilterUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<FilterCreateWithoutFieldInput, FilterUncheckedCreateWithoutFieldInput> | FilterCreateWithoutFieldInput[] | FilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutFieldInput | FilterCreateOrConnectWithoutFieldInput[]
    createMany?: FilterCreateManyFieldInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type SortUncheckedCreateNestedManyWithoutFieldInput = {
    create?: XOR<SortCreateWithoutFieldInput, SortUncheckedCreateWithoutFieldInput> | SortCreateWithoutFieldInput[] | SortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: SortCreateOrConnectWithoutFieldInput | SortCreateOrConnectWithoutFieldInput[]
    createMany?: SortCreateManyFieldInputEnvelope
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
  }

  export type EnumFieldTypeFieldUpdateOperationsInput = {
    set?: $Enums.FieldType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TableUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TableCreateOrConnectWithoutFieldsInput
    upsert?: TableUpsertWithoutFieldsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutFieldsInput, TableUpdateWithoutFieldsInput>, TableUncheckedUpdateWithoutFieldsInput>
  }

  export type CellUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CellCreateWithoutFieldInput, CellUncheckedCreateWithoutFieldInput> | CellCreateWithoutFieldInput[] | CellUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellCreateOrConnectWithoutFieldInput | CellCreateOrConnectWithoutFieldInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutFieldInput | CellUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CellCreateManyFieldInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutFieldInput | CellUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CellUpdateManyWithWhereWithoutFieldInput | CellUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type FilterUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FilterCreateWithoutFieldInput, FilterUncheckedCreateWithoutFieldInput> | FilterCreateWithoutFieldInput[] | FilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutFieldInput | FilterCreateOrConnectWithoutFieldInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutFieldInput | FilterUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FilterCreateManyFieldInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutFieldInput | FilterUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutFieldInput | FilterUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type SortUpdateManyWithoutFieldNestedInput = {
    create?: XOR<SortCreateWithoutFieldInput, SortUncheckedCreateWithoutFieldInput> | SortCreateWithoutFieldInput[] | SortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: SortCreateOrConnectWithoutFieldInput | SortCreateOrConnectWithoutFieldInput[]
    upsert?: SortUpsertWithWhereUniqueWithoutFieldInput | SortUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: SortCreateManyFieldInputEnvelope
    set?: SortWhereUniqueInput | SortWhereUniqueInput[]
    disconnect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    delete?: SortWhereUniqueInput | SortWhereUniqueInput[]
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    update?: SortUpdateWithWhereUniqueWithoutFieldInput | SortUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: SortUpdateManyWithWhereWithoutFieldInput | SortUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: SortScalarWhereInput | SortScalarWhereInput[]
  }

  export type CellUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<CellCreateWithoutFieldInput, CellUncheckedCreateWithoutFieldInput> | CellCreateWithoutFieldInput[] | CellUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: CellCreateOrConnectWithoutFieldInput | CellCreateOrConnectWithoutFieldInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutFieldInput | CellUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: CellCreateManyFieldInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutFieldInput | CellUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: CellUpdateManyWithWhereWithoutFieldInput | CellUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type FilterUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<FilterCreateWithoutFieldInput, FilterUncheckedCreateWithoutFieldInput> | FilterCreateWithoutFieldInput[] | FilterUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutFieldInput | FilterCreateOrConnectWithoutFieldInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutFieldInput | FilterUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: FilterCreateManyFieldInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutFieldInput | FilterUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutFieldInput | FilterUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type SortUncheckedUpdateManyWithoutFieldNestedInput = {
    create?: XOR<SortCreateWithoutFieldInput, SortUncheckedCreateWithoutFieldInput> | SortCreateWithoutFieldInput[] | SortUncheckedCreateWithoutFieldInput[]
    connectOrCreate?: SortCreateOrConnectWithoutFieldInput | SortCreateOrConnectWithoutFieldInput[]
    upsert?: SortUpsertWithWhereUniqueWithoutFieldInput | SortUpsertWithWhereUniqueWithoutFieldInput[]
    createMany?: SortCreateManyFieldInputEnvelope
    set?: SortWhereUniqueInput | SortWhereUniqueInput[]
    disconnect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    delete?: SortWhereUniqueInput | SortWhereUniqueInput[]
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    update?: SortUpdateWithWhereUniqueWithoutFieldInput | SortUpdateWithWhereUniqueWithoutFieldInput[]
    updateMany?: SortUpdateManyWithWhereWithoutFieldInput | SortUpdateManyWithWhereWithoutFieldInput[]
    deleteMany?: SortScalarWhereInput | SortScalarWhereInput[]
  }

  export type TableCreateNestedOneWithoutRecordsInput = {
    create?: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: TableCreateOrConnectWithoutRecordsInput
    connect?: TableWhereUniqueInput
  }

  export type CellCreateNestedManyWithoutRecordInput = {
    create?: XOR<CellCreateWithoutRecordInput, CellUncheckedCreateWithoutRecordInput> | CellCreateWithoutRecordInput[] | CellUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRecordInput | CellCreateOrConnectWithoutRecordInput[]
    createMany?: CellCreateManyRecordInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type CellUncheckedCreateNestedManyWithoutRecordInput = {
    create?: XOR<CellCreateWithoutRecordInput, CellUncheckedCreateWithoutRecordInput> | CellCreateWithoutRecordInput[] | CellUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRecordInput | CellCreateOrConnectWithoutRecordInput[]
    createMany?: CellCreateManyRecordInputEnvelope
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
  }

  export type TableUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: TableCreateOrConnectWithoutRecordsInput
    upsert?: TableUpsertWithoutRecordsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutRecordsInput, TableUpdateWithoutRecordsInput>, TableUncheckedUpdateWithoutRecordsInput>
  }

  export type CellUpdateManyWithoutRecordNestedInput = {
    create?: XOR<CellCreateWithoutRecordInput, CellUncheckedCreateWithoutRecordInput> | CellCreateWithoutRecordInput[] | CellUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRecordInput | CellCreateOrConnectWithoutRecordInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutRecordInput | CellUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: CellCreateManyRecordInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutRecordInput | CellUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: CellUpdateManyWithWhereWithoutRecordInput | CellUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type CellUncheckedUpdateManyWithoutRecordNestedInput = {
    create?: XOR<CellCreateWithoutRecordInput, CellUncheckedCreateWithoutRecordInput> | CellCreateWithoutRecordInput[] | CellUncheckedCreateWithoutRecordInput[]
    connectOrCreate?: CellCreateOrConnectWithoutRecordInput | CellCreateOrConnectWithoutRecordInput[]
    upsert?: CellUpsertWithWhereUniqueWithoutRecordInput | CellUpsertWithWhereUniqueWithoutRecordInput[]
    createMany?: CellCreateManyRecordInputEnvelope
    set?: CellWhereUniqueInput | CellWhereUniqueInput[]
    disconnect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    delete?: CellWhereUniqueInput | CellWhereUniqueInput[]
    connect?: CellWhereUniqueInput | CellWhereUniqueInput[]
    update?: CellUpdateWithWhereUniqueWithoutRecordInput | CellUpdateWithWhereUniqueWithoutRecordInput[]
    updateMany?: CellUpdateManyWithWhereWithoutRecordInput | CellUpdateManyWithWhereWithoutRecordInput[]
    deleteMany?: CellScalarWhereInput | CellScalarWhereInput[]
  }

  export type FieldCreateNestedOneWithoutCellsInput = {
    create?: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutCellsInput
    connect?: FieldWhereUniqueInput
  }

  export type RecordCreateNestedOneWithoutCellsInput = {
    create?: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
    connectOrCreate?: RecordCreateOrConnectWithoutCellsInput
    connect?: RecordWhereUniqueInput
  }

  export type FieldUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutCellsInput
    upsert?: FieldUpsertWithoutCellsInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutCellsInput, FieldUpdateWithoutCellsInput>, FieldUncheckedUpdateWithoutCellsInput>
  }

  export type RecordUpdateOneRequiredWithoutCellsNestedInput = {
    create?: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
    connectOrCreate?: RecordCreateOrConnectWithoutCellsInput
    upsert?: RecordUpsertWithoutCellsInput
    connect?: RecordWhereUniqueInput
    update?: XOR<XOR<RecordUpdateToOneWithWhereWithoutCellsInput, RecordUpdateWithoutCellsInput>, RecordUncheckedUpdateWithoutCellsInput>
  }

  export type TableCreateNestedOneWithoutViewsInput = {
    create?: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    connectOrCreate?: TableCreateOrConnectWithoutViewsInput
    connect?: TableWhereUniqueInput
  }

  export type FilterCreateNestedManyWithoutViewInput = {
    create?: XOR<FilterCreateWithoutViewInput, FilterUncheckedCreateWithoutViewInput> | FilterCreateWithoutViewInput[] | FilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutViewInput | FilterCreateOrConnectWithoutViewInput[]
    createMany?: FilterCreateManyViewInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type SortCreateNestedManyWithoutViewInput = {
    create?: XOR<SortCreateWithoutViewInput, SortUncheckedCreateWithoutViewInput> | SortCreateWithoutViewInput[] | SortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: SortCreateOrConnectWithoutViewInput | SortCreateOrConnectWithoutViewInput[]
    createMany?: SortCreateManyViewInputEnvelope
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
  }

  export type HiddenFieldCreateNestedManyWithoutViewInput = {
    create?: XOR<HiddenFieldCreateWithoutViewInput, HiddenFieldUncheckedCreateWithoutViewInput> | HiddenFieldCreateWithoutViewInput[] | HiddenFieldUncheckedCreateWithoutViewInput[]
    connectOrCreate?: HiddenFieldCreateOrConnectWithoutViewInput | HiddenFieldCreateOrConnectWithoutViewInput[]
    createMany?: HiddenFieldCreateManyViewInputEnvelope
    connect?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
  }

  export type FilterUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<FilterCreateWithoutViewInput, FilterUncheckedCreateWithoutViewInput> | FilterCreateWithoutViewInput[] | FilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutViewInput | FilterCreateOrConnectWithoutViewInput[]
    createMany?: FilterCreateManyViewInputEnvelope
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
  }

  export type SortUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<SortCreateWithoutViewInput, SortUncheckedCreateWithoutViewInput> | SortCreateWithoutViewInput[] | SortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: SortCreateOrConnectWithoutViewInput | SortCreateOrConnectWithoutViewInput[]
    createMany?: SortCreateManyViewInputEnvelope
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
  }

  export type HiddenFieldUncheckedCreateNestedManyWithoutViewInput = {
    create?: XOR<HiddenFieldCreateWithoutViewInput, HiddenFieldUncheckedCreateWithoutViewInput> | HiddenFieldCreateWithoutViewInput[] | HiddenFieldUncheckedCreateWithoutViewInput[]
    connectOrCreate?: HiddenFieldCreateOrConnectWithoutViewInput | HiddenFieldCreateOrConnectWithoutViewInput[]
    createMany?: HiddenFieldCreateManyViewInputEnvelope
    connect?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
  }

  export type TableUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    connectOrCreate?: TableCreateOrConnectWithoutViewsInput
    upsert?: TableUpsertWithoutViewsInput
    connect?: TableWhereUniqueInput
    update?: XOR<XOR<TableUpdateToOneWithWhereWithoutViewsInput, TableUpdateWithoutViewsInput>, TableUncheckedUpdateWithoutViewsInput>
  }

  export type FilterUpdateManyWithoutViewNestedInput = {
    create?: XOR<FilterCreateWithoutViewInput, FilterUncheckedCreateWithoutViewInput> | FilterCreateWithoutViewInput[] | FilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutViewInput | FilterCreateOrConnectWithoutViewInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutViewInput | FilterUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: FilterCreateManyViewInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutViewInput | FilterUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutViewInput | FilterUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type SortUpdateManyWithoutViewNestedInput = {
    create?: XOR<SortCreateWithoutViewInput, SortUncheckedCreateWithoutViewInput> | SortCreateWithoutViewInput[] | SortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: SortCreateOrConnectWithoutViewInput | SortCreateOrConnectWithoutViewInput[]
    upsert?: SortUpsertWithWhereUniqueWithoutViewInput | SortUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: SortCreateManyViewInputEnvelope
    set?: SortWhereUniqueInput | SortWhereUniqueInput[]
    disconnect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    delete?: SortWhereUniqueInput | SortWhereUniqueInput[]
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    update?: SortUpdateWithWhereUniqueWithoutViewInput | SortUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: SortUpdateManyWithWhereWithoutViewInput | SortUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: SortScalarWhereInput | SortScalarWhereInput[]
  }

  export type HiddenFieldUpdateManyWithoutViewNestedInput = {
    create?: XOR<HiddenFieldCreateWithoutViewInput, HiddenFieldUncheckedCreateWithoutViewInput> | HiddenFieldCreateWithoutViewInput[] | HiddenFieldUncheckedCreateWithoutViewInput[]
    connectOrCreate?: HiddenFieldCreateOrConnectWithoutViewInput | HiddenFieldCreateOrConnectWithoutViewInput[]
    upsert?: HiddenFieldUpsertWithWhereUniqueWithoutViewInput | HiddenFieldUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: HiddenFieldCreateManyViewInputEnvelope
    set?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    disconnect?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    delete?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    connect?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    update?: HiddenFieldUpdateWithWhereUniqueWithoutViewInput | HiddenFieldUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: HiddenFieldUpdateManyWithWhereWithoutViewInput | HiddenFieldUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: HiddenFieldScalarWhereInput | HiddenFieldScalarWhereInput[]
  }

  export type FilterUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<FilterCreateWithoutViewInput, FilterUncheckedCreateWithoutViewInput> | FilterCreateWithoutViewInput[] | FilterUncheckedCreateWithoutViewInput[]
    connectOrCreate?: FilterCreateOrConnectWithoutViewInput | FilterCreateOrConnectWithoutViewInput[]
    upsert?: FilterUpsertWithWhereUniqueWithoutViewInput | FilterUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: FilterCreateManyViewInputEnvelope
    set?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    disconnect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    delete?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    connect?: FilterWhereUniqueInput | FilterWhereUniqueInput[]
    update?: FilterUpdateWithWhereUniqueWithoutViewInput | FilterUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: FilterUpdateManyWithWhereWithoutViewInput | FilterUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: FilterScalarWhereInput | FilterScalarWhereInput[]
  }

  export type SortUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<SortCreateWithoutViewInput, SortUncheckedCreateWithoutViewInput> | SortCreateWithoutViewInput[] | SortUncheckedCreateWithoutViewInput[]
    connectOrCreate?: SortCreateOrConnectWithoutViewInput | SortCreateOrConnectWithoutViewInput[]
    upsert?: SortUpsertWithWhereUniqueWithoutViewInput | SortUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: SortCreateManyViewInputEnvelope
    set?: SortWhereUniqueInput | SortWhereUniqueInput[]
    disconnect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    delete?: SortWhereUniqueInput | SortWhereUniqueInput[]
    connect?: SortWhereUniqueInput | SortWhereUniqueInput[]
    update?: SortUpdateWithWhereUniqueWithoutViewInput | SortUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: SortUpdateManyWithWhereWithoutViewInput | SortUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: SortScalarWhereInput | SortScalarWhereInput[]
  }

  export type HiddenFieldUncheckedUpdateManyWithoutViewNestedInput = {
    create?: XOR<HiddenFieldCreateWithoutViewInput, HiddenFieldUncheckedCreateWithoutViewInput> | HiddenFieldCreateWithoutViewInput[] | HiddenFieldUncheckedCreateWithoutViewInput[]
    connectOrCreate?: HiddenFieldCreateOrConnectWithoutViewInput | HiddenFieldCreateOrConnectWithoutViewInput[]
    upsert?: HiddenFieldUpsertWithWhereUniqueWithoutViewInput | HiddenFieldUpsertWithWhereUniqueWithoutViewInput[]
    createMany?: HiddenFieldCreateManyViewInputEnvelope
    set?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    disconnect?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    delete?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    connect?: HiddenFieldWhereUniqueInput | HiddenFieldWhereUniqueInput[]
    update?: HiddenFieldUpdateWithWhereUniqueWithoutViewInput | HiddenFieldUpdateWithWhereUniqueWithoutViewInput[]
    updateMany?: HiddenFieldUpdateManyWithWhereWithoutViewInput | HiddenFieldUpdateManyWithWhereWithoutViewInput[]
    deleteMany?: HiddenFieldScalarWhereInput | HiddenFieldScalarWhereInput[]
  }

  export type ViewCreateNestedOneWithoutFiltersInput = {
    create?: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFiltersInput
    connect?: ViewWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutFiltersInput = {
    create?: XOR<FieldCreateWithoutFiltersInput, FieldUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutFiltersInput
    connect?: FieldWhereUniqueInput
  }

  export type EnumFilterOperatorFieldUpdateOperationsInput = {
    set?: $Enums.FilterOperator
  }

  export type ViewUpdateOneRequiredWithoutFiltersNestedInput = {
    create?: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: ViewCreateOrConnectWithoutFiltersInput
    upsert?: ViewUpsertWithoutFiltersInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutFiltersInput, ViewUpdateWithoutFiltersInput>, ViewUncheckedUpdateWithoutFiltersInput>
  }

  export type FieldUpdateOneRequiredWithoutFiltersNestedInput = {
    create?: XOR<FieldCreateWithoutFiltersInput, FieldUncheckedCreateWithoutFiltersInput>
    connectOrCreate?: FieldCreateOrConnectWithoutFiltersInput
    upsert?: FieldUpsertWithoutFiltersInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutFiltersInput, FieldUpdateWithoutFiltersInput>, FieldUncheckedUpdateWithoutFiltersInput>
  }

  export type ViewCreateNestedOneWithoutSortsInput = {
    create?: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutSortsInput
    connect?: ViewWhereUniqueInput
  }

  export type FieldCreateNestedOneWithoutSortsInput = {
    create?: XOR<FieldCreateWithoutSortsInput, FieldUncheckedCreateWithoutSortsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutSortsInput
    connect?: FieldWhereUniqueInput
  }

  export type EnumSortDirectionFieldUpdateOperationsInput = {
    set?: $Enums.SortDirection
  }

  export type ViewUpdateOneRequiredWithoutSortsNestedInput = {
    create?: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutSortsInput
    upsert?: ViewUpsertWithoutSortsInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutSortsInput, ViewUpdateWithoutSortsInput>, ViewUncheckedUpdateWithoutSortsInput>
  }

  export type FieldUpdateOneRequiredWithoutSortsNestedInput = {
    create?: XOR<FieldCreateWithoutSortsInput, FieldUncheckedCreateWithoutSortsInput>
    connectOrCreate?: FieldCreateOrConnectWithoutSortsInput
    upsert?: FieldUpsertWithoutSortsInput
    connect?: FieldWhereUniqueInput
    update?: XOR<XOR<FieldUpdateToOneWithWhereWithoutSortsInput, FieldUpdateWithoutSortsInput>, FieldUncheckedUpdateWithoutSortsInput>
  }

  export type ViewCreateNestedOneWithoutHiddenFieldsInput = {
    create?: XOR<ViewCreateWithoutHiddenFieldsInput, ViewUncheckedCreateWithoutHiddenFieldsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutHiddenFieldsInput
    connect?: ViewWhereUniqueInput
  }

  export type ViewUpdateOneRequiredWithoutHiddenFieldsNestedInput = {
    create?: XOR<ViewCreateWithoutHiddenFieldsInput, ViewUncheckedCreateWithoutHiddenFieldsInput>
    connectOrCreate?: ViewCreateOrConnectWithoutHiddenFieldsInput
    upsert?: ViewUpsertWithoutHiddenFieldsInput
    connect?: ViewWhereUniqueInput
    update?: XOR<XOR<ViewUpdateToOneWithWhereWithoutHiddenFieldsInput, ViewUpdateWithoutHiddenFieldsInput>, ViewUncheckedUpdateWithoutHiddenFieldsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumFieldTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeFilter<$PrismaModel> | $Enums.FieldType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FieldType | EnumFieldTypeFieldRefInput<$PrismaModel>
    in?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.FieldType[] | ListEnumFieldTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumFieldTypeWithAggregatesFilter<$PrismaModel> | $Enums.FieldType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFieldTypeFilter<$PrismaModel>
    _max?: NestedEnumFieldTypeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumFilterOperatorFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterOperator | EnumFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterOperatorFilter<$PrismaModel> | $Enums.FilterOperator
  }

  export type NestedEnumFilterOperatorWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FilterOperator | EnumFilterOperatorFieldRefInput<$PrismaModel>
    in?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    notIn?: $Enums.FilterOperator[] | ListEnumFilterOperatorFieldRefInput<$PrismaModel>
    not?: NestedEnumFilterOperatorWithAggregatesFilter<$PrismaModel> | $Enums.FilterOperator
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumFilterOperatorFilter<$PrismaModel>
    _max?: NestedEnumFilterOperatorFilter<$PrismaModel>
  }

  export type NestedEnumSortDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionFilter<$PrismaModel> | $Enums.SortDirection
  }

  export type NestedEnumSortDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SortDirection | EnumSortDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SortDirection[] | ListEnumSortDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumSortDirectionWithAggregatesFilter<$PrismaModel> | $Enums.SortDirection
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSortDirectionFilter<$PrismaModel>
    _max?: NestedEnumSortDirectionFilter<$PrismaModel>
  }

  export type TableCreateWithoutBaseInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutBaseInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutBaseInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput>
  }

  export type TableCreateManyBaseInputEnvelope = {
    data: TableCreateManyBaseInput | TableCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithWhereUniqueWithoutBaseInput = {
    where: TableWhereUniqueInput
    update: XOR<TableUpdateWithoutBaseInput, TableUncheckedUpdateWithoutBaseInput>
    create: XOR<TableCreateWithoutBaseInput, TableUncheckedCreateWithoutBaseInput>
  }

  export type TableUpdateWithWhereUniqueWithoutBaseInput = {
    where: TableWhereUniqueInput
    data: XOR<TableUpdateWithoutBaseInput, TableUncheckedUpdateWithoutBaseInput>
  }

  export type TableUpdateManyWithWhereWithoutBaseInput = {
    where: TableScalarWhereInput
    data: XOR<TableUpdateManyMutationInput, TableUncheckedUpdateManyWithoutBaseInput>
  }

  export type TableScalarWhereInput = {
    AND?: TableScalarWhereInput | TableScalarWhereInput[]
    OR?: TableScalarWhereInput[]
    NOT?: TableScalarWhereInput | TableScalarWhereInput[]
    id?: StringFilter<"Table"> | string
    name?: StringFilter<"Table"> | string
    description?: StringNullableFilter<"Table"> | string | null
    icon?: StringNullableFilter<"Table"> | string | null
    order?: IntFilter<"Table"> | number
    createdAt?: DateTimeFilter<"Table"> | Date | string
    updatedAt?: DateTimeFilter<"Table"> | Date | string
    baseId?: StringFilter<"Table"> | string
  }

  export type BaseCreateWithoutTablesInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseUncheckedCreateWithoutTablesInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BaseCreateOrConnectWithoutTablesInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
  }

  export type FieldCreateWithoutTableInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellCreateNestedManyWithoutFieldInput
    filters?: FilterCreateNestedManyWithoutFieldInput
    sorts?: SortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutTableInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellUncheckedCreateNestedManyWithoutFieldInput
    filters?: FilterUncheckedCreateNestedManyWithoutFieldInput
    sorts?: SortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutTableInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput>
  }

  export type FieldCreateManyTableInputEnvelope = {
    data: FieldCreateManyTableInput | FieldCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type RecordCreateWithoutTableInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellCreateNestedManyWithoutRecordInput
  }

  export type RecordUncheckedCreateWithoutTableInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    cells?: CellUncheckedCreateNestedManyWithoutRecordInput
  }

  export type RecordCreateOrConnectWithoutTableInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput>
  }

  export type RecordCreateManyTableInputEnvelope = {
    data: RecordCreateManyTableInput | RecordCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type ViewCreateWithoutTableInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: FilterCreateNestedManyWithoutViewInput
    sorts?: SortCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutTableInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    filters?: FilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: SortUncheckedCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutTableInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput>
  }

  export type ViewCreateManyTableInputEnvelope = {
    data: ViewCreateManyTableInput | ViewCreateManyTableInput[]
    skipDuplicates?: boolean
  }

  export type BaseUpsertWithoutTablesInput = {
    update: XOR<BaseUpdateWithoutTablesInput, BaseUncheckedUpdateWithoutTablesInput>
    create: XOR<BaseCreateWithoutTablesInput, BaseUncheckedCreateWithoutTablesInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutTablesInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutTablesInput, BaseUncheckedUpdateWithoutTablesInput>
  }

  export type BaseUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BaseUncheckedUpdateWithoutTablesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldUpsertWithWhereUniqueWithoutTableInput = {
    where: FieldWhereUniqueInput
    update: XOR<FieldUpdateWithoutTableInput, FieldUncheckedUpdateWithoutTableInput>
    create: XOR<FieldCreateWithoutTableInput, FieldUncheckedCreateWithoutTableInput>
  }

  export type FieldUpdateWithWhereUniqueWithoutTableInput = {
    where: FieldWhereUniqueInput
    data: XOR<FieldUpdateWithoutTableInput, FieldUncheckedUpdateWithoutTableInput>
  }

  export type FieldUpdateManyWithWhereWithoutTableInput = {
    where: FieldScalarWhereInput
    data: XOR<FieldUpdateManyMutationInput, FieldUncheckedUpdateManyWithoutTableInput>
  }

  export type FieldScalarWhereInput = {
    AND?: FieldScalarWhereInput | FieldScalarWhereInput[]
    OR?: FieldScalarWhereInput[]
    NOT?: FieldScalarWhereInput | FieldScalarWhereInput[]
    id?: StringFilter<"Field"> | string
    name?: StringFilter<"Field"> | string
    type?: EnumFieldTypeFilter<"Field"> | $Enums.FieldType
    order?: IntFilter<"Field"> | number
    description?: StringNullableFilter<"Field"> | string | null
    config?: JsonNullableFilter<"Field">
    isPrimary?: BoolFilter<"Field"> | boolean
    isRequired?: BoolFilter<"Field"> | boolean
    createdAt?: DateTimeFilter<"Field"> | Date | string
    updatedAt?: DateTimeFilter<"Field"> | Date | string
    tableId?: StringFilter<"Field"> | string
  }

  export type RecordUpsertWithWhereUniqueWithoutTableInput = {
    where: RecordWhereUniqueInput
    update: XOR<RecordUpdateWithoutTableInput, RecordUncheckedUpdateWithoutTableInput>
    create: XOR<RecordCreateWithoutTableInput, RecordUncheckedCreateWithoutTableInput>
  }

  export type RecordUpdateWithWhereUniqueWithoutTableInput = {
    where: RecordWhereUniqueInput
    data: XOR<RecordUpdateWithoutTableInput, RecordUncheckedUpdateWithoutTableInput>
  }

  export type RecordUpdateManyWithWhereWithoutTableInput = {
    where: RecordScalarWhereInput
    data: XOR<RecordUpdateManyMutationInput, RecordUncheckedUpdateManyWithoutTableInput>
  }

  export type RecordScalarWhereInput = {
    AND?: RecordScalarWhereInput | RecordScalarWhereInput[]
    OR?: RecordScalarWhereInput[]
    NOT?: RecordScalarWhereInput | RecordScalarWhereInput[]
    id?: StringFilter<"Record"> | string
    order?: IntFilter<"Record"> | number
    createdAt?: DateTimeFilter<"Record"> | Date | string
    updatedAt?: DateTimeFilter<"Record"> | Date | string
    tableId?: StringFilter<"Record"> | string
  }

  export type ViewUpsertWithWhereUniqueWithoutTableInput = {
    where: ViewWhereUniqueInput
    update: XOR<ViewUpdateWithoutTableInput, ViewUncheckedUpdateWithoutTableInput>
    create: XOR<ViewCreateWithoutTableInput, ViewUncheckedCreateWithoutTableInput>
  }

  export type ViewUpdateWithWhereUniqueWithoutTableInput = {
    where: ViewWhereUniqueInput
    data: XOR<ViewUpdateWithoutTableInput, ViewUncheckedUpdateWithoutTableInput>
  }

  export type ViewUpdateManyWithWhereWithoutTableInput = {
    where: ViewScalarWhereInput
    data: XOR<ViewUpdateManyMutationInput, ViewUncheckedUpdateManyWithoutTableInput>
  }

  export type ViewScalarWhereInput = {
    AND?: ViewScalarWhereInput | ViewScalarWhereInput[]
    OR?: ViewScalarWhereInput[]
    NOT?: ViewScalarWhereInput | ViewScalarWhereInput[]
    id?: StringFilter<"View"> | string
    name?: StringFilter<"View"> | string
    description?: StringNullableFilter<"View"> | string | null
    order?: IntFilter<"View"> | number
    isDefault?: BoolFilter<"View"> | boolean
    createdAt?: DateTimeFilter<"View"> | Date | string
    updatedAt?: DateTimeFilter<"View"> | Date | string
    tableId?: StringFilter<"View"> | string
  }

  export type TableCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    records?: RecordCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutFieldsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: string
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutFieldsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
  }

  export type CellCreateWithoutFieldInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    record: RecordCreateNestedOneWithoutCellsInput
  }

  export type CellUncheckedCreateWithoutFieldInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    recordId: string
  }

  export type CellCreateOrConnectWithoutFieldInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutFieldInput, CellUncheckedCreateWithoutFieldInput>
  }

  export type CellCreateManyFieldInputEnvelope = {
    data: CellCreateManyFieldInput | CellCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type FilterCreateWithoutFieldInput = {
    id?: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    view: ViewCreateNestedOneWithoutFiltersInput
  }

  export type FilterUncheckedCreateWithoutFieldInput = {
    id?: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    viewId: string
  }

  export type FilterCreateOrConnectWithoutFieldInput = {
    where: FilterWhereUniqueInput
    create: XOR<FilterCreateWithoutFieldInput, FilterUncheckedCreateWithoutFieldInput>
  }

  export type FilterCreateManyFieldInputEnvelope = {
    data: FilterCreateManyFieldInput | FilterCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type SortCreateWithoutFieldInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number
    view: ViewCreateNestedOneWithoutSortsInput
  }

  export type SortUncheckedCreateWithoutFieldInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number
    viewId: string
  }

  export type SortCreateOrConnectWithoutFieldInput = {
    where: SortWhereUniqueInput
    create: XOR<SortCreateWithoutFieldInput, SortUncheckedCreateWithoutFieldInput>
  }

  export type SortCreateManyFieldInputEnvelope = {
    data: SortCreateManyFieldInput | SortCreateManyFieldInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutFieldsInput = {
    update: XOR<TableUpdateWithoutFieldsInput, TableUncheckedUpdateWithoutFieldsInput>
    create: XOR<TableCreateWithoutFieldsInput, TableUncheckedCreateWithoutFieldsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutFieldsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutFieldsInput, TableUncheckedUpdateWithoutFieldsInput>
  }

  export type TableUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: StringFieldUpdateOperationsInput | string
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CellUpsertWithWhereUniqueWithoutFieldInput = {
    where: CellWhereUniqueInput
    update: XOR<CellUpdateWithoutFieldInput, CellUncheckedUpdateWithoutFieldInput>
    create: XOR<CellCreateWithoutFieldInput, CellUncheckedCreateWithoutFieldInput>
  }

  export type CellUpdateWithWhereUniqueWithoutFieldInput = {
    where: CellWhereUniqueInput
    data: XOR<CellUpdateWithoutFieldInput, CellUncheckedUpdateWithoutFieldInput>
  }

  export type CellUpdateManyWithWhereWithoutFieldInput = {
    where: CellScalarWhereInput
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyWithoutFieldInput>
  }

  export type CellScalarWhereInput = {
    AND?: CellScalarWhereInput | CellScalarWhereInput[]
    OR?: CellScalarWhereInput[]
    NOT?: CellScalarWhereInput | CellScalarWhereInput[]
    id?: StringFilter<"Cell"> | string
    value?: JsonNullableFilter<"Cell">
    createdAt?: DateTimeFilter<"Cell"> | Date | string
    updatedAt?: DateTimeFilter<"Cell"> | Date | string
    fieldId?: StringFilter<"Cell"> | string
    recordId?: StringFilter<"Cell"> | string
  }

  export type FilterUpsertWithWhereUniqueWithoutFieldInput = {
    where: FilterWhereUniqueInput
    update: XOR<FilterUpdateWithoutFieldInput, FilterUncheckedUpdateWithoutFieldInput>
    create: XOR<FilterCreateWithoutFieldInput, FilterUncheckedCreateWithoutFieldInput>
  }

  export type FilterUpdateWithWhereUniqueWithoutFieldInput = {
    where: FilterWhereUniqueInput
    data: XOR<FilterUpdateWithoutFieldInput, FilterUncheckedUpdateWithoutFieldInput>
  }

  export type FilterUpdateManyWithWhereWithoutFieldInput = {
    where: FilterScalarWhereInput
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyWithoutFieldInput>
  }

  export type FilterScalarWhereInput = {
    AND?: FilterScalarWhereInput | FilterScalarWhereInput[]
    OR?: FilterScalarWhereInput[]
    NOT?: FilterScalarWhereInput | FilterScalarWhereInput[]
    id?: StringFilter<"Filter"> | string
    fieldId?: StringFilter<"Filter"> | string
    operator?: EnumFilterOperatorFilter<"Filter"> | $Enums.FilterOperator
    value?: JsonNullableFilter<"Filter">
    order?: IntFilter<"Filter"> | number
    viewId?: StringFilter<"Filter"> | string
  }

  export type SortUpsertWithWhereUniqueWithoutFieldInput = {
    where: SortWhereUniqueInput
    update: XOR<SortUpdateWithoutFieldInput, SortUncheckedUpdateWithoutFieldInput>
    create: XOR<SortCreateWithoutFieldInput, SortUncheckedCreateWithoutFieldInput>
  }

  export type SortUpdateWithWhereUniqueWithoutFieldInput = {
    where: SortWhereUniqueInput
    data: XOR<SortUpdateWithoutFieldInput, SortUncheckedUpdateWithoutFieldInput>
  }

  export type SortUpdateManyWithWhereWithoutFieldInput = {
    where: SortScalarWhereInput
    data: XOR<SortUpdateManyMutationInput, SortUncheckedUpdateManyWithoutFieldInput>
  }

  export type SortScalarWhereInput = {
    AND?: SortScalarWhereInput | SortScalarWhereInput[]
    OR?: SortScalarWhereInput[]
    NOT?: SortScalarWhereInput | SortScalarWhereInput[]
    id?: StringFilter<"Sort"> | string
    fieldId?: StringFilter<"Sort"> | string
    direction?: EnumSortDirectionFilter<"Sort"> | $Enums.SortDirection
    order?: IntFilter<"Sort"> | number
    viewId?: StringFilter<"Sort"> | string
  }

  export type TableCreateWithoutRecordsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    views?: ViewCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    views?: ViewUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutRecordsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
  }

  export type CellCreateWithoutRecordInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    field: FieldCreateNestedOneWithoutCellsInput
  }

  export type CellUncheckedCreateWithoutRecordInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId: string
  }

  export type CellCreateOrConnectWithoutRecordInput = {
    where: CellWhereUniqueInput
    create: XOR<CellCreateWithoutRecordInput, CellUncheckedCreateWithoutRecordInput>
  }

  export type CellCreateManyRecordInputEnvelope = {
    data: CellCreateManyRecordInput | CellCreateManyRecordInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutRecordsInput = {
    update: XOR<TableUpdateWithoutRecordsInput, TableUncheckedUpdateWithoutRecordsInput>
    create: XOR<TableCreateWithoutRecordsInput, TableUncheckedCreateWithoutRecordsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutRecordsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutRecordsInput, TableUncheckedUpdateWithoutRecordsInput>
  }

  export type TableUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: StringFieldUpdateOperationsInput | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type CellUpsertWithWhereUniqueWithoutRecordInput = {
    where: CellWhereUniqueInput
    update: XOR<CellUpdateWithoutRecordInput, CellUncheckedUpdateWithoutRecordInput>
    create: XOR<CellCreateWithoutRecordInput, CellUncheckedCreateWithoutRecordInput>
  }

  export type CellUpdateWithWhereUniqueWithoutRecordInput = {
    where: CellWhereUniqueInput
    data: XOR<CellUpdateWithoutRecordInput, CellUncheckedUpdateWithoutRecordInput>
  }

  export type CellUpdateManyWithWhereWithoutRecordInput = {
    where: CellScalarWhereInput
    data: XOR<CellUpdateManyMutationInput, CellUncheckedUpdateManyWithoutRecordInput>
  }

  export type FieldCreateWithoutCellsInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutFieldsInput
    filters?: FilterCreateNestedManyWithoutFieldInput
    sorts?: SortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutCellsInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    filters?: FilterUncheckedCreateNestedManyWithoutFieldInput
    sorts?: SortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutCellsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
  }

  export type RecordCreateWithoutCellsInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutRecordsInput
  }

  export type RecordUncheckedCreateWithoutCellsInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
  }

  export type RecordCreateOrConnectWithoutCellsInput = {
    where: RecordWhereUniqueInput
    create: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
  }

  export type FieldUpsertWithoutCellsInput = {
    update: XOR<FieldUpdateWithoutCellsInput, FieldUncheckedUpdateWithoutCellsInput>
    create: XOR<FieldCreateWithoutCellsInput, FieldUncheckedCreateWithoutCellsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutCellsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutCellsInput, FieldUncheckedUpdateWithoutCellsInput>
  }

  export type FieldUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    filters?: FilterUpdateManyWithoutFieldNestedInput
    sorts?: SortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    filters?: FilterUncheckedUpdateManyWithoutFieldNestedInput
    sorts?: SortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type RecordUpsertWithoutCellsInput = {
    update: XOR<RecordUpdateWithoutCellsInput, RecordUncheckedUpdateWithoutCellsInput>
    create: XOR<RecordCreateWithoutCellsInput, RecordUncheckedCreateWithoutCellsInput>
    where?: RecordWhereInput
  }

  export type RecordUpdateToOneWithWhereWithoutCellsInput = {
    where?: RecordWhereInput
    data: XOR<RecordUpdateWithoutCellsInput, RecordUncheckedUpdateWithoutCellsInput>
  }

  export type RecordUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordUncheckedUpdateWithoutCellsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
  }

  export type TableCreateWithoutViewsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    base: BaseCreateNestedOneWithoutTablesInput
    fields?: FieldCreateNestedManyWithoutTableInput
    records?: RecordCreateNestedManyWithoutTableInput
  }

  export type TableUncheckedCreateWithoutViewsInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    baseId: string
    fields?: FieldUncheckedCreateNestedManyWithoutTableInput
    records?: RecordUncheckedCreateNestedManyWithoutTableInput
  }

  export type TableCreateOrConnectWithoutViewsInput = {
    where: TableWhereUniqueInput
    create: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
  }

  export type FilterCreateWithoutViewInput = {
    id?: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    field: FieldCreateNestedOneWithoutFiltersInput
  }

  export type FilterUncheckedCreateWithoutViewInput = {
    id?: string
    fieldId: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
  }

  export type FilterCreateOrConnectWithoutViewInput = {
    where: FilterWhereUniqueInput
    create: XOR<FilterCreateWithoutViewInput, FilterUncheckedCreateWithoutViewInput>
  }

  export type FilterCreateManyViewInputEnvelope = {
    data: FilterCreateManyViewInput | FilterCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type SortCreateWithoutViewInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number
    field: FieldCreateNestedOneWithoutSortsInput
  }

  export type SortUncheckedCreateWithoutViewInput = {
    id?: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number
  }

  export type SortCreateOrConnectWithoutViewInput = {
    where: SortWhereUniqueInput
    create: XOR<SortCreateWithoutViewInput, SortUncheckedCreateWithoutViewInput>
  }

  export type SortCreateManyViewInputEnvelope = {
    data: SortCreateManyViewInput | SortCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type HiddenFieldCreateWithoutViewInput = {
    id?: string
    fieldId: string
  }

  export type HiddenFieldUncheckedCreateWithoutViewInput = {
    id?: string
    fieldId: string
  }

  export type HiddenFieldCreateOrConnectWithoutViewInput = {
    where: HiddenFieldWhereUniqueInput
    create: XOR<HiddenFieldCreateWithoutViewInput, HiddenFieldUncheckedCreateWithoutViewInput>
  }

  export type HiddenFieldCreateManyViewInputEnvelope = {
    data: HiddenFieldCreateManyViewInput | HiddenFieldCreateManyViewInput[]
    skipDuplicates?: boolean
  }

  export type TableUpsertWithoutViewsInput = {
    update: XOR<TableUpdateWithoutViewsInput, TableUncheckedUpdateWithoutViewsInput>
    create: XOR<TableCreateWithoutViewsInput, TableUncheckedCreateWithoutViewsInput>
    where?: TableWhereInput
  }

  export type TableUpdateToOneWithWhereWithoutViewsInput = {
    where?: TableWhereInput
    data: XOR<TableUpdateWithoutViewsInput, TableUncheckedUpdateWithoutViewsInput>
  }

  export type TableUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    base?: BaseUpdateOneRequiredWithoutTablesNestedInput
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutViewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    baseId?: StringFieldUpdateOperationsInput | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
  }

  export type FilterUpsertWithWhereUniqueWithoutViewInput = {
    where: FilterWhereUniqueInput
    update: XOR<FilterUpdateWithoutViewInput, FilterUncheckedUpdateWithoutViewInput>
    create: XOR<FilterCreateWithoutViewInput, FilterUncheckedCreateWithoutViewInput>
  }

  export type FilterUpdateWithWhereUniqueWithoutViewInput = {
    where: FilterWhereUniqueInput
    data: XOR<FilterUpdateWithoutViewInput, FilterUncheckedUpdateWithoutViewInput>
  }

  export type FilterUpdateManyWithWhereWithoutViewInput = {
    where: FilterScalarWhereInput
    data: XOR<FilterUpdateManyMutationInput, FilterUncheckedUpdateManyWithoutViewInput>
  }

  export type SortUpsertWithWhereUniqueWithoutViewInput = {
    where: SortWhereUniqueInput
    update: XOR<SortUpdateWithoutViewInput, SortUncheckedUpdateWithoutViewInput>
    create: XOR<SortCreateWithoutViewInput, SortUncheckedCreateWithoutViewInput>
  }

  export type SortUpdateWithWhereUniqueWithoutViewInput = {
    where: SortWhereUniqueInput
    data: XOR<SortUpdateWithoutViewInput, SortUncheckedUpdateWithoutViewInput>
  }

  export type SortUpdateManyWithWhereWithoutViewInput = {
    where: SortScalarWhereInput
    data: XOR<SortUpdateManyMutationInput, SortUncheckedUpdateManyWithoutViewInput>
  }

  export type HiddenFieldUpsertWithWhereUniqueWithoutViewInput = {
    where: HiddenFieldWhereUniqueInput
    update: XOR<HiddenFieldUpdateWithoutViewInput, HiddenFieldUncheckedUpdateWithoutViewInput>
    create: XOR<HiddenFieldCreateWithoutViewInput, HiddenFieldUncheckedCreateWithoutViewInput>
  }

  export type HiddenFieldUpdateWithWhereUniqueWithoutViewInput = {
    where: HiddenFieldWhereUniqueInput
    data: XOR<HiddenFieldUpdateWithoutViewInput, HiddenFieldUncheckedUpdateWithoutViewInput>
  }

  export type HiddenFieldUpdateManyWithWhereWithoutViewInput = {
    where: HiddenFieldScalarWhereInput
    data: XOR<HiddenFieldUpdateManyMutationInput, HiddenFieldUncheckedUpdateManyWithoutViewInput>
  }

  export type HiddenFieldScalarWhereInput = {
    AND?: HiddenFieldScalarWhereInput | HiddenFieldScalarWhereInput[]
    OR?: HiddenFieldScalarWhereInput[]
    NOT?: HiddenFieldScalarWhereInput | HiddenFieldScalarWhereInput[]
    id?: StringFilter<"HiddenField"> | string
    fieldId?: StringFilter<"HiddenField"> | string
    viewId?: StringFilter<"HiddenField"> | string
  }

  export type ViewCreateWithoutFiltersInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    sorts?: SortCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutFiltersInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    sorts?: SortUncheckedCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutFiltersInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
  }

  export type FieldCreateWithoutFiltersInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutFieldsInput
    cells?: CellCreateNestedManyWithoutFieldInput
    sorts?: SortCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutFiltersInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    cells?: CellUncheckedCreateNestedManyWithoutFieldInput
    sorts?: SortUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutFiltersInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutFiltersInput, FieldUncheckedCreateWithoutFiltersInput>
  }

  export type ViewUpsertWithoutFiltersInput = {
    update: XOR<ViewUpdateWithoutFiltersInput, ViewUncheckedUpdateWithoutFiltersInput>
    create: XOR<ViewCreateWithoutFiltersInput, ViewUncheckedCreateWithoutFiltersInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutFiltersInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutFiltersInput, ViewUncheckedUpdateWithoutFiltersInput>
  }

  export type ViewUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    sorts?: SortUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    sorts?: SortUncheckedUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUncheckedUpdateManyWithoutViewNestedInput
  }

  export type FieldUpsertWithoutFiltersInput = {
    update: XOR<FieldUpdateWithoutFiltersInput, FieldUncheckedUpdateWithoutFiltersInput>
    create: XOR<FieldCreateWithoutFiltersInput, FieldUncheckedCreateWithoutFiltersInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutFiltersInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutFiltersInput, FieldUncheckedUpdateWithoutFiltersInput>
  }

  export type FieldUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    cells?: CellUpdateManyWithoutFieldNestedInput
    sorts?: SortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutFiltersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    cells?: CellUncheckedUpdateManyWithoutFieldNestedInput
    sorts?: SortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type ViewCreateWithoutSortsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: FilterCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutSortsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    filters?: FilterUncheckedCreateNestedManyWithoutViewInput
    hiddenFields?: HiddenFieldUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutSortsInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
  }

  export type FieldCreateWithoutSortsInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutFieldsInput
    cells?: CellCreateNestedManyWithoutFieldInput
    filters?: FilterCreateNestedManyWithoutFieldInput
  }

  export type FieldUncheckedCreateWithoutSortsInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    cells?: CellUncheckedCreateNestedManyWithoutFieldInput
    filters?: FilterUncheckedCreateNestedManyWithoutFieldInput
  }

  export type FieldCreateOrConnectWithoutSortsInput = {
    where: FieldWhereUniqueInput
    create: XOR<FieldCreateWithoutSortsInput, FieldUncheckedCreateWithoutSortsInput>
  }

  export type ViewUpsertWithoutSortsInput = {
    update: XOR<ViewUpdateWithoutSortsInput, ViewUncheckedUpdateWithoutSortsInput>
    create: XOR<ViewCreateWithoutSortsInput, ViewUncheckedCreateWithoutSortsInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutSortsInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutSortsInput, ViewUncheckedUpdateWithoutSortsInput>
  }

  export type ViewUpdateWithoutSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: FilterUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    filters?: FilterUncheckedUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUncheckedUpdateManyWithoutViewNestedInput
  }

  export type FieldUpsertWithoutSortsInput = {
    update: XOR<FieldUpdateWithoutSortsInput, FieldUncheckedUpdateWithoutSortsInput>
    create: XOR<FieldCreateWithoutSortsInput, FieldUncheckedCreateWithoutSortsInput>
    where?: FieldWhereInput
  }

  export type FieldUpdateToOneWithWhereWithoutSortsInput = {
    where?: FieldWhereInput
    data: XOR<FieldUpdateWithoutSortsInput, FieldUncheckedUpdateWithoutSortsInput>
  }

  export type FieldUpdateWithoutSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutFieldsNestedInput
    cells?: CellUpdateManyWithoutFieldNestedInput
    filters?: FilterUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutSortsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    cells?: CellUncheckedUpdateManyWithoutFieldNestedInput
    filters?: FilterUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type ViewCreateWithoutHiddenFieldsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    table: TableCreateNestedOneWithoutViewsInput
    filters?: FilterCreateNestedManyWithoutViewInput
    sorts?: SortCreateNestedManyWithoutViewInput
  }

  export type ViewUncheckedCreateWithoutHiddenFieldsInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tableId: string
    filters?: FilterUncheckedCreateNestedManyWithoutViewInput
    sorts?: SortUncheckedCreateNestedManyWithoutViewInput
  }

  export type ViewCreateOrConnectWithoutHiddenFieldsInput = {
    where: ViewWhereUniqueInput
    create: XOR<ViewCreateWithoutHiddenFieldsInput, ViewUncheckedCreateWithoutHiddenFieldsInput>
  }

  export type ViewUpsertWithoutHiddenFieldsInput = {
    update: XOR<ViewUpdateWithoutHiddenFieldsInput, ViewUncheckedUpdateWithoutHiddenFieldsInput>
    create: XOR<ViewCreateWithoutHiddenFieldsInput, ViewUncheckedCreateWithoutHiddenFieldsInput>
    where?: ViewWhereInput
  }

  export type ViewUpdateToOneWithWhereWithoutHiddenFieldsInput = {
    where?: ViewWhereInput
    data: XOR<ViewUpdateWithoutHiddenFieldsInput, ViewUncheckedUpdateWithoutHiddenFieldsInput>
  }

  export type ViewUpdateWithoutHiddenFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    table?: TableUpdateOneRequiredWithoutViewsNestedInput
    filters?: FilterUpdateManyWithoutViewNestedInput
    sorts?: SortUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutHiddenFieldsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tableId?: StringFieldUpdateOperationsInput | string
    filters?: FilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: SortUncheckedUpdateManyWithoutViewNestedInput
  }

  export type TableCreateManyBaseInput = {
    id?: string
    name: string
    description?: string | null
    icon?: string | null
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TableUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUpdateManyWithoutTableNestedInput
    records?: RecordUpdateManyWithoutTableNestedInput
    views?: ViewUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fields?: FieldUncheckedUpdateManyWithoutTableNestedInput
    records?: RecordUncheckedUpdateManyWithoutTableNestedInput
    views?: ViewUncheckedUpdateManyWithoutTableNestedInput
  }

  export type TableUncheckedUpdateManyWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FieldCreateManyTableInput = {
    id?: string
    name: string
    type?: $Enums.FieldType
    order?: number
    description?: string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: boolean
    isRequired?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RecordCreateManyTableInput = {
    id?: string
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ViewCreateManyTableInput = {
    id?: string
    name: string
    description?: string | null
    order?: number
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FieldUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUpdateManyWithoutFieldNestedInput
    filters?: FilterUpdateManyWithoutFieldNestedInput
    sorts?: SortUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUncheckedUpdateManyWithoutFieldNestedInput
    filters?: FilterUncheckedUpdateManyWithoutFieldNestedInput
    sorts?: SortUncheckedUpdateManyWithoutFieldNestedInput
  }

  export type FieldUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumFieldTypeFieldUpdateOperationsInput | $Enums.FieldType
    order?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    config?: NullableJsonNullValueInput | InputJsonValue
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    isRequired?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cells?: CellUncheckedUpdateManyWithoutRecordNestedInput
  }

  export type RecordUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViewUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: FilterUpdateManyWithoutViewNestedInput
    sorts?: SortUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    filters?: FilterUncheckedUpdateManyWithoutViewNestedInput
    sorts?: SortUncheckedUpdateManyWithoutViewNestedInput
    hiddenFields?: HiddenFieldUncheckedUpdateManyWithoutViewNestedInput
  }

  export type ViewUncheckedUpdateManyWithoutTableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CellCreateManyFieldInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    recordId: string
  }

  export type FilterCreateManyFieldInput = {
    id?: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
    viewId: string
  }

  export type SortCreateManyFieldInput = {
    id?: string
    direction: $Enums.SortDirection
    order?: number
    viewId: string
  }

  export type CellUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    record?: RecordUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordId?: StringFieldUpdateOperationsInput | string
  }

  export type CellUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    recordId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutFiltersNestedInput
  }

  export type FilterUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type SortUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    view?: ViewUpdateOneRequiredWithoutSortsNestedInput
  }

  export type SortUncheckedUpdateWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type SortUncheckedUpdateManyWithoutFieldInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    viewId?: StringFieldUpdateOperationsInput | string
  }

  export type CellCreateManyRecordInput = {
    id?: string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    fieldId: string
  }

  export type CellUpdateWithoutRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    field?: FieldUpdateOneRequiredWithoutCellsNestedInput
  }

  export type CellUncheckedUpdateWithoutRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type CellUncheckedUpdateManyWithoutRecordInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type FilterCreateManyViewInput = {
    id?: string
    fieldId: string
    operator: $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: number
  }

  export type SortCreateManyViewInput = {
    id?: string
    fieldId: string
    direction: $Enums.SortDirection
    order?: number
  }

  export type HiddenFieldCreateManyViewInput = {
    id?: string
    fieldId: string
  }

  export type FilterUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
    field?: FieldUpdateOneRequiredWithoutFiltersNestedInput
  }

  export type FilterUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
  }

  export type FilterUncheckedUpdateManyWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    operator?: EnumFilterOperatorFieldUpdateOperationsInput | $Enums.FilterOperator
    value?: NullableJsonNullValueInput | InputJsonValue
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SortUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
    field?: FieldUpdateOneRequiredWithoutSortsNestedInput
  }

  export type SortUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
  }

  export type SortUncheckedUpdateManyWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
    direction?: EnumSortDirectionFieldUpdateOperationsInput | $Enums.SortDirection
    order?: IntFieldUpdateOperationsInput | number
  }

  export type HiddenFieldUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type HiddenFieldUncheckedUpdateWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }

  export type HiddenFieldUncheckedUpdateManyWithoutViewInput = {
    id?: StringFieldUpdateOperationsInput | string
    fieldId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}