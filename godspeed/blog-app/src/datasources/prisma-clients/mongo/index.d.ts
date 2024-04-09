
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
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>
/**
 * Model views
 * 
 */
export type views = $Result.DefaultSelection<Prisma.$viewsPayload>
/**
 * Model AbuseReport
 * 
 */
export type AbuseReport = $Result.DefaultSelection<Prisma.$AbuseReportPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  user: 'user',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const ReportType: {
  USER: 'USER',
  POST: 'POST'
};

export type ReportType = (typeof ReportType)[keyof typeof ReportType]


export const ReportStatus: {
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
};

export type ReportStatus = (typeof ReportStatus)[keyof typeof ReportStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type ReportType = $Enums.ReportType

export const ReportType: typeof $Enums.ReportType

export type ReportStatus = $Enums.ReportStatus

export const ReportStatus: typeof $Enums.ReportStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs>;

  /**
   * `prisma.views`: Exposes CRUD operations for the **views** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Views
    * const views = await prisma.views.findMany()
    * ```
    */
  get views(): Prisma.viewsDelegate<ExtArgs>;

  /**
   * `prisma.abuseReport`: Exposes CRUD operations for the **AbuseReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AbuseReports
    * const abuseReports = await prisma.abuseReport.findMany()
    * ```
    */
  get abuseReport(): Prisma.AbuseReportDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    users: 'users',
    posts: 'posts',
    likes: 'likes',
    views: 'views',
    AbuseReport: 'AbuseReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'posts' | 'likes' | 'views' | 'abuseReport'
      txIsolationLevel: never
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.usersFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.usersAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.postsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.postsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>,
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.likesFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.likesAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>,
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      views: {
        payload: Prisma.$viewsPayload<ExtArgs>
        fields: Prisma.viewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.viewsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.viewsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findFirst: {
            args: Prisma.viewsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.viewsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          findMany: {
            args: Prisma.viewsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>[]
          }
          create: {
            args: Prisma.viewsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          createMany: {
            args: Prisma.viewsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.viewsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          update: {
            args: Prisma.viewsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          deleteMany: {
            args: Prisma.viewsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.viewsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.viewsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$viewsPayload>
          }
          aggregate: {
            args: Prisma.ViewsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateViews>
          }
          groupBy: {
            args: Prisma.viewsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ViewsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.viewsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.viewsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.viewsCountArgs<ExtArgs>,
            result: $Utils.Optional<ViewsCountAggregateOutputType> | number
          }
        }
      }
      AbuseReport: {
        payload: Prisma.$AbuseReportPayload<ExtArgs>
        fields: Prisma.AbuseReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AbuseReportFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AbuseReportFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>
          }
          findFirst: {
            args: Prisma.AbuseReportFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AbuseReportFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>
          }
          findMany: {
            args: Prisma.AbuseReportFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>[]
          }
          create: {
            args: Prisma.AbuseReportCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>
          }
          createMany: {
            args: Prisma.AbuseReportCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AbuseReportDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>
          }
          update: {
            args: Prisma.AbuseReportUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>
          }
          deleteMany: {
            args: Prisma.AbuseReportDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AbuseReportUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AbuseReportUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AbuseReportPayload>
          }
          aggregate: {
            args: Prisma.AbuseReportAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAbuseReport>
          }
          groupBy: {
            args: Prisma.AbuseReportGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AbuseReportGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AbuseReportFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AbuseReportAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AbuseReportCountArgs<ExtArgs>,
            result: $Utils.Optional<AbuseReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    posts: number
    likes: number
    views: number
    abuseReport: number
    abuseReports: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    views?: boolean | UsersCountOutputTypeCountViewsArgs
    abuseReport?: boolean | UsersCountOutputTypeCountAbuseReportArgs
    abuseReports?: boolean | UsersCountOutputTypeCountAbuseReportsArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAbuseReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbuseReportWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAbuseReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbuseReportWhereInput
  }



  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    likes: number
    views: number
    reportedPosts: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    views?: boolean | PostsCountOutputTypeCountViewsArgs
    reportedPosts?: boolean | PostsCountOutputTypeCountReportedPostsArgs
  }

  // Custom InputTypes

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }


  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountViewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
  }


  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountReportedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbuseReportWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    password: string | null
    username: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    email: string | null
    password: string | null
    username: string | null
    name: string | null
    role: $Enums.Role | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    createdAt: number
    email: number
    password: number
    username: number
    name: number
    role: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    username?: true
    name?: true
    role?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    username?: true
    name?: true
    role?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    createdAt?: true
    email?: true
    password?: true
    username?: true
    name?: true
    role?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    createdAt: Date
    email: string
    password: string
    username: string
    name: string | null
    role: $Enums.Role
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
    posts?: boolean | users$postsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    views?: boolean | users$viewsArgs<ExtArgs>
    abuseReport?: boolean | users$abuseReportArgs<ExtArgs>
    abuseReports?: boolean | users$abuseReportsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    createdAt?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    name?: boolean
    role?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | users$postsArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    views?: boolean | users$viewsArgs<ExtArgs>
    abuseReport?: boolean | users$abuseReportArgs<ExtArgs>
    abuseReports?: boolean | users$abuseReportsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      posts: Prisma.$postsPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      views: Prisma.$viewsPayload<ExtArgs>[]
      abuseReport: Prisma.$AbuseReportPayload<ExtArgs>[]
      abuseReports: Prisma.$AbuseReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      email: string
      /**
       * @encrypted
       */
      password: string
      username: string
      name: string | null
      role: $Enums.Role
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {usersFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const users = await prisma.users.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: usersFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Users.
     * @param {usersAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const users = await prisma.users.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: usersAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'> | Null>;

    likes<T extends users$likesArgs<ExtArgs> = {}>(args?: Subset<T, users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findMany'> | Null>;

    views<T extends users$viewsArgs<ExtArgs> = {}>(args?: Subset<T, users$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    abuseReport<T extends users$abuseReportArgs<ExtArgs> = {}>(args?: Subset<T, users$abuseReportArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findMany'> | Null>;

    abuseReports<T extends users$abuseReportsArgs<ExtArgs> = {}>(args?: Subset<T, users$abuseReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly username: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'Role'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users findRaw
   */
  export type usersFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * users aggregateRaw
   */
  export type usersAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * users.likes
   */
  export type users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * users.views
   */
  export type users$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    cursor?: viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * users.abuseReport
   */
  export type users$abuseReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    where?: AbuseReportWhereInput
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    cursor?: AbuseReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbuseReportScalarFieldEnum | AbuseReportScalarFieldEnum[]
  }


  /**
   * users.abuseReports
   */
  export type users$abuseReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    where?: AbuseReportWhereInput
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    cursor?: AbuseReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbuseReportScalarFieldEnum | AbuseReportScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsAvgAggregateOutputType = {
    noOfLikes: number | null
    noOfViews: number | null
  }

  export type PostsSumAggregateOutputType = {
    noOfLikes: number | null
    noOfViews: number | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    published: boolean | null
    title: string | null
    description: string | null
    content: string | null
    authorId: string | null
    noOfLikes: number | null
    noOfViews: number | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    published: boolean | null
    title: string | null
    description: string | null
    content: string | null
    authorId: string | null
    noOfLikes: number | null
    noOfViews: number | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    published: number
    title: number
    description: number
    content: number
    authorId: number
    noOfLikes: number
    noOfViews: number
    _all: number
  }


  export type PostsAvgAggregateInputType = {
    noOfLikes?: true
    noOfViews?: true
  }

  export type PostsSumAggregateInputType = {
    noOfLikes?: true
    noOfViews?: true
  }

  export type PostsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    title?: true
    description?: true
    content?: true
    authorId?: true
    noOfLikes?: true
    noOfViews?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    title?: true
    description?: true
    content?: true
    authorId?: true
    noOfLikes?: true
    noOfViews?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    published?: true
    title?: true
    description?: true
    content?: true
    authorId?: true
    noOfLikes?: true
    noOfViews?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _avg?: PostsAvgAggregateInputType
    _sum?: PostsSumAggregateInputType
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    published: boolean
    title: string
    description: string | null
    content: string
    authorId: string
    noOfLikes: number
    noOfViews: number
    _count: PostsCountAggregateOutputType | null
    _avg: PostsAvgAggregateOutputType | null
    _sum: PostsSumAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    authorId?: boolean
    noOfLikes?: boolean
    noOfViews?: boolean
    author?: boolean | posts$authorArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    views?: boolean | posts$viewsArgs<ExtArgs>
    reportedPosts?: boolean | posts$reportedPostsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    published?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    authorId?: boolean
    noOfLikes?: boolean
    noOfViews?: boolean
  }

  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | posts$authorArgs<ExtArgs>
    likes?: boolean | posts$likesArgs<ExtArgs>
    views?: boolean | posts$viewsArgs<ExtArgs>
    reportedPosts?: boolean | posts$reportedPostsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      author: Prisma.$usersPayload<ExtArgs> | null
      likes: Prisma.$likesPayload<ExtArgs>[]
      views: Prisma.$viewsPayload<ExtArgs>[]
      reportedPosts: Prisma.$AbuseReportPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      published: boolean
      title: string
      description: string | null
      content: string
      authorId: string
      noOfLikes: number
      noOfViews: number
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }


  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends postsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Posts that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends postsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends postsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
    **/
    create<T extends postsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, postsCreateArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Posts.
     *     @param {postsCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const posts = await prisma.posts.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends postsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
    **/
    delete<T extends postsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, postsDeleteArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends postsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpdateArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends postsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends postsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
    **/
    upsert<T extends postsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, postsUpsertArgs<ExtArgs>>
    ): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Posts that matches the filter.
     * @param {postsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const posts = await prisma.posts.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: postsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Posts.
     * @param {postsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const posts = await prisma.posts.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: postsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
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
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    author<T extends posts$authorArgs<ExtArgs> = {}>(args?: Subset<T, posts$authorArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    likes<T extends posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findMany'> | Null>;

    views<T extends posts$viewsArgs<ExtArgs> = {}>(args?: Subset<T, posts$viewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findMany'> | Null>;

    reportedPosts<T extends posts$reportedPostsArgs<ExtArgs> = {}>(args?: Subset<T, posts$reportedPostsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the posts model
   */ 
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'String'>
    readonly createdAt: FieldRef<"posts", 'DateTime'>
    readonly updatedAt: FieldRef<"posts", 'DateTime'>
    readonly published: FieldRef<"posts", 'Boolean'>
    readonly title: FieldRef<"posts", 'String'>
    readonly description: FieldRef<"posts", 'String'>
    readonly content: FieldRef<"posts", 'String'>
    readonly authorId: FieldRef<"posts", 'String'>
    readonly noOfLikes: FieldRef<"posts", 'Int'>
    readonly noOfViews: FieldRef<"posts", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }


  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data: XOR<postsCreateInput, postsUncheckedCreateInput>
  }


  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
  }


  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
  }


  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }


  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }


  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
  }


  /**
   * posts findRaw
   */
  export type postsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * posts aggregateRaw
   */
  export type postsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * posts.author
   */
  export type posts$authorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * posts.likes
   */
  export type posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * posts.views
   */
  export type posts$viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    cursor?: viewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * posts.reportedPosts
   */
  export type posts$reportedPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    where?: AbuseReportWhereInput
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    cursor?: AbuseReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AbuseReportScalarFieldEnum | AbuseReportScalarFieldEnum[]
  }


  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
  }



  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
  }

  export type LikesMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type LikesMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    postId: string
    _count: LikesCountAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }


  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      post: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      postId: string
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }


  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<likesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends likesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Likes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends likesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends likesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
    **/
    create<T extends likesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, likesCreateArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Likes.
     *     @param {likesCreateManyArgs} args - Arguments to create many Likes.
     *     @example
     *     // Create many Likes
     *     const likes = await prisma.likes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends likesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
    **/
    delete<T extends likesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, likesDeleteArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends likesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, likesUpdateArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends likesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends likesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
    **/
    upsert<T extends likesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, likesUpsertArgs<ExtArgs>>
    ): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Likes that matches the filter.
     * @param {likesFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const likes = await prisma.likes.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: likesFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Likes.
     * @param {likesAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const likes = await prisma.likes.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: likesAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
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
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the likes model
   */ 
  interface likesFieldRefs {
    readonly id: FieldRef<"likes", 'String'>
    readonly createdAt: FieldRef<"likes", 'DateTime'>
    readonly userId: FieldRef<"likes", 'String'>
    readonly postId: FieldRef<"likes", 'String'>
  }
    

  // Custom InputTypes

  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }


  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data: XOR<likesCreateInput, likesUncheckedCreateInput>
  }


  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
  }


  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
  }


  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }


  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }


  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
  }


  /**
   * likes findRaw
   */
  export type likesFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * likes aggregateRaw
   */
  export type likesAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: likesInclude<ExtArgs> | null
  }



  /**
   * Model views
   */

  export type AggregateViews = {
    _count: ViewsCountAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  export type ViewsMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
  }

  export type ViewsMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    postId: string | null
  }

  export type ViewsCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    postId: number
    _all: number
  }


  export type ViewsMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type ViewsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
  }

  export type ViewsCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    postId?: true
    _all?: true
  }

  export type ViewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to aggregate.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned views
    **/
    _count?: true | ViewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViewsMaxAggregateInputType
  }

  export type GetViewsAggregateType<T extends ViewsAggregateArgs> = {
        [P in keyof T & keyof AggregateViews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViews[P]>
      : GetScalarType<T[P], AggregateViews[P]>
  }




  export type viewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: viewsWhereInput
    orderBy?: viewsOrderByWithAggregationInput | viewsOrderByWithAggregationInput[]
    by: ViewsScalarFieldEnum[] | ViewsScalarFieldEnum
    having?: viewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViewsCountAggregateInputType | true
    _min?: ViewsMinAggregateInputType
    _max?: ViewsMaxAggregateInputType
  }

  export type ViewsGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    postId: string
    _count: ViewsCountAggregateOutputType | null
    _min: ViewsMinAggregateOutputType | null
    _max: ViewsMaxAggregateOutputType | null
  }

  type GetViewsGroupByPayload<T extends viewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViewsGroupByOutputType[P]>
            : GetScalarType<T[P], ViewsGroupByOutputType[P]>
        }
      >
    >


  export type viewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["views"]>

  export type viewsSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    postId?: boolean
  }

  export type viewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    post?: boolean | postsDefaultArgs<ExtArgs>
  }


  export type $viewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "views"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      post: Prisma.$postsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      postId: string
    }, ExtArgs["result"]["views"]>
    composites: {}
  }


  type viewsGetPayload<S extends boolean | null | undefined | viewsDefaultArgs> = $Result.GetResult<Prisma.$viewsPayload, S>

  type viewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<viewsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ViewsCountAggregateInputType | true
    }

  export interface viewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['views'], meta: { name: 'views' } }
    /**
     * Find zero or one Views that matches the filter.
     * @param {viewsFindUniqueArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends viewsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, viewsFindUniqueArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Views that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {viewsFindUniqueOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends viewsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends viewsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindFirstArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Views that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindFirstOrThrowArgs} args - Arguments to find a Views
     * @example
     * // Get one Views
     * const views = await prisma.views.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends viewsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Views that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Views
     * const views = await prisma.views.findMany()
     * 
     * // Get first 10 Views
     * const views = await prisma.views.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const viewsWithIdOnly = await prisma.views.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends viewsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Views.
     * @param {viewsCreateArgs} args - Arguments to create a Views.
     * @example
     * // Create one Views
     * const Views = await prisma.views.create({
     *   data: {
     *     // ... data to create a Views
     *   }
     * })
     * 
    **/
    create<T extends viewsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, viewsCreateArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Views.
     *     @param {viewsCreateManyArgs} args - Arguments to create many Views.
     *     @example
     *     // Create many Views
     *     const views = await prisma.views.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends viewsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Views.
     * @param {viewsDeleteArgs} args - Arguments to delete one Views.
     * @example
     * // Delete one Views
     * const Views = await prisma.views.delete({
     *   where: {
     *     // ... filter to delete one Views
     *   }
     * })
     * 
    **/
    delete<T extends viewsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, viewsDeleteArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Views.
     * @param {viewsUpdateArgs} args - Arguments to update one Views.
     * @example
     * // Update one Views
     * const views = await prisma.views.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends viewsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, viewsUpdateArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Views.
     * @param {viewsDeleteManyArgs} args - Arguments to filter Views to delete.
     * @example
     * // Delete a few Views
     * const { count } = await prisma.views.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends viewsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, viewsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Views
     * const views = await prisma.views.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends viewsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, viewsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Views.
     * @param {viewsUpsertArgs} args - Arguments to update or create a Views.
     * @example
     * // Update or create a Views
     * const views = await prisma.views.upsert({
     *   create: {
     *     // ... data to create a Views
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Views we want to update
     *   }
     * })
    **/
    upsert<T extends viewsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, viewsUpsertArgs<ExtArgs>>
    ): Prisma__viewsClient<$Result.GetResult<Prisma.$viewsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Views that matches the filter.
     * @param {viewsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const views = await prisma.views.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: viewsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Views.
     * @param {viewsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const views = await prisma.views.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: viewsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsCountArgs} args - Arguments to filter Views to count.
     * @example
     * // Count the number of Views
     * const count = await prisma.views.count({
     *   where: {
     *     // ... the filter for the Views we want to count
     *   }
     * })
    **/
    count<T extends viewsCountArgs>(
      args?: Subset<T, viewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViewsAggregateArgs>(args: Subset<T, ViewsAggregateArgs>): Prisma.PrismaPromise<GetViewsAggregateType<T>>

    /**
     * Group by Views.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {viewsGroupByArgs} args - Group by arguments.
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
      T extends viewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: viewsGroupByArgs['orderBy'] }
        : { orderBy?: viewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, viewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the views model
   */
  readonly fields: viewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for views.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__viewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the views model
   */ 
  interface viewsFieldRefs {
    readonly id: FieldRef<"views", 'String'>
    readonly createdAt: FieldRef<"views", 'DateTime'>
    readonly userId: FieldRef<"views", 'String'>
    readonly postId: FieldRef<"views", 'String'>
  }
    

  // Custom InputTypes

  /**
   * views findUnique
   */
  export type viewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views findUniqueOrThrow
   */
  export type viewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views findFirst
   */
  export type viewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * views findFirstOrThrow
   */
  export type viewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of views.
     */
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * views findMany
   */
  export type viewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter, which views to fetch.
     */
    where?: viewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of views to fetch.
     */
    orderBy?: viewsOrderByWithRelationInput | viewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing views.
     */
    cursor?: viewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` views from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` views.
     */
    skip?: number
    distinct?: ViewsScalarFieldEnum | ViewsScalarFieldEnum[]
  }


  /**
   * views create
   */
  export type viewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The data needed to create a views.
     */
    data: XOR<viewsCreateInput, viewsUncheckedCreateInput>
  }


  /**
   * views createMany
   */
  export type viewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many views.
     */
    data: viewsCreateManyInput | viewsCreateManyInput[]
  }


  /**
   * views update
   */
  export type viewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The data needed to update a views.
     */
    data: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
    /**
     * Choose, which views to update.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views updateMany
   */
  export type viewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update views.
     */
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyInput>
    /**
     * Filter which views to update
     */
    where?: viewsWhereInput
  }


  /**
   * views upsert
   */
  export type viewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * The filter to search for the views to update in case it exists.
     */
    where: viewsWhereUniqueInput
    /**
     * In case the views found by the `where` argument doesn't exist, create a new views with this data.
     */
    create: XOR<viewsCreateInput, viewsUncheckedCreateInput>
    /**
     * In case the views was found with the provided `where` argument, update it with this data.
     */
    update: XOR<viewsUpdateInput, viewsUncheckedUpdateInput>
  }


  /**
   * views delete
   */
  export type viewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
    /**
     * Filter which views to delete.
     */
    where: viewsWhereUniqueInput
  }


  /**
   * views deleteMany
   */
  export type viewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which views to delete
     */
    where?: viewsWhereInput
  }


  /**
   * views findRaw
   */
  export type viewsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * views aggregateRaw
   */
  export type viewsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * views without action
   */
  export type viewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the views
     */
    select?: viewsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: viewsInclude<ExtArgs> | null
  }



  /**
   * Model AbuseReport
   */

  export type AggregateAbuseReport = {
    _count: AbuseReportCountAggregateOutputType | null
    _min: AbuseReportMinAggregateOutputType | null
    _max: AbuseReportMaxAggregateOutputType | null
  }

  export type AbuseReportMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    reporterId: string | null
    reportedUserId: string | null
    reportedPostId: string | null
    reportType: $Enums.ReportType | null
    description: string | null
    status: $Enums.ReportStatus | null
  }

  export type AbuseReportMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    reporterId: string | null
    reportedUserId: string | null
    reportedPostId: string | null
    reportType: $Enums.ReportType | null
    description: string | null
    status: $Enums.ReportStatus | null
  }

  export type AbuseReportCountAggregateOutputType = {
    id: number
    createdAt: number
    reporterId: number
    reportedUserId: number
    reportedPostId: number
    reportType: number
    description: number
    status: number
    _all: number
  }


  export type AbuseReportMinAggregateInputType = {
    id?: true
    createdAt?: true
    reporterId?: true
    reportedUserId?: true
    reportedPostId?: true
    reportType?: true
    description?: true
    status?: true
  }

  export type AbuseReportMaxAggregateInputType = {
    id?: true
    createdAt?: true
    reporterId?: true
    reportedUserId?: true
    reportedPostId?: true
    reportType?: true
    description?: true
    status?: true
  }

  export type AbuseReportCountAggregateInputType = {
    id?: true
    createdAt?: true
    reporterId?: true
    reportedUserId?: true
    reportedPostId?: true
    reportType?: true
    description?: true
    status?: true
    _all?: true
  }

  export type AbuseReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbuseReport to aggregate.
     */
    where?: AbuseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbuseReports to fetch.
     */
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AbuseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbuseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbuseReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AbuseReports
    **/
    _count?: true | AbuseReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AbuseReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AbuseReportMaxAggregateInputType
  }

  export type GetAbuseReportAggregateType<T extends AbuseReportAggregateArgs> = {
        [P in keyof T & keyof AggregateAbuseReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbuseReport[P]>
      : GetScalarType<T[P], AggregateAbuseReport[P]>
  }




  export type AbuseReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AbuseReportWhereInput
    orderBy?: AbuseReportOrderByWithAggregationInput | AbuseReportOrderByWithAggregationInput[]
    by: AbuseReportScalarFieldEnum[] | AbuseReportScalarFieldEnum
    having?: AbuseReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AbuseReportCountAggregateInputType | true
    _min?: AbuseReportMinAggregateInputType
    _max?: AbuseReportMaxAggregateInputType
  }

  export type AbuseReportGroupByOutputType = {
    id: string
    createdAt: Date
    reporterId: string
    reportedUserId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description: string | null
    status: $Enums.ReportStatus
    _count: AbuseReportCountAggregateOutputType | null
    _min: AbuseReportMinAggregateOutputType | null
    _max: AbuseReportMaxAggregateOutputType | null
  }

  type GetAbuseReportGroupByPayload<T extends AbuseReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AbuseReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AbuseReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AbuseReportGroupByOutputType[P]>
            : GetScalarType<T[P], AbuseReportGroupByOutputType[P]>
        }
      >
    >


  export type AbuseReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    reporterId?: boolean
    reportedUserId?: boolean
    reportedPostId?: boolean
    reportType?: boolean
    description?: boolean
    status?: boolean
    reporter?: boolean | usersDefaultArgs<ExtArgs>
    reportedUser?: boolean | AbuseReport$reportedUserArgs<ExtArgs>
    reportedPost?: boolean | AbuseReport$reportedPostArgs<ExtArgs>
  }, ExtArgs["result"]["abuseReport"]>

  export type AbuseReportSelectScalar = {
    id?: boolean
    createdAt?: boolean
    reporterId?: boolean
    reportedUserId?: boolean
    reportedPostId?: boolean
    reportType?: boolean
    description?: boolean
    status?: boolean
  }

  export type AbuseReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reporter?: boolean | usersDefaultArgs<ExtArgs>
    reportedUser?: boolean | AbuseReport$reportedUserArgs<ExtArgs>
    reportedPost?: boolean | AbuseReport$reportedPostArgs<ExtArgs>
  }


  export type $AbuseReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AbuseReport"
    objects: {
      reporter: Prisma.$usersPayload<ExtArgs>
      reportedUser: Prisma.$usersPayload<ExtArgs> | null
      reportedPost: Prisma.$postsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      reporterId: string
      reportedUserId: string
      reportedPostId: string
      reportType: $Enums.ReportType
      description: string | null
      status: $Enums.ReportStatus
    }, ExtArgs["result"]["abuseReport"]>
    composites: {}
  }


  type AbuseReportGetPayload<S extends boolean | null | undefined | AbuseReportDefaultArgs> = $Result.GetResult<Prisma.$AbuseReportPayload, S>

  type AbuseReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AbuseReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AbuseReportCountAggregateInputType | true
    }

  export interface AbuseReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AbuseReport'], meta: { name: 'AbuseReport' } }
    /**
     * Find zero or one AbuseReport that matches the filter.
     * @param {AbuseReportFindUniqueArgs} args - Arguments to find a AbuseReport
     * @example
     * // Get one AbuseReport
     * const abuseReport = await prisma.abuseReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AbuseReportFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AbuseReportFindUniqueArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AbuseReport that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AbuseReportFindUniqueOrThrowArgs} args - Arguments to find a AbuseReport
     * @example
     * // Get one AbuseReport
     * const abuseReport = await prisma.abuseReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AbuseReportFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AbuseReportFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AbuseReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportFindFirstArgs} args - Arguments to find a AbuseReport
     * @example
     * // Get one AbuseReport
     * const abuseReport = await prisma.abuseReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AbuseReportFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AbuseReportFindFirstArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AbuseReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportFindFirstOrThrowArgs} args - Arguments to find a AbuseReport
     * @example
     * // Get one AbuseReport
     * const abuseReport = await prisma.abuseReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AbuseReportFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AbuseReportFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AbuseReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AbuseReports
     * const abuseReports = await prisma.abuseReport.findMany()
     * 
     * // Get first 10 AbuseReports
     * const abuseReports = await prisma.abuseReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const abuseReportWithIdOnly = await prisma.abuseReport.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AbuseReportFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbuseReportFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AbuseReport.
     * @param {AbuseReportCreateArgs} args - Arguments to create a AbuseReport.
     * @example
     * // Create one AbuseReport
     * const AbuseReport = await prisma.abuseReport.create({
     *   data: {
     *     // ... data to create a AbuseReport
     *   }
     * })
     * 
    **/
    create<T extends AbuseReportCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AbuseReportCreateArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AbuseReports.
     *     @param {AbuseReportCreateManyArgs} args - Arguments to create many AbuseReports.
     *     @example
     *     // Create many AbuseReports
     *     const abuseReport = await prisma.abuseReport.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AbuseReportCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbuseReportCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AbuseReport.
     * @param {AbuseReportDeleteArgs} args - Arguments to delete one AbuseReport.
     * @example
     * // Delete one AbuseReport
     * const AbuseReport = await prisma.abuseReport.delete({
     *   where: {
     *     // ... filter to delete one AbuseReport
     *   }
     * })
     * 
    **/
    delete<T extends AbuseReportDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AbuseReportDeleteArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AbuseReport.
     * @param {AbuseReportUpdateArgs} args - Arguments to update one AbuseReport.
     * @example
     * // Update one AbuseReport
     * const abuseReport = await prisma.abuseReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AbuseReportUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AbuseReportUpdateArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AbuseReports.
     * @param {AbuseReportDeleteManyArgs} args - Arguments to filter AbuseReports to delete.
     * @example
     * // Delete a few AbuseReports
     * const { count } = await prisma.abuseReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AbuseReportDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AbuseReportDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AbuseReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AbuseReports
     * const abuseReport = await prisma.abuseReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AbuseReportUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AbuseReportUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AbuseReport.
     * @param {AbuseReportUpsertArgs} args - Arguments to update or create a AbuseReport.
     * @example
     * // Update or create a AbuseReport
     * const abuseReport = await prisma.abuseReport.upsert({
     *   create: {
     *     // ... data to create a AbuseReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AbuseReport we want to update
     *   }
     * })
    **/
    upsert<T extends AbuseReportUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AbuseReportUpsertArgs<ExtArgs>>
    ): Prisma__AbuseReportClient<$Result.GetResult<Prisma.$AbuseReportPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more AbuseReports that matches the filter.
     * @param {AbuseReportFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const abuseReport = await prisma.abuseReport.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AbuseReportFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a AbuseReport.
     * @param {AbuseReportAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const abuseReport = await prisma.abuseReport.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AbuseReportAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of AbuseReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportCountArgs} args - Arguments to filter AbuseReports to count.
     * @example
     * // Count the number of AbuseReports
     * const count = await prisma.abuseReport.count({
     *   where: {
     *     // ... the filter for the AbuseReports we want to count
     *   }
     * })
    **/
    count<T extends AbuseReportCountArgs>(
      args?: Subset<T, AbuseReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AbuseReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AbuseReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AbuseReportAggregateArgs>(args: Subset<T, AbuseReportAggregateArgs>): Prisma.PrismaPromise<GetAbuseReportAggregateType<T>>

    /**
     * Group by AbuseReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AbuseReportGroupByArgs} args - Group by arguments.
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
      T extends AbuseReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AbuseReportGroupByArgs['orderBy'] }
        : { orderBy?: AbuseReportGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AbuseReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAbuseReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AbuseReport model
   */
  readonly fields: AbuseReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AbuseReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AbuseReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    reporter<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    reportedUser<T extends AbuseReport$reportedUserArgs<ExtArgs> = {}>(args?: Subset<T, AbuseReport$reportedUserArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    reportedPost<T extends AbuseReport$reportedPostArgs<ExtArgs> = {}>(args?: Subset<T, AbuseReport$reportedPostArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AbuseReport model
   */ 
  interface AbuseReportFieldRefs {
    readonly id: FieldRef<"AbuseReport", 'String'>
    readonly createdAt: FieldRef<"AbuseReport", 'DateTime'>
    readonly reporterId: FieldRef<"AbuseReport", 'String'>
    readonly reportedUserId: FieldRef<"AbuseReport", 'String'>
    readonly reportedPostId: FieldRef<"AbuseReport", 'String'>
    readonly reportType: FieldRef<"AbuseReport", 'ReportType'>
    readonly description: FieldRef<"AbuseReport", 'String'>
    readonly status: FieldRef<"AbuseReport", 'ReportStatus'>
  }
    

  // Custom InputTypes

  /**
   * AbuseReport findUnique
   */
  export type AbuseReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * Filter, which AbuseReport to fetch.
     */
    where: AbuseReportWhereUniqueInput
  }


  /**
   * AbuseReport findUniqueOrThrow
   */
  export type AbuseReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * Filter, which AbuseReport to fetch.
     */
    where: AbuseReportWhereUniqueInput
  }


  /**
   * AbuseReport findFirst
   */
  export type AbuseReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * Filter, which AbuseReport to fetch.
     */
    where?: AbuseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbuseReports to fetch.
     */
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbuseReports.
     */
    cursor?: AbuseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbuseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbuseReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbuseReports.
     */
    distinct?: AbuseReportScalarFieldEnum | AbuseReportScalarFieldEnum[]
  }


  /**
   * AbuseReport findFirstOrThrow
   */
  export type AbuseReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * Filter, which AbuseReport to fetch.
     */
    where?: AbuseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbuseReports to fetch.
     */
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AbuseReports.
     */
    cursor?: AbuseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbuseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbuseReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AbuseReports.
     */
    distinct?: AbuseReportScalarFieldEnum | AbuseReportScalarFieldEnum[]
  }


  /**
   * AbuseReport findMany
   */
  export type AbuseReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * Filter, which AbuseReports to fetch.
     */
    where?: AbuseReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AbuseReports to fetch.
     */
    orderBy?: AbuseReportOrderByWithRelationInput | AbuseReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AbuseReports.
     */
    cursor?: AbuseReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AbuseReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AbuseReports.
     */
    skip?: number
    distinct?: AbuseReportScalarFieldEnum | AbuseReportScalarFieldEnum[]
  }


  /**
   * AbuseReport create
   */
  export type AbuseReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * The data needed to create a AbuseReport.
     */
    data: XOR<AbuseReportCreateInput, AbuseReportUncheckedCreateInput>
  }


  /**
   * AbuseReport createMany
   */
  export type AbuseReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AbuseReports.
     */
    data: AbuseReportCreateManyInput | AbuseReportCreateManyInput[]
  }


  /**
   * AbuseReport update
   */
  export type AbuseReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * The data needed to update a AbuseReport.
     */
    data: XOR<AbuseReportUpdateInput, AbuseReportUncheckedUpdateInput>
    /**
     * Choose, which AbuseReport to update.
     */
    where: AbuseReportWhereUniqueInput
  }


  /**
   * AbuseReport updateMany
   */
  export type AbuseReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AbuseReports.
     */
    data: XOR<AbuseReportUpdateManyMutationInput, AbuseReportUncheckedUpdateManyInput>
    /**
     * Filter which AbuseReports to update
     */
    where?: AbuseReportWhereInput
  }


  /**
   * AbuseReport upsert
   */
  export type AbuseReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * The filter to search for the AbuseReport to update in case it exists.
     */
    where: AbuseReportWhereUniqueInput
    /**
     * In case the AbuseReport found by the `where` argument doesn't exist, create a new AbuseReport with this data.
     */
    create: XOR<AbuseReportCreateInput, AbuseReportUncheckedCreateInput>
    /**
     * In case the AbuseReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AbuseReportUpdateInput, AbuseReportUncheckedUpdateInput>
  }


  /**
   * AbuseReport delete
   */
  export type AbuseReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
    /**
     * Filter which AbuseReport to delete.
     */
    where: AbuseReportWhereUniqueInput
  }


  /**
   * AbuseReport deleteMany
   */
  export type AbuseReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AbuseReports to delete
     */
    where?: AbuseReportWhereInput
  }


  /**
   * AbuseReport findRaw
   */
  export type AbuseReportFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AbuseReport aggregateRaw
   */
  export type AbuseReportAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * AbuseReport.reportedUser
   */
  export type AbuseReport$reportedUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }


  /**
   * AbuseReport.reportedPost
   */
  export type AbuseReport$reportedPostArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }


  /**
   * AbuseReport without action
   */
  export type AbuseReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AbuseReport
     */
    select?: AbuseReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AbuseReportInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UsersScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    email: 'email',
    password: 'password',
    username: 'username',
    name: 'name',
    role: 'role'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    published: 'published',
    title: 'title',
    description: 'description',
    content: 'content',
    authorId: 'authorId',
    noOfLikes: 'noOfLikes',
    noOfViews: 'noOfViews'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const ViewsScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    postId: 'postId'
  };

  export type ViewsScalarFieldEnum = (typeof ViewsScalarFieldEnum)[keyof typeof ViewsScalarFieldEnum]


  export const AbuseReportScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    reporterId: 'reporterId',
    reportedUserId: 'reportedUserId',
    reportedPostId: 'reportedPostId',
    reportType: 'reportType',
    description: 'description',
    status: 'status'
  };

  export type AbuseReportScalarFieldEnum = (typeof AbuseReportScalarFieldEnum)[keyof typeof AbuseReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'ReportType'
   */
  export type EnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType'>
    


  /**
   * Reference to a field of type 'ReportType[]'
   */
  export type ListEnumReportTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportType[]'>
    


  /**
   * Reference to a field of type 'ReportStatus'
   */
  export type EnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus'>
    


  /**
   * Reference to a field of type 'ReportStatus[]'
   */
  export type ListEnumReportStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReportStatus[]'>
    


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


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: StringFilter<"users"> | string
    createdAt?: DateTimeFilter<"users"> | Date | string
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    username?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    posts?: PostsListRelationFilter
    likes?: LikesListRelationFilter
    views?: ViewsListRelationFilter
    abuseReport?: AbuseReportListRelationFilter
    abuseReports?: AbuseReportListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
    posts?: postsOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    views?: viewsOrderByRelationAggregateInput
    abuseReport?: AbuseReportOrderByRelationAggregateInput
    abuseReports?: AbuseReportOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    createdAt?: DateTimeFilter<"users"> | Date | string
    password?: StringFilter<"users"> | string
    name?: StringNullableFilter<"users"> | string | null
    role?: EnumRoleFilter<"users"> | $Enums.Role
    posts?: PostsListRelationFilter
    likes?: LikesListRelationFilter
    views?: ViewsListRelationFilter
    abuseReport?: AbuseReportListRelationFilter
    abuseReports?: AbuseReportListRelationFilter
  }, "id" | "email" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"users"> | string
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    username?: StringWithAggregatesFilter<"users"> | string
    name?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumRoleWithAggregatesFilter<"users"> | $Enums.Role
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: StringFilter<"posts"> | string
    createdAt?: DateTimeFilter<"posts"> | Date | string
    updatedAt?: DateTimeFilter<"posts"> | Date | string
    published?: BoolFilter<"posts"> | boolean
    title?: StringFilter<"posts"> | string
    description?: StringNullableFilter<"posts"> | string | null
    content?: StringFilter<"posts"> | string
    authorId?: StringFilter<"posts"> | string
    noOfLikes?: IntFilter<"posts"> | number
    noOfViews?: IntFilter<"posts"> | number
    author?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    likes?: LikesListRelationFilter
    views?: ViewsListRelationFilter
    reportedPosts?: AbuseReportListRelationFilter
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
    author?: usersOrderByWithRelationInput
    likes?: likesOrderByRelationAggregateInput
    views?: viewsOrderByRelationAggregateInput
    reportedPosts?: AbuseReportOrderByRelationAggregateInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    createdAt?: DateTimeFilter<"posts"> | Date | string
    updatedAt?: DateTimeFilter<"posts"> | Date | string
    published?: BoolFilter<"posts"> | boolean
    title?: StringFilter<"posts"> | string
    description?: StringNullableFilter<"posts"> | string | null
    content?: StringFilter<"posts"> | string
    authorId?: StringFilter<"posts"> | string
    noOfLikes?: IntFilter<"posts"> | number
    noOfViews?: IntFilter<"posts"> | number
    author?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    likes?: LikesListRelationFilter
    views?: ViewsListRelationFilter
    reportedPosts?: AbuseReportListRelationFilter
  }, "id">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
    _count?: postsCountOrderByAggregateInput
    _avg?: postsAvgOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
    _sum?: postsSumOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"posts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"posts"> | Date | string
    published?: BoolWithAggregatesFilter<"posts"> | boolean
    title?: StringWithAggregatesFilter<"posts"> | string
    description?: StringNullableWithAggregatesFilter<"posts"> | string | null
    content?: StringWithAggregatesFilter<"posts"> | string
    authorId?: StringWithAggregatesFilter<"posts"> | string
    noOfLikes?: IntWithAggregatesFilter<"posts"> | number
    noOfViews?: IntWithAggregatesFilter<"posts"> | number
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    id?: StringFilter<"likes"> | string
    createdAt?: DateTimeFilter<"likes"> | Date | string
    userId?: StringFilter<"likes"> | string
    postId?: StringFilter<"likes"> | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }

  export type likesOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: usersOrderByWithRelationInput
    post?: postsOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    createdAt?: DateTimeFilter<"likes"> | Date | string
    userId?: StringFilter<"likes"> | string
    postId?: StringFilter<"likes"> | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }, "id">

  export type likesOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: likesCountOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"likes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"likes"> | Date | string
    userId?: StringWithAggregatesFilter<"likes"> | string
    postId?: StringWithAggregatesFilter<"likes"> | string
  }

  export type viewsWhereInput = {
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    id?: StringFilter<"views"> | string
    createdAt?: DateTimeFilter<"views"> | Date | string
    userId?: StringFilter<"views"> | string
    postId?: StringFilter<"views"> | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }

  export type viewsOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    user?: usersOrderByWithRelationInput
    post?: postsOrderByWithRelationInput
  }

  export type viewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: viewsWhereInput | viewsWhereInput[]
    OR?: viewsWhereInput[]
    NOT?: viewsWhereInput | viewsWhereInput[]
    createdAt?: DateTimeFilter<"views"> | Date | string
    userId?: StringFilter<"views"> | string
    postId?: StringFilter<"views"> | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    post?: XOR<PostsRelationFilter, postsWhereInput>
  }, "id">

  export type viewsOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
    _count?: viewsCountOrderByAggregateInput
    _max?: viewsMaxOrderByAggregateInput
    _min?: viewsMinOrderByAggregateInput
  }

  export type viewsScalarWhereWithAggregatesInput = {
    AND?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    OR?: viewsScalarWhereWithAggregatesInput[]
    NOT?: viewsScalarWhereWithAggregatesInput | viewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"views"> | string
    createdAt?: DateTimeWithAggregatesFilter<"views"> | Date | string
    userId?: StringWithAggregatesFilter<"views"> | string
    postId?: StringWithAggregatesFilter<"views"> | string
  }

  export type AbuseReportWhereInput = {
    AND?: AbuseReportWhereInput | AbuseReportWhereInput[]
    OR?: AbuseReportWhereInput[]
    NOT?: AbuseReportWhereInput | AbuseReportWhereInput[]
    id?: StringFilter<"AbuseReport"> | string
    createdAt?: DateTimeFilter<"AbuseReport"> | Date | string
    reporterId?: StringFilter<"AbuseReport"> | string
    reportedUserId?: StringFilter<"AbuseReport"> | string
    reportedPostId?: StringFilter<"AbuseReport"> | string
    reportType?: EnumReportTypeFilter<"AbuseReport"> | $Enums.ReportType
    description?: StringNullableFilter<"AbuseReport"> | string | null
    status?: EnumReportStatusFilter<"AbuseReport"> | $Enums.ReportStatus
    reporter?: XOR<UsersRelationFilter, usersWhereInput>
    reportedUser?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    reportedPost?: XOR<PostsNullableRelationFilter, postsWhereInput> | null
  }

  export type AbuseReportOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reporterId?: SortOrder
    reportedUserId?: SortOrder
    reportedPostId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    status?: SortOrder
    reporter?: usersOrderByWithRelationInput
    reportedUser?: usersOrderByWithRelationInput
    reportedPost?: postsOrderByWithRelationInput
  }

  export type AbuseReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AbuseReportWhereInput | AbuseReportWhereInput[]
    OR?: AbuseReportWhereInput[]
    NOT?: AbuseReportWhereInput | AbuseReportWhereInput[]
    createdAt?: DateTimeFilter<"AbuseReport"> | Date | string
    reporterId?: StringFilter<"AbuseReport"> | string
    reportedUserId?: StringFilter<"AbuseReport"> | string
    reportedPostId?: StringFilter<"AbuseReport"> | string
    reportType?: EnumReportTypeFilter<"AbuseReport"> | $Enums.ReportType
    description?: StringNullableFilter<"AbuseReport"> | string | null
    status?: EnumReportStatusFilter<"AbuseReport"> | $Enums.ReportStatus
    reporter?: XOR<UsersRelationFilter, usersWhereInput>
    reportedUser?: XOR<UsersNullableRelationFilter, usersWhereInput> | null
    reportedPost?: XOR<PostsNullableRelationFilter, postsWhereInput> | null
  }, "id">

  export type AbuseReportOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reporterId?: SortOrder
    reportedUserId?: SortOrder
    reportedPostId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    status?: SortOrder
    _count?: AbuseReportCountOrderByAggregateInput
    _max?: AbuseReportMaxOrderByAggregateInput
    _min?: AbuseReportMinOrderByAggregateInput
  }

  export type AbuseReportScalarWhereWithAggregatesInput = {
    AND?: AbuseReportScalarWhereWithAggregatesInput | AbuseReportScalarWhereWithAggregatesInput[]
    OR?: AbuseReportScalarWhereWithAggregatesInput[]
    NOT?: AbuseReportScalarWhereWithAggregatesInput | AbuseReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AbuseReport"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AbuseReport"> | Date | string
    reporterId?: StringWithAggregatesFilter<"AbuseReport"> | string
    reportedUserId?: StringWithAggregatesFilter<"AbuseReport"> | string
    reportedPostId?: StringWithAggregatesFilter<"AbuseReport"> | string
    reportType?: EnumReportTypeWithAggregatesFilter<"AbuseReport"> | $Enums.ReportType
    description?: StringNullableWithAggregatesFilter<"AbuseReport"> | string | null
    status?: EnumReportStatusWithAggregatesFilter<"AbuseReport"> | $Enums.ReportStatus
  }

  export type usersCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsCreateNestedManyWithoutAuthorInput
    likes?: likesCreateNestedManyWithoutUserInput
    views?: viewsCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportCreateNestedManyWithoutReportedUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
    views?: viewsUncheckedCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportUncheckedCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportUncheckedCreateNestedManyWithoutReportedUserInput
  }

  export type usersUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUpdateManyWithoutAuthorNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
    views?: viewsUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUpdateManyWithoutReportedUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
    views?: viewsUncheckedUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUncheckedUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUncheckedUpdateManyWithoutReportedUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
  }

  export type usersUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type usersUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
  }

  export type postsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
    author?: usersCreateNestedOneWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostInput
    views?: viewsCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportCreateNestedManyWithoutReportedPostInput
  }

  export type postsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    authorId: string
    noOfLikes?: number
    noOfViews?: number
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    views?: viewsUncheckedCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportUncheckedCreateNestedManyWithoutReportedPostInput
  }

  export type postsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    author?: usersUpdateOneWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    views?: viewsUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUpdateManyWithoutReportedPostNestedInput
  }

  export type postsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    views?: viewsUncheckedUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUncheckedUpdateManyWithoutReportedPostNestedInput
  }

  export type postsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    authorId: string
    noOfLikes?: number
    noOfViews?: number
  }

  export type postsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
  }

  export type postsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
  }

  export type likesCreateInput = {
    id?: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutLikesInput
    post: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type likesUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLikesNestedInput
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type likesCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type likesUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type likesUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type viewsCreateInput = {
    id?: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutViewsInput
    post: postsCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type viewsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutViewsNestedInput
    post?: postsUpdateOneRequiredWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type viewsCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    postId: string
  }

  export type viewsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type viewsUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type AbuseReportCreateInput = {
    id?: string
    createdAt?: Date | string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
    reporter: usersCreateNestedOneWithoutAbuseReportInput
    reportedUser?: usersCreateNestedOneWithoutAbuseReportsInput
    reportedPost?: postsCreateNestedOneWithoutReportedPostsInput
  }

  export type AbuseReportUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    reporterId: string
    reportedUserId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type AbuseReportUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reporter?: usersUpdateOneRequiredWithoutAbuseReportNestedInput
    reportedUser?: usersUpdateOneWithoutAbuseReportsNestedInput
    reportedPost?: postsUpdateOneWithoutReportedPostsNestedInput
  }

  export type AbuseReportUncheckedUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedUserId?: StringFieldUpdateOperationsInput | string
    reportedPostId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type AbuseReportCreateManyInput = {
    id?: string
    createdAt?: Date | string
    reporterId: string
    reportedUserId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type AbuseReportUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type AbuseReportUncheckedUpdateManyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedUserId?: StringFieldUpdateOperationsInput | string
    reportedPostId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
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
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type ViewsListRelationFilter = {
    every?: viewsWhereInput
    some?: viewsWhereInput
    none?: viewsWhereInput
  }

  export type AbuseReportListRelationFilter = {
    every?: AbuseReportWhereInput
    some?: AbuseReportWhereInput
    none?: AbuseReportWhereInput
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type viewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AbuseReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    name?: SortOrder
    role?: SortOrder
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
    isSet?: boolean
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UsersNullableRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
  }

  export type postsAvgOrderByAggregateInput = {
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    published?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    authorId?: SortOrder
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
  }

  export type postsSumOrderByAggregateInput = {
    noOfLikes?: SortOrder
    noOfViews?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type PostsRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type likesCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type viewsCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type viewsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type viewsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    postId?: SortOrder
  }

  export type EnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type EnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type PostsNullableRelationFilter = {
    is?: postsWhereInput | null
    isNot?: postsWhereInput | null
  }

  export type AbuseReportCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reporterId?: SortOrder
    reportedUserId?: SortOrder
    reportedPostId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type AbuseReportMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reporterId?: SortOrder
    reportedUserId?: SortOrder
    reportedPostId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type AbuseReportMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    reporterId?: SortOrder
    reportedUserId?: SortOrder
    reportedPostId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type EnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type EnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type postsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutUserInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type viewsCreateNestedManyWithoutUserInput = {
    create?: XOR<viewsCreateWithoutUserInput, viewsUncheckedCreateWithoutUserInput> | viewsCreateWithoutUserInput[] | viewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUserInput | viewsCreateOrConnectWithoutUserInput[]
    createMany?: viewsCreateManyUserInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type AbuseReportCreateNestedManyWithoutReporterInput = {
    create?: XOR<AbuseReportCreateWithoutReporterInput, AbuseReportUncheckedCreateWithoutReporterInput> | AbuseReportCreateWithoutReporterInput[] | AbuseReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReporterInput | AbuseReportCreateOrConnectWithoutReporterInput[]
    createMany?: AbuseReportCreateManyReporterInputEnvelope
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
  }

  export type AbuseReportCreateNestedManyWithoutReportedUserInput = {
    create?: XOR<AbuseReportCreateWithoutReportedUserInput, AbuseReportUncheckedCreateWithoutReportedUserInput> | AbuseReportCreateWithoutReportedUserInput[] | AbuseReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedUserInput | AbuseReportCreateOrConnectWithoutReportedUserInput[]
    createMany?: AbuseReportCreateManyReportedUserInputEnvelope
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type viewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<viewsCreateWithoutUserInput, viewsUncheckedCreateWithoutUserInput> | viewsCreateWithoutUserInput[] | viewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUserInput | viewsCreateOrConnectWithoutUserInput[]
    createMany?: viewsCreateManyUserInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type AbuseReportUncheckedCreateNestedManyWithoutReporterInput = {
    create?: XOR<AbuseReportCreateWithoutReporterInput, AbuseReportUncheckedCreateWithoutReporterInput> | AbuseReportCreateWithoutReporterInput[] | AbuseReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReporterInput | AbuseReportCreateOrConnectWithoutReporterInput[]
    createMany?: AbuseReportCreateManyReporterInputEnvelope
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
  }

  export type AbuseReportUncheckedCreateNestedManyWithoutReportedUserInput = {
    create?: XOR<AbuseReportCreateWithoutReportedUserInput, AbuseReportUncheckedCreateWithoutReportedUserInput> | AbuseReportCreateWithoutReportedUserInput[] | AbuseReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedUserInput | AbuseReportCreateOrConnectWithoutReportedUserInput[]
    createMany?: AbuseReportCreateManyReportedUserInputEnvelope
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type postsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutAuthorInput | postsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutAuthorInput | postsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: postsUpdateManyWithWhereWithoutAuthorInput | postsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type likesUpdateManyWithoutUserNestedInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUserInput | likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUserInput | likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUserInput | likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type viewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<viewsCreateWithoutUserInput, viewsUncheckedCreateWithoutUserInput> | viewsCreateWithoutUserInput[] | viewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUserInput | viewsCreateOrConnectWithoutUserInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutUserInput | viewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: viewsCreateManyUserInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutUserInput | viewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutUserInput | viewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type AbuseReportUpdateManyWithoutReporterNestedInput = {
    create?: XOR<AbuseReportCreateWithoutReporterInput, AbuseReportUncheckedCreateWithoutReporterInput> | AbuseReportCreateWithoutReporterInput[] | AbuseReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReporterInput | AbuseReportCreateOrConnectWithoutReporterInput[]
    upsert?: AbuseReportUpsertWithWhereUniqueWithoutReporterInput | AbuseReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: AbuseReportCreateManyReporterInputEnvelope
    set?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    disconnect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    delete?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    update?: AbuseReportUpdateWithWhereUniqueWithoutReporterInput | AbuseReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: AbuseReportUpdateManyWithWhereWithoutReporterInput | AbuseReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
  }

  export type AbuseReportUpdateManyWithoutReportedUserNestedInput = {
    create?: XOR<AbuseReportCreateWithoutReportedUserInput, AbuseReportUncheckedCreateWithoutReportedUserInput> | AbuseReportCreateWithoutReportedUserInput[] | AbuseReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedUserInput | AbuseReportCreateOrConnectWithoutReportedUserInput[]
    upsert?: AbuseReportUpsertWithWhereUniqueWithoutReportedUserInput | AbuseReportUpsertWithWhereUniqueWithoutReportedUserInput[]
    createMany?: AbuseReportCreateManyReportedUserInputEnvelope
    set?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    disconnect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    delete?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    update?: AbuseReportUpdateWithWhereUniqueWithoutReportedUserInput | AbuseReportUpdateWithWhereUniqueWithoutReportedUserInput[]
    updateMany?: AbuseReportUpdateManyWithWhereWithoutReportedUserInput | AbuseReportUpdateManyWithWhereWithoutReportedUserInput[]
    deleteMany?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput> | postsCreateWithoutAuthorInput[] | postsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutAuthorInput | postsCreateOrConnectWithoutAuthorInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutAuthorInput | postsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: postsCreateManyAuthorInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutAuthorInput | postsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: postsUpdateManyWithWhereWithoutAuthorInput | postsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput> | likesCreateWithoutUserInput[] | likesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUserInput | likesCreateOrConnectWithoutUserInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUserInput | likesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: likesCreateManyUserInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUserInput | likesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUserInput | likesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type viewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<viewsCreateWithoutUserInput, viewsUncheckedCreateWithoutUserInput> | viewsCreateWithoutUserInput[] | viewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutUserInput | viewsCreateOrConnectWithoutUserInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutUserInput | viewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: viewsCreateManyUserInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutUserInput | viewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutUserInput | viewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type AbuseReportUncheckedUpdateManyWithoutReporterNestedInput = {
    create?: XOR<AbuseReportCreateWithoutReporterInput, AbuseReportUncheckedCreateWithoutReporterInput> | AbuseReportCreateWithoutReporterInput[] | AbuseReportUncheckedCreateWithoutReporterInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReporterInput | AbuseReportCreateOrConnectWithoutReporterInput[]
    upsert?: AbuseReportUpsertWithWhereUniqueWithoutReporterInput | AbuseReportUpsertWithWhereUniqueWithoutReporterInput[]
    createMany?: AbuseReportCreateManyReporterInputEnvelope
    set?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    disconnect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    delete?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    update?: AbuseReportUpdateWithWhereUniqueWithoutReporterInput | AbuseReportUpdateWithWhereUniqueWithoutReporterInput[]
    updateMany?: AbuseReportUpdateManyWithWhereWithoutReporterInput | AbuseReportUpdateManyWithWhereWithoutReporterInput[]
    deleteMany?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
  }

  export type AbuseReportUncheckedUpdateManyWithoutReportedUserNestedInput = {
    create?: XOR<AbuseReportCreateWithoutReportedUserInput, AbuseReportUncheckedCreateWithoutReportedUserInput> | AbuseReportCreateWithoutReportedUserInput[] | AbuseReportUncheckedCreateWithoutReportedUserInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedUserInput | AbuseReportCreateOrConnectWithoutReportedUserInput[]
    upsert?: AbuseReportUpsertWithWhereUniqueWithoutReportedUserInput | AbuseReportUpsertWithWhereUniqueWithoutReportedUserInput[]
    createMany?: AbuseReportCreateManyReportedUserInputEnvelope
    set?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    disconnect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    delete?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    update?: AbuseReportUpdateWithWhereUniqueWithoutReportedUserInput | AbuseReportUpdateWithWhereUniqueWithoutReportedUserInput[]
    updateMany?: AbuseReportUpdateManyWithWhereWithoutReportedUserInput | AbuseReportUpdateManyWithWhereWithoutReportedUserInput[]
    deleteMany?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type likesCreateNestedManyWithoutPostInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type viewsCreateNestedManyWithoutPostInput = {
    create?: XOR<viewsCreateWithoutPostInput, viewsUncheckedCreateWithoutPostInput> | viewsCreateWithoutPostInput[] | viewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutPostInput | viewsCreateOrConnectWithoutPostInput[]
    createMany?: viewsCreateManyPostInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type AbuseReportCreateNestedManyWithoutReportedPostInput = {
    create?: XOR<AbuseReportCreateWithoutReportedPostInput, AbuseReportUncheckedCreateWithoutReportedPostInput> | AbuseReportCreateWithoutReportedPostInput[] | AbuseReportUncheckedCreateWithoutReportedPostInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedPostInput | AbuseReportCreateOrConnectWithoutReportedPostInput[]
    createMany?: AbuseReportCreateManyReportedPostInputEnvelope
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type viewsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<viewsCreateWithoutPostInput, viewsUncheckedCreateWithoutPostInput> | viewsCreateWithoutPostInput[] | viewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutPostInput | viewsCreateOrConnectWithoutPostInput[]
    createMany?: viewsCreateManyPostInputEnvelope
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
  }

  export type AbuseReportUncheckedCreateNestedManyWithoutReportedPostInput = {
    create?: XOR<AbuseReportCreateWithoutReportedPostInput, AbuseReportUncheckedCreateWithoutReportedPostInput> | AbuseReportCreateWithoutReportedPostInput[] | AbuseReportUncheckedCreateWithoutReportedPostInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedPostInput | AbuseReportCreateOrConnectWithoutReportedPostInput[]
    createMany?: AbuseReportCreateManyReportedPostInputEnvelope
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    disconnect?: boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type likesUpdateManyWithoutPostNestedInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostInput | likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostInput | likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostInput | likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type viewsUpdateManyWithoutPostNestedInput = {
    create?: XOR<viewsCreateWithoutPostInput, viewsUncheckedCreateWithoutPostInput> | viewsCreateWithoutPostInput[] | viewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutPostInput | viewsCreateOrConnectWithoutPostInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutPostInput | viewsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: viewsCreateManyPostInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutPostInput | viewsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutPostInput | viewsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type AbuseReportUpdateManyWithoutReportedPostNestedInput = {
    create?: XOR<AbuseReportCreateWithoutReportedPostInput, AbuseReportUncheckedCreateWithoutReportedPostInput> | AbuseReportCreateWithoutReportedPostInput[] | AbuseReportUncheckedCreateWithoutReportedPostInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedPostInput | AbuseReportCreateOrConnectWithoutReportedPostInput[]
    upsert?: AbuseReportUpsertWithWhereUniqueWithoutReportedPostInput | AbuseReportUpsertWithWhereUniqueWithoutReportedPostInput[]
    createMany?: AbuseReportCreateManyReportedPostInputEnvelope
    set?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    disconnect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    delete?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    update?: AbuseReportUpdateWithWhereUniqueWithoutReportedPostInput | AbuseReportUpdateWithWhereUniqueWithoutReportedPostInput[]
    updateMany?: AbuseReportUpdateManyWithWhereWithoutReportedPostInput | AbuseReportUpdateManyWithWhereWithoutReportedPostInput[]
    deleteMany?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput> | likesCreateWithoutPostInput[] | likesUncheckedCreateWithoutPostInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostInput | likesCreateOrConnectWithoutPostInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostInput | likesUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: likesCreateManyPostInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostInput | likesUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostInput | likesUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type viewsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<viewsCreateWithoutPostInput, viewsUncheckedCreateWithoutPostInput> | viewsCreateWithoutPostInput[] | viewsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: viewsCreateOrConnectWithoutPostInput | viewsCreateOrConnectWithoutPostInput[]
    upsert?: viewsUpsertWithWhereUniqueWithoutPostInput | viewsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: viewsCreateManyPostInputEnvelope
    set?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    disconnect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    delete?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    connect?: viewsWhereUniqueInput | viewsWhereUniqueInput[]
    update?: viewsUpdateWithWhereUniqueWithoutPostInput | viewsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: viewsUpdateManyWithWhereWithoutPostInput | viewsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: viewsScalarWhereInput | viewsScalarWhereInput[]
  }

  export type AbuseReportUncheckedUpdateManyWithoutReportedPostNestedInput = {
    create?: XOR<AbuseReportCreateWithoutReportedPostInput, AbuseReportUncheckedCreateWithoutReportedPostInput> | AbuseReportCreateWithoutReportedPostInput[] | AbuseReportUncheckedCreateWithoutReportedPostInput[]
    connectOrCreate?: AbuseReportCreateOrConnectWithoutReportedPostInput | AbuseReportCreateOrConnectWithoutReportedPostInput[]
    upsert?: AbuseReportUpsertWithWhereUniqueWithoutReportedPostInput | AbuseReportUpsertWithWhereUniqueWithoutReportedPostInput[]
    createMany?: AbuseReportCreateManyReportedPostInputEnvelope
    set?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    disconnect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    delete?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    connect?: AbuseReportWhereUniqueInput | AbuseReportWhereUniqueInput[]
    update?: AbuseReportUpdateWithWhereUniqueWithoutReportedPostInput | AbuseReportUpdateWithWhereUniqueWithoutReportedPostInput[]
    updateMany?: AbuseReportUpdateManyWithWhereWithoutReportedPostInput | AbuseReportUpdateManyWithWhereWithoutReportedPostInput[]
    deleteMany?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutLikesInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    connect?: postsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    upsert?: usersUpsertWithoutLikesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLikesInput, usersUpdateWithoutLikesInput>, usersUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateOneRequiredWithoutLikesNestedInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    upsert?: postsUpsertWithoutLikesInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutLikesInput, postsUpdateWithoutLikesInput>, postsUncheckedUpdateWithoutLikesInput>
  }

  export type usersCreateNestedOneWithoutViewsInput = {
    create?: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutViewsInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutViewsInput = {
    create?: XOR<postsCreateWithoutViewsInput, postsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: postsCreateOrConnectWithoutViewsInput
    connect?: postsWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutViewsInput
    upsert?: usersUpsertWithoutViewsInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutViewsInput, usersUpdateWithoutViewsInput>, usersUncheckedUpdateWithoutViewsInput>
  }

  export type postsUpdateOneRequiredWithoutViewsNestedInput = {
    create?: XOR<postsCreateWithoutViewsInput, postsUncheckedCreateWithoutViewsInput>
    connectOrCreate?: postsCreateOrConnectWithoutViewsInput
    upsert?: postsUpsertWithoutViewsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutViewsInput, postsUpdateWithoutViewsInput>, postsUncheckedUpdateWithoutViewsInput>
  }

  export type usersCreateNestedOneWithoutAbuseReportInput = {
    create?: XOR<usersCreateWithoutAbuseReportInput, usersUncheckedCreateWithoutAbuseReportInput>
    connectOrCreate?: usersCreateOrConnectWithoutAbuseReportInput
    connect?: usersWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutAbuseReportsInput = {
    create?: XOR<usersCreateWithoutAbuseReportsInput, usersUncheckedCreateWithoutAbuseReportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAbuseReportsInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutReportedPostsInput = {
    create?: XOR<postsCreateWithoutReportedPostsInput, postsUncheckedCreateWithoutReportedPostsInput>
    connectOrCreate?: postsCreateOrConnectWithoutReportedPostsInput
    connect?: postsWhereUniqueInput
  }

  export type EnumReportTypeFieldUpdateOperationsInput = {
    set?: $Enums.ReportType
  }

  export type EnumReportStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReportStatus
  }

  export type usersUpdateOneRequiredWithoutAbuseReportNestedInput = {
    create?: XOR<usersCreateWithoutAbuseReportInput, usersUncheckedCreateWithoutAbuseReportInput>
    connectOrCreate?: usersCreateOrConnectWithoutAbuseReportInput
    upsert?: usersUpsertWithoutAbuseReportInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAbuseReportInput, usersUpdateWithoutAbuseReportInput>, usersUncheckedUpdateWithoutAbuseReportInput>
  }

  export type usersUpdateOneWithoutAbuseReportsNestedInput = {
    create?: XOR<usersCreateWithoutAbuseReportsInput, usersUncheckedCreateWithoutAbuseReportsInput>
    connectOrCreate?: usersCreateOrConnectWithoutAbuseReportsInput
    upsert?: usersUpsertWithoutAbuseReportsInput
    disconnect?: boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAbuseReportsInput, usersUpdateWithoutAbuseReportsInput>, usersUncheckedUpdateWithoutAbuseReportsInput>
  }

  export type postsUpdateOneWithoutReportedPostsNestedInput = {
    create?: XOR<postsCreateWithoutReportedPostsInput, postsUncheckedCreateWithoutReportedPostsInput>
    connectOrCreate?: postsCreateOrConnectWithoutReportedPostsInput
    upsert?: postsUpsertWithoutReportedPostsInput
    disconnect?: boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutReportedPostsInput, postsUpdateWithoutReportedPostsInput>, postsUncheckedUpdateWithoutReportedPostsInput>
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
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumReportTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeFilter<$PrismaModel> | $Enums.ReportType
  }

  export type NestedEnumReportStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusFilter<$PrismaModel> | $Enums.ReportStatus
  }

  export type NestedEnumReportTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportType | EnumReportTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportType[] | ListEnumReportTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumReportTypeWithAggregatesFilter<$PrismaModel> | $Enums.ReportType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportTypeFilter<$PrismaModel>
    _max?: NestedEnumReportTypeFilter<$PrismaModel>
  }

  export type NestedEnumReportStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReportStatus | EnumReportStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ReportStatus[] | ListEnumReportStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumReportStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReportStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReportStatusFilter<$PrismaModel>
    _max?: NestedEnumReportStatusFilter<$PrismaModel>
  }

  export type postsCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
    likes?: likesCreateNestedManyWithoutPostInput
    views?: viewsCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportCreateNestedManyWithoutReportedPostInput
  }

  export type postsUncheckedCreateWithoutAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    views?: viewsUncheckedCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportUncheckedCreateNestedManyWithoutReportedPostInput
  }

  export type postsCreateOrConnectWithoutAuthorInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput>
  }

  export type postsCreateManyAuthorInputEnvelope = {
    data: postsCreateManyAuthorInput | postsCreateManyAuthorInput[]
  }

  export type likesCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    postId: string
  }

  export type likesCreateOrConnectWithoutUserInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput>
  }

  export type likesCreateManyUserInputEnvelope = {
    data: likesCreateManyUserInput | likesCreateManyUserInput[]
  }

  export type viewsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    post: postsCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    postId: string
  }

  export type viewsCreateOrConnectWithoutUserInput = {
    where: viewsWhereUniqueInput
    create: XOR<viewsCreateWithoutUserInput, viewsUncheckedCreateWithoutUserInput>
  }

  export type viewsCreateManyUserInputEnvelope = {
    data: viewsCreateManyUserInput | viewsCreateManyUserInput[]
  }

  export type AbuseReportCreateWithoutReporterInput = {
    id?: string
    createdAt?: Date | string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
    reportedUser?: usersCreateNestedOneWithoutAbuseReportsInput
    reportedPost?: postsCreateNestedOneWithoutReportedPostsInput
  }

  export type AbuseReportUncheckedCreateWithoutReporterInput = {
    id?: string
    createdAt?: Date | string
    reportedUserId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type AbuseReportCreateOrConnectWithoutReporterInput = {
    where: AbuseReportWhereUniqueInput
    create: XOR<AbuseReportCreateWithoutReporterInput, AbuseReportUncheckedCreateWithoutReporterInput>
  }

  export type AbuseReportCreateManyReporterInputEnvelope = {
    data: AbuseReportCreateManyReporterInput | AbuseReportCreateManyReporterInput[]
  }

  export type AbuseReportCreateWithoutReportedUserInput = {
    id?: string
    createdAt?: Date | string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
    reporter: usersCreateNestedOneWithoutAbuseReportInput
    reportedPost?: postsCreateNestedOneWithoutReportedPostsInput
  }

  export type AbuseReportUncheckedCreateWithoutReportedUserInput = {
    id?: string
    createdAt?: Date | string
    reporterId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type AbuseReportCreateOrConnectWithoutReportedUserInput = {
    where: AbuseReportWhereUniqueInput
    create: XOR<AbuseReportCreateWithoutReportedUserInput, AbuseReportUncheckedCreateWithoutReportedUserInput>
  }

  export type AbuseReportCreateManyReportedUserInputEnvelope = {
    data: AbuseReportCreateManyReportedUserInput | AbuseReportCreateManyReportedUserInput[]
  }

  export type postsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutAuthorInput, postsUncheckedUpdateWithoutAuthorInput>
    create: XOR<postsCreateWithoutAuthorInput, postsUncheckedCreateWithoutAuthorInput>
  }

  export type postsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutAuthorInput, postsUncheckedUpdateWithoutAuthorInput>
  }

  export type postsUpdateManyWithWhereWithoutAuthorInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: StringFilter<"posts"> | string
    createdAt?: DateTimeFilter<"posts"> | Date | string
    updatedAt?: DateTimeFilter<"posts"> | Date | string
    published?: BoolFilter<"posts"> | boolean
    title?: StringFilter<"posts"> | string
    description?: StringNullableFilter<"posts"> | string | null
    content?: StringFilter<"posts"> | string
    authorId?: StringFilter<"posts"> | string
    noOfLikes?: IntFilter<"posts"> | number
    noOfViews?: IntFilter<"posts"> | number
  }

  export type likesUpsertWithWhereUniqueWithoutUserInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutUserInput, likesUncheckedUpdateWithoutUserInput>
    create: XOR<likesCreateWithoutUserInput, likesUncheckedCreateWithoutUserInput>
  }

  export type likesUpdateWithWhereUniqueWithoutUserInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutUserInput, likesUncheckedUpdateWithoutUserInput>
  }

  export type likesUpdateManyWithWhereWithoutUserInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutUserInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    id?: StringFilter<"likes"> | string
    createdAt?: DateTimeFilter<"likes"> | Date | string
    userId?: StringFilter<"likes"> | string
    postId?: StringFilter<"likes"> | string
  }

  export type viewsUpsertWithWhereUniqueWithoutUserInput = {
    where: viewsWhereUniqueInput
    update: XOR<viewsUpdateWithoutUserInput, viewsUncheckedUpdateWithoutUserInput>
    create: XOR<viewsCreateWithoutUserInput, viewsUncheckedCreateWithoutUserInput>
  }

  export type viewsUpdateWithWhereUniqueWithoutUserInput = {
    where: viewsWhereUniqueInput
    data: XOR<viewsUpdateWithoutUserInput, viewsUncheckedUpdateWithoutUserInput>
  }

  export type viewsUpdateManyWithWhereWithoutUserInput = {
    where: viewsScalarWhereInput
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyWithoutUserInput>
  }

  export type viewsScalarWhereInput = {
    AND?: viewsScalarWhereInput | viewsScalarWhereInput[]
    OR?: viewsScalarWhereInput[]
    NOT?: viewsScalarWhereInput | viewsScalarWhereInput[]
    id?: StringFilter<"views"> | string
    createdAt?: DateTimeFilter<"views"> | Date | string
    userId?: StringFilter<"views"> | string
    postId?: StringFilter<"views"> | string
  }

  export type AbuseReportUpsertWithWhereUniqueWithoutReporterInput = {
    where: AbuseReportWhereUniqueInput
    update: XOR<AbuseReportUpdateWithoutReporterInput, AbuseReportUncheckedUpdateWithoutReporterInput>
    create: XOR<AbuseReportCreateWithoutReporterInput, AbuseReportUncheckedCreateWithoutReporterInput>
  }

  export type AbuseReportUpdateWithWhereUniqueWithoutReporterInput = {
    where: AbuseReportWhereUniqueInput
    data: XOR<AbuseReportUpdateWithoutReporterInput, AbuseReportUncheckedUpdateWithoutReporterInput>
  }

  export type AbuseReportUpdateManyWithWhereWithoutReporterInput = {
    where: AbuseReportScalarWhereInput
    data: XOR<AbuseReportUpdateManyMutationInput, AbuseReportUncheckedUpdateManyWithoutReporterInput>
  }

  export type AbuseReportScalarWhereInput = {
    AND?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
    OR?: AbuseReportScalarWhereInput[]
    NOT?: AbuseReportScalarWhereInput | AbuseReportScalarWhereInput[]
    id?: StringFilter<"AbuseReport"> | string
    createdAt?: DateTimeFilter<"AbuseReport"> | Date | string
    reporterId?: StringFilter<"AbuseReport"> | string
    reportedUserId?: StringFilter<"AbuseReport"> | string
    reportedPostId?: StringFilter<"AbuseReport"> | string
    reportType?: EnumReportTypeFilter<"AbuseReport"> | $Enums.ReportType
    description?: StringNullableFilter<"AbuseReport"> | string | null
    status?: EnumReportStatusFilter<"AbuseReport"> | $Enums.ReportStatus
  }

  export type AbuseReportUpsertWithWhereUniqueWithoutReportedUserInput = {
    where: AbuseReportWhereUniqueInput
    update: XOR<AbuseReportUpdateWithoutReportedUserInput, AbuseReportUncheckedUpdateWithoutReportedUserInput>
    create: XOR<AbuseReportCreateWithoutReportedUserInput, AbuseReportUncheckedCreateWithoutReportedUserInput>
  }

  export type AbuseReportUpdateWithWhereUniqueWithoutReportedUserInput = {
    where: AbuseReportWhereUniqueInput
    data: XOR<AbuseReportUpdateWithoutReportedUserInput, AbuseReportUncheckedUpdateWithoutReportedUserInput>
  }

  export type AbuseReportUpdateManyWithWhereWithoutReportedUserInput = {
    where: AbuseReportScalarWhereInput
    data: XOR<AbuseReportUpdateManyMutationInput, AbuseReportUncheckedUpdateManyWithoutReportedUserInput>
  }

  export type usersCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    likes?: likesCreateNestedManyWithoutUserInput
    views?: viewsCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportCreateNestedManyWithoutReportedUserInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
    views?: viewsUncheckedCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportUncheckedCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportUncheckedCreateNestedManyWithoutReportedUserInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type likesCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type likesCreateOrConnectWithoutPostInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput>
  }

  export type likesCreateManyPostInputEnvelope = {
    data: likesCreateManyPostInput | likesCreateManyPostInput[]
  }

  export type viewsCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutViewsInput
  }

  export type viewsUncheckedCreateWithoutPostInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type viewsCreateOrConnectWithoutPostInput = {
    where: viewsWhereUniqueInput
    create: XOR<viewsCreateWithoutPostInput, viewsUncheckedCreateWithoutPostInput>
  }

  export type viewsCreateManyPostInputEnvelope = {
    data: viewsCreateManyPostInput | viewsCreateManyPostInput[]
  }

  export type AbuseReportCreateWithoutReportedPostInput = {
    id?: string
    createdAt?: Date | string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
    reporter: usersCreateNestedOneWithoutAbuseReportInput
    reportedUser?: usersCreateNestedOneWithoutAbuseReportsInput
  }

  export type AbuseReportUncheckedCreateWithoutReportedPostInput = {
    id?: string
    createdAt?: Date | string
    reporterId: string
    reportedUserId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type AbuseReportCreateOrConnectWithoutReportedPostInput = {
    where: AbuseReportWhereUniqueInput
    create: XOR<AbuseReportCreateWithoutReportedPostInput, AbuseReportUncheckedCreateWithoutReportedPostInput>
  }

  export type AbuseReportCreateManyReportedPostInputEnvelope = {
    data: AbuseReportCreateManyReportedPostInput | AbuseReportCreateManyReportedPostInput[]
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    likes?: likesUpdateManyWithoutUserNestedInput
    views?: viewsUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUpdateManyWithoutReportedUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
    views?: viewsUncheckedUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUncheckedUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUncheckedUpdateManyWithoutReportedUserNestedInput
  }

  export type likesUpsertWithWhereUniqueWithoutPostInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutPostInput, likesUncheckedUpdateWithoutPostInput>
    create: XOR<likesCreateWithoutPostInput, likesUncheckedCreateWithoutPostInput>
  }

  export type likesUpdateWithWhereUniqueWithoutPostInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutPostInput, likesUncheckedUpdateWithoutPostInput>
  }

  export type likesUpdateManyWithWhereWithoutPostInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutPostInput>
  }

  export type viewsUpsertWithWhereUniqueWithoutPostInput = {
    where: viewsWhereUniqueInput
    update: XOR<viewsUpdateWithoutPostInput, viewsUncheckedUpdateWithoutPostInput>
    create: XOR<viewsCreateWithoutPostInput, viewsUncheckedCreateWithoutPostInput>
  }

  export type viewsUpdateWithWhereUniqueWithoutPostInput = {
    where: viewsWhereUniqueInput
    data: XOR<viewsUpdateWithoutPostInput, viewsUncheckedUpdateWithoutPostInput>
  }

  export type viewsUpdateManyWithWhereWithoutPostInput = {
    where: viewsScalarWhereInput
    data: XOR<viewsUpdateManyMutationInput, viewsUncheckedUpdateManyWithoutPostInput>
  }

  export type AbuseReportUpsertWithWhereUniqueWithoutReportedPostInput = {
    where: AbuseReportWhereUniqueInput
    update: XOR<AbuseReportUpdateWithoutReportedPostInput, AbuseReportUncheckedUpdateWithoutReportedPostInput>
    create: XOR<AbuseReportCreateWithoutReportedPostInput, AbuseReportUncheckedCreateWithoutReportedPostInput>
  }

  export type AbuseReportUpdateWithWhereUniqueWithoutReportedPostInput = {
    where: AbuseReportWhereUniqueInput
    data: XOR<AbuseReportUpdateWithoutReportedPostInput, AbuseReportUncheckedUpdateWithoutReportedPostInput>
  }

  export type AbuseReportUpdateManyWithWhereWithoutReportedPostInput = {
    where: AbuseReportScalarWhereInput
    data: XOR<AbuseReportUpdateManyMutationInput, AbuseReportUncheckedUpdateManyWithoutReportedPostInput>
  }

  export type usersCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsCreateNestedManyWithoutAuthorInput
    views?: viewsCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportCreateNestedManyWithoutReportedUserInput
  }

  export type usersUncheckedCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    views?: viewsUncheckedCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportUncheckedCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportUncheckedCreateNestedManyWithoutReportedUserInput
  }

  export type usersCreateOrConnectWithoutLikesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
  }

  export type postsCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
    author?: usersCreateNestedOneWithoutPostsInput
    views?: viewsCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportCreateNestedManyWithoutReportedPostInput
  }

  export type postsUncheckedCreateWithoutLikesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    authorId: string
    noOfLikes?: number
    noOfViews?: number
    views?: viewsUncheckedCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportUncheckedCreateNestedManyWithoutReportedPostInput
  }

  export type postsCreateOrConnectWithoutLikesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
  }

  export type usersUpsertWithoutLikesInput = {
    update: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateWithoutLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUpdateManyWithoutAuthorNestedInput
    views?: viewsUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUpdateManyWithoutReportedUserNestedInput
  }

  export type usersUncheckedUpdateWithoutLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    views?: viewsUncheckedUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUncheckedUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUncheckedUpdateManyWithoutReportedUserNestedInput
  }

  export type postsUpsertWithoutLikesInput = {
    update: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutLikesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateWithoutLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    author?: usersUpdateOneWithoutPostsNestedInput
    views?: viewsUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUpdateManyWithoutReportedPostNestedInput
  }

  export type postsUncheckedUpdateWithoutLikesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    views?: viewsUncheckedUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUncheckedUpdateManyWithoutReportedPostNestedInput
  }

  export type usersCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsCreateNestedManyWithoutAuthorInput
    likes?: likesCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportCreateNestedManyWithoutReportedUserInput
  }

  export type usersUncheckedCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportUncheckedCreateNestedManyWithoutReporterInput
    abuseReports?: AbuseReportUncheckedCreateNestedManyWithoutReportedUserInput
  }

  export type usersCreateOrConnectWithoutViewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
  }

  export type postsCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
    author?: usersCreateNestedOneWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportCreateNestedManyWithoutReportedPostInput
  }

  export type postsUncheckedCreateWithoutViewsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    authorId: string
    noOfLikes?: number
    noOfViews?: number
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    reportedPosts?: AbuseReportUncheckedCreateNestedManyWithoutReportedPostInput
  }

  export type postsCreateOrConnectWithoutViewsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutViewsInput, postsUncheckedCreateWithoutViewsInput>
  }

  export type usersUpsertWithoutViewsInput = {
    update: XOR<usersUpdateWithoutViewsInput, usersUncheckedUpdateWithoutViewsInput>
    create: XOR<usersCreateWithoutViewsInput, usersUncheckedCreateWithoutViewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutViewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutViewsInput, usersUncheckedUpdateWithoutViewsInput>
  }

  export type usersUpdateWithoutViewsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUpdateManyWithoutAuthorNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUpdateManyWithoutReportedUserNestedInput
  }

  export type usersUncheckedUpdateWithoutViewsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUncheckedUpdateManyWithoutReporterNestedInput
    abuseReports?: AbuseReportUncheckedUpdateManyWithoutReportedUserNestedInput
  }

  export type postsUpsertWithoutViewsInput = {
    update: XOR<postsUpdateWithoutViewsInput, postsUncheckedUpdateWithoutViewsInput>
    create: XOR<postsCreateWithoutViewsInput, postsUncheckedCreateWithoutViewsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutViewsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutViewsInput, postsUncheckedUpdateWithoutViewsInput>
  }

  export type postsUpdateWithoutViewsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    author?: usersUpdateOneWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUpdateManyWithoutReportedPostNestedInput
  }

  export type postsUncheckedUpdateWithoutViewsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUncheckedUpdateManyWithoutReportedPostNestedInput
  }

  export type usersCreateWithoutAbuseReportInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsCreateNestedManyWithoutAuthorInput
    likes?: likesCreateNestedManyWithoutUserInput
    views?: viewsCreateNestedManyWithoutUserInput
    abuseReports?: AbuseReportCreateNestedManyWithoutReportedUserInput
  }

  export type usersUncheckedCreateWithoutAbuseReportInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
    views?: viewsUncheckedCreateNestedManyWithoutUserInput
    abuseReports?: AbuseReportUncheckedCreateNestedManyWithoutReportedUserInput
  }

  export type usersCreateOrConnectWithoutAbuseReportInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAbuseReportInput, usersUncheckedCreateWithoutAbuseReportInput>
  }

  export type usersCreateWithoutAbuseReportsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsCreateNestedManyWithoutAuthorInput
    likes?: likesCreateNestedManyWithoutUserInput
    views?: viewsCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportCreateNestedManyWithoutReporterInput
  }

  export type usersUncheckedCreateWithoutAbuseReportsInput = {
    id?: string
    createdAt?: Date | string
    email: string
    password: string
    username: string
    name?: string | null
    role?: $Enums.Role
    posts?: postsUncheckedCreateNestedManyWithoutAuthorInput
    likes?: likesUncheckedCreateNestedManyWithoutUserInput
    views?: viewsUncheckedCreateNestedManyWithoutUserInput
    abuseReport?: AbuseReportUncheckedCreateNestedManyWithoutReporterInput
  }

  export type usersCreateOrConnectWithoutAbuseReportsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAbuseReportsInput, usersUncheckedCreateWithoutAbuseReportsInput>
  }

  export type postsCreateWithoutReportedPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
    author?: usersCreateNestedOneWithoutPostsInput
    likes?: likesCreateNestedManyWithoutPostInput
    views?: viewsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutReportedPostsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    authorId: string
    noOfLikes?: number
    noOfViews?: number
    likes?: likesUncheckedCreateNestedManyWithoutPostInput
    views?: viewsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutReportedPostsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutReportedPostsInput, postsUncheckedCreateWithoutReportedPostsInput>
  }

  export type usersUpsertWithoutAbuseReportInput = {
    update: XOR<usersUpdateWithoutAbuseReportInput, usersUncheckedUpdateWithoutAbuseReportInput>
    create: XOR<usersCreateWithoutAbuseReportInput, usersUncheckedCreateWithoutAbuseReportInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAbuseReportInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAbuseReportInput, usersUncheckedUpdateWithoutAbuseReportInput>
  }

  export type usersUpdateWithoutAbuseReportInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUpdateManyWithoutAuthorNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
    views?: viewsUpdateManyWithoutUserNestedInput
    abuseReports?: AbuseReportUpdateManyWithoutReportedUserNestedInput
  }

  export type usersUncheckedUpdateWithoutAbuseReportInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
    views?: viewsUncheckedUpdateManyWithoutUserNestedInput
    abuseReports?: AbuseReportUncheckedUpdateManyWithoutReportedUserNestedInput
  }

  export type usersUpsertWithoutAbuseReportsInput = {
    update: XOR<usersUpdateWithoutAbuseReportsInput, usersUncheckedUpdateWithoutAbuseReportsInput>
    create: XOR<usersCreateWithoutAbuseReportsInput, usersUncheckedCreateWithoutAbuseReportsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAbuseReportsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAbuseReportsInput, usersUncheckedUpdateWithoutAbuseReportsInput>
  }

  export type usersUpdateWithoutAbuseReportsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUpdateManyWithoutAuthorNestedInput
    likes?: likesUpdateManyWithoutUserNestedInput
    views?: viewsUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUpdateManyWithoutReporterNestedInput
  }

  export type usersUncheckedUpdateWithoutAbuseReportsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    posts?: postsUncheckedUpdateManyWithoutAuthorNestedInput
    likes?: likesUncheckedUpdateManyWithoutUserNestedInput
    views?: viewsUncheckedUpdateManyWithoutUserNestedInput
    abuseReport?: AbuseReportUncheckedUpdateManyWithoutReporterNestedInput
  }

  export type postsUpsertWithoutReportedPostsInput = {
    update: XOR<postsUpdateWithoutReportedPostsInput, postsUncheckedUpdateWithoutReportedPostsInput>
    create: XOR<postsCreateWithoutReportedPostsInput, postsUncheckedCreateWithoutReportedPostsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutReportedPostsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutReportedPostsInput, postsUncheckedUpdateWithoutReportedPostsInput>
  }

  export type postsUpdateWithoutReportedPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    author?: usersUpdateOneWithoutPostsNestedInput
    likes?: likesUpdateManyWithoutPostNestedInput
    views?: viewsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutReportedPostsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    views?: viewsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsCreateManyAuthorInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    published?: boolean
    title: string
    description?: string | null
    content: string
    noOfLikes?: number
    noOfViews?: number
  }

  export type likesCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    postId: string
  }

  export type viewsCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    postId: string
  }

  export type AbuseReportCreateManyReporterInput = {
    id?: string
    createdAt?: Date | string
    reportedUserId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type AbuseReportCreateManyReportedUserInput = {
    id?: string
    createdAt?: Date | string
    reporterId: string
    reportedPostId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type postsUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    likes?: likesUpdateManyWithoutPostNestedInput
    views?: viewsUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUpdateManyWithoutReportedPostNestedInput
  }

  export type postsUncheckedUpdateWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
    likes?: likesUncheckedUpdateManyWithoutPostNestedInput
    views?: viewsUncheckedUpdateManyWithoutPostNestedInput
    reportedPosts?: AbuseReportUncheckedUpdateManyWithoutReportedPostNestedInput
  }

  export type postsUncheckedUpdateManyWithoutAuthorInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    published?: BoolFieldUpdateOperationsInput | boolean
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    noOfLikes?: IntFieldUpdateOperationsInput | number
    noOfViews?: IntFieldUpdateOperationsInput | number
  }

  export type likesUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type likesUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type viewsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    post?: postsUpdateOneRequiredWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type viewsUncheckedUpdateManyWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postId?: StringFieldUpdateOperationsInput | string
  }

  export type AbuseReportUpdateWithoutReporterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reportedUser?: usersUpdateOneWithoutAbuseReportsNestedInput
    reportedPost?: postsUpdateOneWithoutReportedPostsNestedInput
  }

  export type AbuseReportUncheckedUpdateWithoutReporterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedUserId?: StringFieldUpdateOperationsInput | string
    reportedPostId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type AbuseReportUncheckedUpdateManyWithoutReporterInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportedUserId?: StringFieldUpdateOperationsInput | string
    reportedPostId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type AbuseReportUpdateWithoutReportedUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reporter?: usersUpdateOneRequiredWithoutAbuseReportNestedInput
    reportedPost?: postsUpdateOneWithoutReportedPostsNestedInput
  }

  export type AbuseReportUncheckedUpdateWithoutReportedUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedPostId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type AbuseReportUncheckedUpdateManyWithoutReportedUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedPostId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type likesCreateManyPostInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type viewsCreateManyPostInput = {
    id?: string
    createdAt?: Date | string
    userId: string
  }

  export type AbuseReportCreateManyReportedPostInput = {
    id?: string
    createdAt?: Date | string
    reporterId: string
    reportedUserId: string
    reportType: $Enums.ReportType
    description?: string | null
    status?: $Enums.ReportStatus
  }

  export type likesUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type likesUncheckedUpdateManyWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type viewsUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutViewsNestedInput
  }

  export type viewsUncheckedUpdateWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type viewsUncheckedUpdateManyWithoutPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type AbuseReportUpdateWithoutReportedPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
    reporter?: usersUpdateOneRequiredWithoutAbuseReportNestedInput
    reportedUser?: usersUpdateOneWithoutAbuseReportsNestedInput
  }

  export type AbuseReportUncheckedUpdateWithoutReportedPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedUserId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }

  export type AbuseReportUncheckedUpdateManyWithoutReportedPostInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reporterId?: StringFieldUpdateOperationsInput | string
    reportedUserId?: StringFieldUpdateOperationsInput | string
    reportType?: EnumReportTypeFieldUpdateOperationsInput | $Enums.ReportType
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumReportStatusFieldUpdateOperationsInput | $Enums.ReportStatus
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostsCountOutputTypeDefaultArgs instead
     */
    export type PostsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postsDefaultArgs instead
     */
    export type postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use likesDefaultArgs instead
     */
    export type likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = likesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use viewsDefaultArgs instead
     */
    export type viewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = viewsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AbuseReportDefaultArgs instead
     */
    export type AbuseReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AbuseReportDefaultArgs<ExtArgs>

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