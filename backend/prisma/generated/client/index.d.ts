
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Endpoint
 * 
 */
export type Endpoint = $Result.DefaultSelection<Prisma.$EndpointPayload>
/**
 * Model EndpointMetric
 * 
 */
export type EndpointMetric = $Result.DefaultSelection<Prisma.$EndpointMetricPayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>
/**
 * Model NotificationChannel
 * 
 */
export type NotificationChannel = $Result.DefaultSelection<Prisma.$NotificationChannelPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PingStatus: {
  UP: 'UP',
  DOWN: 'DOWN',
  TIMEOUT: 'TIMEOUT'
};

export type PingStatus = (typeof PingStatus)[keyof typeof PingStatus]


export const AlertStatus: {
  TRIGGERED: 'TRIGGERED',
  RESOLVED: 'RESOLVED'
};

export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus]


export const NotificationType: {
  EMAIL: 'EMAIL',
  WEBHOOK: 'WEBHOOK'
};

export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType]

}

export type PingStatus = $Enums.PingStatus

export const PingStatus: typeof $Enums.PingStatus

export type AlertStatus = $Enums.AlertStatus

export const AlertStatus: typeof $Enums.AlertStatus

export type NotificationType = $Enums.NotificationType

export const NotificationType: typeof $Enums.NotificationType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endpoint`: Exposes CRUD operations for the **Endpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endpoints
    * const endpoints = await prisma.endpoint.findMany()
    * ```
    */
  get endpoint(): Prisma.EndpointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endpointMetric`: Exposes CRUD operations for the **EndpointMetric** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EndpointMetrics
    * const endpointMetrics = await prisma.endpointMetric.findMany()
    * ```
    */
  get endpointMetric(): Prisma.EndpointMetricDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notificationChannel`: Exposes CRUD operations for the **NotificationChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotificationChannels
    * const notificationChannels = await prisma.notificationChannel.findMany()
    * ```
    */
  get notificationChannel(): Prisma.NotificationChannelDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
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
    User: 'User',
    Endpoint: 'Endpoint',
    EndpointMetric: 'EndpointMetric',
    Alert: 'Alert',
    NotificationChannel: 'NotificationChannel'
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
      modelProps: "user" | "endpoint" | "endpointMetric" | "alert" | "notificationChannel"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Endpoint: {
        payload: Prisma.$EndpointPayload<ExtArgs>
        fields: Prisma.EndpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          findFirst: {
            args: Prisma.EndpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          findMany: {
            args: Prisma.EndpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          create: {
            args: Prisma.EndpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          createMany: {
            args: Prisma.EndpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          delete: {
            args: Prisma.EndpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          update: {
            args: Prisma.EndpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          deleteMany: {
            args: Prisma.EndpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndpointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          upsert: {
            args: Prisma.EndpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          aggregate: {
            args: Prisma.EndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndpoint>
          }
          groupBy: {
            args: Prisma.EndpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndpointCountArgs<ExtArgs>
            result: $Utils.Optional<EndpointCountAggregateOutputType> | number
          }
        }
      }
      EndpointMetric: {
        payload: Prisma.$EndpointMetricPayload<ExtArgs>
        fields: Prisma.EndpointMetricFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndpointMetricFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndpointMetricFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>
          }
          findFirst: {
            args: Prisma.EndpointMetricFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndpointMetricFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>
          }
          findMany: {
            args: Prisma.EndpointMetricFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>[]
          }
          create: {
            args: Prisma.EndpointMetricCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>
          }
          createMany: {
            args: Prisma.EndpointMetricCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndpointMetricCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>[]
          }
          delete: {
            args: Prisma.EndpointMetricDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>
          }
          update: {
            args: Prisma.EndpointMetricUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>
          }
          deleteMany: {
            args: Prisma.EndpointMetricDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndpointMetricUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndpointMetricUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>[]
          }
          upsert: {
            args: Prisma.EndpointMetricUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointMetricPayload>
          }
          aggregate: {
            args: Prisma.EndpointMetricAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndpointMetric>
          }
          groupBy: {
            args: Prisma.EndpointMetricGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndpointMetricGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndpointMetricCountArgs<ExtArgs>
            result: $Utils.Optional<EndpointMetricCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
      NotificationChannel: {
        payload: Prisma.$NotificationChannelPayload<ExtArgs>
        fields: Prisma.NotificationChannelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationChannelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationChannelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>
          }
          findFirst: {
            args: Prisma.NotificationChannelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationChannelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>
          }
          findMany: {
            args: Prisma.NotificationChannelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>[]
          }
          create: {
            args: Prisma.NotificationChannelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>
          }
          createMany: {
            args: Prisma.NotificationChannelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationChannelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>[]
          }
          delete: {
            args: Prisma.NotificationChannelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>
          }
          update: {
            args: Prisma.NotificationChannelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>
          }
          deleteMany: {
            args: Prisma.NotificationChannelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationChannelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationChannelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>[]
          }
          upsert: {
            args: Prisma.NotificationChannelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationChannelPayload>
          }
          aggregate: {
            args: Prisma.NotificationChannelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotificationChannel>
          }
          groupBy: {
            args: Prisma.NotificationChannelGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationChannelGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationChannelCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationChannelCountAggregateOutputType> | number
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
    user?: UserOmit
    endpoint?: EndpointOmit
    endpointMetric?: EndpointMetricOmit
    alert?: AlertOmit
    notificationChannel?: NotificationChannelOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    endpoints: number
    notificationChannels: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | UserCountOutputTypeCountEndpointsArgs
    notificationChannels?: boolean | UserCountOutputTypeCountNotificationChannelsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEndpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationChannelWhereInput
  }


  /**
   * Count Type EndpointCountOutputType
   */

  export type EndpointCountOutputType = {
    metrics: number
    alerts: number
  }

  export type EndpointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    metrics?: boolean | EndpointCountOutputTypeCountMetricsArgs
    alerts?: boolean | EndpointCountOutputTypeCountAlertsArgs
  }

  // Custom InputTypes
  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointCountOutputType
     */
    select?: EndpointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountMetricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointMetricWhereInput
  }

  /**
   * EndpointCountOutputType without action
   */
  export type EndpointCountOutputTypeCountAlertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    endpoints?: boolean | User$endpointsArgs<ExtArgs>
    notificationChannels?: boolean | User$notificationChannelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | User$endpointsArgs<ExtArgs>
    notificationChannels?: boolean | User$notificationChannelsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      endpoints: Prisma.$EndpointPayload<ExtArgs>[]
      notificationChannels: Prisma.$NotificationChannelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoints<T extends User$endpointsArgs<ExtArgs> = {}>(args?: Subset<T, User$endpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notificationChannels<T extends User$notificationChannelsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationChannelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.endpoints
   */
  export type User$endpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    where?: EndpointWhereInput
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    cursor?: EndpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * User.notificationChannels
   */
  export type User$notificationChannelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    where?: NotificationChannelWhereInput
    orderBy?: NotificationChannelOrderByWithRelationInput | NotificationChannelOrderByWithRelationInput[]
    cursor?: NotificationChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationChannelScalarFieldEnum | NotificationChannelScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Endpoint
   */

  export type AggregateEndpoint = {
    _count: EndpointCountAggregateOutputType | null
    _avg: EndpointAvgAggregateOutputType | null
    _sum: EndpointSumAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  export type EndpointAvgAggregateOutputType = {
    id: number | null
    checkIntervalSec: number | null
    consecutiveFails: number | null
    alertOnConsecutiveFails: number | null
    userId: number | null
  }

  export type EndpointSumAggregateOutputType = {
    id: number | null
    checkIntervalSec: number | null
    consecutiveFails: number | null
    alertOnConsecutiveFails: number | null
    userId: number | null
  }

  export type EndpointMinAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    isActive: boolean | null
    checkIntervalSec: number | null
    consecutiveFails: number | null
    alertOnConsecutiveFails: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type EndpointMaxAggregateOutputType = {
    id: number | null
    name: string | null
    url: string | null
    isActive: boolean | null
    checkIntervalSec: number | null
    consecutiveFails: number | null
    alertOnConsecutiveFails: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type EndpointCountAggregateOutputType = {
    id: number
    name: number
    url: number
    isActive: number
    checkIntervalSec: number
    consecutiveFails: number
    alertOnConsecutiveFails: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type EndpointAvgAggregateInputType = {
    id?: true
    checkIntervalSec?: true
    consecutiveFails?: true
    alertOnConsecutiveFails?: true
    userId?: true
  }

  export type EndpointSumAggregateInputType = {
    id?: true
    checkIntervalSec?: true
    consecutiveFails?: true
    alertOnConsecutiveFails?: true
    userId?: true
  }

  export type EndpointMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    isActive?: true
    checkIntervalSec?: true
    consecutiveFails?: true
    alertOnConsecutiveFails?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EndpointMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    isActive?: true
    checkIntervalSec?: true
    consecutiveFails?: true
    alertOnConsecutiveFails?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type EndpointCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    isActive?: true
    checkIntervalSec?: true
    consecutiveFails?: true
    alertOnConsecutiveFails?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type EndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endpoint to aggregate.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Endpoints
    **/
    _count?: true | EndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EndpointAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EndpointSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndpointMaxAggregateInputType
  }

  export type GetEndpointAggregateType<T extends EndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndpoint[P]>
      : GetScalarType<T[P], AggregateEndpoint[P]>
  }




  export type EndpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointWhereInput
    orderBy?: EndpointOrderByWithAggregationInput | EndpointOrderByWithAggregationInput[]
    by: EndpointScalarFieldEnum[] | EndpointScalarFieldEnum
    having?: EndpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndpointCountAggregateInputType | true
    _avg?: EndpointAvgAggregateInputType
    _sum?: EndpointSumAggregateInputType
    _min?: EndpointMinAggregateInputType
    _max?: EndpointMaxAggregateInputType
  }

  export type EndpointGroupByOutputType = {
    id: number
    name: string
    url: string
    isActive: boolean
    checkIntervalSec: number
    consecutiveFails: number
    alertOnConsecutiveFails: number
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: EndpointCountAggregateOutputType | null
    _avg: EndpointAvgAggregateOutputType | null
    _sum: EndpointSumAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  type GetEndpointGroupByPayload<T extends EndpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndpointGroupByOutputType[P]>
            : GetScalarType<T[P], EndpointGroupByOutputType[P]>
        }
      >
    >


  export type EndpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    isActive?: boolean
    checkIntervalSec?: boolean
    consecutiveFails?: boolean
    alertOnConsecutiveFails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    metrics?: boolean | Endpoint$metricsArgs<ExtArgs>
    alerts?: boolean | Endpoint$alertsArgs<ExtArgs>
    _count?: boolean | EndpointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    isActive?: boolean
    checkIntervalSec?: boolean
    consecutiveFails?: boolean
    alertOnConsecutiveFails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    isActive?: boolean
    checkIntervalSec?: boolean
    consecutiveFails?: boolean
    alertOnConsecutiveFails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    isActive?: boolean
    checkIntervalSec?: boolean
    consecutiveFails?: boolean
    alertOnConsecutiveFails?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type EndpointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "url" | "isActive" | "checkIntervalSec" | "consecutiveFails" | "alertOnConsecutiveFails" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["endpoint"]>
  export type EndpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    metrics?: boolean | Endpoint$metricsArgs<ExtArgs>
    alerts?: boolean | Endpoint$alertsArgs<ExtArgs>
    _count?: boolean | EndpointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EndpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EndpointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EndpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endpoint"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      metrics: Prisma.$EndpointMetricPayload<ExtArgs>[]
      alerts: Prisma.$AlertPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      url: string
      isActive: boolean
      checkIntervalSec: number
      consecutiveFails: number
      alertOnConsecutiveFails: number
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["endpoint"]>
    composites: {}
  }

  type EndpointGetPayload<S extends boolean | null | undefined | EndpointDefaultArgs> = $Result.GetResult<Prisma.$EndpointPayload, S>

  type EndpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndpointCountAggregateInputType | true
    }

  export interface EndpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endpoint'], meta: { name: 'Endpoint' } }
    /**
     * Find zero or one Endpoint that matches the filter.
     * @param {EndpointFindUniqueArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndpointFindUniqueArgs>(args: SelectSubset<T, EndpointFindUniqueArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endpoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndpointFindUniqueOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndpointFindUniqueOrThrowArgs>(args: SelectSubset<T, EndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindFirstArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndpointFindFirstArgs>(args?: SelectSubset<T, EndpointFindFirstArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindFirstOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndpointFindFirstOrThrowArgs>(args?: SelectSubset<T, EndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endpoints
     * const endpoints = await prisma.endpoint.findMany()
     * 
     * // Get first 10 Endpoints
     * const endpoints = await prisma.endpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endpointWithIdOnly = await prisma.endpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EndpointFindManyArgs>(args?: SelectSubset<T, EndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endpoint.
     * @param {EndpointCreateArgs} args - Arguments to create a Endpoint.
     * @example
     * // Create one Endpoint
     * const Endpoint = await prisma.endpoint.create({
     *   data: {
     *     // ... data to create a Endpoint
     *   }
     * })
     * 
     */
    create<T extends EndpointCreateArgs>(args: SelectSubset<T, EndpointCreateArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endpoints.
     * @param {EndpointCreateManyArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndpointCreateManyArgs>(args?: SelectSubset<T, EndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endpoints and returns the data saved in the database.
     * @param {EndpointCreateManyAndReturnArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndpointCreateManyAndReturnArgs>(args?: SelectSubset<T, EndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endpoint.
     * @param {EndpointDeleteArgs} args - Arguments to delete one Endpoint.
     * @example
     * // Delete one Endpoint
     * const Endpoint = await prisma.endpoint.delete({
     *   where: {
     *     // ... filter to delete one Endpoint
     *   }
     * })
     * 
     */
    delete<T extends EndpointDeleteArgs>(args: SelectSubset<T, EndpointDeleteArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endpoint.
     * @param {EndpointUpdateArgs} args - Arguments to update one Endpoint.
     * @example
     * // Update one Endpoint
     * const endpoint = await prisma.endpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndpointUpdateArgs>(args: SelectSubset<T, EndpointUpdateArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endpoints.
     * @param {EndpointDeleteManyArgs} args - Arguments to filter Endpoints to delete.
     * @example
     * // Delete a few Endpoints
     * const { count } = await prisma.endpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndpointDeleteManyArgs>(args?: SelectSubset<T, EndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndpointUpdateManyArgs>(args: SelectSubset<T, EndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints and returns the data updated in the database.
     * @param {EndpointUpdateManyAndReturnArgs} args - Arguments to update many Endpoints.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.updateManyAndReturn({
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
    updateManyAndReturn<T extends EndpointUpdateManyAndReturnArgs>(args: SelectSubset<T, EndpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endpoint.
     * @param {EndpointUpsertArgs} args - Arguments to update or create a Endpoint.
     * @example
     * // Update or create a Endpoint
     * const endpoint = await prisma.endpoint.upsert({
     *   create: {
     *     // ... data to create a Endpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endpoint we want to update
     *   }
     * })
     */
    upsert<T extends EndpointUpsertArgs>(args: SelectSubset<T, EndpointUpsertArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointCountArgs} args - Arguments to filter Endpoints to count.
     * @example
     * // Count the number of Endpoints
     * const count = await prisma.endpoint.count({
     *   where: {
     *     // ... the filter for the Endpoints we want to count
     *   }
     * })
    **/
    count<T extends EndpointCountArgs>(
      args?: Subset<T, EndpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndpointAggregateArgs>(args: Subset<T, EndpointAggregateArgs>): Prisma.PrismaPromise<GetEndpointAggregateType<T>>

    /**
     * Group by Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointGroupByArgs} args - Group by arguments.
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
      T extends EndpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndpointGroupByArgs['orderBy'] }
        : { orderBy?: EndpointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endpoint model
   */
  readonly fields: EndpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    metrics<T extends Endpoint$metricsArgs<ExtArgs> = {}>(args?: Subset<T, Endpoint$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alerts<T extends Endpoint$alertsArgs<ExtArgs> = {}>(args?: Subset<T, Endpoint$alertsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Endpoint model
   */
  interface EndpointFieldRefs {
    readonly id: FieldRef<"Endpoint", 'Int'>
    readonly name: FieldRef<"Endpoint", 'String'>
    readonly url: FieldRef<"Endpoint", 'String'>
    readonly isActive: FieldRef<"Endpoint", 'Boolean'>
    readonly checkIntervalSec: FieldRef<"Endpoint", 'Int'>
    readonly consecutiveFails: FieldRef<"Endpoint", 'Int'>
    readonly alertOnConsecutiveFails: FieldRef<"Endpoint", 'Int'>
    readonly createdAt: FieldRef<"Endpoint", 'DateTime'>
    readonly updatedAt: FieldRef<"Endpoint", 'DateTime'>
    readonly userId: FieldRef<"Endpoint", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Endpoint findUnique
   */
  export type EndpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint findUniqueOrThrow
   */
  export type EndpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint findFirst
   */
  export type EndpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint findFirstOrThrow
   */
  export type EndpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint findMany
   */
  export type EndpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoints to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint create
   */
  export type EndpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The data needed to create a Endpoint.
     */
    data: XOR<EndpointCreateInput, EndpointUncheckedCreateInput>
  }

  /**
   * Endpoint createMany
   */
  export type EndpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Endpoints.
     */
    data: EndpointCreateManyInput | EndpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endpoint createManyAndReturn
   */
  export type EndpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * The data used to create many Endpoints.
     */
    data: EndpointCreateManyInput | EndpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endpoint update
   */
  export type EndpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The data needed to update a Endpoint.
     */
    data: XOR<EndpointUpdateInput, EndpointUncheckedUpdateInput>
    /**
     * Choose, which Endpoint to update.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint updateMany
   */
  export type EndpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Endpoints.
     */
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyInput>
    /**
     * Filter which Endpoints to update
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to update.
     */
    limit?: number
  }

  /**
   * Endpoint updateManyAndReturn
   */
  export type EndpointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * The data used to update Endpoints.
     */
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyInput>
    /**
     * Filter which Endpoints to update
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endpoint upsert
   */
  export type EndpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The filter to search for the Endpoint to update in case it exists.
     */
    where: EndpointWhereUniqueInput
    /**
     * In case the Endpoint found by the `where` argument doesn't exist, create a new Endpoint with this data.
     */
    create: XOR<EndpointCreateInput, EndpointUncheckedCreateInput>
    /**
     * In case the Endpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndpointUpdateInput, EndpointUncheckedUpdateInput>
  }

  /**
   * Endpoint delete
   */
  export type EndpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter which Endpoint to delete.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint deleteMany
   */
  export type EndpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endpoints to delete
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to delete.
     */
    limit?: number
  }

  /**
   * Endpoint.metrics
   */
  export type Endpoint$metricsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    where?: EndpointMetricWhereInput
    orderBy?: EndpointMetricOrderByWithRelationInput | EndpointMetricOrderByWithRelationInput[]
    cursor?: EndpointMetricWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndpointMetricScalarFieldEnum | EndpointMetricScalarFieldEnum[]
  }

  /**
   * Endpoint.alerts
   */
  export type Endpoint$alertsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    cursor?: AlertWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Endpoint without action
   */
  export type EndpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
  }


  /**
   * Model EndpointMetric
   */

  export type AggregateEndpointMetric = {
    _count: EndpointMetricCountAggregateOutputType | null
    _avg: EndpointMetricAvgAggregateOutputType | null
    _sum: EndpointMetricSumAggregateOutputType | null
    _min: EndpointMetricMinAggregateOutputType | null
    _max: EndpointMetricMaxAggregateOutputType | null
  }

  export type EndpointMetricAvgAggregateOutputType = {
    responseTimeMs: number | null
    statusCode: number | null
    endpointId: number | null
  }

  export type EndpointMetricSumAggregateOutputType = {
    responseTimeMs: number | null
    statusCode: number | null
    endpointId: number | null
  }

  export type EndpointMetricMinAggregateOutputType = {
    timestamp: Date | null
    responseTimeMs: number | null
    statusCode: number | null
    status: $Enums.PingStatus | null
    endpointId: number | null
  }

  export type EndpointMetricMaxAggregateOutputType = {
    timestamp: Date | null
    responseTimeMs: number | null
    statusCode: number | null
    status: $Enums.PingStatus | null
    endpointId: number | null
  }

  export type EndpointMetricCountAggregateOutputType = {
    timestamp: number
    responseTimeMs: number
    statusCode: number
    status: number
    endpointId: number
    _all: number
  }


  export type EndpointMetricAvgAggregateInputType = {
    responseTimeMs?: true
    statusCode?: true
    endpointId?: true
  }

  export type EndpointMetricSumAggregateInputType = {
    responseTimeMs?: true
    statusCode?: true
    endpointId?: true
  }

  export type EndpointMetricMinAggregateInputType = {
    timestamp?: true
    responseTimeMs?: true
    statusCode?: true
    status?: true
    endpointId?: true
  }

  export type EndpointMetricMaxAggregateInputType = {
    timestamp?: true
    responseTimeMs?: true
    statusCode?: true
    status?: true
    endpointId?: true
  }

  export type EndpointMetricCountAggregateInputType = {
    timestamp?: true
    responseTimeMs?: true
    statusCode?: true
    status?: true
    endpointId?: true
    _all?: true
  }

  export type EndpointMetricAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EndpointMetric to aggregate.
     */
    where?: EndpointMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndpointMetrics to fetch.
     */
    orderBy?: EndpointMetricOrderByWithRelationInput | EndpointMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndpointMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndpointMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndpointMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EndpointMetrics
    **/
    _count?: true | EndpointMetricCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EndpointMetricAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EndpointMetricSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndpointMetricMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndpointMetricMaxAggregateInputType
  }

  export type GetEndpointMetricAggregateType<T extends EndpointMetricAggregateArgs> = {
        [P in keyof T & keyof AggregateEndpointMetric]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndpointMetric[P]>
      : GetScalarType<T[P], AggregateEndpointMetric[P]>
  }




  export type EndpointMetricGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointMetricWhereInput
    orderBy?: EndpointMetricOrderByWithAggregationInput | EndpointMetricOrderByWithAggregationInput[]
    by: EndpointMetricScalarFieldEnum[] | EndpointMetricScalarFieldEnum
    having?: EndpointMetricScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndpointMetricCountAggregateInputType | true
    _avg?: EndpointMetricAvgAggregateInputType
    _sum?: EndpointMetricSumAggregateInputType
    _min?: EndpointMetricMinAggregateInputType
    _max?: EndpointMetricMaxAggregateInputType
  }

  export type EndpointMetricGroupByOutputType = {
    timestamp: Date
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
    endpointId: number
    _count: EndpointMetricCountAggregateOutputType | null
    _avg: EndpointMetricAvgAggregateOutputType | null
    _sum: EndpointMetricSumAggregateOutputType | null
    _min: EndpointMetricMinAggregateOutputType | null
    _max: EndpointMetricMaxAggregateOutputType | null
  }

  type GetEndpointMetricGroupByPayload<T extends EndpointMetricGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndpointMetricGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndpointMetricGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndpointMetricGroupByOutputType[P]>
            : GetScalarType<T[P], EndpointMetricGroupByOutputType[P]>
        }
      >
    >


  export type EndpointMetricSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    responseTimeMs?: boolean
    statusCode?: boolean
    status?: boolean
    endpointId?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpointMetric"]>

  export type EndpointMetricSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    responseTimeMs?: boolean
    statusCode?: boolean
    status?: boolean
    endpointId?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpointMetric"]>

  export type EndpointMetricSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    timestamp?: boolean
    responseTimeMs?: boolean
    statusCode?: boolean
    status?: boolean
    endpointId?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpointMetric"]>

  export type EndpointMetricSelectScalar = {
    timestamp?: boolean
    responseTimeMs?: boolean
    statusCode?: boolean
    status?: boolean
    endpointId?: boolean
  }

  export type EndpointMetricOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"timestamp" | "responseTimeMs" | "statusCode" | "status" | "endpointId", ExtArgs["result"]["endpointMetric"]>
  export type EndpointMetricInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type EndpointMetricIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type EndpointMetricIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }

  export type $EndpointMetricPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EndpointMetric"
    objects: {
      endpoint: Prisma.$EndpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      timestamp: Date
      responseTimeMs: number
      statusCode: number
      status: $Enums.PingStatus
      endpointId: number
    }, ExtArgs["result"]["endpointMetric"]>
    composites: {}
  }

  type EndpointMetricGetPayload<S extends boolean | null | undefined | EndpointMetricDefaultArgs> = $Result.GetResult<Prisma.$EndpointMetricPayload, S>

  type EndpointMetricCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndpointMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndpointMetricCountAggregateInputType | true
    }

  export interface EndpointMetricDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EndpointMetric'], meta: { name: 'EndpointMetric' } }
    /**
     * Find zero or one EndpointMetric that matches the filter.
     * @param {EndpointMetricFindUniqueArgs} args - Arguments to find a EndpointMetric
     * @example
     * // Get one EndpointMetric
     * const endpointMetric = await prisma.endpointMetric.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndpointMetricFindUniqueArgs>(args: SelectSubset<T, EndpointMetricFindUniqueArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EndpointMetric that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndpointMetricFindUniqueOrThrowArgs} args - Arguments to find a EndpointMetric
     * @example
     * // Get one EndpointMetric
     * const endpointMetric = await prisma.endpointMetric.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndpointMetricFindUniqueOrThrowArgs>(args: SelectSubset<T, EndpointMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EndpointMetric that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricFindFirstArgs} args - Arguments to find a EndpointMetric
     * @example
     * // Get one EndpointMetric
     * const endpointMetric = await prisma.endpointMetric.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndpointMetricFindFirstArgs>(args?: SelectSubset<T, EndpointMetricFindFirstArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EndpointMetric that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricFindFirstOrThrowArgs} args - Arguments to find a EndpointMetric
     * @example
     * // Get one EndpointMetric
     * const endpointMetric = await prisma.endpointMetric.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndpointMetricFindFirstOrThrowArgs>(args?: SelectSubset<T, EndpointMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EndpointMetrics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EndpointMetrics
     * const endpointMetrics = await prisma.endpointMetric.findMany()
     * 
     * // Get first 10 EndpointMetrics
     * const endpointMetrics = await prisma.endpointMetric.findMany({ take: 10 })
     * 
     * // Only select the `timestamp`
     * const endpointMetricWithTimestampOnly = await prisma.endpointMetric.findMany({ select: { timestamp: true } })
     * 
     */
    findMany<T extends EndpointMetricFindManyArgs>(args?: SelectSubset<T, EndpointMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EndpointMetric.
     * @param {EndpointMetricCreateArgs} args - Arguments to create a EndpointMetric.
     * @example
     * // Create one EndpointMetric
     * const EndpointMetric = await prisma.endpointMetric.create({
     *   data: {
     *     // ... data to create a EndpointMetric
     *   }
     * })
     * 
     */
    create<T extends EndpointMetricCreateArgs>(args: SelectSubset<T, EndpointMetricCreateArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EndpointMetrics.
     * @param {EndpointMetricCreateManyArgs} args - Arguments to create many EndpointMetrics.
     * @example
     * // Create many EndpointMetrics
     * const endpointMetric = await prisma.endpointMetric.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndpointMetricCreateManyArgs>(args?: SelectSubset<T, EndpointMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EndpointMetrics and returns the data saved in the database.
     * @param {EndpointMetricCreateManyAndReturnArgs} args - Arguments to create many EndpointMetrics.
     * @example
     * // Create many EndpointMetrics
     * const endpointMetric = await prisma.endpointMetric.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EndpointMetrics and only return the `timestamp`
     * const endpointMetricWithTimestampOnly = await prisma.endpointMetric.createManyAndReturn({
     *   select: { timestamp: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndpointMetricCreateManyAndReturnArgs>(args?: SelectSubset<T, EndpointMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EndpointMetric.
     * @param {EndpointMetricDeleteArgs} args - Arguments to delete one EndpointMetric.
     * @example
     * // Delete one EndpointMetric
     * const EndpointMetric = await prisma.endpointMetric.delete({
     *   where: {
     *     // ... filter to delete one EndpointMetric
     *   }
     * })
     * 
     */
    delete<T extends EndpointMetricDeleteArgs>(args: SelectSubset<T, EndpointMetricDeleteArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EndpointMetric.
     * @param {EndpointMetricUpdateArgs} args - Arguments to update one EndpointMetric.
     * @example
     * // Update one EndpointMetric
     * const endpointMetric = await prisma.endpointMetric.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndpointMetricUpdateArgs>(args: SelectSubset<T, EndpointMetricUpdateArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EndpointMetrics.
     * @param {EndpointMetricDeleteManyArgs} args - Arguments to filter EndpointMetrics to delete.
     * @example
     * // Delete a few EndpointMetrics
     * const { count } = await prisma.endpointMetric.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndpointMetricDeleteManyArgs>(args?: SelectSubset<T, EndpointMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EndpointMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EndpointMetrics
     * const endpointMetric = await prisma.endpointMetric.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndpointMetricUpdateManyArgs>(args: SelectSubset<T, EndpointMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EndpointMetrics and returns the data updated in the database.
     * @param {EndpointMetricUpdateManyAndReturnArgs} args - Arguments to update many EndpointMetrics.
     * @example
     * // Update many EndpointMetrics
     * const endpointMetric = await prisma.endpointMetric.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EndpointMetrics and only return the `timestamp`
     * const endpointMetricWithTimestampOnly = await prisma.endpointMetric.updateManyAndReturn({
     *   select: { timestamp: true },
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
    updateManyAndReturn<T extends EndpointMetricUpdateManyAndReturnArgs>(args: SelectSubset<T, EndpointMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EndpointMetric.
     * @param {EndpointMetricUpsertArgs} args - Arguments to update or create a EndpointMetric.
     * @example
     * // Update or create a EndpointMetric
     * const endpointMetric = await prisma.endpointMetric.upsert({
     *   create: {
     *     // ... data to create a EndpointMetric
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EndpointMetric we want to update
     *   }
     * })
     */
    upsert<T extends EndpointMetricUpsertArgs>(args: SelectSubset<T, EndpointMetricUpsertArgs<ExtArgs>>): Prisma__EndpointMetricClient<$Result.GetResult<Prisma.$EndpointMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EndpointMetrics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricCountArgs} args - Arguments to filter EndpointMetrics to count.
     * @example
     * // Count the number of EndpointMetrics
     * const count = await prisma.endpointMetric.count({
     *   where: {
     *     // ... the filter for the EndpointMetrics we want to count
     *   }
     * })
    **/
    count<T extends EndpointMetricCountArgs>(
      args?: Subset<T, EndpointMetricCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndpointMetricCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EndpointMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndpointMetricAggregateArgs>(args: Subset<T, EndpointMetricAggregateArgs>): Prisma.PrismaPromise<GetEndpointMetricAggregateType<T>>

    /**
     * Group by EndpointMetric.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointMetricGroupByArgs} args - Group by arguments.
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
      T extends EndpointMetricGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndpointMetricGroupByArgs['orderBy'] }
        : { orderBy?: EndpointMetricGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EndpointMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndpointMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EndpointMetric model
   */
  readonly fields: EndpointMetricFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EndpointMetric.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndpointMetricClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends EndpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EndpointDefaultArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EndpointMetric model
   */
  interface EndpointMetricFieldRefs {
    readonly timestamp: FieldRef<"EndpointMetric", 'DateTime'>
    readonly responseTimeMs: FieldRef<"EndpointMetric", 'Int'>
    readonly statusCode: FieldRef<"EndpointMetric", 'Int'>
    readonly status: FieldRef<"EndpointMetric", 'PingStatus'>
    readonly endpointId: FieldRef<"EndpointMetric", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EndpointMetric findUnique
   */
  export type EndpointMetricFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * Filter, which EndpointMetric to fetch.
     */
    where: EndpointMetricWhereUniqueInput
  }

  /**
   * EndpointMetric findUniqueOrThrow
   */
  export type EndpointMetricFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * Filter, which EndpointMetric to fetch.
     */
    where: EndpointMetricWhereUniqueInput
  }

  /**
   * EndpointMetric findFirst
   */
  export type EndpointMetricFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * Filter, which EndpointMetric to fetch.
     */
    where?: EndpointMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndpointMetrics to fetch.
     */
    orderBy?: EndpointMetricOrderByWithRelationInput | EndpointMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EndpointMetrics.
     */
    cursor?: EndpointMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndpointMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndpointMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EndpointMetrics.
     */
    distinct?: EndpointMetricScalarFieldEnum | EndpointMetricScalarFieldEnum[]
  }

  /**
   * EndpointMetric findFirstOrThrow
   */
  export type EndpointMetricFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * Filter, which EndpointMetric to fetch.
     */
    where?: EndpointMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndpointMetrics to fetch.
     */
    orderBy?: EndpointMetricOrderByWithRelationInput | EndpointMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EndpointMetrics.
     */
    cursor?: EndpointMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndpointMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndpointMetrics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EndpointMetrics.
     */
    distinct?: EndpointMetricScalarFieldEnum | EndpointMetricScalarFieldEnum[]
  }

  /**
   * EndpointMetric findMany
   */
  export type EndpointMetricFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * Filter, which EndpointMetrics to fetch.
     */
    where?: EndpointMetricWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EndpointMetrics to fetch.
     */
    orderBy?: EndpointMetricOrderByWithRelationInput | EndpointMetricOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EndpointMetrics.
     */
    cursor?: EndpointMetricWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EndpointMetrics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EndpointMetrics.
     */
    skip?: number
    distinct?: EndpointMetricScalarFieldEnum | EndpointMetricScalarFieldEnum[]
  }

  /**
   * EndpointMetric create
   */
  export type EndpointMetricCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * The data needed to create a EndpointMetric.
     */
    data: XOR<EndpointMetricCreateInput, EndpointMetricUncheckedCreateInput>
  }

  /**
   * EndpointMetric createMany
   */
  export type EndpointMetricCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EndpointMetrics.
     */
    data: EndpointMetricCreateManyInput | EndpointMetricCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EndpointMetric createManyAndReturn
   */
  export type EndpointMetricCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * The data used to create many EndpointMetrics.
     */
    data: EndpointMetricCreateManyInput | EndpointMetricCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EndpointMetric update
   */
  export type EndpointMetricUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * The data needed to update a EndpointMetric.
     */
    data: XOR<EndpointMetricUpdateInput, EndpointMetricUncheckedUpdateInput>
    /**
     * Choose, which EndpointMetric to update.
     */
    where: EndpointMetricWhereUniqueInput
  }

  /**
   * EndpointMetric updateMany
   */
  export type EndpointMetricUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EndpointMetrics.
     */
    data: XOR<EndpointMetricUpdateManyMutationInput, EndpointMetricUncheckedUpdateManyInput>
    /**
     * Filter which EndpointMetrics to update
     */
    where?: EndpointMetricWhereInput
    /**
     * Limit how many EndpointMetrics to update.
     */
    limit?: number
  }

  /**
   * EndpointMetric updateManyAndReturn
   */
  export type EndpointMetricUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * The data used to update EndpointMetrics.
     */
    data: XOR<EndpointMetricUpdateManyMutationInput, EndpointMetricUncheckedUpdateManyInput>
    /**
     * Filter which EndpointMetrics to update
     */
    where?: EndpointMetricWhereInput
    /**
     * Limit how many EndpointMetrics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EndpointMetric upsert
   */
  export type EndpointMetricUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * The filter to search for the EndpointMetric to update in case it exists.
     */
    where: EndpointMetricWhereUniqueInput
    /**
     * In case the EndpointMetric found by the `where` argument doesn't exist, create a new EndpointMetric with this data.
     */
    create: XOR<EndpointMetricCreateInput, EndpointMetricUncheckedCreateInput>
    /**
     * In case the EndpointMetric was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndpointMetricUpdateInput, EndpointMetricUncheckedUpdateInput>
  }

  /**
   * EndpointMetric delete
   */
  export type EndpointMetricDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
    /**
     * Filter which EndpointMetric to delete.
     */
    where: EndpointMetricWhereUniqueInput
  }

  /**
   * EndpointMetric deleteMany
   */
  export type EndpointMetricDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EndpointMetrics to delete
     */
    where?: EndpointMetricWhereInput
    /**
     * Limit how many EndpointMetrics to delete.
     */
    limit?: number
  }

  /**
   * EndpointMetric without action
   */
  export type EndpointMetricDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EndpointMetric
     */
    select?: EndpointMetricSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EndpointMetric
     */
    omit?: EndpointMetricOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointMetricInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertAvgAggregateOutputType = {
    id: number | null
    endpointId: number | null
  }

  export type AlertSumAggregateOutputType = {
    id: number | null
    endpointId: number | null
  }

  export type AlertMinAggregateOutputType = {
    id: number | null
    status: $Enums.AlertStatus | null
    message: string | null
    createdAt: Date | null
    resolvedAt: Date | null
    endpointId: number | null
  }

  export type AlertMaxAggregateOutputType = {
    id: number | null
    status: $Enums.AlertStatus | null
    message: string | null
    createdAt: Date | null
    resolvedAt: Date | null
    endpointId: number | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    status: number
    message: number
    createdAt: number
    resolvedAt: number
    endpointId: number
    _all: number
  }


  export type AlertAvgAggregateInputType = {
    id?: true
    endpointId?: true
  }

  export type AlertSumAggregateInputType = {
    id?: true
    endpointId?: true
  }

  export type AlertMinAggregateInputType = {
    id?: true
    status?: true
    message?: true
    createdAt?: true
    resolvedAt?: true
    endpointId?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    status?: true
    message?: true
    createdAt?: true
    resolvedAt?: true
    endpointId?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    status?: true
    message?: true
    createdAt?: true
    resolvedAt?: true
    endpointId?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _avg?: AlertAvgAggregateInputType
    _sum?: AlertSumAggregateInputType
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: number
    status: $Enums.AlertStatus
    message: string | null
    createdAt: Date
    resolvedAt: Date | null
    endpointId: number
    _count: AlertCountAggregateOutputType | null
    _avg: AlertAvgAggregateOutputType | null
    _sum: AlertSumAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    endpointId?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    endpointId?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    endpointId?: boolean
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    status?: boolean
    message?: boolean
    createdAt?: boolean
    resolvedAt?: boolean
    endpointId?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "message" | "createdAt" | "resolvedAt" | "endpointId", ExtArgs["result"]["alert"]>
  export type AlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type AlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }
  export type AlertIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoint?: boolean | EndpointDefaultArgs<ExtArgs>
  }

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {
      endpoint: Prisma.$EndpointPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: $Enums.AlertStatus
      message: string | null
      createdAt: Date
      resolvedAt: Date | null
      endpointId: number
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
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
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    endpoint<T extends EndpointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EndpointDefaultArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'Int'>
    readonly status: FieldRef<"Alert", 'AlertStatus'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly resolvedAt: FieldRef<"Alert", 'DateTime'>
    readonly endpointId: FieldRef<"Alert", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertInclude<ExtArgs> | null
  }


  /**
   * Model NotificationChannel
   */

  export type AggregateNotificationChannel = {
    _count: NotificationChannelCountAggregateOutputType | null
    _avg: NotificationChannelAvgAggregateOutputType | null
    _sum: NotificationChannelSumAggregateOutputType | null
    _min: NotificationChannelMinAggregateOutputType | null
    _max: NotificationChannelMaxAggregateOutputType | null
  }

  export type NotificationChannelAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationChannelSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationChannelMinAggregateOutputType = {
    id: number | null
    type: $Enums.NotificationType | null
    target: string | null
    isDefault: boolean | null
    userId: number | null
  }

  export type NotificationChannelMaxAggregateOutputType = {
    id: number | null
    type: $Enums.NotificationType | null
    target: string | null
    isDefault: boolean | null
    userId: number | null
  }

  export type NotificationChannelCountAggregateOutputType = {
    id: number
    type: number
    target: number
    isDefault: number
    userId: number
    _all: number
  }


  export type NotificationChannelAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationChannelSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationChannelMinAggregateInputType = {
    id?: true
    type?: true
    target?: true
    isDefault?: true
    userId?: true
  }

  export type NotificationChannelMaxAggregateInputType = {
    id?: true
    type?: true
    target?: true
    isDefault?: true
    userId?: true
  }

  export type NotificationChannelCountAggregateInputType = {
    id?: true
    type?: true
    target?: true
    isDefault?: true
    userId?: true
    _all?: true
  }

  export type NotificationChannelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationChannel to aggregate.
     */
    where?: NotificationChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationChannels to fetch.
     */
    orderBy?: NotificationChannelOrderByWithRelationInput | NotificationChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotificationChannels
    **/
    _count?: true | NotificationChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationChannelMaxAggregateInputType
  }

  export type GetNotificationChannelAggregateType<T extends NotificationChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateNotificationChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotificationChannel[P]>
      : GetScalarType<T[P], AggregateNotificationChannel[P]>
  }




  export type NotificationChannelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationChannelWhereInput
    orderBy?: NotificationChannelOrderByWithAggregationInput | NotificationChannelOrderByWithAggregationInput[]
    by: NotificationChannelScalarFieldEnum[] | NotificationChannelScalarFieldEnum
    having?: NotificationChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationChannelCountAggregateInputType | true
    _avg?: NotificationChannelAvgAggregateInputType
    _sum?: NotificationChannelSumAggregateInputType
    _min?: NotificationChannelMinAggregateInputType
    _max?: NotificationChannelMaxAggregateInputType
  }

  export type NotificationChannelGroupByOutputType = {
    id: number
    type: $Enums.NotificationType
    target: string
    isDefault: boolean
    userId: number
    _count: NotificationChannelCountAggregateOutputType | null
    _avg: NotificationChannelAvgAggregateOutputType | null
    _sum: NotificationChannelSumAggregateOutputType | null
    _min: NotificationChannelMinAggregateOutputType | null
    _max: NotificationChannelMaxAggregateOutputType | null
  }

  type GetNotificationChannelGroupByPayload<T extends NotificationChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationChannelGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationChannelGroupByOutputType[P]>
        }
      >
    >


  export type NotificationChannelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    target?: boolean
    isDefault?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationChannel"]>

  export type NotificationChannelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    target?: boolean
    isDefault?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationChannel"]>

  export type NotificationChannelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    target?: boolean
    isDefault?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notificationChannel"]>

  export type NotificationChannelSelectScalar = {
    id?: boolean
    type?: boolean
    target?: boolean
    isDefault?: boolean
    userId?: boolean
  }

  export type NotificationChannelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "target" | "isDefault" | "userId", ExtArgs["result"]["notificationChannel"]>
  export type NotificationChannelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationChannelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationChannelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationChannelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotificationChannel"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: $Enums.NotificationType
      target: string
      isDefault: boolean
      userId: number
    }, ExtArgs["result"]["notificationChannel"]>
    composites: {}
  }

  type NotificationChannelGetPayload<S extends boolean | null | undefined | NotificationChannelDefaultArgs> = $Result.GetResult<Prisma.$NotificationChannelPayload, S>

  type NotificationChannelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationChannelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationChannelCountAggregateInputType | true
    }

  export interface NotificationChannelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotificationChannel'], meta: { name: 'NotificationChannel' } }
    /**
     * Find zero or one NotificationChannel that matches the filter.
     * @param {NotificationChannelFindUniqueArgs} args - Arguments to find a NotificationChannel
     * @example
     * // Get one NotificationChannel
     * const notificationChannel = await prisma.notificationChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationChannelFindUniqueArgs>(args: SelectSubset<T, NotificationChannelFindUniqueArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotificationChannel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationChannelFindUniqueOrThrowArgs} args - Arguments to find a NotificationChannel
     * @example
     * // Get one NotificationChannel
     * const notificationChannel = await prisma.notificationChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationChannelFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationChannelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelFindFirstArgs} args - Arguments to find a NotificationChannel
     * @example
     * // Get one NotificationChannel
     * const notificationChannel = await prisma.notificationChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationChannelFindFirstArgs>(args?: SelectSubset<T, NotificationChannelFindFirstArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotificationChannel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelFindFirstOrThrowArgs} args - Arguments to find a NotificationChannel
     * @example
     * // Get one NotificationChannel
     * const notificationChannel = await prisma.notificationChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationChannelFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationChannelFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotificationChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotificationChannels
     * const notificationChannels = await prisma.notificationChannel.findMany()
     * 
     * // Get first 10 NotificationChannels
     * const notificationChannels = await prisma.notificationChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationChannelWithIdOnly = await prisma.notificationChannel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationChannelFindManyArgs>(args?: SelectSubset<T, NotificationChannelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotificationChannel.
     * @param {NotificationChannelCreateArgs} args - Arguments to create a NotificationChannel.
     * @example
     * // Create one NotificationChannel
     * const NotificationChannel = await prisma.notificationChannel.create({
     *   data: {
     *     // ... data to create a NotificationChannel
     *   }
     * })
     * 
     */
    create<T extends NotificationChannelCreateArgs>(args: SelectSubset<T, NotificationChannelCreateArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotificationChannels.
     * @param {NotificationChannelCreateManyArgs} args - Arguments to create many NotificationChannels.
     * @example
     * // Create many NotificationChannels
     * const notificationChannel = await prisma.notificationChannel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationChannelCreateManyArgs>(args?: SelectSubset<T, NotificationChannelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NotificationChannels and returns the data saved in the database.
     * @param {NotificationChannelCreateManyAndReturnArgs} args - Arguments to create many NotificationChannels.
     * @example
     * // Create many NotificationChannels
     * const notificationChannel = await prisma.notificationChannel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NotificationChannels and only return the `id`
     * const notificationChannelWithIdOnly = await prisma.notificationChannel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationChannelCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationChannelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NotificationChannel.
     * @param {NotificationChannelDeleteArgs} args - Arguments to delete one NotificationChannel.
     * @example
     * // Delete one NotificationChannel
     * const NotificationChannel = await prisma.notificationChannel.delete({
     *   where: {
     *     // ... filter to delete one NotificationChannel
     *   }
     * })
     * 
     */
    delete<T extends NotificationChannelDeleteArgs>(args: SelectSubset<T, NotificationChannelDeleteArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotificationChannel.
     * @param {NotificationChannelUpdateArgs} args - Arguments to update one NotificationChannel.
     * @example
     * // Update one NotificationChannel
     * const notificationChannel = await prisma.notificationChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationChannelUpdateArgs>(args: SelectSubset<T, NotificationChannelUpdateArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotificationChannels.
     * @param {NotificationChannelDeleteManyArgs} args - Arguments to filter NotificationChannels to delete.
     * @example
     * // Delete a few NotificationChannels
     * const { count } = await prisma.notificationChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationChannelDeleteManyArgs>(args?: SelectSubset<T, NotificationChannelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotificationChannels
     * const notificationChannel = await prisma.notificationChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationChannelUpdateManyArgs>(args: SelectSubset<T, NotificationChannelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotificationChannels and returns the data updated in the database.
     * @param {NotificationChannelUpdateManyAndReturnArgs} args - Arguments to update many NotificationChannels.
     * @example
     * // Update many NotificationChannels
     * const notificationChannel = await prisma.notificationChannel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NotificationChannels and only return the `id`
     * const notificationChannelWithIdOnly = await prisma.notificationChannel.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationChannelUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationChannelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NotificationChannel.
     * @param {NotificationChannelUpsertArgs} args - Arguments to update or create a NotificationChannel.
     * @example
     * // Update or create a NotificationChannel
     * const notificationChannel = await prisma.notificationChannel.upsert({
     *   create: {
     *     // ... data to create a NotificationChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotificationChannel we want to update
     *   }
     * })
     */
    upsert<T extends NotificationChannelUpsertArgs>(args: SelectSubset<T, NotificationChannelUpsertArgs<ExtArgs>>): Prisma__NotificationChannelClient<$Result.GetResult<Prisma.$NotificationChannelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotificationChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelCountArgs} args - Arguments to filter NotificationChannels to count.
     * @example
     * // Count the number of NotificationChannels
     * const count = await prisma.notificationChannel.count({
     *   where: {
     *     // ... the filter for the NotificationChannels we want to count
     *   }
     * })
    **/
    count<T extends NotificationChannelCountArgs>(
      args?: Subset<T, NotificationChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotificationChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationChannelAggregateArgs>(args: Subset<T, NotificationChannelAggregateArgs>): Prisma.PrismaPromise<GetNotificationChannelAggregateType<T>>

    /**
     * Group by NotificationChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationChannelGroupByArgs} args - Group by arguments.
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
      T extends NotificationChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationChannelGroupByArgs['orderBy'] }
        : { orderBy?: NotificationChannelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotificationChannel model
   */
  readonly fields: NotificationChannelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotificationChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationChannelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NotificationChannel model
   */
  interface NotificationChannelFieldRefs {
    readonly id: FieldRef<"NotificationChannel", 'Int'>
    readonly type: FieldRef<"NotificationChannel", 'NotificationType'>
    readonly target: FieldRef<"NotificationChannel", 'String'>
    readonly isDefault: FieldRef<"NotificationChannel", 'Boolean'>
    readonly userId: FieldRef<"NotificationChannel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NotificationChannel findUnique
   */
  export type NotificationChannelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * Filter, which NotificationChannel to fetch.
     */
    where: NotificationChannelWhereUniqueInput
  }

  /**
   * NotificationChannel findUniqueOrThrow
   */
  export type NotificationChannelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * Filter, which NotificationChannel to fetch.
     */
    where: NotificationChannelWhereUniqueInput
  }

  /**
   * NotificationChannel findFirst
   */
  export type NotificationChannelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * Filter, which NotificationChannel to fetch.
     */
    where?: NotificationChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationChannels to fetch.
     */
    orderBy?: NotificationChannelOrderByWithRelationInput | NotificationChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationChannels.
     */
    cursor?: NotificationChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationChannels.
     */
    distinct?: NotificationChannelScalarFieldEnum | NotificationChannelScalarFieldEnum[]
  }

  /**
   * NotificationChannel findFirstOrThrow
   */
  export type NotificationChannelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * Filter, which NotificationChannel to fetch.
     */
    where?: NotificationChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationChannels to fetch.
     */
    orderBy?: NotificationChannelOrderByWithRelationInput | NotificationChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotificationChannels.
     */
    cursor?: NotificationChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotificationChannels.
     */
    distinct?: NotificationChannelScalarFieldEnum | NotificationChannelScalarFieldEnum[]
  }

  /**
   * NotificationChannel findMany
   */
  export type NotificationChannelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * Filter, which NotificationChannels to fetch.
     */
    where?: NotificationChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotificationChannels to fetch.
     */
    orderBy?: NotificationChannelOrderByWithRelationInput | NotificationChannelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotificationChannels.
     */
    cursor?: NotificationChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotificationChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotificationChannels.
     */
    skip?: number
    distinct?: NotificationChannelScalarFieldEnum | NotificationChannelScalarFieldEnum[]
  }

  /**
   * NotificationChannel create
   */
  export type NotificationChannelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * The data needed to create a NotificationChannel.
     */
    data: XOR<NotificationChannelCreateInput, NotificationChannelUncheckedCreateInput>
  }

  /**
   * NotificationChannel createMany
   */
  export type NotificationChannelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotificationChannels.
     */
    data: NotificationChannelCreateManyInput | NotificationChannelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotificationChannel createManyAndReturn
   */
  export type NotificationChannelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * The data used to create many NotificationChannels.
     */
    data: NotificationChannelCreateManyInput | NotificationChannelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationChannel update
   */
  export type NotificationChannelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * The data needed to update a NotificationChannel.
     */
    data: XOR<NotificationChannelUpdateInput, NotificationChannelUncheckedUpdateInput>
    /**
     * Choose, which NotificationChannel to update.
     */
    where: NotificationChannelWhereUniqueInput
  }

  /**
   * NotificationChannel updateMany
   */
  export type NotificationChannelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotificationChannels.
     */
    data: XOR<NotificationChannelUpdateManyMutationInput, NotificationChannelUncheckedUpdateManyInput>
    /**
     * Filter which NotificationChannels to update
     */
    where?: NotificationChannelWhereInput
    /**
     * Limit how many NotificationChannels to update.
     */
    limit?: number
  }

  /**
   * NotificationChannel updateManyAndReturn
   */
  export type NotificationChannelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * The data used to update NotificationChannels.
     */
    data: XOR<NotificationChannelUpdateManyMutationInput, NotificationChannelUncheckedUpdateManyInput>
    /**
     * Filter which NotificationChannels to update
     */
    where?: NotificationChannelWhereInput
    /**
     * Limit how many NotificationChannels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NotificationChannel upsert
   */
  export type NotificationChannelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * The filter to search for the NotificationChannel to update in case it exists.
     */
    where: NotificationChannelWhereUniqueInput
    /**
     * In case the NotificationChannel found by the `where` argument doesn't exist, create a new NotificationChannel with this data.
     */
    create: XOR<NotificationChannelCreateInput, NotificationChannelUncheckedCreateInput>
    /**
     * In case the NotificationChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationChannelUpdateInput, NotificationChannelUncheckedUpdateInput>
  }

  /**
   * NotificationChannel delete
   */
  export type NotificationChannelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
    /**
     * Filter which NotificationChannel to delete.
     */
    where: NotificationChannelWhereUniqueInput
  }

  /**
   * NotificationChannel deleteMany
   */
  export type NotificationChannelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotificationChannels to delete
     */
    where?: NotificationChannelWhereInput
    /**
     * Limit how many NotificationChannels to delete.
     */
    limit?: number
  }

  /**
   * NotificationChannel without action
   */
  export type NotificationChannelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotificationChannel
     */
    select?: NotificationChannelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotificationChannel
     */
    omit?: NotificationChannelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationChannelInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EndpointScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    isActive: 'isActive',
    checkIntervalSec: 'checkIntervalSec',
    consecutiveFails: 'consecutiveFails',
    alertOnConsecutiveFails: 'alertOnConsecutiveFails',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type EndpointScalarFieldEnum = (typeof EndpointScalarFieldEnum)[keyof typeof EndpointScalarFieldEnum]


  export const EndpointMetricScalarFieldEnum: {
    timestamp: 'timestamp',
    responseTimeMs: 'responseTimeMs',
    statusCode: 'statusCode',
    status: 'status',
    endpointId: 'endpointId'
  };

  export type EndpointMetricScalarFieldEnum = (typeof EndpointMetricScalarFieldEnum)[keyof typeof EndpointMetricScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    status: 'status',
    message: 'message',
    createdAt: 'createdAt',
    resolvedAt: 'resolvedAt',
    endpointId: 'endpointId'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const NotificationChannelScalarFieldEnum: {
    id: 'id',
    type: 'type',
    target: 'target',
    isDefault: 'isDefault',
    userId: 'userId'
  };

  export type NotificationChannelScalarFieldEnum = (typeof NotificationChannelScalarFieldEnum)[keyof typeof NotificationChannelScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PingStatus'
   */
  export type EnumPingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PingStatus'>
    


  /**
   * Reference to a field of type 'PingStatus[]'
   */
  export type ListEnumPingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PingStatus[]'>
    


  /**
   * Reference to a field of type 'AlertStatus'
   */
  export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>
    


  /**
   * Reference to a field of type 'AlertStatus[]'
   */
  export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>
    


  /**
   * Reference to a field of type 'NotificationType'
   */
  export type EnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType'>
    


  /**
   * Reference to a field of type 'NotificationType[]'
   */
  export type ListEnumNotificationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NotificationType[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    endpoints?: EndpointListRelationFilter
    notificationChannels?: NotificationChannelListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    endpoints?: EndpointOrderByRelationAggregateInput
    notificationChannels?: NotificationChannelOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    endpoints?: EndpointListRelationFilter
    notificationChannels?: NotificationChannelListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EndpointWhereInput = {
    AND?: EndpointWhereInput | EndpointWhereInput[]
    OR?: EndpointWhereInput[]
    NOT?: EndpointWhereInput | EndpointWhereInput[]
    id?: IntFilter<"Endpoint"> | number
    name?: StringFilter<"Endpoint"> | string
    url?: StringFilter<"Endpoint"> | string
    isActive?: BoolFilter<"Endpoint"> | boolean
    checkIntervalSec?: IntFilter<"Endpoint"> | number
    consecutiveFails?: IntFilter<"Endpoint"> | number
    alertOnConsecutiveFails?: IntFilter<"Endpoint"> | number
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeFilter<"Endpoint"> | Date | string
    userId?: IntFilter<"Endpoint"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metrics?: EndpointMetricListRelationFilter
    alerts?: AlertListRelationFilter
  }

  export type EndpointOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    metrics?: EndpointMetricOrderByRelationAggregateInput
    alerts?: AlertOrderByRelationAggregateInput
  }

  export type EndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_url?: EndpointUserIdUrlCompoundUniqueInput
    AND?: EndpointWhereInput | EndpointWhereInput[]
    OR?: EndpointWhereInput[]
    NOT?: EndpointWhereInput | EndpointWhereInput[]
    name?: StringFilter<"Endpoint"> | string
    url?: StringFilter<"Endpoint"> | string
    isActive?: BoolFilter<"Endpoint"> | boolean
    checkIntervalSec?: IntFilter<"Endpoint"> | number
    consecutiveFails?: IntFilter<"Endpoint"> | number
    alertOnConsecutiveFails?: IntFilter<"Endpoint"> | number
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeFilter<"Endpoint"> | Date | string
    userId?: IntFilter<"Endpoint"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    metrics?: EndpointMetricListRelationFilter
    alerts?: AlertListRelationFilter
  }, "id" | "userId_url">

  export type EndpointOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: EndpointCountOrderByAggregateInput
    _avg?: EndpointAvgOrderByAggregateInput
    _max?: EndpointMaxOrderByAggregateInput
    _min?: EndpointMinOrderByAggregateInput
    _sum?: EndpointSumOrderByAggregateInput
  }

  export type EndpointScalarWhereWithAggregatesInput = {
    AND?: EndpointScalarWhereWithAggregatesInput | EndpointScalarWhereWithAggregatesInput[]
    OR?: EndpointScalarWhereWithAggregatesInput[]
    NOT?: EndpointScalarWhereWithAggregatesInput | EndpointScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Endpoint"> | number
    name?: StringWithAggregatesFilter<"Endpoint"> | string
    url?: StringWithAggregatesFilter<"Endpoint"> | string
    isActive?: BoolWithAggregatesFilter<"Endpoint"> | boolean
    checkIntervalSec?: IntWithAggregatesFilter<"Endpoint"> | number
    consecutiveFails?: IntWithAggregatesFilter<"Endpoint"> | number
    alertOnConsecutiveFails?: IntWithAggregatesFilter<"Endpoint"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Endpoint"> | Date | string
    userId?: IntWithAggregatesFilter<"Endpoint"> | number
  }

  export type EndpointMetricWhereInput = {
    AND?: EndpointMetricWhereInput | EndpointMetricWhereInput[]
    OR?: EndpointMetricWhereInput[]
    NOT?: EndpointMetricWhereInput | EndpointMetricWhereInput[]
    timestamp?: DateTimeFilter<"EndpointMetric"> | Date | string
    responseTimeMs?: IntFilter<"EndpointMetric"> | number
    statusCode?: IntFilter<"EndpointMetric"> | number
    status?: EnumPingStatusFilter<"EndpointMetric"> | $Enums.PingStatus
    endpointId?: IntFilter<"EndpointMetric"> | number
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
  }

  export type EndpointMetricOrderByWithRelationInput = {
    timestamp?: SortOrder
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    status?: SortOrder
    endpointId?: SortOrder
    endpoint?: EndpointOrderByWithRelationInput
  }

  export type EndpointMetricWhereUniqueInput = Prisma.AtLeast<{
    timestamp_endpointId?: EndpointMetricTimestampEndpointIdCompoundUniqueInput
    AND?: EndpointMetricWhereInput | EndpointMetricWhereInput[]
    OR?: EndpointMetricWhereInput[]
    NOT?: EndpointMetricWhereInput | EndpointMetricWhereInput[]
    timestamp?: DateTimeFilter<"EndpointMetric"> | Date | string
    responseTimeMs?: IntFilter<"EndpointMetric"> | number
    statusCode?: IntFilter<"EndpointMetric"> | number
    status?: EnumPingStatusFilter<"EndpointMetric"> | $Enums.PingStatus
    endpointId?: IntFilter<"EndpointMetric"> | number
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
  }, "timestamp_endpointId">

  export type EndpointMetricOrderByWithAggregationInput = {
    timestamp?: SortOrder
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    status?: SortOrder
    endpointId?: SortOrder
    _count?: EndpointMetricCountOrderByAggregateInput
    _avg?: EndpointMetricAvgOrderByAggregateInput
    _max?: EndpointMetricMaxOrderByAggregateInput
    _min?: EndpointMetricMinOrderByAggregateInput
    _sum?: EndpointMetricSumOrderByAggregateInput
  }

  export type EndpointMetricScalarWhereWithAggregatesInput = {
    AND?: EndpointMetricScalarWhereWithAggregatesInput | EndpointMetricScalarWhereWithAggregatesInput[]
    OR?: EndpointMetricScalarWhereWithAggregatesInput[]
    NOT?: EndpointMetricScalarWhereWithAggregatesInput | EndpointMetricScalarWhereWithAggregatesInput[]
    timestamp?: DateTimeWithAggregatesFilter<"EndpointMetric"> | Date | string
    responseTimeMs?: IntWithAggregatesFilter<"EndpointMetric"> | number
    statusCode?: IntWithAggregatesFilter<"EndpointMetric"> | number
    status?: EnumPingStatusWithAggregatesFilter<"EndpointMetric"> | $Enums.PingStatus
    endpointId?: IntWithAggregatesFilter<"EndpointMetric"> | number
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: IntFilter<"Alert"> | number
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    message?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    endpointId?: IntFilter<"Alert"> | number
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    endpointId?: SortOrder
    endpoint?: EndpointOrderByWithRelationInput
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    message?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    endpointId?: IntFilter<"Alert"> | number
    endpoint?: XOR<EndpointScalarRelationFilter, EndpointWhereInput>
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    message?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    endpointId?: SortOrder
    _count?: AlertCountOrderByAggregateInput
    _avg?: AlertAvgOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
    _sum?: AlertSumOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Alert"> | number
    status?: EnumAlertStatusWithAggregatesFilter<"Alert"> | $Enums.AlertStatus
    message?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Alert"> | Date | string | null
    endpointId?: IntWithAggregatesFilter<"Alert"> | number
  }

  export type NotificationChannelWhereInput = {
    AND?: NotificationChannelWhereInput | NotificationChannelWhereInput[]
    OR?: NotificationChannelWhereInput[]
    NOT?: NotificationChannelWhereInput | NotificationChannelWhereInput[]
    id?: IntFilter<"NotificationChannel"> | number
    type?: EnumNotificationTypeFilter<"NotificationChannel"> | $Enums.NotificationType
    target?: StringFilter<"NotificationChannel"> | string
    isDefault?: BoolFilter<"NotificationChannel"> | boolean
    userId?: IntFilter<"NotificationChannel"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationChannelOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    target?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationChannelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationChannelWhereInput | NotificationChannelWhereInput[]
    OR?: NotificationChannelWhereInput[]
    NOT?: NotificationChannelWhereInput | NotificationChannelWhereInput[]
    type?: EnumNotificationTypeFilter<"NotificationChannel"> | $Enums.NotificationType
    target?: StringFilter<"NotificationChannel"> | string
    isDefault?: BoolFilter<"NotificationChannel"> | boolean
    userId?: IntFilter<"NotificationChannel"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationChannelOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    target?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
    _count?: NotificationChannelCountOrderByAggregateInput
    _avg?: NotificationChannelAvgOrderByAggregateInput
    _max?: NotificationChannelMaxOrderByAggregateInput
    _min?: NotificationChannelMinOrderByAggregateInput
    _sum?: NotificationChannelSumOrderByAggregateInput
  }

  export type NotificationChannelScalarWhereWithAggregatesInput = {
    AND?: NotificationChannelScalarWhereWithAggregatesInput | NotificationChannelScalarWhereWithAggregatesInput[]
    OR?: NotificationChannelScalarWhereWithAggregatesInput[]
    NOT?: NotificationChannelScalarWhereWithAggregatesInput | NotificationChannelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotificationChannel"> | number
    type?: EnumNotificationTypeWithAggregatesFilter<"NotificationChannel"> | $Enums.NotificationType
    target?: StringWithAggregatesFilter<"NotificationChannel"> | string
    isDefault?: BoolWithAggregatesFilter<"NotificationChannel"> | boolean
    userId?: IntWithAggregatesFilter<"NotificationChannel"> | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointCreateNestedManyWithoutUserInput
    notificationChannels?: NotificationChannelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutUserInput
    notificationChannels?: NotificationChannelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUpdateManyWithoutUserNestedInput
    notificationChannels?: NotificationChannelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutUserNestedInput
    notificationChannels?: NotificationChannelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointCreateInput = {
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEndpointsInput
    metrics?: EndpointMetricCreateNestedManyWithoutEndpointInput
    alerts?: AlertCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateInput = {
    id?: number
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    metrics?: EndpointMetricUncheckedCreateNestedManyWithoutEndpointInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEndpointsNestedInput
    metrics?: EndpointMetricUpdateManyWithoutEndpointNestedInput
    alerts?: AlertUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    metrics?: EndpointMetricUncheckedUpdateManyWithoutEndpointNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointCreateManyInput = {
    id?: number
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type EndpointUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type EndpointMetricCreateInput = {
    timestamp: Date | string
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
    endpoint: EndpointCreateNestedOneWithoutMetricsInput
  }

  export type EndpointMetricUncheckedCreateInput = {
    timestamp: Date | string
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
    endpointId: number
  }

  export type EndpointMetricUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
    endpoint?: EndpointUpdateOneRequiredWithoutMetricsNestedInput
  }

  export type EndpointMetricUncheckedUpdateInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
    endpointId?: IntFieldUpdateOperationsInput | number
  }

  export type EndpointMetricCreateManyInput = {
    timestamp: Date | string
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
    endpointId: number
  }

  export type EndpointMetricUpdateManyMutationInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
  }

  export type EndpointMetricUncheckedUpdateManyInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
    endpointId?: IntFieldUpdateOperationsInput | number
  }

  export type AlertCreateInput = {
    status: $Enums.AlertStatus
    message?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    endpoint: EndpointCreateNestedOneWithoutAlertsInput
  }

  export type AlertUncheckedCreateInput = {
    id?: number
    status: $Enums.AlertStatus
    message?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    endpointId: number
  }

  export type AlertUpdateInput = {
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endpoint?: EndpointUpdateOneRequiredWithoutAlertsNestedInput
  }

  export type AlertUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endpointId?: IntFieldUpdateOperationsInput | number
  }

  export type AlertCreateManyInput = {
    id?: number
    status: $Enums.AlertStatus
    message?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
    endpointId: number
  }

  export type AlertUpdateManyMutationInput = {
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endpointId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationChannelCreateInput = {
    type: $Enums.NotificationType
    target: string
    isDefault?: boolean
    user: UserCreateNestedOneWithoutNotificationChannelsInput
  }

  export type NotificationChannelUncheckedCreateInput = {
    id?: number
    type: $Enums.NotificationType
    target: string
    isDefault?: boolean
    userId: number
  }

  export type NotificationChannelUpdateInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationChannelsNestedInput
  }

  export type NotificationChannelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationChannelCreateManyInput = {
    id?: number
    type: $Enums.NotificationType
    target: string
    isDefault?: boolean
    userId: number
  }

  export type NotificationChannelUpdateManyMutationInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationChannelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
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

  export type EndpointListRelationFilter = {
    every?: EndpointWhereInput
    some?: EndpointWhereInput
    none?: EndpointWhereInput
  }

  export type NotificationChannelListRelationFilter = {
    every?: NotificationChannelWhereInput
    some?: NotificationChannelWhereInput
    none?: NotificationChannelWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EndpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EndpointMetricListRelationFilter = {
    every?: EndpointMetricWhereInput
    some?: EndpointMetricWhereInput
    none?: EndpointMetricWhereInput
  }

  export type AlertListRelationFilter = {
    every?: AlertWhereInput
    some?: AlertWhereInput
    none?: AlertWhereInput
  }

  export type EndpointMetricOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EndpointUserIdUrlCompoundUniqueInput = {
    userId: number
    url: string
  }

  export type EndpointCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EndpointAvgOrderByAggregateInput = {
    id?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    userId?: SortOrder
  }

  export type EndpointMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EndpointMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    isActive?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type EndpointSumOrderByAggregateInput = {
    id?: SortOrder
    checkIntervalSec?: SortOrder
    consecutiveFails?: SortOrder
    alertOnConsecutiveFails?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PingStatus | EnumPingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPingStatusFilter<$PrismaModel> | $Enums.PingStatus
  }

  export type EndpointScalarRelationFilter = {
    is?: EndpointWhereInput
    isNot?: EndpointWhereInput
  }

  export type EndpointMetricTimestampEndpointIdCompoundUniqueInput = {
    timestamp: Date | string
    endpointId: number
  }

  export type EndpointMetricCountOrderByAggregateInput = {
    timestamp?: SortOrder
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    status?: SortOrder
    endpointId?: SortOrder
  }

  export type EndpointMetricAvgOrderByAggregateInput = {
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    endpointId?: SortOrder
  }

  export type EndpointMetricMaxOrderByAggregateInput = {
    timestamp?: SortOrder
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    status?: SortOrder
    endpointId?: SortOrder
  }

  export type EndpointMetricMinOrderByAggregateInput = {
    timestamp?: SortOrder
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    status?: SortOrder
    endpointId?: SortOrder
  }

  export type EndpointMetricSumOrderByAggregateInput = {
    responseTimeMs?: SortOrder
    statusCode?: SortOrder
    endpointId?: SortOrder
  }

  export type EnumPingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PingStatus | EnumPingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPingStatusFilter<$PrismaModel>
    _max?: NestedEnumPingStatusFilter<$PrismaModel>
  }

  export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    endpointId?: SortOrder
  }

  export type AlertAvgOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    endpointId?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    resolvedAt?: SortOrder
    endpointId?: SortOrder
  }

  export type AlertSumOrderByAggregateInput = {
    id?: SortOrder
    endpointId?: SortOrder
  }

  export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NotificationChannelCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    target?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
  }

  export type NotificationChannelAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    target?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
  }

  export type NotificationChannelMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    target?: SortOrder
    isDefault?: SortOrder
    userId?: SortOrder
  }

  export type NotificationChannelSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EndpointCreateNestedManyWithoutUserInput = {
    create?: XOR<EndpointCreateWithoutUserInput, EndpointUncheckedCreateWithoutUserInput> | EndpointCreateWithoutUserInput[] | EndpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutUserInput | EndpointCreateOrConnectWithoutUserInput[]
    createMany?: EndpointCreateManyUserInputEnvelope
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
  }

  export type NotificationChannelCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationChannelCreateWithoutUserInput, NotificationChannelUncheckedCreateWithoutUserInput> | NotificationChannelCreateWithoutUserInput[] | NotificationChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationChannelCreateOrConnectWithoutUserInput | NotificationChannelCreateOrConnectWithoutUserInput[]
    createMany?: NotificationChannelCreateManyUserInputEnvelope
    connect?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
  }

  export type EndpointUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EndpointCreateWithoutUserInput, EndpointUncheckedCreateWithoutUserInput> | EndpointCreateWithoutUserInput[] | EndpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutUserInput | EndpointCreateOrConnectWithoutUserInput[]
    createMany?: EndpointCreateManyUserInputEnvelope
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
  }

  export type NotificationChannelUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationChannelCreateWithoutUserInput, NotificationChannelUncheckedCreateWithoutUserInput> | NotificationChannelCreateWithoutUserInput[] | NotificationChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationChannelCreateOrConnectWithoutUserInput | NotificationChannelCreateOrConnectWithoutUserInput[]
    createMany?: NotificationChannelCreateManyUserInputEnvelope
    connect?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
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

  export type EndpointUpdateManyWithoutUserNestedInput = {
    create?: XOR<EndpointCreateWithoutUserInput, EndpointUncheckedCreateWithoutUserInput> | EndpointCreateWithoutUserInput[] | EndpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutUserInput | EndpointCreateOrConnectWithoutUserInput[]
    upsert?: EndpointUpsertWithWhereUniqueWithoutUserInput | EndpointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EndpointCreateManyUserInputEnvelope
    set?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    disconnect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    delete?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    update?: EndpointUpdateWithWhereUniqueWithoutUserInput | EndpointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EndpointUpdateManyWithWhereWithoutUserInput | EndpointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
  }

  export type NotificationChannelUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationChannelCreateWithoutUserInput, NotificationChannelUncheckedCreateWithoutUserInput> | NotificationChannelCreateWithoutUserInput[] | NotificationChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationChannelCreateOrConnectWithoutUserInput | NotificationChannelCreateOrConnectWithoutUserInput[]
    upsert?: NotificationChannelUpsertWithWhereUniqueWithoutUserInput | NotificationChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationChannelCreateManyUserInputEnvelope
    set?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    disconnect?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    delete?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    connect?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    update?: NotificationChannelUpdateWithWhereUniqueWithoutUserInput | NotificationChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationChannelUpdateManyWithWhereWithoutUserInput | NotificationChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationChannelScalarWhereInput | NotificationChannelScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EndpointUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EndpointCreateWithoutUserInput, EndpointUncheckedCreateWithoutUserInput> | EndpointCreateWithoutUserInput[] | EndpointUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutUserInput | EndpointCreateOrConnectWithoutUserInput[]
    upsert?: EndpointUpsertWithWhereUniqueWithoutUserInput | EndpointUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EndpointCreateManyUserInputEnvelope
    set?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    disconnect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    delete?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    update?: EndpointUpdateWithWhereUniqueWithoutUserInput | EndpointUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EndpointUpdateManyWithWhereWithoutUserInput | EndpointUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
  }

  export type NotificationChannelUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationChannelCreateWithoutUserInput, NotificationChannelUncheckedCreateWithoutUserInput> | NotificationChannelCreateWithoutUserInput[] | NotificationChannelUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationChannelCreateOrConnectWithoutUserInput | NotificationChannelCreateOrConnectWithoutUserInput[]
    upsert?: NotificationChannelUpsertWithWhereUniqueWithoutUserInput | NotificationChannelUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationChannelCreateManyUserInputEnvelope
    set?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    disconnect?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    delete?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    connect?: NotificationChannelWhereUniqueInput | NotificationChannelWhereUniqueInput[]
    update?: NotificationChannelUpdateWithWhereUniqueWithoutUserInput | NotificationChannelUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationChannelUpdateManyWithWhereWithoutUserInput | NotificationChannelUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationChannelScalarWhereInput | NotificationChannelScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEndpointsInput = {
    create?: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEndpointsInput
    connect?: UserWhereUniqueInput
  }

  export type EndpointMetricCreateNestedManyWithoutEndpointInput = {
    create?: XOR<EndpointMetricCreateWithoutEndpointInput, EndpointMetricUncheckedCreateWithoutEndpointInput> | EndpointMetricCreateWithoutEndpointInput[] | EndpointMetricUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EndpointMetricCreateOrConnectWithoutEndpointInput | EndpointMetricCreateOrConnectWithoutEndpointInput[]
    createMany?: EndpointMetricCreateManyEndpointInputEnvelope
    connect?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
  }

  export type AlertCreateNestedManyWithoutEndpointInput = {
    create?: XOR<AlertCreateWithoutEndpointInput, AlertUncheckedCreateWithoutEndpointInput> | AlertCreateWithoutEndpointInput[] | AlertUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEndpointInput | AlertCreateOrConnectWithoutEndpointInput[]
    createMany?: AlertCreateManyEndpointInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type EndpointMetricUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<EndpointMetricCreateWithoutEndpointInput, EndpointMetricUncheckedCreateWithoutEndpointInput> | EndpointMetricCreateWithoutEndpointInput[] | EndpointMetricUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EndpointMetricCreateOrConnectWithoutEndpointInput | EndpointMetricCreateOrConnectWithoutEndpointInput[]
    createMany?: EndpointMetricCreateManyEndpointInputEnvelope
    connect?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
  }

  export type AlertUncheckedCreateNestedManyWithoutEndpointInput = {
    create?: XOR<AlertCreateWithoutEndpointInput, AlertUncheckedCreateWithoutEndpointInput> | AlertCreateWithoutEndpointInput[] | AlertUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEndpointInput | AlertCreateOrConnectWithoutEndpointInput[]
    createMany?: AlertCreateManyEndpointInputEnvelope
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutEndpointsNestedInput = {
    create?: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEndpointsInput
    upsert?: UserUpsertWithoutEndpointsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEndpointsInput, UserUpdateWithoutEndpointsInput>, UserUncheckedUpdateWithoutEndpointsInput>
  }

  export type EndpointMetricUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<EndpointMetricCreateWithoutEndpointInput, EndpointMetricUncheckedCreateWithoutEndpointInput> | EndpointMetricCreateWithoutEndpointInput[] | EndpointMetricUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EndpointMetricCreateOrConnectWithoutEndpointInput | EndpointMetricCreateOrConnectWithoutEndpointInput[]
    upsert?: EndpointMetricUpsertWithWhereUniqueWithoutEndpointInput | EndpointMetricUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: EndpointMetricCreateManyEndpointInputEnvelope
    set?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    disconnect?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    delete?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    connect?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    update?: EndpointMetricUpdateWithWhereUniqueWithoutEndpointInput | EndpointMetricUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: EndpointMetricUpdateManyWithWhereWithoutEndpointInput | EndpointMetricUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: EndpointMetricScalarWhereInput | EndpointMetricScalarWhereInput[]
  }

  export type AlertUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<AlertCreateWithoutEndpointInput, AlertUncheckedCreateWithoutEndpointInput> | AlertCreateWithoutEndpointInput[] | AlertUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEndpointInput | AlertCreateOrConnectWithoutEndpointInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutEndpointInput | AlertUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: AlertCreateManyEndpointInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutEndpointInput | AlertUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutEndpointInput | AlertUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type EndpointMetricUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<EndpointMetricCreateWithoutEndpointInput, EndpointMetricUncheckedCreateWithoutEndpointInput> | EndpointMetricCreateWithoutEndpointInput[] | EndpointMetricUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: EndpointMetricCreateOrConnectWithoutEndpointInput | EndpointMetricCreateOrConnectWithoutEndpointInput[]
    upsert?: EndpointMetricUpsertWithWhereUniqueWithoutEndpointInput | EndpointMetricUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: EndpointMetricCreateManyEndpointInputEnvelope
    set?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    disconnect?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    delete?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    connect?: EndpointMetricWhereUniqueInput | EndpointMetricWhereUniqueInput[]
    update?: EndpointMetricUpdateWithWhereUniqueWithoutEndpointInput | EndpointMetricUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: EndpointMetricUpdateManyWithWhereWithoutEndpointInput | EndpointMetricUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: EndpointMetricScalarWhereInput | EndpointMetricScalarWhereInput[]
  }

  export type AlertUncheckedUpdateManyWithoutEndpointNestedInput = {
    create?: XOR<AlertCreateWithoutEndpointInput, AlertUncheckedCreateWithoutEndpointInput> | AlertCreateWithoutEndpointInput[] | AlertUncheckedCreateWithoutEndpointInput[]
    connectOrCreate?: AlertCreateOrConnectWithoutEndpointInput | AlertCreateOrConnectWithoutEndpointInput[]
    upsert?: AlertUpsertWithWhereUniqueWithoutEndpointInput | AlertUpsertWithWhereUniqueWithoutEndpointInput[]
    createMany?: AlertCreateManyEndpointInputEnvelope
    set?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    disconnect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    delete?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    connect?: AlertWhereUniqueInput | AlertWhereUniqueInput[]
    update?: AlertUpdateWithWhereUniqueWithoutEndpointInput | AlertUpdateWithWhereUniqueWithoutEndpointInput[]
    updateMany?: AlertUpdateManyWithWhereWithoutEndpointInput | AlertUpdateManyWithWhereWithoutEndpointInput[]
    deleteMany?: AlertScalarWhereInput | AlertScalarWhereInput[]
  }

  export type EndpointCreateNestedOneWithoutMetricsInput = {
    create?: XOR<EndpointCreateWithoutMetricsInput, EndpointUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutMetricsInput
    connect?: EndpointWhereUniqueInput
  }

  export type EnumPingStatusFieldUpdateOperationsInput = {
    set?: $Enums.PingStatus
  }

  export type EndpointUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: XOR<EndpointCreateWithoutMetricsInput, EndpointUncheckedCreateWithoutMetricsInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutMetricsInput
    upsert?: EndpointUpsertWithoutMetricsInput
    connect?: EndpointWhereUniqueInput
    update?: XOR<XOR<EndpointUpdateToOneWithWhereWithoutMetricsInput, EndpointUpdateWithoutMetricsInput>, EndpointUncheckedUpdateWithoutMetricsInput>
  }

  export type EndpointCreateNestedOneWithoutAlertsInput = {
    create?: XOR<EndpointCreateWithoutAlertsInput, EndpointUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutAlertsInput
    connect?: EndpointWhereUniqueInput
  }

  export type EnumAlertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AlertStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EndpointUpdateOneRequiredWithoutAlertsNestedInput = {
    create?: XOR<EndpointCreateWithoutAlertsInput, EndpointUncheckedCreateWithoutAlertsInput>
    connectOrCreate?: EndpointCreateOrConnectWithoutAlertsInput
    upsert?: EndpointUpsertWithoutAlertsInput
    connect?: EndpointWhereUniqueInput
    update?: XOR<XOR<EndpointUpdateToOneWithWhereWithoutAlertsInput, EndpointUpdateWithoutAlertsInput>, EndpointUncheckedUpdateWithoutAlertsInput>
  }

  export type UserCreateNestedOneWithoutNotificationChannelsInput = {
    create?: XOR<UserCreateWithoutNotificationChannelsInput, UserUncheckedCreateWithoutNotificationChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationChannelsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumNotificationTypeFieldUpdateOperationsInput = {
    set?: $Enums.NotificationType
  }

  export type UserUpdateOneRequiredWithoutNotificationChannelsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationChannelsInput, UserUncheckedCreateWithoutNotificationChannelsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationChannelsInput
    upsert?: UserUpsertWithoutNotificationChannelsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationChannelsInput, UserUpdateWithoutNotificationChannelsInput>, UserUncheckedUpdateWithoutNotificationChannelsInput>
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

  export type NestedEnumPingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PingStatus | EnumPingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPingStatusFilter<$PrismaModel> | $Enums.PingStatus
  }

  export type NestedEnumPingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PingStatus | EnumPingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PingStatus[] | ListEnumPingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPingStatusWithAggregatesFilter<$PrismaModel> | $Enums.PingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPingStatusFilter<$PrismaModel>
    _max?: NestedEnumPingStatusFilter<$PrismaModel>
  }

  export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumNotificationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeFilter<$PrismaModel> | $Enums.NotificationType
  }

  export type NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NotificationType | EnumNotificationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.NotificationType[] | ListEnumNotificationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumNotificationTypeWithAggregatesFilter<$PrismaModel> | $Enums.NotificationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNotificationTypeFilter<$PrismaModel>
    _max?: NestedEnumNotificationTypeFilter<$PrismaModel>
  }

  export type EndpointCreateWithoutUserInput = {
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: EndpointMetricCreateNestedManyWithoutEndpointInput
    alerts?: AlertCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    metrics?: EndpointMetricUncheckedCreateNestedManyWithoutEndpointInput
    alerts?: AlertUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointCreateOrConnectWithoutUserInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutUserInput, EndpointUncheckedCreateWithoutUserInput>
  }

  export type EndpointCreateManyUserInputEnvelope = {
    data: EndpointCreateManyUserInput | EndpointCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationChannelCreateWithoutUserInput = {
    type: $Enums.NotificationType
    target: string
    isDefault?: boolean
  }

  export type NotificationChannelUncheckedCreateWithoutUserInput = {
    id?: number
    type: $Enums.NotificationType
    target: string
    isDefault?: boolean
  }

  export type NotificationChannelCreateOrConnectWithoutUserInput = {
    where: NotificationChannelWhereUniqueInput
    create: XOR<NotificationChannelCreateWithoutUserInput, NotificationChannelUncheckedCreateWithoutUserInput>
  }

  export type NotificationChannelCreateManyUserInputEnvelope = {
    data: NotificationChannelCreateManyUserInput | NotificationChannelCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EndpointUpsertWithWhereUniqueWithoutUserInput = {
    where: EndpointWhereUniqueInput
    update: XOR<EndpointUpdateWithoutUserInput, EndpointUncheckedUpdateWithoutUserInput>
    create: XOR<EndpointCreateWithoutUserInput, EndpointUncheckedCreateWithoutUserInput>
  }

  export type EndpointUpdateWithWhereUniqueWithoutUserInput = {
    where: EndpointWhereUniqueInput
    data: XOR<EndpointUpdateWithoutUserInput, EndpointUncheckedUpdateWithoutUserInput>
  }

  export type EndpointUpdateManyWithWhereWithoutUserInput = {
    where: EndpointScalarWhereInput
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyWithoutUserInput>
  }

  export type EndpointScalarWhereInput = {
    AND?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
    OR?: EndpointScalarWhereInput[]
    NOT?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
    id?: IntFilter<"Endpoint"> | number
    name?: StringFilter<"Endpoint"> | string
    url?: StringFilter<"Endpoint"> | string
    isActive?: BoolFilter<"Endpoint"> | boolean
    checkIntervalSec?: IntFilter<"Endpoint"> | number
    consecutiveFails?: IntFilter<"Endpoint"> | number
    alertOnConsecutiveFails?: IntFilter<"Endpoint"> | number
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    updatedAt?: DateTimeFilter<"Endpoint"> | Date | string
    userId?: IntFilter<"Endpoint"> | number
  }

  export type NotificationChannelUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationChannelWhereUniqueInput
    update: XOR<NotificationChannelUpdateWithoutUserInput, NotificationChannelUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationChannelCreateWithoutUserInput, NotificationChannelUncheckedCreateWithoutUserInput>
  }

  export type NotificationChannelUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationChannelWhereUniqueInput
    data: XOR<NotificationChannelUpdateWithoutUserInput, NotificationChannelUncheckedUpdateWithoutUserInput>
  }

  export type NotificationChannelUpdateManyWithWhereWithoutUserInput = {
    where: NotificationChannelScalarWhereInput
    data: XOR<NotificationChannelUpdateManyMutationInput, NotificationChannelUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationChannelScalarWhereInput = {
    AND?: NotificationChannelScalarWhereInput | NotificationChannelScalarWhereInput[]
    OR?: NotificationChannelScalarWhereInput[]
    NOT?: NotificationChannelScalarWhereInput | NotificationChannelScalarWhereInput[]
    id?: IntFilter<"NotificationChannel"> | number
    type?: EnumNotificationTypeFilter<"NotificationChannel"> | $Enums.NotificationType
    target?: StringFilter<"NotificationChannel"> | string
    isDefault?: BoolFilter<"NotificationChannel"> | boolean
    userId?: IntFilter<"NotificationChannel"> | number
  }

  export type UserCreateWithoutEndpointsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationChannels?: NotificationChannelCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEndpointsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notificationChannels?: NotificationChannelUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEndpointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
  }

  export type EndpointMetricCreateWithoutEndpointInput = {
    timestamp: Date | string
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
  }

  export type EndpointMetricUncheckedCreateWithoutEndpointInput = {
    timestamp: Date | string
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
  }

  export type EndpointMetricCreateOrConnectWithoutEndpointInput = {
    where: EndpointMetricWhereUniqueInput
    create: XOR<EndpointMetricCreateWithoutEndpointInput, EndpointMetricUncheckedCreateWithoutEndpointInput>
  }

  export type EndpointMetricCreateManyEndpointInputEnvelope = {
    data: EndpointMetricCreateManyEndpointInput | EndpointMetricCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type AlertCreateWithoutEndpointInput = {
    status: $Enums.AlertStatus
    message?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertUncheckedCreateWithoutEndpointInput = {
    id?: number
    status: $Enums.AlertStatus
    message?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type AlertCreateOrConnectWithoutEndpointInput = {
    where: AlertWhereUniqueInput
    create: XOR<AlertCreateWithoutEndpointInput, AlertUncheckedCreateWithoutEndpointInput>
  }

  export type AlertCreateManyEndpointInputEnvelope = {
    data: AlertCreateManyEndpointInput | AlertCreateManyEndpointInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEndpointsInput = {
    update: XOR<UserUpdateWithoutEndpointsInput, UserUncheckedUpdateWithoutEndpointsInput>
    create: XOR<UserCreateWithoutEndpointsInput, UserUncheckedCreateWithoutEndpointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEndpointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEndpointsInput, UserUncheckedUpdateWithoutEndpointsInput>
  }

  export type UserUpdateWithoutEndpointsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationChannels?: NotificationChannelUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEndpointsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notificationChannels?: NotificationChannelUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EndpointMetricUpsertWithWhereUniqueWithoutEndpointInput = {
    where: EndpointMetricWhereUniqueInput
    update: XOR<EndpointMetricUpdateWithoutEndpointInput, EndpointMetricUncheckedUpdateWithoutEndpointInput>
    create: XOR<EndpointMetricCreateWithoutEndpointInput, EndpointMetricUncheckedCreateWithoutEndpointInput>
  }

  export type EndpointMetricUpdateWithWhereUniqueWithoutEndpointInput = {
    where: EndpointMetricWhereUniqueInput
    data: XOR<EndpointMetricUpdateWithoutEndpointInput, EndpointMetricUncheckedUpdateWithoutEndpointInput>
  }

  export type EndpointMetricUpdateManyWithWhereWithoutEndpointInput = {
    where: EndpointMetricScalarWhereInput
    data: XOR<EndpointMetricUpdateManyMutationInput, EndpointMetricUncheckedUpdateManyWithoutEndpointInput>
  }

  export type EndpointMetricScalarWhereInput = {
    AND?: EndpointMetricScalarWhereInput | EndpointMetricScalarWhereInput[]
    OR?: EndpointMetricScalarWhereInput[]
    NOT?: EndpointMetricScalarWhereInput | EndpointMetricScalarWhereInput[]
    timestamp?: DateTimeFilter<"EndpointMetric"> | Date | string
    responseTimeMs?: IntFilter<"EndpointMetric"> | number
    statusCode?: IntFilter<"EndpointMetric"> | number
    status?: EnumPingStatusFilter<"EndpointMetric"> | $Enums.PingStatus
    endpointId?: IntFilter<"EndpointMetric"> | number
  }

  export type AlertUpsertWithWhereUniqueWithoutEndpointInput = {
    where: AlertWhereUniqueInput
    update: XOR<AlertUpdateWithoutEndpointInput, AlertUncheckedUpdateWithoutEndpointInput>
    create: XOR<AlertCreateWithoutEndpointInput, AlertUncheckedCreateWithoutEndpointInput>
  }

  export type AlertUpdateWithWhereUniqueWithoutEndpointInput = {
    where: AlertWhereUniqueInput
    data: XOR<AlertUpdateWithoutEndpointInput, AlertUncheckedUpdateWithoutEndpointInput>
  }

  export type AlertUpdateManyWithWhereWithoutEndpointInput = {
    where: AlertScalarWhereInput
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyWithoutEndpointInput>
  }

  export type AlertScalarWhereInput = {
    AND?: AlertScalarWhereInput | AlertScalarWhereInput[]
    OR?: AlertScalarWhereInput[]
    NOT?: AlertScalarWhereInput | AlertScalarWhereInput[]
    id?: IntFilter<"Alert"> | number
    status?: EnumAlertStatusFilter<"Alert"> | $Enums.AlertStatus
    message?: StringNullableFilter<"Alert"> | string | null
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    resolvedAt?: DateTimeNullableFilter<"Alert"> | Date | string | null
    endpointId?: IntFilter<"Alert"> | number
  }

  export type EndpointCreateWithoutMetricsInput = {
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEndpointsInput
    alerts?: AlertCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateWithoutMetricsInput = {
    id?: number
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    alerts?: AlertUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointCreateOrConnectWithoutMetricsInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutMetricsInput, EndpointUncheckedCreateWithoutMetricsInput>
  }

  export type EndpointUpsertWithoutMetricsInput = {
    update: XOR<EndpointUpdateWithoutMetricsInput, EndpointUncheckedUpdateWithoutMetricsInput>
    create: XOR<EndpointCreateWithoutMetricsInput, EndpointUncheckedCreateWithoutMetricsInput>
    where?: EndpointWhereInput
  }

  export type EndpointUpdateToOneWithWhereWithoutMetricsInput = {
    where?: EndpointWhereInput
    data: XOR<EndpointUpdateWithoutMetricsInput, EndpointUncheckedUpdateWithoutMetricsInput>
  }

  export type EndpointUpdateWithoutMetricsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEndpointsNestedInput
    alerts?: AlertUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateWithoutMetricsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    alerts?: AlertUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointCreateWithoutAlertsInput = {
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutEndpointsInput
    metrics?: EndpointMetricCreateNestedManyWithoutEndpointInput
  }

  export type EndpointUncheckedCreateWithoutAlertsInput = {
    id?: number
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    metrics?: EndpointMetricUncheckedCreateNestedManyWithoutEndpointInput
  }

  export type EndpointCreateOrConnectWithoutAlertsInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutAlertsInput, EndpointUncheckedCreateWithoutAlertsInput>
  }

  export type EndpointUpsertWithoutAlertsInput = {
    update: XOR<EndpointUpdateWithoutAlertsInput, EndpointUncheckedUpdateWithoutAlertsInput>
    create: XOR<EndpointCreateWithoutAlertsInput, EndpointUncheckedCreateWithoutAlertsInput>
    where?: EndpointWhereInput
  }

  export type EndpointUpdateToOneWithWhereWithoutAlertsInput = {
    where?: EndpointWhereInput
    data: XOR<EndpointUpdateWithoutAlertsInput, EndpointUncheckedUpdateWithoutAlertsInput>
  }

  export type EndpointUpdateWithoutAlertsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutEndpointsNestedInput
    metrics?: EndpointMetricUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateWithoutAlertsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    metrics?: EndpointMetricUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type UserCreateWithoutNotificationChannelsInput = {
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationChannelsInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationChannelsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationChannelsInput, UserUncheckedCreateWithoutNotificationChannelsInput>
  }

  export type UserUpsertWithoutNotificationChannelsInput = {
    update: XOR<UserUpdateWithoutNotificationChannelsInput, UserUncheckedUpdateWithoutNotificationChannelsInput>
    create: XOR<UserCreateWithoutNotificationChannelsInput, UserUncheckedCreateWithoutNotificationChannelsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationChannelsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationChannelsInput, UserUncheckedUpdateWithoutNotificationChannelsInput>
  }

  export type UserUpdateWithoutNotificationChannelsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endpoints?: EndpointUncheckedUpdateManyWithoutUserNestedInput
  }

  export type EndpointCreateManyUserInput = {
    id?: number
    name: string
    url: string
    isActive?: boolean
    checkIntervalSec?: number
    consecutiveFails?: number
    alertOnConsecutiveFails?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationChannelCreateManyUserInput = {
    id?: number
    type: $Enums.NotificationType
    target: string
    isDefault?: boolean
  }

  export type EndpointUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: EndpointMetricUpdateManyWithoutEndpointNestedInput
    alerts?: AlertUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metrics?: EndpointMetricUncheckedUpdateManyWithoutEndpointNestedInput
    alerts?: AlertUncheckedUpdateManyWithoutEndpointNestedInput
  }

  export type EndpointUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    checkIntervalSec?: IntFieldUpdateOperationsInput | number
    consecutiveFails?: IntFieldUpdateOperationsInput | number
    alertOnConsecutiveFails?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationChannelUpdateWithoutUserInput = {
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationChannelUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationChannelUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumNotificationTypeFieldUpdateOperationsInput | $Enums.NotificationType
    target?: StringFieldUpdateOperationsInput | string
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EndpointMetricCreateManyEndpointInput = {
    timestamp: Date | string
    responseTimeMs: number
    statusCode: number
    status: $Enums.PingStatus
  }

  export type AlertCreateManyEndpointInput = {
    id?: number
    status: $Enums.AlertStatus
    message?: string | null
    createdAt?: Date | string
    resolvedAt?: Date | string | null
  }

  export type EndpointMetricUpdateWithoutEndpointInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
  }

  export type EndpointMetricUncheckedUpdateWithoutEndpointInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
  }

  export type EndpointMetricUncheckedUpdateManyWithoutEndpointInput = {
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    responseTimeMs?: IntFieldUpdateOperationsInput | number
    statusCode?: IntFieldUpdateOperationsInput | number
    status?: EnumPingStatusFieldUpdateOperationsInput | $Enums.PingStatus
  }

  export type AlertUpdateWithoutEndpointInput = {
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateWithoutEndpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AlertUncheckedUpdateManyWithoutEndpointInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    message?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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