
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
 * Model Problem
 * 
 */
export type Problem = $Result.DefaultSelection<Prisma.$ProblemPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model Test_Case
 * 
 */
export type Test_Case = $Result.DefaultSelection<Prisma.$Test_CasePayload>
/**
 * Model Solved
 * 
 */
export type Solved = $Result.DefaultSelection<Prisma.$SolvedPayload>
/**
 * Model Playlist
 * 
 */
export type Playlist = $Result.DefaultSelection<Prisma.$PlaylistPayload>
/**
 * Model Problem_Lists
 * 
 */
export type Problem_Lists = $Result.DefaultSelection<Prisma.$Problem_ListsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const USER_ROLE: {
  admin: 'admin',
  user: 'user'
};

export type USER_ROLE = (typeof USER_ROLE)[keyof typeof USER_ROLE]


export const PROBLEM_DIFFICULTY: {
  easy: 'easy',
  medium: 'medium',
  hard: 'hard'
};

export type PROBLEM_DIFFICULTY = (typeof PROBLEM_DIFFICULTY)[keyof typeof PROBLEM_DIFFICULTY]


export const SUBMISSION_STATUS: {
  accepted: 'accepted',
  wrong: 'wrong'
};

export type SUBMISSION_STATUS = (typeof SUBMISSION_STATUS)[keyof typeof SUBMISSION_STATUS]


export const TEST_CASE_STATUS: {
  failed: 'failed',
  passed: 'passed'
};

export type TEST_CASE_STATUS = (typeof TEST_CASE_STATUS)[keyof typeof TEST_CASE_STATUS]

}

export type USER_ROLE = $Enums.USER_ROLE

export const USER_ROLE: typeof $Enums.USER_ROLE

export type PROBLEM_DIFFICULTY = $Enums.PROBLEM_DIFFICULTY

export const PROBLEM_DIFFICULTY: typeof $Enums.PROBLEM_DIFFICULTY

export type SUBMISSION_STATUS = $Enums.SUBMISSION_STATUS

export const SUBMISSION_STATUS: typeof $Enums.SUBMISSION_STATUS

export type TEST_CASE_STATUS = $Enums.TEST_CASE_STATUS

export const TEST_CASE_STATUS: typeof $Enums.TEST_CASE_STATUS

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.problem`: Exposes CRUD operations for the **Problem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problems
    * const problems = await prisma.problem.findMany()
    * ```
    */
  get problem(): Prisma.ProblemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.test_Case`: Exposes CRUD operations for the **Test_Case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test_Cases
    * const test_Cases = await prisma.test_Case.findMany()
    * ```
    */
  get test_Case(): Prisma.Test_CaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solved`: Exposes CRUD operations for the **Solved** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solveds
    * const solveds = await prisma.solved.findMany()
    * ```
    */
  get solved(): Prisma.SolvedDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.problem_Lists`: Exposes CRUD operations for the **Problem_Lists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Problem_Lists
    * const problem_Lists = await prisma.problem_Lists.findMany()
    * ```
    */
  get problem_Lists(): Prisma.Problem_ListsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.9.0
   * Query Engine version: 81e4af48011447c3cc503a190e86995b66d2a28e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Problem: 'Problem',
    Submission: 'Submission',
    Test_Case: 'Test_Case',
    Solved: 'Solved',
    Playlist: 'Playlist',
    Problem_Lists: 'Problem_Lists'
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
      modelProps: "user" | "problem" | "submission" | "test_Case" | "solved" | "playlist" | "problem_Lists"
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
      Problem: {
        payload: Prisma.$ProblemPayload<ExtArgs>
        fields: Prisma.ProblemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProblemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProblemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findFirst: {
            args: Prisma.ProblemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProblemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          findMany: {
            args: Prisma.ProblemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          create: {
            args: Prisma.ProblemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          createMany: {
            args: Prisma.ProblemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProblemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          delete: {
            args: Prisma.ProblemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          update: {
            args: Prisma.ProblemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          deleteMany: {
            args: Prisma.ProblemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProblemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProblemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>[]
          }
          upsert: {
            args: Prisma.ProblemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProblemPayload>
          }
          aggregate: {
            args: Prisma.ProblemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem>
          }
          groupBy: {
            args: Prisma.ProblemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProblemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProblemCountArgs<ExtArgs>
            result: $Utils.Optional<ProblemCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubmissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      Test_Case: {
        payload: Prisma.$Test_CasePayload<ExtArgs>
        fields: Prisma.Test_CaseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Test_CaseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Test_CaseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>
          }
          findFirst: {
            args: Prisma.Test_CaseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Test_CaseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>
          }
          findMany: {
            args: Prisma.Test_CaseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>[]
          }
          create: {
            args: Prisma.Test_CaseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>
          }
          createMany: {
            args: Prisma.Test_CaseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Test_CaseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>[]
          }
          delete: {
            args: Prisma.Test_CaseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>
          }
          update: {
            args: Prisma.Test_CaseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>
          }
          deleteMany: {
            args: Prisma.Test_CaseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Test_CaseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Test_CaseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>[]
          }
          upsert: {
            args: Prisma.Test_CaseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Test_CasePayload>
          }
          aggregate: {
            args: Prisma.Test_CaseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTest_Case>
          }
          groupBy: {
            args: Prisma.Test_CaseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Test_CaseGroupByOutputType>[]
          }
          count: {
            args: Prisma.Test_CaseCountArgs<ExtArgs>
            result: $Utils.Optional<Test_CaseCountAggregateOutputType> | number
          }
        }
      }
      Solved: {
        payload: Prisma.$SolvedPayload<ExtArgs>
        fields: Prisma.SolvedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolvedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolvedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>
          }
          findFirst: {
            args: Prisma.SolvedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolvedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>
          }
          findMany: {
            args: Prisma.SolvedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>[]
          }
          create: {
            args: Prisma.SolvedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>
          }
          createMany: {
            args: Prisma.SolvedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolvedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>[]
          }
          delete: {
            args: Prisma.SolvedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>
          }
          update: {
            args: Prisma.SolvedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>
          }
          deleteMany: {
            args: Prisma.SolvedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolvedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolvedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>[]
          }
          upsert: {
            args: Prisma.SolvedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolvedPayload>
          }
          aggregate: {
            args: Prisma.SolvedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolved>
          }
          groupBy: {
            args: Prisma.SolvedGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolvedGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolvedCountArgs<ExtArgs>
            result: $Utils.Optional<SolvedCountAggregateOutputType> | number
          }
        }
      }
      Playlist: {
        payload: Prisma.$PlaylistPayload<ExtArgs>
        fields: Prisma.PlaylistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findFirst: {
            args: Prisma.PlaylistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          findMany: {
            args: Prisma.PlaylistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          create: {
            args: Prisma.PlaylistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          createMany: {
            args: Prisma.PlaylistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlaylistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          delete: {
            args: Prisma.PlaylistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          update: {
            args: Prisma.PlaylistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlaylistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>[]
          }
          upsert: {
            args: Prisma.PlaylistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlaylistPayload>
          }
          aggregate: {
            args: Prisma.PlaylistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlaylist>
          }
          groupBy: {
            args: Prisma.PlaylistGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlaylistGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlaylistCountArgs<ExtArgs>
            result: $Utils.Optional<PlaylistCountAggregateOutputType> | number
          }
        }
      }
      Problem_Lists: {
        payload: Prisma.$Problem_ListsPayload<ExtArgs>
        fields: Prisma.Problem_ListsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Problem_ListsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Problem_ListsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>
          }
          findFirst: {
            args: Prisma.Problem_ListsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Problem_ListsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>
          }
          findMany: {
            args: Prisma.Problem_ListsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>[]
          }
          create: {
            args: Prisma.Problem_ListsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>
          }
          createMany: {
            args: Prisma.Problem_ListsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Problem_ListsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>[]
          }
          delete: {
            args: Prisma.Problem_ListsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>
          }
          update: {
            args: Prisma.Problem_ListsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>
          }
          deleteMany: {
            args: Prisma.Problem_ListsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Problem_ListsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Problem_ListsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>[]
          }
          upsert: {
            args: Prisma.Problem_ListsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Problem_ListsPayload>
          }
          aggregate: {
            args: Prisma.Problem_ListsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProblem_Lists>
          }
          groupBy: {
            args: Prisma.Problem_ListsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Problem_ListsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Problem_ListsCountArgs<ExtArgs>
            result: $Utils.Optional<Problem_ListsCountAggregateOutputType> | number
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    problem?: ProblemOmit
    submission?: SubmissionOmit
    test_Case?: Test_CaseOmit
    solved?: SolvedOmit
    playlist?: PlaylistOmit
    problem_Lists?: Problem_ListsOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    problems: number
    submissions: number
    solved: number
    playlist: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | UserCountOutputTypeCountProblemsArgs
    submissions?: boolean | UserCountOutputTypeCountSubmissionsArgs
    solved?: boolean | UserCountOutputTypeCountSolvedArgs
    playlist?: boolean | UserCountOutputTypeCountPlaylistArgs
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
  export type UserCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlaylistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
  }


  /**
   * Count Type ProblemCountOutputType
   */

  export type ProblemCountOutputType = {
    submissions: number
    solved: number
    problem_lists: number
  }

  export type ProblemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | ProblemCountOutputTypeCountSubmissionsArgs
    solved?: boolean | ProblemCountOutputTypeCountSolvedArgs
    problem_lists?: boolean | ProblemCountOutputTypeCountProblem_listsArgs
  }

  // Custom InputTypes
  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProblemCountOutputType
     */
    select?: ProblemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountSolvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedWhereInput
  }

  /**
   * ProblemCountOutputType without action
   */
  export type ProblemCountOutputTypeCountProblem_listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Problem_ListsWhereInput
  }


  /**
   * Count Type SubmissionCountOutputType
   */

  export type SubmissionCountOutputType = {
    test_cases: number
  }

  export type SubmissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    test_cases?: boolean | SubmissionCountOutputTypeCountTest_casesArgs
  }

  // Custom InputTypes
  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubmissionCountOutputType
     */
    select?: SubmissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubmissionCountOutputType without action
   */
  export type SubmissionCountOutputTypeCountTest_casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test_CaseWhereInput
  }


  /**
   * Count Type PlaylistCountOutputType
   */

  export type PlaylistCountOutputType = {
    problems: number
  }

  export type PlaylistCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | PlaylistCountOutputTypeCountProblemsArgs
  }

  // Custom InputTypes
  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeCountProblemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Problem_ListsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar_url: string | null
    is_verified: boolean | null
    role: $Enums.USER_ROLE | null
    refresh_token: string | null
    email_verification_token: string | null
    email_verification_token_expiry: Date | null
    password_reset_token: string | null
    password_reset_token_expiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    avatar_url: string | null
    is_verified: boolean | null
    role: $Enums.USER_ROLE | null
    refresh_token: string | null
    email_verification_token: string | null
    email_verification_token_expiry: Date | null
    password_reset_token: string | null
    password_reset_token_expiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    avatar_url: number
    is_verified: number
    role: number
    refresh_token: number
    email_verification_token: number
    email_verification_token_expiry: number
    password_reset_token: number
    password_reset_token_expiry: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar_url?: true
    is_verified?: true
    role?: true
    refresh_token?: true
    email_verification_token?: true
    email_verification_token_expiry?: true
    password_reset_token?: true
    password_reset_token_expiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar_url?: true
    is_verified?: true
    role?: true
    refresh_token?: true
    email_verification_token?: true
    email_verification_token_expiry?: true
    password_reset_token?: true
    password_reset_token_expiry?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    avatar_url?: true
    is_verified?: true
    role?: true
    refresh_token?: true
    email_verification_token?: true
    email_verification_token_expiry?: true
    password_reset_token?: true
    password_reset_token_expiry?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    avatar_url: string
    is_verified: boolean
    role: $Enums.USER_ROLE
    refresh_token: string | null
    email_verification_token: string | null
    email_verification_token_expiry: Date | null
    password_reset_token: string | null
    password_reset_token_expiry: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    avatar_url?: boolean
    is_verified?: boolean
    role?: boolean
    refresh_token?: boolean
    email_verification_token?: boolean
    email_verification_token_expiry?: boolean
    password_reset_token?: boolean
    password_reset_token_expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solved?: boolean | User$solvedArgs<ExtArgs>
    playlist?: boolean | User$playlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar_url?: boolean
    is_verified?: boolean
    role?: boolean
    refresh_token?: boolean
    email_verification_token?: boolean
    email_verification_token_expiry?: boolean
    password_reset_token?: boolean
    password_reset_token_expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar_url?: boolean
    is_verified?: boolean
    role?: boolean
    refresh_token?: boolean
    email_verification_token?: boolean
    email_verification_token_expiry?: boolean
    password_reset_token?: boolean
    password_reset_token_expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    avatar_url?: boolean
    is_verified?: boolean
    role?: boolean
    refresh_token?: boolean
    email_verification_token?: boolean
    email_verification_token_expiry?: boolean
    password_reset_token?: boolean
    password_reset_token_expiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "avatar_url" | "is_verified" | "role" | "refresh_token" | "email_verification_token" | "email_verification_token_expiry" | "password_reset_token" | "password_reset_token_expiry" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    problems?: boolean | User$problemsArgs<ExtArgs>
    submissions?: boolean | User$submissionsArgs<ExtArgs>
    solved?: boolean | User$solvedArgs<ExtArgs>
    playlist?: boolean | User$playlistArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      problems: Prisma.$ProblemPayload<ExtArgs>[]
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      solved: Prisma.$SolvedPayload<ExtArgs>[]
      playlist: Prisma.$PlaylistPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      avatar_url: string
      is_verified: boolean
      role: $Enums.USER_ROLE
      refresh_token: string | null
      email_verification_token: string | null
      email_verification_token_expiry: Date | null
      password_reset_token: string | null
      password_reset_token_expiry: Date | null
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
    problems<T extends User$problemsArgs<ExtArgs> = {}>(args?: Subset<T, User$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    submissions<T extends User$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solved<T extends User$solvedArgs<ExtArgs> = {}>(args?: Subset<T, User$solvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    playlist<T extends User$playlistArgs<ExtArgs> = {}>(args?: Subset<T, User$playlistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly avatar_url: FieldRef<"User", 'String'>
    readonly is_verified: FieldRef<"User", 'Boolean'>
    readonly role: FieldRef<"User", 'USER_ROLE'>
    readonly refresh_token: FieldRef<"User", 'String'>
    readonly email_verification_token: FieldRef<"User", 'String'>
    readonly email_verification_token_expiry: FieldRef<"User", 'DateTime'>
    readonly password_reset_token: FieldRef<"User", 'String'>
    readonly password_reset_token_expiry: FieldRef<"User", 'DateTime'>
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
   * User.problems
   */
  export type User$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    cursor?: ProblemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * User.submissions
   */
  export type User$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User.solved
   */
  export type User$solvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    where?: SolvedWhereInput
    orderBy?: SolvedOrderByWithRelationInput | SolvedOrderByWithRelationInput[]
    cursor?: SolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedScalarFieldEnum | SolvedScalarFieldEnum[]
  }

  /**
   * User.playlist
   */
  export type User$playlistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
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
   * Model Problem
   */

  export type AggregateProblem = {
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  export type ProblemMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.PROBLEM_DIFFICULTY | null
    created_by: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    difficulty: $Enums.PROBLEM_DIFFICULTY | null
    created_by: string | null
    constraints: string | null
    hints: string | null
    editorial: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProblemCountAggregateOutputType = {
    id: number
    title: number
    description: number
    difficulty: number
    tags: number
    created_by: number
    examples: number
    constraints: number
    hints: number
    editorial: number
    test_cases: number
    code_snippets: number
    reference_solutions: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProblemMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    created_by?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    created_by?: true
    constraints?: true
    hints?: true
    editorial?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProblemCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    difficulty?: true
    tags?: true
    created_by?: true
    examples?: true
    constraints?: true
    hints?: true
    editorial?: true
    test_cases?: true
    code_snippets?: true
    reference_solutions?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProblemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem to aggregate.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problems
    **/
    _count?: true | ProblemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProblemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProblemMaxAggregateInputType
  }

  export type GetProblemAggregateType<T extends ProblemAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem[P]>
      : GetScalarType<T[P], AggregateProblem[P]>
  }




  export type ProblemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProblemWhereInput
    orderBy?: ProblemOrderByWithAggregationInput | ProblemOrderByWithAggregationInput[]
    by: ProblemScalarFieldEnum[] | ProblemScalarFieldEnum
    having?: ProblemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProblemCountAggregateInputType | true
    _min?: ProblemMinAggregateInputType
    _max?: ProblemMaxAggregateInputType
  }

  export type ProblemGroupByOutputType = {
    id: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags: string[]
    created_by: string
    examples: JsonValue
    constraints: string
    hints: string | null
    editorial: string | null
    test_cases: JsonValue
    code_snippets: JsonValue
    reference_solutions: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: ProblemCountAggregateOutputType | null
    _min: ProblemMinAggregateOutputType | null
    _max: ProblemMaxAggregateOutputType | null
  }

  type GetProblemGroupByPayload<T extends ProblemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProblemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProblemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProblemGroupByOutputType[P]>
            : GetScalarType<T[P], ProblemGroupByOutputType[P]>
        }
      >
    >


  export type ProblemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    created_by?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    test_cases?: boolean
    code_snippets?: boolean
    reference_solutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    solved?: boolean | Problem$solvedArgs<ExtArgs>
    problem_lists?: boolean | Problem$problem_listsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    created_by?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    test_cases?: boolean
    code_snippets?: boolean
    reference_solutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    created_by?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    test_cases?: boolean
    code_snippets?: boolean
    reference_solutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem"]>

  export type ProblemSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    difficulty?: boolean
    tags?: boolean
    created_by?: boolean
    examples?: boolean
    constraints?: boolean
    hints?: boolean
    editorial?: boolean
    test_cases?: boolean
    code_snippets?: boolean
    reference_solutions?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProblemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "difficulty" | "tags" | "created_by" | "examples" | "constraints" | "hints" | "editorial" | "test_cases" | "code_snippets" | "reference_solutions" | "createdAt" | "updatedAt", ExtArgs["result"]["problem"]>
  export type ProblemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Problem$submissionsArgs<ExtArgs>
    solved?: boolean | Problem$solvedArgs<ExtArgs>
    problem_lists?: boolean | Problem$problem_listsArgs<ExtArgs>
    _count?: boolean | ProblemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProblemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProblemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
      solved: Prisma.$SolvedPayload<ExtArgs>[]
      problem_lists: Prisma.$Problem_ListsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      difficulty: $Enums.PROBLEM_DIFFICULTY
      tags: string[]
      created_by: string
      examples: Prisma.JsonValue
      constraints: string
      hints: string | null
      editorial: string | null
      test_cases: Prisma.JsonValue
      code_snippets: Prisma.JsonValue
      reference_solutions: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem"]>
    composites: {}
  }

  type ProblemGetPayload<S extends boolean | null | undefined | ProblemDefaultArgs> = $Result.GetResult<Prisma.$ProblemPayload, S>

  type ProblemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProblemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProblemCountAggregateInputType | true
    }

  export interface ProblemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem'], meta: { name: 'Problem' } }
    /**
     * Find zero or one Problem that matches the filter.
     * @param {ProblemFindUniqueArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProblemFindUniqueArgs>(args: SelectSubset<T, ProblemFindUniqueArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProblemFindUniqueOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProblemFindUniqueOrThrowArgs>(args: SelectSubset<T, ProblemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProblemFindFirstArgs>(args?: SelectSubset<T, ProblemFindFirstArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindFirstOrThrowArgs} args - Arguments to find a Problem
     * @example
     * // Get one Problem
     * const problem = await prisma.problem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProblemFindFirstOrThrowArgs>(args?: SelectSubset<T, ProblemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problems
     * const problems = await prisma.problem.findMany()
     * 
     * // Get first 10 Problems
     * const problems = await prisma.problem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problemWithIdOnly = await prisma.problem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProblemFindManyArgs>(args?: SelectSubset<T, ProblemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem.
     * @param {ProblemCreateArgs} args - Arguments to create a Problem.
     * @example
     * // Create one Problem
     * const Problem = await prisma.problem.create({
     *   data: {
     *     // ... data to create a Problem
     *   }
     * })
     * 
     */
    create<T extends ProblemCreateArgs>(args: SelectSubset<T, ProblemCreateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problems.
     * @param {ProblemCreateManyArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProblemCreateManyArgs>(args?: SelectSubset<T, ProblemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problems and returns the data saved in the database.
     * @param {ProblemCreateManyAndReturnArgs} args - Arguments to create many Problems.
     * @example
     * // Create many Problems
     * const problem = await prisma.problem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProblemCreateManyAndReturnArgs>(args?: SelectSubset<T, ProblemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem.
     * @param {ProblemDeleteArgs} args - Arguments to delete one Problem.
     * @example
     * // Delete one Problem
     * const Problem = await prisma.problem.delete({
     *   where: {
     *     // ... filter to delete one Problem
     *   }
     * })
     * 
     */
    delete<T extends ProblemDeleteArgs>(args: SelectSubset<T, ProblemDeleteArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem.
     * @param {ProblemUpdateArgs} args - Arguments to update one Problem.
     * @example
     * // Update one Problem
     * const problem = await prisma.problem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProblemUpdateArgs>(args: SelectSubset<T, ProblemUpdateArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problems.
     * @param {ProblemDeleteManyArgs} args - Arguments to filter Problems to delete.
     * @example
     * // Delete a few Problems
     * const { count } = await prisma.problem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProblemDeleteManyArgs>(args?: SelectSubset<T, ProblemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProblemUpdateManyArgs>(args: SelectSubset<T, ProblemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problems and returns the data updated in the database.
     * @param {ProblemUpdateManyAndReturnArgs} args - Arguments to update many Problems.
     * @example
     * // Update many Problems
     * const problem = await prisma.problem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problems and only return the `id`
     * const problemWithIdOnly = await prisma.problem.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProblemUpdateManyAndReturnArgs>(args: SelectSubset<T, ProblemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem.
     * @param {ProblemUpsertArgs} args - Arguments to update or create a Problem.
     * @example
     * // Update or create a Problem
     * const problem = await prisma.problem.upsert({
     *   create: {
     *     // ... data to create a Problem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem we want to update
     *   }
     * })
     */
    upsert<T extends ProblemUpsertArgs>(args: SelectSubset<T, ProblemUpsertArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemCountArgs} args - Arguments to filter Problems to count.
     * @example
     * // Count the number of Problems
     * const count = await prisma.problem.count({
     *   where: {
     *     // ... the filter for the Problems we want to count
     *   }
     * })
    **/
    count<T extends ProblemCountArgs>(
      args?: Subset<T, ProblemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProblemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProblemAggregateArgs>(args: Subset<T, ProblemAggregateArgs>): Prisma.PrismaPromise<GetProblemAggregateType<T>>

    /**
     * Group by Problem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProblemGroupByArgs} args - Group by arguments.
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
      T extends ProblemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProblemGroupByArgs['orderBy'] }
        : { orderBy?: ProblemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProblemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem model
   */
  readonly fields: ProblemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProblemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    submissions<T extends Problem$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    solved<T extends Problem$solvedArgs<ExtArgs> = {}>(args?: Subset<T, Problem$solvedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    problem_lists<T extends Problem$problem_listsArgs<ExtArgs> = {}>(args?: Subset<T, Problem$problem_listsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Problem model
   */
  interface ProblemFieldRefs {
    readonly id: FieldRef<"Problem", 'String'>
    readonly title: FieldRef<"Problem", 'String'>
    readonly description: FieldRef<"Problem", 'String'>
    readonly difficulty: FieldRef<"Problem", 'PROBLEM_DIFFICULTY'>
    readonly tags: FieldRef<"Problem", 'String[]'>
    readonly created_by: FieldRef<"Problem", 'String'>
    readonly examples: FieldRef<"Problem", 'Json'>
    readonly constraints: FieldRef<"Problem", 'String'>
    readonly hints: FieldRef<"Problem", 'String'>
    readonly editorial: FieldRef<"Problem", 'String'>
    readonly test_cases: FieldRef<"Problem", 'Json'>
    readonly code_snippets: FieldRef<"Problem", 'Json'>
    readonly reference_solutions: FieldRef<"Problem", 'Json'>
    readonly createdAt: FieldRef<"Problem", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem findUnique
   */
  export type ProblemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findUniqueOrThrow
   */
  export type ProblemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem findFirst
   */
  export type ProblemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findFirstOrThrow
   */
  export type ProblemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problem to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problems.
     */
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem findMany
   */
  export type ProblemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter, which Problems to fetch.
     */
    where?: ProblemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problems to fetch.
     */
    orderBy?: ProblemOrderByWithRelationInput | ProblemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problems.
     */
    cursor?: ProblemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problems.
     */
    skip?: number
    distinct?: ProblemScalarFieldEnum | ProblemScalarFieldEnum[]
  }

  /**
   * Problem create
   */
  export type ProblemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem.
     */
    data: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
  }

  /**
   * Problem createMany
   */
  export type ProblemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem createManyAndReturn
   */
  export type ProblemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to create many Problems.
     */
    data: ProblemCreateManyInput | ProblemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem update
   */
  export type ProblemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem.
     */
    data: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
    /**
     * Choose, which Problem to update.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem updateMany
   */
  export type ProblemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
  }

  /**
   * Problem updateManyAndReturn
   */
  export type ProblemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * The data used to update Problems.
     */
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyInput>
    /**
     * Filter which Problems to update
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem upsert
   */
  export type ProblemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem to update in case it exists.
     */
    where: ProblemWhereUniqueInput
    /**
     * In case the Problem found by the `where` argument doesn't exist, create a new Problem with this data.
     */
    create: XOR<ProblemCreateInput, ProblemUncheckedCreateInput>
    /**
     * In case the Problem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProblemUpdateInput, ProblemUncheckedUpdateInput>
  }

  /**
   * Problem delete
   */
  export type ProblemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
    /**
     * Filter which Problem to delete.
     */
    where: ProblemWhereUniqueInput
  }

  /**
   * Problem deleteMany
   */
  export type ProblemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problems to delete
     */
    where?: ProblemWhereInput
    /**
     * Limit how many Problems to delete.
     */
    limit?: number
  }

  /**
   * Problem.submissions
   */
  export type Problem$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Problem.solved
   */
  export type Problem$solvedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    where?: SolvedWhereInput
    orderBy?: SolvedOrderByWithRelationInput | SolvedOrderByWithRelationInput[]
    cursor?: SolvedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolvedScalarFieldEnum | SolvedScalarFieldEnum[]
  }

  /**
   * Problem.problem_lists
   */
  export type Problem$problem_listsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    where?: Problem_ListsWhereInput
    orderBy?: Problem_ListsOrderByWithRelationInput | Problem_ListsOrderByWithRelationInput[]
    cursor?: Problem_ListsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Problem_ListsScalarFieldEnum | Problem_ListsScalarFieldEnum[]
  }

  /**
   * Problem without action
   */
  export type ProblemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem
     */
    select?: ProblemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem
     */
    omit?: ProblemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProblemInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: string | null
    submitted_by: string | null
    problem_id: string | null
    source_code: string | null
    language: string | null
    std_input: string | null
    std_output: string | null
    std_error: string | null
    compile_output: string | null
    status: $Enums.SUBMISSION_STATUS | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: string | null
    submitted_by: string | null
    problem_id: string | null
    source_code: string | null
    language: string | null
    std_input: string | null
    std_output: string | null
    std_error: string | null
    compile_output: string | null
    status: $Enums.SUBMISSION_STATUS | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    submitted_by: number
    problem_id: number
    source_code: number
    language: number
    std_input: number
    std_output: number
    std_error: number
    compile_output: number
    status: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmissionMinAggregateInputType = {
    id?: true
    submitted_by?: true
    problem_id?: true
    source_code?: true
    language?: true
    std_input?: true
    std_output?: true
    std_error?: true
    compile_output?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    submitted_by?: true
    problem_id?: true
    source_code?: true
    language?: true
    std_input?: true
    std_output?: true
    std_error?: true
    compile_output?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    submitted_by?: true
    problem_id?: true
    source_code?: true
    language?: true
    std_input?: true
    std_output?: true
    std_error?: true
    compile_output?: true
    status?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: string
    submitted_by: string
    problem_id: string
    source_code: string
    language: string
    std_input: string | null
    std_output: string | null
    std_error: string | null
    compile_output: string | null
    status: $Enums.SUBMISSION_STATUS
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmissionCountAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submitted_by?: boolean
    problem_id?: boolean
    source_code?: boolean
    language?: boolean
    std_input?: boolean
    std_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    test_cases?: boolean | Submission$test_casesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submitted_by?: boolean
    problem_id?: boolean
    source_code?: boolean
    language?: boolean
    std_input?: boolean
    std_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submitted_by?: boolean
    problem_id?: boolean
    source_code?: boolean
    language?: boolean
    std_input?: boolean
    std_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    submitted_by?: boolean
    problem_id?: boolean
    source_code?: boolean
    language?: boolean
    std_input?: boolean
    std_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    status?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubmissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submitted_by" | "problem_id" | "source_code" | "language" | "std_input" | "std_output" | "std_error" | "compile_output" | "status" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["submission"]>
  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
    test_cases?: boolean | Submission$test_casesArgs<ExtArgs>
    _count?: boolean | SubmissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
      test_cases: Prisma.$Test_CasePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submitted_by: string
      problem_id: string
      source_code: string
      language: string
      std_input: string | null
      std_output: string | null
      std_error: string | null
      compile_output: string | null
      status: $Enums.SUBMISSION_STATUS
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions and returns the data updated in the database.
     * @param {SubmissionUpdateManyAndReturnArgs} args - Arguments to update many Submissions.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubmissionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubmissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
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
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    test_cases<T extends Submission$test_casesArgs<ExtArgs> = {}>(args?: Subset<T, Submission$test_casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Submission model
   */
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'String'>
    readonly submitted_by: FieldRef<"Submission", 'String'>
    readonly problem_id: FieldRef<"Submission", 'String'>
    readonly source_code: FieldRef<"Submission", 'String'>
    readonly language: FieldRef<"Submission", 'String'>
    readonly std_input: FieldRef<"Submission", 'String'>
    readonly std_output: FieldRef<"Submission", 'String'>
    readonly std_error: FieldRef<"Submission", 'String'>
    readonly compile_output: FieldRef<"Submission", 'String'>
    readonly status: FieldRef<"Submission", 'SUBMISSION_STATUS'>
    readonly memory: FieldRef<"Submission", 'String'>
    readonly time: FieldRef<"Submission", 'String'>
    readonly createdAt: FieldRef<"Submission", 'DateTime'>
    readonly updatedAt: FieldRef<"Submission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
  }

  /**
   * Submission updateManyAndReturn
   */
  export type SubmissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
    /**
     * Limit how many Submissions to delete.
     */
    limit?: number
  }

  /**
   * Submission.test_cases
   */
  export type Submission$test_casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    where?: Test_CaseWhereInput
    orderBy?: Test_CaseOrderByWithRelationInput | Test_CaseOrderByWithRelationInput[]
    cursor?: Test_CaseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Test_CaseScalarFieldEnum | Test_CaseScalarFieldEnum[]
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Submission
     */
    omit?: SubmissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model Test_Case
   */

  export type AggregateTest_Case = {
    _count: Test_CaseCountAggregateOutputType | null
    _avg: Test_CaseAvgAggregateOutputType | null
    _sum: Test_CaseSumAggregateOutputType | null
    _min: Test_CaseMinAggregateOutputType | null
    _max: Test_CaseMaxAggregateOutputType | null
  }

  export type Test_CaseAvgAggregateOutputType = {
    test_case: number | null
  }

  export type Test_CaseSumAggregateOutputType = {
    test_case: number | null
  }

  export type Test_CaseMinAggregateOutputType = {
    id: string | null
    submission_id: string | null
    test_case: number | null
    status: $Enums.TEST_CASE_STATUS | null
    std_output: string | null
    expected_output: string | null
    std_error: string | null
    compile_output: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Test_CaseMaxAggregateOutputType = {
    id: string | null
    submission_id: string | null
    test_case: number | null
    status: $Enums.TEST_CASE_STATUS | null
    std_output: string | null
    expected_output: string | null
    std_error: string | null
    compile_output: string | null
    memory: string | null
    time: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Test_CaseCountAggregateOutputType = {
    id: number
    submission_id: number
    test_case: number
    status: number
    std_output: number
    expected_output: number
    std_error: number
    compile_output: number
    memory: number
    time: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Test_CaseAvgAggregateInputType = {
    test_case?: true
  }

  export type Test_CaseSumAggregateInputType = {
    test_case?: true
  }

  export type Test_CaseMinAggregateInputType = {
    id?: true
    submission_id?: true
    test_case?: true
    status?: true
    std_output?: true
    expected_output?: true
    std_error?: true
    compile_output?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Test_CaseMaxAggregateInputType = {
    id?: true
    submission_id?: true
    test_case?: true
    status?: true
    std_output?: true
    expected_output?: true
    std_error?: true
    compile_output?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Test_CaseCountAggregateInputType = {
    id?: true
    submission_id?: true
    test_case?: true
    status?: true
    std_output?: true
    expected_output?: true
    std_error?: true
    compile_output?: true
    memory?: true
    time?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Test_CaseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test_Case to aggregate.
     */
    where?: Test_CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Cases to fetch.
     */
    orderBy?: Test_CaseOrderByWithRelationInput | Test_CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Test_CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Test_Cases
    **/
    _count?: true | Test_CaseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test_CaseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test_CaseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test_CaseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test_CaseMaxAggregateInputType
  }

  export type GetTest_CaseAggregateType<T extends Test_CaseAggregateArgs> = {
        [P in keyof T & keyof AggregateTest_Case]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest_Case[P]>
      : GetScalarType<T[P], AggregateTest_Case[P]>
  }




  export type Test_CaseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Test_CaseWhereInput
    orderBy?: Test_CaseOrderByWithAggregationInput | Test_CaseOrderByWithAggregationInput[]
    by: Test_CaseScalarFieldEnum[] | Test_CaseScalarFieldEnum
    having?: Test_CaseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test_CaseCountAggregateInputType | true
    _avg?: Test_CaseAvgAggregateInputType
    _sum?: Test_CaseSumAggregateInputType
    _min?: Test_CaseMinAggregateInputType
    _max?: Test_CaseMaxAggregateInputType
  }

  export type Test_CaseGroupByOutputType = {
    id: string
    submission_id: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output: string | null
    expected_output: string | null
    std_error: string | null
    compile_output: string | null
    memory: string | null
    time: string | null
    createdAt: Date
    updatedAt: Date
    _count: Test_CaseCountAggregateOutputType | null
    _avg: Test_CaseAvgAggregateOutputType | null
    _sum: Test_CaseSumAggregateOutputType | null
    _min: Test_CaseMinAggregateOutputType | null
    _max: Test_CaseMaxAggregateOutputType | null
  }

  type GetTest_CaseGroupByPayload<T extends Test_CaseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test_CaseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test_CaseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test_CaseGroupByOutputType[P]>
            : GetScalarType<T[P], Test_CaseGroupByOutputType[P]>
        }
      >
    >


  export type Test_CaseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submission_id?: boolean
    test_case?: boolean
    status?: boolean
    std_output?: boolean
    expected_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_Case"]>

  export type Test_CaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submission_id?: boolean
    test_case?: boolean
    status?: boolean
    std_output?: boolean
    expected_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_Case"]>

  export type Test_CaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    submission_id?: boolean
    test_case?: boolean
    status?: boolean
    std_output?: boolean
    expected_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["test_Case"]>

  export type Test_CaseSelectScalar = {
    id?: boolean
    submission_id?: boolean
    test_case?: boolean
    status?: boolean
    std_output?: boolean
    expected_output?: boolean
    std_error?: boolean
    compile_output?: boolean
    memory?: boolean
    time?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Test_CaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "submission_id" | "test_case" | "status" | "std_output" | "expected_output" | "std_error" | "compile_output" | "memory" | "time" | "createdAt" | "updatedAt", ExtArgs["result"]["test_Case"]>
  export type Test_CaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type Test_CaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }
  export type Test_CaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submission?: boolean | SubmissionDefaultArgs<ExtArgs>
  }

  export type $Test_CasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Test_Case"
    objects: {
      submission: Prisma.$SubmissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      submission_id: string
      test_case: number
      status: $Enums.TEST_CASE_STATUS
      std_output: string | null
      expected_output: string | null
      std_error: string | null
      compile_output: string | null
      memory: string | null
      time: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["test_Case"]>
    composites: {}
  }

  type Test_CaseGetPayload<S extends boolean | null | undefined | Test_CaseDefaultArgs> = $Result.GetResult<Prisma.$Test_CasePayload, S>

  type Test_CaseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Test_CaseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Test_CaseCountAggregateInputType | true
    }

  export interface Test_CaseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Test_Case'], meta: { name: 'Test_Case' } }
    /**
     * Find zero or one Test_Case that matches the filter.
     * @param {Test_CaseFindUniqueArgs} args - Arguments to find a Test_Case
     * @example
     * // Get one Test_Case
     * const test_Case = await prisma.test_Case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Test_CaseFindUniqueArgs>(args: SelectSubset<T, Test_CaseFindUniqueArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Test_Case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Test_CaseFindUniqueOrThrowArgs} args - Arguments to find a Test_Case
     * @example
     * // Get one Test_Case
     * const test_Case = await prisma.test_Case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Test_CaseFindUniqueOrThrowArgs>(args: SelectSubset<T, Test_CaseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_Case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseFindFirstArgs} args - Arguments to find a Test_Case
     * @example
     * // Get one Test_Case
     * const test_Case = await prisma.test_Case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Test_CaseFindFirstArgs>(args?: SelectSubset<T, Test_CaseFindFirstArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Test_Case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseFindFirstOrThrowArgs} args - Arguments to find a Test_Case
     * @example
     * // Get one Test_Case
     * const test_Case = await prisma.test_Case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Test_CaseFindFirstOrThrowArgs>(args?: SelectSubset<T, Test_CaseFindFirstOrThrowArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Test_Cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test_Cases
     * const test_Cases = await prisma.test_Case.findMany()
     * 
     * // Get first 10 Test_Cases
     * const test_Cases = await prisma.test_Case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const test_CaseWithIdOnly = await prisma.test_Case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Test_CaseFindManyArgs>(args?: SelectSubset<T, Test_CaseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Test_Case.
     * @param {Test_CaseCreateArgs} args - Arguments to create a Test_Case.
     * @example
     * // Create one Test_Case
     * const Test_Case = await prisma.test_Case.create({
     *   data: {
     *     // ... data to create a Test_Case
     *   }
     * })
     * 
     */
    create<T extends Test_CaseCreateArgs>(args: SelectSubset<T, Test_CaseCreateArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Test_Cases.
     * @param {Test_CaseCreateManyArgs} args - Arguments to create many Test_Cases.
     * @example
     * // Create many Test_Cases
     * const test_Case = await prisma.test_Case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Test_CaseCreateManyArgs>(args?: SelectSubset<T, Test_CaseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Test_Cases and returns the data saved in the database.
     * @param {Test_CaseCreateManyAndReturnArgs} args - Arguments to create many Test_Cases.
     * @example
     * // Create many Test_Cases
     * const test_Case = await prisma.test_Case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Test_Cases and only return the `id`
     * const test_CaseWithIdOnly = await prisma.test_Case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Test_CaseCreateManyAndReturnArgs>(args?: SelectSubset<T, Test_CaseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Test_Case.
     * @param {Test_CaseDeleteArgs} args - Arguments to delete one Test_Case.
     * @example
     * // Delete one Test_Case
     * const Test_Case = await prisma.test_Case.delete({
     *   where: {
     *     // ... filter to delete one Test_Case
     *   }
     * })
     * 
     */
    delete<T extends Test_CaseDeleteArgs>(args: SelectSubset<T, Test_CaseDeleteArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Test_Case.
     * @param {Test_CaseUpdateArgs} args - Arguments to update one Test_Case.
     * @example
     * // Update one Test_Case
     * const test_Case = await prisma.test_Case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Test_CaseUpdateArgs>(args: SelectSubset<T, Test_CaseUpdateArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Test_Cases.
     * @param {Test_CaseDeleteManyArgs} args - Arguments to filter Test_Cases to delete.
     * @example
     * // Delete a few Test_Cases
     * const { count } = await prisma.test_Case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Test_CaseDeleteManyArgs>(args?: SelectSubset<T, Test_CaseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test_Cases
     * const test_Case = await prisma.test_Case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Test_CaseUpdateManyArgs>(args: SelectSubset<T, Test_CaseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test_Cases and returns the data updated in the database.
     * @param {Test_CaseUpdateManyAndReturnArgs} args - Arguments to update many Test_Cases.
     * @example
     * // Update many Test_Cases
     * const test_Case = await prisma.test_Case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Test_Cases and only return the `id`
     * const test_CaseWithIdOnly = await prisma.test_Case.updateManyAndReturn({
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
    updateManyAndReturn<T extends Test_CaseUpdateManyAndReturnArgs>(args: SelectSubset<T, Test_CaseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Test_Case.
     * @param {Test_CaseUpsertArgs} args - Arguments to update or create a Test_Case.
     * @example
     * // Update or create a Test_Case
     * const test_Case = await prisma.test_Case.upsert({
     *   create: {
     *     // ... data to create a Test_Case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test_Case we want to update
     *   }
     * })
     */
    upsert<T extends Test_CaseUpsertArgs>(args: SelectSubset<T, Test_CaseUpsertArgs<ExtArgs>>): Prisma__Test_CaseClient<$Result.GetResult<Prisma.$Test_CasePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Test_Cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseCountArgs} args - Arguments to filter Test_Cases to count.
     * @example
     * // Count the number of Test_Cases
     * const count = await prisma.test_Case.count({
     *   where: {
     *     // ... the filter for the Test_Cases we want to count
     *   }
     * })
    **/
    count<T extends Test_CaseCountArgs>(
      args?: Subset<T, Test_CaseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test_CaseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test_Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test_CaseAggregateArgs>(args: Subset<T, Test_CaseAggregateArgs>): Prisma.PrismaPromise<GetTest_CaseAggregateType<T>>

    /**
     * Group by Test_Case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test_CaseGroupByArgs} args - Group by arguments.
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
      T extends Test_CaseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Test_CaseGroupByArgs['orderBy'] }
        : { orderBy?: Test_CaseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Test_CaseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest_CaseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Test_Case model
   */
  readonly fields: Test_CaseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Test_Case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Test_CaseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    submission<T extends SubmissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubmissionDefaultArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Test_Case model
   */
  interface Test_CaseFieldRefs {
    readonly id: FieldRef<"Test_Case", 'String'>
    readonly submission_id: FieldRef<"Test_Case", 'String'>
    readonly test_case: FieldRef<"Test_Case", 'Int'>
    readonly status: FieldRef<"Test_Case", 'TEST_CASE_STATUS'>
    readonly std_output: FieldRef<"Test_Case", 'String'>
    readonly expected_output: FieldRef<"Test_Case", 'String'>
    readonly std_error: FieldRef<"Test_Case", 'String'>
    readonly compile_output: FieldRef<"Test_Case", 'String'>
    readonly memory: FieldRef<"Test_Case", 'String'>
    readonly time: FieldRef<"Test_Case", 'String'>
    readonly createdAt: FieldRef<"Test_Case", 'DateTime'>
    readonly updatedAt: FieldRef<"Test_Case", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Test_Case findUnique
   */
  export type Test_CaseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * Filter, which Test_Case to fetch.
     */
    where: Test_CaseWhereUniqueInput
  }

  /**
   * Test_Case findUniqueOrThrow
   */
  export type Test_CaseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * Filter, which Test_Case to fetch.
     */
    where: Test_CaseWhereUniqueInput
  }

  /**
   * Test_Case findFirst
   */
  export type Test_CaseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * Filter, which Test_Case to fetch.
     */
    where?: Test_CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Cases to fetch.
     */
    orderBy?: Test_CaseOrderByWithRelationInput | Test_CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test_Cases.
     */
    cursor?: Test_CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test_Cases.
     */
    distinct?: Test_CaseScalarFieldEnum | Test_CaseScalarFieldEnum[]
  }

  /**
   * Test_Case findFirstOrThrow
   */
  export type Test_CaseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * Filter, which Test_Case to fetch.
     */
    where?: Test_CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Cases to fetch.
     */
    orderBy?: Test_CaseOrderByWithRelationInput | Test_CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Test_Cases.
     */
    cursor?: Test_CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Test_Cases.
     */
    distinct?: Test_CaseScalarFieldEnum | Test_CaseScalarFieldEnum[]
  }

  /**
   * Test_Case findMany
   */
  export type Test_CaseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * Filter, which Test_Cases to fetch.
     */
    where?: Test_CaseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Test_Cases to fetch.
     */
    orderBy?: Test_CaseOrderByWithRelationInput | Test_CaseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Test_Cases.
     */
    cursor?: Test_CaseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Test_Cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Test_Cases.
     */
    skip?: number
    distinct?: Test_CaseScalarFieldEnum | Test_CaseScalarFieldEnum[]
  }

  /**
   * Test_Case create
   */
  export type Test_CaseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * The data needed to create a Test_Case.
     */
    data: XOR<Test_CaseCreateInput, Test_CaseUncheckedCreateInput>
  }

  /**
   * Test_Case createMany
   */
  export type Test_CaseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Test_Cases.
     */
    data: Test_CaseCreateManyInput | Test_CaseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Test_Case createManyAndReturn
   */
  export type Test_CaseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * The data used to create many Test_Cases.
     */
    data: Test_CaseCreateManyInput | Test_CaseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test_Case update
   */
  export type Test_CaseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * The data needed to update a Test_Case.
     */
    data: XOR<Test_CaseUpdateInput, Test_CaseUncheckedUpdateInput>
    /**
     * Choose, which Test_Case to update.
     */
    where: Test_CaseWhereUniqueInput
  }

  /**
   * Test_Case updateMany
   */
  export type Test_CaseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Test_Cases.
     */
    data: XOR<Test_CaseUpdateManyMutationInput, Test_CaseUncheckedUpdateManyInput>
    /**
     * Filter which Test_Cases to update
     */
    where?: Test_CaseWhereInput
    /**
     * Limit how many Test_Cases to update.
     */
    limit?: number
  }

  /**
   * Test_Case updateManyAndReturn
   */
  export type Test_CaseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * The data used to update Test_Cases.
     */
    data: XOR<Test_CaseUpdateManyMutationInput, Test_CaseUncheckedUpdateManyInput>
    /**
     * Filter which Test_Cases to update
     */
    where?: Test_CaseWhereInput
    /**
     * Limit how many Test_Cases to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Test_Case upsert
   */
  export type Test_CaseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * The filter to search for the Test_Case to update in case it exists.
     */
    where: Test_CaseWhereUniqueInput
    /**
     * In case the Test_Case found by the `where` argument doesn't exist, create a new Test_Case with this data.
     */
    create: XOR<Test_CaseCreateInput, Test_CaseUncheckedCreateInput>
    /**
     * In case the Test_Case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Test_CaseUpdateInput, Test_CaseUncheckedUpdateInput>
  }

  /**
   * Test_Case delete
   */
  export type Test_CaseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
    /**
     * Filter which Test_Case to delete.
     */
    where: Test_CaseWhereUniqueInput
  }

  /**
   * Test_Case deleteMany
   */
  export type Test_CaseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Test_Cases to delete
     */
    where?: Test_CaseWhereInput
    /**
     * Limit how many Test_Cases to delete.
     */
    limit?: number
  }

  /**
   * Test_Case without action
   */
  export type Test_CaseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Test_Case
     */
    select?: Test_CaseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Test_Case
     */
    omit?: Test_CaseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Test_CaseInclude<ExtArgs> | null
  }


  /**
   * Model Solved
   */

  export type AggregateSolved = {
    _count: SolvedCountAggregateOutputType | null
    _min: SolvedMinAggregateOutputType | null
    _max: SolvedMaxAggregateOutputType | null
  }

  export type SolvedMinAggregateOutputType = {
    id: string | null
    solved_by: string | null
    problem_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolvedMaxAggregateOutputType = {
    id: string | null
    solved_by: string | null
    problem_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SolvedCountAggregateOutputType = {
    id: number
    solved_by: number
    problem_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SolvedMinAggregateInputType = {
    id?: true
    solved_by?: true
    problem_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolvedMaxAggregateInputType = {
    id?: true
    solved_by?: true
    problem_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SolvedCountAggregateInputType = {
    id?: true
    solved_by?: true
    problem_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SolvedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solved to aggregate.
     */
    where?: SolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solveds to fetch.
     */
    orderBy?: SolvedOrderByWithRelationInput | SolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solveds
    **/
    _count?: true | SolvedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolvedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolvedMaxAggregateInputType
  }

  export type GetSolvedAggregateType<T extends SolvedAggregateArgs> = {
        [P in keyof T & keyof AggregateSolved]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolved[P]>
      : GetScalarType<T[P], AggregateSolved[P]>
  }




  export type SolvedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolvedWhereInput
    orderBy?: SolvedOrderByWithAggregationInput | SolvedOrderByWithAggregationInput[]
    by: SolvedScalarFieldEnum[] | SolvedScalarFieldEnum
    having?: SolvedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolvedCountAggregateInputType | true
    _min?: SolvedMinAggregateInputType
    _max?: SolvedMaxAggregateInputType
  }

  export type SolvedGroupByOutputType = {
    id: string
    solved_by: string
    problem_id: string
    createdAt: Date
    updatedAt: Date
    _count: SolvedCountAggregateOutputType | null
    _min: SolvedMinAggregateOutputType | null
    _max: SolvedMaxAggregateOutputType | null
  }

  type GetSolvedGroupByPayload<T extends SolvedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolvedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolvedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolvedGroupByOutputType[P]>
            : GetScalarType<T[P], SolvedGroupByOutputType[P]>
        }
      >
    >


  export type SolvedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solved_by?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solved"]>

  export type SolvedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solved_by?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solved"]>

  export type SolvedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    solved_by?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solved"]>

  export type SolvedSelectScalar = {
    id?: boolean
    solved_by?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SolvedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "solved_by" | "problem_id" | "createdAt" | "updatedAt", ExtArgs["result"]["solved"]>
  export type SolvedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SolvedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type SolvedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $SolvedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solved"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      solved_by: string
      problem_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["solved"]>
    composites: {}
  }

  type SolvedGetPayload<S extends boolean | null | undefined | SolvedDefaultArgs> = $Result.GetResult<Prisma.$SolvedPayload, S>

  type SolvedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolvedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolvedCountAggregateInputType | true
    }

  export interface SolvedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solved'], meta: { name: 'Solved' } }
    /**
     * Find zero or one Solved that matches the filter.
     * @param {SolvedFindUniqueArgs} args - Arguments to find a Solved
     * @example
     * // Get one Solved
     * const solved = await prisma.solved.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolvedFindUniqueArgs>(args: SelectSubset<T, SolvedFindUniqueArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solved that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolvedFindUniqueOrThrowArgs} args - Arguments to find a Solved
     * @example
     * // Get one Solved
     * const solved = await prisma.solved.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolvedFindUniqueOrThrowArgs>(args: SelectSubset<T, SolvedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solved that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedFindFirstArgs} args - Arguments to find a Solved
     * @example
     * // Get one Solved
     * const solved = await prisma.solved.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolvedFindFirstArgs>(args?: SelectSubset<T, SolvedFindFirstArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solved that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedFindFirstOrThrowArgs} args - Arguments to find a Solved
     * @example
     * // Get one Solved
     * const solved = await prisma.solved.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolvedFindFirstOrThrowArgs>(args?: SelectSubset<T, SolvedFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solveds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solveds
     * const solveds = await prisma.solved.findMany()
     * 
     * // Get first 10 Solveds
     * const solveds = await prisma.solved.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solvedWithIdOnly = await prisma.solved.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolvedFindManyArgs>(args?: SelectSubset<T, SolvedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solved.
     * @param {SolvedCreateArgs} args - Arguments to create a Solved.
     * @example
     * // Create one Solved
     * const Solved = await prisma.solved.create({
     *   data: {
     *     // ... data to create a Solved
     *   }
     * })
     * 
     */
    create<T extends SolvedCreateArgs>(args: SelectSubset<T, SolvedCreateArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solveds.
     * @param {SolvedCreateManyArgs} args - Arguments to create many Solveds.
     * @example
     * // Create many Solveds
     * const solved = await prisma.solved.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolvedCreateManyArgs>(args?: SelectSubset<T, SolvedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solveds and returns the data saved in the database.
     * @param {SolvedCreateManyAndReturnArgs} args - Arguments to create many Solveds.
     * @example
     * // Create many Solveds
     * const solved = await prisma.solved.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solveds and only return the `id`
     * const solvedWithIdOnly = await prisma.solved.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolvedCreateManyAndReturnArgs>(args?: SelectSubset<T, SolvedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solved.
     * @param {SolvedDeleteArgs} args - Arguments to delete one Solved.
     * @example
     * // Delete one Solved
     * const Solved = await prisma.solved.delete({
     *   where: {
     *     // ... filter to delete one Solved
     *   }
     * })
     * 
     */
    delete<T extends SolvedDeleteArgs>(args: SelectSubset<T, SolvedDeleteArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solved.
     * @param {SolvedUpdateArgs} args - Arguments to update one Solved.
     * @example
     * // Update one Solved
     * const solved = await prisma.solved.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolvedUpdateArgs>(args: SelectSubset<T, SolvedUpdateArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solveds.
     * @param {SolvedDeleteManyArgs} args - Arguments to filter Solveds to delete.
     * @example
     * // Delete a few Solveds
     * const { count } = await prisma.solved.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolvedDeleteManyArgs>(args?: SelectSubset<T, SolvedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solveds
     * const solved = await prisma.solved.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolvedUpdateManyArgs>(args: SelectSubset<T, SolvedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solveds and returns the data updated in the database.
     * @param {SolvedUpdateManyAndReturnArgs} args - Arguments to update many Solveds.
     * @example
     * // Update many Solveds
     * const solved = await prisma.solved.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solveds and only return the `id`
     * const solvedWithIdOnly = await prisma.solved.updateManyAndReturn({
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
    updateManyAndReturn<T extends SolvedUpdateManyAndReturnArgs>(args: SelectSubset<T, SolvedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solved.
     * @param {SolvedUpsertArgs} args - Arguments to update or create a Solved.
     * @example
     * // Update or create a Solved
     * const solved = await prisma.solved.upsert({
     *   create: {
     *     // ... data to create a Solved
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solved we want to update
     *   }
     * })
     */
    upsert<T extends SolvedUpsertArgs>(args: SelectSubset<T, SolvedUpsertArgs<ExtArgs>>): Prisma__SolvedClient<$Result.GetResult<Prisma.$SolvedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solveds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedCountArgs} args - Arguments to filter Solveds to count.
     * @example
     * // Count the number of Solveds
     * const count = await prisma.solved.count({
     *   where: {
     *     // ... the filter for the Solveds we want to count
     *   }
     * })
    **/
    count<T extends SolvedCountArgs>(
      args?: Subset<T, SolvedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolvedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolvedAggregateArgs>(args: Subset<T, SolvedAggregateArgs>): Prisma.PrismaPromise<GetSolvedAggregateType<T>>

    /**
     * Group by Solved.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolvedGroupByArgs} args - Group by arguments.
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
      T extends SolvedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolvedGroupByArgs['orderBy'] }
        : { orderBy?: SolvedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolvedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolvedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solved model
   */
  readonly fields: SolvedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solved.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolvedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Solved model
   */
  interface SolvedFieldRefs {
    readonly id: FieldRef<"Solved", 'String'>
    readonly solved_by: FieldRef<"Solved", 'String'>
    readonly problem_id: FieldRef<"Solved", 'String'>
    readonly createdAt: FieldRef<"Solved", 'DateTime'>
    readonly updatedAt: FieldRef<"Solved", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Solved findUnique
   */
  export type SolvedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * Filter, which Solved to fetch.
     */
    where: SolvedWhereUniqueInput
  }

  /**
   * Solved findUniqueOrThrow
   */
  export type SolvedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * Filter, which Solved to fetch.
     */
    where: SolvedWhereUniqueInput
  }

  /**
   * Solved findFirst
   */
  export type SolvedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * Filter, which Solved to fetch.
     */
    where?: SolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solveds to fetch.
     */
    orderBy?: SolvedOrderByWithRelationInput | SolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solveds.
     */
    cursor?: SolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solveds.
     */
    distinct?: SolvedScalarFieldEnum | SolvedScalarFieldEnum[]
  }

  /**
   * Solved findFirstOrThrow
   */
  export type SolvedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * Filter, which Solved to fetch.
     */
    where?: SolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solveds to fetch.
     */
    orderBy?: SolvedOrderByWithRelationInput | SolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solveds.
     */
    cursor?: SolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solveds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solveds.
     */
    distinct?: SolvedScalarFieldEnum | SolvedScalarFieldEnum[]
  }

  /**
   * Solved findMany
   */
  export type SolvedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * Filter, which Solveds to fetch.
     */
    where?: SolvedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solveds to fetch.
     */
    orderBy?: SolvedOrderByWithRelationInput | SolvedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solveds.
     */
    cursor?: SolvedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solveds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solveds.
     */
    skip?: number
    distinct?: SolvedScalarFieldEnum | SolvedScalarFieldEnum[]
  }

  /**
   * Solved create
   */
  export type SolvedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * The data needed to create a Solved.
     */
    data: XOR<SolvedCreateInput, SolvedUncheckedCreateInput>
  }

  /**
   * Solved createMany
   */
  export type SolvedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solveds.
     */
    data: SolvedCreateManyInput | SolvedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solved createManyAndReturn
   */
  export type SolvedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * The data used to create many Solveds.
     */
    data: SolvedCreateManyInput | SolvedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solved update
   */
  export type SolvedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * The data needed to update a Solved.
     */
    data: XOR<SolvedUpdateInput, SolvedUncheckedUpdateInput>
    /**
     * Choose, which Solved to update.
     */
    where: SolvedWhereUniqueInput
  }

  /**
   * Solved updateMany
   */
  export type SolvedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solveds.
     */
    data: XOR<SolvedUpdateManyMutationInput, SolvedUncheckedUpdateManyInput>
    /**
     * Filter which Solveds to update
     */
    where?: SolvedWhereInput
    /**
     * Limit how many Solveds to update.
     */
    limit?: number
  }

  /**
   * Solved updateManyAndReturn
   */
  export type SolvedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * The data used to update Solveds.
     */
    data: XOR<SolvedUpdateManyMutationInput, SolvedUncheckedUpdateManyInput>
    /**
     * Filter which Solveds to update
     */
    where?: SolvedWhereInput
    /**
     * Limit how many Solveds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solved upsert
   */
  export type SolvedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * The filter to search for the Solved to update in case it exists.
     */
    where: SolvedWhereUniqueInput
    /**
     * In case the Solved found by the `where` argument doesn't exist, create a new Solved with this data.
     */
    create: XOR<SolvedCreateInput, SolvedUncheckedCreateInput>
    /**
     * In case the Solved was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolvedUpdateInput, SolvedUncheckedUpdateInput>
  }

  /**
   * Solved delete
   */
  export type SolvedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
    /**
     * Filter which Solved to delete.
     */
    where: SolvedWhereUniqueInput
  }

  /**
   * Solved deleteMany
   */
  export type SolvedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solveds to delete
     */
    where?: SolvedWhereInput
    /**
     * Limit how many Solveds to delete.
     */
    limit?: number
  }

  /**
   * Solved without action
   */
  export type SolvedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solved
     */
    select?: SolvedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solved
     */
    omit?: SolvedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolvedInclude<ExtArgs> | null
  }


  /**
   * Model Playlist
   */

  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    created_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    created_by: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    title: number
    description: number
    created_by: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PlaylistMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_by?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    created_by?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PlaylistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistWhereInput
    orderBy?: PlaylistOrderByWithAggregationInput | PlaylistOrderByWithAggregationInput[]
    by: PlaylistScalarFieldEnum[] | PlaylistScalarFieldEnum
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }

  export type PlaylistGroupByOutputType = {
    id: string
    title: string
    description: string
    created_by: string
    createdAt: Date
    updatedAt: Date
    _count: PlaylistCountAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    created_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlist"]>

  export type PlaylistSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    created_by?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PlaylistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "created_by" | "createdAt" | "updatedAt", ExtArgs["result"]["playlist"]>
  export type PlaylistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    problems?: boolean | Playlist$problemsArgs<ExtArgs>
    _count?: boolean | PlaylistCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PlaylistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PlaylistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlist"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      problems: Prisma.$Problem_ListsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      created_by: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["playlist"]>
    composites: {}
  }

  type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistDefaultArgs> = $Result.GetResult<Prisma.$PlaylistPayload, S>

  type PlaylistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlaylistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlist'], meta: { name: 'Playlist' } }
    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlaylistFindUniqueArgs>(args: SelectSubset<T, PlaylistFindUniqueArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Playlist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(args: SelectSubset<T, PlaylistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlaylistFindFirstArgs>(args?: SelectSubset<T, PlaylistFindFirstArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Playlist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlaylistFindManyArgs>(args?: SelectSubset<T, PlaylistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
     */
    create<T extends PlaylistCreateArgs>(args: SelectSubset<T, PlaylistCreateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Playlists.
     * @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlaylistCreateManyArgs>(args?: SelectSubset<T, PlaylistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Playlists and returns the data saved in the database.
     * @param {PlaylistCreateManyAndReturnArgs} args - Arguments to create many Playlists.
     * @example
     * // Create many Playlists
     * const playlist = await prisma.playlist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlaylistCreateManyAndReturnArgs>(args?: SelectSubset<T, PlaylistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
     */
    delete<T extends PlaylistDeleteArgs>(args: SelectSubset<T, PlaylistDeleteArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlaylistUpdateArgs>(args: SelectSubset<T, PlaylistUpdateArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlaylistDeleteManyArgs>(args?: SelectSubset<T, PlaylistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlaylistUpdateManyArgs>(args: SelectSubset<T, PlaylistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists and returns the data updated in the database.
     * @param {PlaylistUpdateManyAndReturnArgs} args - Arguments to update many Playlists.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Playlists and only return the `id`
     * const playlistWithIdOnly = await prisma.playlist.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlaylistUpdateManyAndReturnArgs>(args: SelectSubset<T, PlaylistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
     */
    upsert<T extends PlaylistUpsertArgs>(args: SelectSubset<T, PlaylistUpsertArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
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
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlist model
   */
  readonly fields: PlaylistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problems<T extends Playlist$problemsArgs<ExtArgs> = {}>(args?: Subset<T, Playlist$problemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Playlist model
   */
  interface PlaylistFieldRefs {
    readonly id: FieldRef<"Playlist", 'String'>
    readonly title: FieldRef<"Playlist", 'String'>
    readonly description: FieldRef<"Playlist", 'String'>
    readonly created_by: FieldRef<"Playlist", 'String'>
    readonly createdAt: FieldRef<"Playlist", 'DateTime'>
    readonly updatedAt: FieldRef<"Playlist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Playlist findUnique
   */
  export type PlaylistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findFirst
   */
  export type PlaylistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistOrderByWithRelationInput | PlaylistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistScalarFieldEnum | PlaylistScalarFieldEnum[]
  }

  /**
   * Playlist create
   */
  export type PlaylistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }

  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Playlist createManyAndReturn
   */
  export type PlaylistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistCreateManyInput | PlaylistCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
  }

  /**
   * Playlist updateManyAndReturn
   */
  export type PlaylistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }

  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
    /**
     * Limit how many Playlists to delete.
     */
    limit?: number
  }

  /**
   * Playlist.problems
   */
  export type Playlist$problemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    where?: Problem_ListsWhereInput
    orderBy?: Problem_ListsOrderByWithRelationInput | Problem_ListsOrderByWithRelationInput[]
    cursor?: Problem_ListsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Problem_ListsScalarFieldEnum | Problem_ListsScalarFieldEnum[]
  }

  /**
   * Playlist without action
   */
  export type PlaylistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Playlist
     */
    omit?: PlaylistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlaylistInclude<ExtArgs> | null
  }


  /**
   * Model Problem_Lists
   */

  export type AggregateProblem_Lists = {
    _count: Problem_ListsCountAggregateOutputType | null
    _min: Problem_ListsMinAggregateOutputType | null
    _max: Problem_ListsMaxAggregateOutputType | null
  }

  export type Problem_ListsMinAggregateOutputType = {
    id: string | null
    playlist_id: string | null
    problem_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Problem_ListsMaxAggregateOutputType = {
    id: string | null
    playlist_id: string | null
    problem_id: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Problem_ListsCountAggregateOutputType = {
    id: number
    playlist_id: number
    problem_id: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Problem_ListsMinAggregateInputType = {
    id?: true
    playlist_id?: true
    problem_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Problem_ListsMaxAggregateInputType = {
    id?: true
    playlist_id?: true
    problem_id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Problem_ListsCountAggregateInputType = {
    id?: true
    playlist_id?: true
    problem_id?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Problem_ListsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem_Lists to aggregate.
     */
    where?: Problem_ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problem_Lists to fetch.
     */
    orderBy?: Problem_ListsOrderByWithRelationInput | Problem_ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Problem_ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problem_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problem_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Problem_Lists
    **/
    _count?: true | Problem_ListsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Problem_ListsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Problem_ListsMaxAggregateInputType
  }

  export type GetProblem_ListsAggregateType<T extends Problem_ListsAggregateArgs> = {
        [P in keyof T & keyof AggregateProblem_Lists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProblem_Lists[P]>
      : GetScalarType<T[P], AggregateProblem_Lists[P]>
  }




  export type Problem_ListsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Problem_ListsWhereInput
    orderBy?: Problem_ListsOrderByWithAggregationInput | Problem_ListsOrderByWithAggregationInput[]
    by: Problem_ListsScalarFieldEnum[] | Problem_ListsScalarFieldEnum
    having?: Problem_ListsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Problem_ListsCountAggregateInputType | true
    _min?: Problem_ListsMinAggregateInputType
    _max?: Problem_ListsMaxAggregateInputType
  }

  export type Problem_ListsGroupByOutputType = {
    id: string
    playlist_id: string
    problem_id: string
    createdAt: Date
    updatedAt: Date
    _count: Problem_ListsCountAggregateOutputType | null
    _min: Problem_ListsMinAggregateOutputType | null
    _max: Problem_ListsMaxAggregateOutputType | null
  }

  type GetProblem_ListsGroupByPayload<T extends Problem_ListsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Problem_ListsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Problem_ListsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Problem_ListsGroupByOutputType[P]>
            : GetScalarType<T[P], Problem_ListsGroupByOutputType[P]>
        }
      >
    >


  export type Problem_ListsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlist_id?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem_Lists"]>

  export type Problem_ListsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlist_id?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem_Lists"]>

  export type Problem_ListsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlist_id?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["problem_Lists"]>

  export type Problem_ListsSelectScalar = {
    id?: boolean
    playlist_id?: boolean
    problem_id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type Problem_ListsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playlist_id" | "problem_id" | "createdAt" | "updatedAt", ExtArgs["result"]["problem_Lists"]>
  export type Problem_ListsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type Problem_ListsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }
  export type Problem_ListsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistDefaultArgs<ExtArgs>
    problem?: boolean | ProblemDefaultArgs<ExtArgs>
  }

  export type $Problem_ListsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Problem_Lists"
    objects: {
      playlist: Prisma.$PlaylistPayload<ExtArgs>
      problem: Prisma.$ProblemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlist_id: string
      problem_id: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["problem_Lists"]>
    composites: {}
  }

  type Problem_ListsGetPayload<S extends boolean | null | undefined | Problem_ListsDefaultArgs> = $Result.GetResult<Prisma.$Problem_ListsPayload, S>

  type Problem_ListsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Problem_ListsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Problem_ListsCountAggregateInputType | true
    }

  export interface Problem_ListsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Problem_Lists'], meta: { name: 'Problem_Lists' } }
    /**
     * Find zero or one Problem_Lists that matches the filter.
     * @param {Problem_ListsFindUniqueArgs} args - Arguments to find a Problem_Lists
     * @example
     * // Get one Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Problem_ListsFindUniqueArgs>(args: SelectSubset<T, Problem_ListsFindUniqueArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Problem_Lists that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Problem_ListsFindUniqueOrThrowArgs} args - Arguments to find a Problem_Lists
     * @example
     * // Get one Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Problem_ListsFindUniqueOrThrowArgs>(args: SelectSubset<T, Problem_ListsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem_Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsFindFirstArgs} args - Arguments to find a Problem_Lists
     * @example
     * // Get one Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Problem_ListsFindFirstArgs>(args?: SelectSubset<T, Problem_ListsFindFirstArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Problem_Lists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsFindFirstOrThrowArgs} args - Arguments to find a Problem_Lists
     * @example
     * // Get one Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Problem_ListsFindFirstOrThrowArgs>(args?: SelectSubset<T, Problem_ListsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Problem_Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.findMany()
     * 
     * // Get first 10 Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const problem_ListsWithIdOnly = await prisma.problem_Lists.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Problem_ListsFindManyArgs>(args?: SelectSubset<T, Problem_ListsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Problem_Lists.
     * @param {Problem_ListsCreateArgs} args - Arguments to create a Problem_Lists.
     * @example
     * // Create one Problem_Lists
     * const Problem_Lists = await prisma.problem_Lists.create({
     *   data: {
     *     // ... data to create a Problem_Lists
     *   }
     * })
     * 
     */
    create<T extends Problem_ListsCreateArgs>(args: SelectSubset<T, Problem_ListsCreateArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Problem_Lists.
     * @param {Problem_ListsCreateManyArgs} args - Arguments to create many Problem_Lists.
     * @example
     * // Create many Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Problem_ListsCreateManyArgs>(args?: SelectSubset<T, Problem_ListsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Problem_Lists and returns the data saved in the database.
     * @param {Problem_ListsCreateManyAndReturnArgs} args - Arguments to create many Problem_Lists.
     * @example
     * // Create many Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Problem_Lists and only return the `id`
     * const problem_ListsWithIdOnly = await prisma.problem_Lists.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Problem_ListsCreateManyAndReturnArgs>(args?: SelectSubset<T, Problem_ListsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Problem_Lists.
     * @param {Problem_ListsDeleteArgs} args - Arguments to delete one Problem_Lists.
     * @example
     * // Delete one Problem_Lists
     * const Problem_Lists = await prisma.problem_Lists.delete({
     *   where: {
     *     // ... filter to delete one Problem_Lists
     *   }
     * })
     * 
     */
    delete<T extends Problem_ListsDeleteArgs>(args: SelectSubset<T, Problem_ListsDeleteArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Problem_Lists.
     * @param {Problem_ListsUpdateArgs} args - Arguments to update one Problem_Lists.
     * @example
     * // Update one Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Problem_ListsUpdateArgs>(args: SelectSubset<T, Problem_ListsUpdateArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Problem_Lists.
     * @param {Problem_ListsDeleteManyArgs} args - Arguments to filter Problem_Lists to delete.
     * @example
     * // Delete a few Problem_Lists
     * const { count } = await prisma.problem_Lists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Problem_ListsDeleteManyArgs>(args?: SelectSubset<T, Problem_ListsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problem_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Problem_ListsUpdateManyArgs>(args: SelectSubset<T, Problem_ListsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Problem_Lists and returns the data updated in the database.
     * @param {Problem_ListsUpdateManyAndReturnArgs} args - Arguments to update many Problem_Lists.
     * @example
     * // Update many Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Problem_Lists and only return the `id`
     * const problem_ListsWithIdOnly = await prisma.problem_Lists.updateManyAndReturn({
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
    updateManyAndReturn<T extends Problem_ListsUpdateManyAndReturnArgs>(args: SelectSubset<T, Problem_ListsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Problem_Lists.
     * @param {Problem_ListsUpsertArgs} args - Arguments to update or create a Problem_Lists.
     * @example
     * // Update or create a Problem_Lists
     * const problem_Lists = await prisma.problem_Lists.upsert({
     *   create: {
     *     // ... data to create a Problem_Lists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Problem_Lists we want to update
     *   }
     * })
     */
    upsert<T extends Problem_ListsUpsertArgs>(args: SelectSubset<T, Problem_ListsUpsertArgs<ExtArgs>>): Prisma__Problem_ListsClient<$Result.GetResult<Prisma.$Problem_ListsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Problem_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsCountArgs} args - Arguments to filter Problem_Lists to count.
     * @example
     * // Count the number of Problem_Lists
     * const count = await prisma.problem_Lists.count({
     *   where: {
     *     // ... the filter for the Problem_Lists we want to count
     *   }
     * })
    **/
    count<T extends Problem_ListsCountArgs>(
      args?: Subset<T, Problem_ListsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Problem_ListsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Problem_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Problem_ListsAggregateArgs>(args: Subset<T, Problem_ListsAggregateArgs>): Prisma.PrismaPromise<GetProblem_ListsAggregateType<T>>

    /**
     * Group by Problem_Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Problem_ListsGroupByArgs} args - Group by arguments.
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
      T extends Problem_ListsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Problem_ListsGroupByArgs['orderBy'] }
        : { orderBy?: Problem_ListsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Problem_ListsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProblem_ListsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Problem_Lists model
   */
  readonly fields: Problem_ListsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Problem_Lists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Problem_ListsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    playlist<T extends PlaylistDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistDefaultArgs<ExtArgs>>): Prisma__PlaylistClient<$Result.GetResult<Prisma.$PlaylistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    problem<T extends ProblemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProblemDefaultArgs<ExtArgs>>): Prisma__ProblemClient<$Result.GetResult<Prisma.$ProblemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Problem_Lists model
   */
  interface Problem_ListsFieldRefs {
    readonly id: FieldRef<"Problem_Lists", 'String'>
    readonly playlist_id: FieldRef<"Problem_Lists", 'String'>
    readonly problem_id: FieldRef<"Problem_Lists", 'String'>
    readonly createdAt: FieldRef<"Problem_Lists", 'DateTime'>
    readonly updatedAt: FieldRef<"Problem_Lists", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Problem_Lists findUnique
   */
  export type Problem_ListsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * Filter, which Problem_Lists to fetch.
     */
    where: Problem_ListsWhereUniqueInput
  }

  /**
   * Problem_Lists findUniqueOrThrow
   */
  export type Problem_ListsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * Filter, which Problem_Lists to fetch.
     */
    where: Problem_ListsWhereUniqueInput
  }

  /**
   * Problem_Lists findFirst
   */
  export type Problem_ListsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * Filter, which Problem_Lists to fetch.
     */
    where?: Problem_ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problem_Lists to fetch.
     */
    orderBy?: Problem_ListsOrderByWithRelationInput | Problem_ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problem_Lists.
     */
    cursor?: Problem_ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problem_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problem_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problem_Lists.
     */
    distinct?: Problem_ListsScalarFieldEnum | Problem_ListsScalarFieldEnum[]
  }

  /**
   * Problem_Lists findFirstOrThrow
   */
  export type Problem_ListsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * Filter, which Problem_Lists to fetch.
     */
    where?: Problem_ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problem_Lists to fetch.
     */
    orderBy?: Problem_ListsOrderByWithRelationInput | Problem_ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Problem_Lists.
     */
    cursor?: Problem_ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problem_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problem_Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Problem_Lists.
     */
    distinct?: Problem_ListsScalarFieldEnum | Problem_ListsScalarFieldEnum[]
  }

  /**
   * Problem_Lists findMany
   */
  export type Problem_ListsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * Filter, which Problem_Lists to fetch.
     */
    where?: Problem_ListsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Problem_Lists to fetch.
     */
    orderBy?: Problem_ListsOrderByWithRelationInput | Problem_ListsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Problem_Lists.
     */
    cursor?: Problem_ListsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Problem_Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Problem_Lists.
     */
    skip?: number
    distinct?: Problem_ListsScalarFieldEnum | Problem_ListsScalarFieldEnum[]
  }

  /**
   * Problem_Lists create
   */
  export type Problem_ListsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * The data needed to create a Problem_Lists.
     */
    data: XOR<Problem_ListsCreateInput, Problem_ListsUncheckedCreateInput>
  }

  /**
   * Problem_Lists createMany
   */
  export type Problem_ListsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Problem_Lists.
     */
    data: Problem_ListsCreateManyInput | Problem_ListsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Problem_Lists createManyAndReturn
   */
  export type Problem_ListsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * The data used to create many Problem_Lists.
     */
    data: Problem_ListsCreateManyInput | Problem_ListsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem_Lists update
   */
  export type Problem_ListsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * The data needed to update a Problem_Lists.
     */
    data: XOR<Problem_ListsUpdateInput, Problem_ListsUncheckedUpdateInput>
    /**
     * Choose, which Problem_Lists to update.
     */
    where: Problem_ListsWhereUniqueInput
  }

  /**
   * Problem_Lists updateMany
   */
  export type Problem_ListsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Problem_Lists.
     */
    data: XOR<Problem_ListsUpdateManyMutationInput, Problem_ListsUncheckedUpdateManyInput>
    /**
     * Filter which Problem_Lists to update
     */
    where?: Problem_ListsWhereInput
    /**
     * Limit how many Problem_Lists to update.
     */
    limit?: number
  }

  /**
   * Problem_Lists updateManyAndReturn
   */
  export type Problem_ListsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * The data used to update Problem_Lists.
     */
    data: XOR<Problem_ListsUpdateManyMutationInput, Problem_ListsUncheckedUpdateManyInput>
    /**
     * Filter which Problem_Lists to update
     */
    where?: Problem_ListsWhereInput
    /**
     * Limit how many Problem_Lists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Problem_Lists upsert
   */
  export type Problem_ListsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * The filter to search for the Problem_Lists to update in case it exists.
     */
    where: Problem_ListsWhereUniqueInput
    /**
     * In case the Problem_Lists found by the `where` argument doesn't exist, create a new Problem_Lists with this data.
     */
    create: XOR<Problem_ListsCreateInput, Problem_ListsUncheckedCreateInput>
    /**
     * In case the Problem_Lists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Problem_ListsUpdateInput, Problem_ListsUncheckedUpdateInput>
  }

  /**
   * Problem_Lists delete
   */
  export type Problem_ListsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
    /**
     * Filter which Problem_Lists to delete.
     */
    where: Problem_ListsWhereUniqueInput
  }

  /**
   * Problem_Lists deleteMany
   */
  export type Problem_ListsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Problem_Lists to delete
     */
    where?: Problem_ListsWhereInput
    /**
     * Limit how many Problem_Lists to delete.
     */
    limit?: number
  }

  /**
   * Problem_Lists without action
   */
  export type Problem_ListsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Problem_Lists
     */
    select?: Problem_ListsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Problem_Lists
     */
    omit?: Problem_ListsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Problem_ListsInclude<ExtArgs> | null
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
    username: 'username',
    email: 'email',
    password: 'password',
    avatar_url: 'avatar_url',
    is_verified: 'is_verified',
    role: 'role',
    refresh_token: 'refresh_token',
    email_verification_token: 'email_verification_token',
    email_verification_token_expiry: 'email_verification_token_expiry',
    password_reset_token: 'password_reset_token',
    password_reset_token_expiry: 'password_reset_token_expiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProblemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    difficulty: 'difficulty',
    tags: 'tags',
    created_by: 'created_by',
    examples: 'examples',
    constraints: 'constraints',
    hints: 'hints',
    editorial: 'editorial',
    test_cases: 'test_cases',
    code_snippets: 'code_snippets',
    reference_solutions: 'reference_solutions',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProblemScalarFieldEnum = (typeof ProblemScalarFieldEnum)[keyof typeof ProblemScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    submitted_by: 'submitted_by',
    problem_id: 'problem_id',
    source_code: 'source_code',
    language: 'language',
    std_input: 'std_input',
    std_output: 'std_output',
    std_error: 'std_error',
    compile_output: 'compile_output',
    status: 'status',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const Test_CaseScalarFieldEnum: {
    id: 'id',
    submission_id: 'submission_id',
    test_case: 'test_case',
    status: 'status',
    std_output: 'std_output',
    expected_output: 'expected_output',
    std_error: 'std_error',
    compile_output: 'compile_output',
    memory: 'memory',
    time: 'time',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Test_CaseScalarFieldEnum = (typeof Test_CaseScalarFieldEnum)[keyof typeof Test_CaseScalarFieldEnum]


  export const SolvedScalarFieldEnum: {
    id: 'id',
    solved_by: 'solved_by',
    problem_id: 'problem_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SolvedScalarFieldEnum = (typeof SolvedScalarFieldEnum)[keyof typeof SolvedScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    created_by: 'created_by',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const Problem_ListsScalarFieldEnum: {
    id: 'id',
    playlist_id: 'playlist_id',
    problem_id: 'problem_id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Problem_ListsScalarFieldEnum = (typeof Problem_ListsScalarFieldEnum)[keyof typeof Problem_ListsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'USER_ROLE'
   */
  export type EnumUSER_ROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_ROLE'>
    


  /**
   * Reference to a field of type 'USER_ROLE[]'
   */
  export type ListEnumUSER_ROLEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'USER_ROLE[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PROBLEM_DIFFICULTY'
   */
  export type EnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PROBLEM_DIFFICULTY'>
    


  /**
   * Reference to a field of type 'PROBLEM_DIFFICULTY[]'
   */
  export type ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PROBLEM_DIFFICULTY[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'SUBMISSION_STATUS'
   */
  export type EnumSUBMISSION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SUBMISSION_STATUS'>
    


  /**
   * Reference to a field of type 'SUBMISSION_STATUS[]'
   */
  export type ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SUBMISSION_STATUS[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TEST_CASE_STATUS'
   */
  export type EnumTEST_CASE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TEST_CASE_STATUS'>
    


  /**
   * Reference to a field of type 'TEST_CASE_STATUS[]'
   */
  export type ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TEST_CASE_STATUS[]'>
    


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
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar_url?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    role?: EnumUSER_ROLEFilter<"User"> | $Enums.USER_ROLE
    refresh_token?: StringNullableFilter<"User"> | string | null
    email_verification_token?: StringNullableFilter<"User"> | string | null
    email_verification_token_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    password_reset_token_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solved?: SolvedListRelationFilter
    playlist?: PlaylistListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    email_verification_token?: SortOrderInput | SortOrder
    email_verification_token_expiry?: SortOrderInput | SortOrder
    password_reset_token?: SortOrderInput | SortOrder
    password_reset_token_expiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    problems?: ProblemOrderByRelationAggregateInput
    submissions?: SubmissionOrderByRelationAggregateInput
    solved?: SolvedOrderByRelationAggregateInput
    playlist?: PlaylistOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    avatar_url?: StringFilter<"User"> | string
    is_verified?: BoolFilter<"User"> | boolean
    role?: EnumUSER_ROLEFilter<"User"> | $Enums.USER_ROLE
    refresh_token?: StringNullableFilter<"User"> | string | null
    email_verification_token?: StringNullableFilter<"User"> | string | null
    email_verification_token_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableFilter<"User"> | string | null
    password_reset_token_expiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    problems?: ProblemListRelationFilter
    submissions?: SubmissionListRelationFilter
    solved?: SolvedListRelationFilter
    playlist?: PlaylistListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    email_verification_token?: SortOrderInput | SortOrder
    email_verification_token_expiry?: SortOrderInput | SortOrder
    password_reset_token?: SortOrderInput | SortOrder
    password_reset_token_expiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    avatar_url?: StringWithAggregatesFilter<"User"> | string
    is_verified?: BoolWithAggregatesFilter<"User"> | boolean
    role?: EnumUSER_ROLEWithAggregatesFilter<"User"> | $Enums.USER_ROLE
    refresh_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    email_verification_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    email_verification_token_expiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    password_reset_token?: StringNullableWithAggregatesFilter<"User"> | string | null
    password_reset_token_expiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProblemWhereInput = {
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumPROBLEM_DIFFICULTYFilter<"Problem"> | $Enums.PROBLEM_DIFFICULTY
    tags?: StringNullableListFilter<"Problem">
    created_by?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    test_cases?: JsonFilter<"Problem">
    code_snippets?: JsonFilter<"Problem">
    reference_solutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    solved?: SolvedListRelationFilter
    problem_lists?: Problem_ListsListRelationFilter
  }

  export type ProblemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    created_by?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    test_cases?: SortOrder
    code_snippets?: SortOrder
    reference_solutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
    solved?: SolvedOrderByRelationAggregateInput
    problem_lists?: Problem_ListsOrderByRelationAggregateInput
  }

  export type ProblemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProblemWhereInput | ProblemWhereInput[]
    OR?: ProblemWhereInput[]
    NOT?: ProblemWhereInput | ProblemWhereInput[]
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumPROBLEM_DIFFICULTYFilter<"Problem"> | $Enums.PROBLEM_DIFFICULTY
    tags?: StringNullableListFilter<"Problem">
    created_by?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    test_cases?: JsonFilter<"Problem">
    code_snippets?: JsonFilter<"Problem">
    reference_solutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
    solved?: SolvedListRelationFilter
    problem_lists?: Problem_ListsListRelationFilter
  }, "id">

  export type ProblemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    created_by?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrderInput | SortOrder
    editorial?: SortOrderInput | SortOrder
    test_cases?: SortOrder
    code_snippets?: SortOrder
    reference_solutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProblemCountOrderByAggregateInput
    _max?: ProblemMaxOrderByAggregateInput
    _min?: ProblemMinOrderByAggregateInput
  }

  export type ProblemScalarWhereWithAggregatesInput = {
    AND?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    OR?: ProblemScalarWhereWithAggregatesInput[]
    NOT?: ProblemScalarWhereWithAggregatesInput | ProblemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem"> | string
    title?: StringWithAggregatesFilter<"Problem"> | string
    description?: StringWithAggregatesFilter<"Problem"> | string
    difficulty?: EnumPROBLEM_DIFFICULTYWithAggregatesFilter<"Problem"> | $Enums.PROBLEM_DIFFICULTY
    tags?: StringNullableListFilter<"Problem">
    created_by?: StringWithAggregatesFilter<"Problem"> | string
    examples?: JsonWithAggregatesFilter<"Problem">
    constraints?: StringWithAggregatesFilter<"Problem"> | string
    hints?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    editorial?: StringNullableWithAggregatesFilter<"Problem"> | string | null
    test_cases?: JsonWithAggregatesFilter<"Problem">
    code_snippets?: JsonWithAggregatesFilter<"Problem">
    reference_solutions?: JsonWithAggregatesFilter<"Problem">
    createdAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: StringFilter<"Submission"> | string
    submitted_by?: StringFilter<"Submission"> | string
    problem_id?: StringFilter<"Submission"> | string
    source_code?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    std_input?: StringNullableFilter<"Submission"> | string | null
    std_output?: StringNullableFilter<"Submission"> | string | null
    std_error?: StringNullableFilter<"Submission"> | string | null
    compile_output?: StringNullableFilter<"Submission"> | string | null
    status?: EnumSUBMISSION_STATUSFilter<"Submission"> | $Enums.SUBMISSION_STATUS
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    test_cases?: Test_CaseListRelationFilter
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    problem_id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    std_input?: SortOrderInput | SortOrder
    std_output?: SortOrderInput | SortOrder
    std_error?: SortOrderInput | SortOrder
    compile_output?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
    test_cases?: Test_CaseOrderByRelationAggregateInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    submitted_by?: StringFilter<"Submission"> | string
    problem_id?: StringFilter<"Submission"> | string
    source_code?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    std_input?: StringNullableFilter<"Submission"> | string | null
    std_output?: StringNullableFilter<"Submission"> | string | null
    std_error?: StringNullableFilter<"Submission"> | string | null
    compile_output?: StringNullableFilter<"Submission"> | string | null
    status?: EnumSUBMISSION_STATUSFilter<"Submission"> | $Enums.SUBMISSION_STATUS
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
    test_cases?: Test_CaseListRelationFilter
  }, "id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    problem_id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    std_input?: SortOrderInput | SortOrder
    std_output?: SortOrderInput | SortOrder
    std_error?: SortOrderInput | SortOrder
    compile_output?: SortOrderInput | SortOrder
    status?: SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Submission"> | string
    submitted_by?: StringWithAggregatesFilter<"Submission"> | string
    problem_id?: StringWithAggregatesFilter<"Submission"> | string
    source_code?: StringWithAggregatesFilter<"Submission"> | string
    language?: StringWithAggregatesFilter<"Submission"> | string
    std_input?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    std_output?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    std_error?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    compile_output?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    status?: EnumSUBMISSION_STATUSWithAggregatesFilter<"Submission"> | $Enums.SUBMISSION_STATUS
    memory?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    time?: StringNullableWithAggregatesFilter<"Submission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
  }

  export type Test_CaseWhereInput = {
    AND?: Test_CaseWhereInput | Test_CaseWhereInput[]
    OR?: Test_CaseWhereInput[]
    NOT?: Test_CaseWhereInput | Test_CaseWhereInput[]
    id?: StringFilter<"Test_Case"> | string
    submission_id?: StringFilter<"Test_Case"> | string
    test_case?: IntFilter<"Test_Case"> | number
    status?: EnumTEST_CASE_STATUSFilter<"Test_Case"> | $Enums.TEST_CASE_STATUS
    std_output?: StringNullableFilter<"Test_Case"> | string | null
    expected_output?: StringNullableFilter<"Test_Case"> | string | null
    std_error?: StringNullableFilter<"Test_Case"> | string | null
    compile_output?: StringNullableFilter<"Test_Case"> | string | null
    memory?: StringNullableFilter<"Test_Case"> | string | null
    time?: StringNullableFilter<"Test_Case"> | string | null
    createdAt?: DateTimeFilter<"Test_Case"> | Date | string
    updatedAt?: DateTimeFilter<"Test_Case"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }

  export type Test_CaseOrderByWithRelationInput = {
    id?: SortOrder
    submission_id?: SortOrder
    test_case?: SortOrder
    status?: SortOrder
    std_output?: SortOrderInput | SortOrder
    expected_output?: SortOrderInput | SortOrder
    std_error?: SortOrderInput | SortOrder
    compile_output?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    submission?: SubmissionOrderByWithRelationInput
  }

  export type Test_CaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Test_CaseWhereInput | Test_CaseWhereInput[]
    OR?: Test_CaseWhereInput[]
    NOT?: Test_CaseWhereInput | Test_CaseWhereInput[]
    submission_id?: StringFilter<"Test_Case"> | string
    test_case?: IntFilter<"Test_Case"> | number
    status?: EnumTEST_CASE_STATUSFilter<"Test_Case"> | $Enums.TEST_CASE_STATUS
    std_output?: StringNullableFilter<"Test_Case"> | string | null
    expected_output?: StringNullableFilter<"Test_Case"> | string | null
    std_error?: StringNullableFilter<"Test_Case"> | string | null
    compile_output?: StringNullableFilter<"Test_Case"> | string | null
    memory?: StringNullableFilter<"Test_Case"> | string | null
    time?: StringNullableFilter<"Test_Case"> | string | null
    createdAt?: DateTimeFilter<"Test_Case"> | Date | string
    updatedAt?: DateTimeFilter<"Test_Case"> | Date | string
    submission?: XOR<SubmissionScalarRelationFilter, SubmissionWhereInput>
  }, "id">

  export type Test_CaseOrderByWithAggregationInput = {
    id?: SortOrder
    submission_id?: SortOrder
    test_case?: SortOrder
    status?: SortOrder
    std_output?: SortOrderInput | SortOrder
    expected_output?: SortOrderInput | SortOrder
    std_error?: SortOrderInput | SortOrder
    compile_output?: SortOrderInput | SortOrder
    memory?: SortOrderInput | SortOrder
    time?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Test_CaseCountOrderByAggregateInput
    _avg?: Test_CaseAvgOrderByAggregateInput
    _max?: Test_CaseMaxOrderByAggregateInput
    _min?: Test_CaseMinOrderByAggregateInput
    _sum?: Test_CaseSumOrderByAggregateInput
  }

  export type Test_CaseScalarWhereWithAggregatesInput = {
    AND?: Test_CaseScalarWhereWithAggregatesInput | Test_CaseScalarWhereWithAggregatesInput[]
    OR?: Test_CaseScalarWhereWithAggregatesInput[]
    NOT?: Test_CaseScalarWhereWithAggregatesInput | Test_CaseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Test_Case"> | string
    submission_id?: StringWithAggregatesFilter<"Test_Case"> | string
    test_case?: IntWithAggregatesFilter<"Test_Case"> | number
    status?: EnumTEST_CASE_STATUSWithAggregatesFilter<"Test_Case"> | $Enums.TEST_CASE_STATUS
    std_output?: StringNullableWithAggregatesFilter<"Test_Case"> | string | null
    expected_output?: StringNullableWithAggregatesFilter<"Test_Case"> | string | null
    std_error?: StringNullableWithAggregatesFilter<"Test_Case"> | string | null
    compile_output?: StringNullableWithAggregatesFilter<"Test_Case"> | string | null
    memory?: StringNullableWithAggregatesFilter<"Test_Case"> | string | null
    time?: StringNullableWithAggregatesFilter<"Test_Case"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Test_Case"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Test_Case"> | Date | string
  }

  export type SolvedWhereInput = {
    AND?: SolvedWhereInput | SolvedWhereInput[]
    OR?: SolvedWhereInput[]
    NOT?: SolvedWhereInput | SolvedWhereInput[]
    id?: StringFilter<"Solved"> | string
    solved_by?: StringFilter<"Solved"> | string
    problem_id?: StringFilter<"Solved"> | string
    createdAt?: DateTimeFilter<"Solved"> | Date | string
    updatedAt?: DateTimeFilter<"Solved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type SolvedOrderByWithRelationInput = {
    id?: SortOrder
    solved_by?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type SolvedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    solved_by_problem_id?: SolvedSolved_byProblem_idCompoundUniqueInput
    AND?: SolvedWhereInput | SolvedWhereInput[]
    OR?: SolvedWhereInput[]
    NOT?: SolvedWhereInput | SolvedWhereInput[]
    solved_by?: StringFilter<"Solved"> | string
    problem_id?: StringFilter<"Solved"> | string
    createdAt?: DateTimeFilter<"Solved"> | Date | string
    updatedAt?: DateTimeFilter<"Solved"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "solved_by_problem_id">

  export type SolvedOrderByWithAggregationInput = {
    id?: SortOrder
    solved_by?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SolvedCountOrderByAggregateInput
    _max?: SolvedMaxOrderByAggregateInput
    _min?: SolvedMinOrderByAggregateInput
  }

  export type SolvedScalarWhereWithAggregatesInput = {
    AND?: SolvedScalarWhereWithAggregatesInput | SolvedScalarWhereWithAggregatesInput[]
    OR?: SolvedScalarWhereWithAggregatesInput[]
    NOT?: SolvedScalarWhereWithAggregatesInput | SolvedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Solved"> | string
    solved_by?: StringWithAggregatesFilter<"Solved"> | string
    problem_id?: StringWithAggregatesFilter<"Solved"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Solved"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Solved"> | Date | string
  }

  export type PlaylistWhereInput = {
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    created_by?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problems?: Problem_ListsListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    problems?: Problem_ListsOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title_created_by?: PlaylistTitleCreated_byCompoundUniqueInput
    AND?: PlaylistWhereInput | PlaylistWhereInput[]
    OR?: PlaylistWhereInput[]
    NOT?: PlaylistWhereInput | PlaylistWhereInput[]
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    created_by?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    problems?: Problem_ListsListRelationFilter
  }, "id" | "title_created_by">

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    OR?: PlaylistScalarWhereWithAggregatesInput[]
    NOT?: PlaylistScalarWhereWithAggregatesInput | PlaylistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlist"> | string
    title?: StringWithAggregatesFilter<"Playlist"> | string
    description?: StringWithAggregatesFilter<"Playlist"> | string
    created_by?: StringWithAggregatesFilter<"Playlist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Playlist"> | Date | string
  }

  export type Problem_ListsWhereInput = {
    AND?: Problem_ListsWhereInput | Problem_ListsWhereInput[]
    OR?: Problem_ListsWhereInput[]
    NOT?: Problem_ListsWhereInput | Problem_ListsWhereInput[]
    id?: StringFilter<"Problem_Lists"> | string
    playlist_id?: StringFilter<"Problem_Lists"> | string
    problem_id?: StringFilter<"Problem_Lists"> | string
    createdAt?: DateTimeFilter<"Problem_Lists"> | Date | string
    updatedAt?: DateTimeFilter<"Problem_Lists"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }

  export type Problem_ListsOrderByWithRelationInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    playlist?: PlaylistOrderByWithRelationInput
    problem?: ProblemOrderByWithRelationInput
  }

  export type Problem_ListsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlist_id_problem_id?: Problem_ListsPlaylist_idProblem_idCompoundUniqueInput
    AND?: Problem_ListsWhereInput | Problem_ListsWhereInput[]
    OR?: Problem_ListsWhereInput[]
    NOT?: Problem_ListsWhereInput | Problem_ListsWhereInput[]
    playlist_id?: StringFilter<"Problem_Lists"> | string
    problem_id?: StringFilter<"Problem_Lists"> | string
    createdAt?: DateTimeFilter<"Problem_Lists"> | Date | string
    updatedAt?: DateTimeFilter<"Problem_Lists"> | Date | string
    playlist?: XOR<PlaylistScalarRelationFilter, PlaylistWhereInput>
    problem?: XOR<ProblemScalarRelationFilter, ProblemWhereInput>
  }, "id" | "playlist_id_problem_id">

  export type Problem_ListsOrderByWithAggregationInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: Problem_ListsCountOrderByAggregateInput
    _max?: Problem_ListsMaxOrderByAggregateInput
    _min?: Problem_ListsMinOrderByAggregateInput
  }

  export type Problem_ListsScalarWhereWithAggregatesInput = {
    AND?: Problem_ListsScalarWhereWithAggregatesInput | Problem_ListsScalarWhereWithAggregatesInput[]
    OR?: Problem_ListsScalarWhereWithAggregatesInput[]
    NOT?: Problem_ListsScalarWhereWithAggregatesInput | Problem_ListsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Problem_Lists"> | string
    playlist_id?: StringWithAggregatesFilter<"Problem_Lists"> | string
    problem_id?: StringWithAggregatesFilter<"Problem_Lists"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Problem_Lists"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Problem_Lists"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solved?: SolvedCreateNestedManyWithoutUserInput
    playlist?: PlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solved?: SolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solved?: SolvedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solved?: SolvedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    created_by: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solved?: SolvedUncheckedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solved?: SolvedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    created_by?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    created_by: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    created_by?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    id?: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
    test_cases?: Test_CaseCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: string
    submitted_by: string
    problem_id: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    test_cases?: Test_CaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
    test_cases?: Test_CaseUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test_cases?: Test_CaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionCreateManyInput = {
    id?: string
    submitted_by: string
    problem_id: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_CaseCreateInput = {
    id?: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output?: string | null
    expected_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submission: SubmissionCreateNestedOneWithoutTest_casesInput
  }

  export type Test_CaseUncheckedCreateInput = {
    id?: string
    submission_id: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output?: string | null
    expected_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Test_CaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submission?: SubmissionUpdateOneRequiredWithoutTest_casesNestedInput
  }

  export type Test_CaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    submission_id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_CaseCreateManyInput = {
    id?: string
    submission_id: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output?: string | null
    expected_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Test_CaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_CaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    submission_id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedInput
    problem: ProblemCreateNestedOneWithoutSolvedInput
  }

  export type SolvedUncheckedCreateInput = {
    id?: string
    solved_by: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSolvedNestedInput
  }

  export type SolvedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    solved_by?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedCreateManyInput = {
    id?: string
    solved_by: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    solved_by?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistCreateInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistInput
    problems?: Problem_ListsCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    created_by: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: Problem_ListsUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistNestedInput
    problems?: Problem_ListsUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: Problem_ListsUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: string
    title: string
    description: string
    created_by: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
    problem: ProblemCreateNestedOneWithoutProblem_listsInput
  }

  export type Problem_ListsUncheckedCreateInput = {
    id?: string
    playlist_id: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Problem_ListsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutProblem_listsNestedInput
  }

  export type Problem_ListsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlist_id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsCreateManyInput = {
    id?: string
    playlist_id: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Problem_ListsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlist_id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumUSER_ROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEFilter<$PrismaModel> | $Enums.USER_ROLE
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

  export type ProblemListRelationFilter = {
    every?: ProblemWhereInput
    some?: ProblemWhereInput
    none?: ProblemWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type SolvedListRelationFilter = {
    every?: SolvedWhereInput
    some?: SolvedWhereInput
    none?: SolvedWhereInput
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProblemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SolvedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    email_verification_token?: SortOrder
    email_verification_token_expiry?: SortOrder
    password_reset_token?: SortOrder
    password_reset_token_expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    email_verification_token?: SortOrder
    email_verification_token_expiry?: SortOrder
    password_reset_token?: SortOrder
    password_reset_token_expiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    avatar_url?: SortOrder
    is_verified?: SortOrder
    role?: SortOrder
    refresh_token?: SortOrder
    email_verification_token?: SortOrder
    email_verification_token_expiry?: SortOrder
    password_reset_token?: SortOrder
    password_reset_token_expiry?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumUSER_ROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEWithAggregatesFilter<$PrismaModel> | $Enums.USER_ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_ROLEFilter<$PrismaModel>
    _max?: NestedEnumUSER_ROLEFilter<$PrismaModel>
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

  export type EnumPROBLEM_DIFFICULTYFilter<$PrismaModel = never> = {
    equals?: $Enums.PROBLEM_DIFFICULTY | EnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    in?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    not?: NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel> | $Enums.PROBLEM_DIFFICULTY
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Problem_ListsListRelationFilter = {
    every?: Problem_ListsWhereInput
    some?: Problem_ListsWhereInput
    none?: Problem_ListsWhereInput
  }

  export type Problem_ListsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProblemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    tags?: SortOrder
    created_by?: SortOrder
    examples?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    test_cases?: SortOrder
    code_snippets?: SortOrder
    reference_solutions?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    created_by?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    difficulty?: SortOrder
    created_by?: SortOrder
    constraints?: SortOrder
    hints?: SortOrder
    editorial?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumPROBLEM_DIFFICULTYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PROBLEM_DIFFICULTY | EnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    in?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    not?: NestedEnumPROBLEM_DIFFICULTYWithAggregatesFilter<$PrismaModel> | $Enums.PROBLEM_DIFFICULTY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel>
    _max?: NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
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
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumSUBMISSION_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBMISSION_STATUS | EnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBMISSION_STATUSFilter<$PrismaModel> | $Enums.SUBMISSION_STATUS
  }

  export type ProblemScalarRelationFilter = {
    is?: ProblemWhereInput
    isNot?: ProblemWhereInput
  }

  export type Test_CaseListRelationFilter = {
    every?: Test_CaseWhereInput
    some?: Test_CaseWhereInput
    none?: Test_CaseWhereInput
  }

  export type Test_CaseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    problem_id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    std_input?: SortOrder
    std_output?: SortOrder
    std_error?: SortOrder
    compile_output?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    problem_id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    std_input?: SortOrder
    std_output?: SortOrder
    std_error?: SortOrder
    compile_output?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    submitted_by?: SortOrder
    problem_id?: SortOrder
    source_code?: SortOrder
    language?: SortOrder
    std_input?: SortOrder
    std_output?: SortOrder
    std_error?: SortOrder
    compile_output?: SortOrder
    status?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumSUBMISSION_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBMISSION_STATUS | EnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBMISSION_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.SUBMISSION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSUBMISSION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumSUBMISSION_STATUSFilter<$PrismaModel>
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

  export type EnumTEST_CASE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_CASE_STATUS | EnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_CASE_STATUSFilter<$PrismaModel> | $Enums.TEST_CASE_STATUS
  }

  export type SubmissionScalarRelationFilter = {
    is?: SubmissionWhereInput
    isNot?: SubmissionWhereInput
  }

  export type Test_CaseCountOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
    test_case?: SortOrder
    status?: SortOrder
    std_output?: SortOrder
    expected_output?: SortOrder
    std_error?: SortOrder
    compile_output?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Test_CaseAvgOrderByAggregateInput = {
    test_case?: SortOrder
  }

  export type Test_CaseMaxOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
    test_case?: SortOrder
    status?: SortOrder
    std_output?: SortOrder
    expected_output?: SortOrder
    std_error?: SortOrder
    compile_output?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Test_CaseMinOrderByAggregateInput = {
    id?: SortOrder
    submission_id?: SortOrder
    test_case?: SortOrder
    status?: SortOrder
    std_output?: SortOrder
    expected_output?: SortOrder
    std_error?: SortOrder
    compile_output?: SortOrder
    memory?: SortOrder
    time?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Test_CaseSumOrderByAggregateInput = {
    test_case?: SortOrder
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

  export type EnumTEST_CASE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_CASE_STATUS | EnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_CASE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.TEST_CASE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTEST_CASE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumTEST_CASE_STATUSFilter<$PrismaModel>
  }

  export type SolvedSolved_byProblem_idCompoundUniqueInput = {
    solved_by: string
    problem_id: string
  }

  export type SolvedCountOrderByAggregateInput = {
    id?: SortOrder
    solved_by?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolvedMaxOrderByAggregateInput = {
    id?: SortOrder
    solved_by?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SolvedMinOrderByAggregateInput = {
    id?: SortOrder
    solved_by?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistTitleCreated_byCompoundUniqueInput = {
    title: string
    created_by: string
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    created_by?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PlaylistScalarRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type Problem_ListsPlaylist_idProblem_idCompoundUniqueInput = {
    playlist_id: string
    problem_id: string
  }

  export type Problem_ListsCountOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Problem_ListsMaxOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Problem_ListsMinOrderByAggregateInput = {
    id?: SortOrder
    playlist_id?: SortOrder
    problem_id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProblemCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SolvedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedCreateWithoutUserInput, SolvedUncheckedCreateWithoutUserInput> | SolvedCreateWithoutUserInput[] | SolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutUserInput | SolvedCreateOrConnectWithoutUserInput[]
    createMany?: SolvedCreateManyUserInputEnvelope
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
  }

  export type PlaylistCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type ProblemUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SolvedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SolvedCreateWithoutUserInput, SolvedUncheckedCreateWithoutUserInput> | SolvedCreateWithoutUserInput[] | SolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutUserInput | SolvedCreateOrConnectWithoutUserInput[]
    createMany?: SolvedCreateManyUserInputEnvelope
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
  }

  export type PlaylistUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumUSER_ROLEFieldUpdateOperationsInput = {
    set?: $Enums.USER_ROLE
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProblemUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SolvedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedCreateWithoutUserInput, SolvedUncheckedCreateWithoutUserInput> | SolvedCreateWithoutUserInput[] | SolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutUserInput | SolvedCreateOrConnectWithoutUserInput[]
    upsert?: SolvedUpsertWithWhereUniqueWithoutUserInput | SolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedCreateManyUserInputEnvelope
    set?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    disconnect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    delete?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    update?: SolvedUpdateWithWhereUniqueWithoutUserInput | SolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedUpdateManyWithWhereWithoutUserInput | SolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedScalarWhereInput | SolvedScalarWhereInput[]
  }

  export type PlaylistUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type ProblemUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput> | ProblemCreateWithoutUserInput[] | ProblemUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProblemCreateOrConnectWithoutUserInput | ProblemCreateOrConnectWithoutUserInput[]
    upsert?: ProblemUpsertWithWhereUniqueWithoutUserInput | ProblemUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProblemCreateManyUserInputEnvelope
    set?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    disconnect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    delete?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    connect?: ProblemWhereUniqueInput | ProblemWhereUniqueInput[]
    update?: ProblemUpdateWithWhereUniqueWithoutUserInput | ProblemUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProblemUpdateManyWithWhereWithoutUserInput | ProblemUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput> | SubmissionCreateWithoutUserInput[] | SubmissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutUserInput | SubmissionCreateOrConnectWithoutUserInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutUserInput | SubmissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubmissionCreateManyUserInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutUserInput | SubmissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutUserInput | SubmissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SolvedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SolvedCreateWithoutUserInput, SolvedUncheckedCreateWithoutUserInput> | SolvedCreateWithoutUserInput[] | SolvedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutUserInput | SolvedCreateOrConnectWithoutUserInput[]
    upsert?: SolvedUpsertWithWhereUniqueWithoutUserInput | SolvedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SolvedCreateManyUserInputEnvelope
    set?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    disconnect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    delete?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    update?: SolvedUpdateWithWhereUniqueWithoutUserInput | SolvedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SolvedUpdateManyWithWhereWithoutUserInput | SolvedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SolvedScalarWhereInput | SolvedScalarWhereInput[]
  }

  export type PlaylistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput> | PlaylistCreateWithoutUserInput[] | PlaylistUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistCreateOrConnectWithoutUserInput | PlaylistCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistUpsertWithWhereUniqueWithoutUserInput | PlaylistUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistCreateManyUserInputEnvelope
    set?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    disconnect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    delete?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    connect?: PlaylistWhereUniqueInput | PlaylistWhereUniqueInput[]
    update?: PlaylistUpdateWithWhereUniqueWithoutUserInput | PlaylistUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistUpdateManyWithWhereWithoutUserInput | PlaylistUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
  }

  export type ProblemCreatetagsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutProblemsInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SolvedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolvedCreateWithoutProblemInput, SolvedUncheckedCreateWithoutProblemInput> | SolvedCreateWithoutProblemInput[] | SolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutProblemInput | SolvedCreateOrConnectWithoutProblemInput[]
    createMany?: SolvedCreateManyProblemInputEnvelope
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
  }

  export type Problem_ListsCreateNestedManyWithoutProblemInput = {
    create?: XOR<Problem_ListsCreateWithoutProblemInput, Problem_ListsUncheckedCreateWithoutProblemInput> | Problem_ListsCreateWithoutProblemInput[] | Problem_ListsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutProblemInput | Problem_ListsCreateOrConnectWithoutProblemInput[]
    createMany?: Problem_ListsCreateManyProblemInputEnvelope
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SolvedUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<SolvedCreateWithoutProblemInput, SolvedUncheckedCreateWithoutProblemInput> | SolvedCreateWithoutProblemInput[] | SolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutProblemInput | SolvedCreateOrConnectWithoutProblemInput[]
    createMany?: SolvedCreateManyProblemInputEnvelope
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
  }

  export type Problem_ListsUncheckedCreateNestedManyWithoutProblemInput = {
    create?: XOR<Problem_ListsCreateWithoutProblemInput, Problem_ListsUncheckedCreateWithoutProblemInput> | Problem_ListsCreateWithoutProblemInput[] | Problem_ListsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutProblemInput | Problem_ListsCreateOrConnectWithoutProblemInput[]
    createMany?: Problem_ListsCreateManyProblemInputEnvelope
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
  }

  export type EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput = {
    set?: $Enums.PROBLEM_DIFFICULTY
  }

  export type ProblemUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProblemsInput
    upsert?: UserUpsertWithoutProblemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProblemsInput, UserUpdateWithoutProblemsInput>, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type SubmissionUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SolvedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolvedCreateWithoutProblemInput, SolvedUncheckedCreateWithoutProblemInput> | SolvedCreateWithoutProblemInput[] | SolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutProblemInput | SolvedCreateOrConnectWithoutProblemInput[]
    upsert?: SolvedUpsertWithWhereUniqueWithoutProblemInput | SolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolvedCreateManyProblemInputEnvelope
    set?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    disconnect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    delete?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    update?: SolvedUpdateWithWhereUniqueWithoutProblemInput | SolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolvedUpdateManyWithWhereWithoutProblemInput | SolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolvedScalarWhereInput | SolvedScalarWhereInput[]
  }

  export type Problem_ListsUpdateManyWithoutProblemNestedInput = {
    create?: XOR<Problem_ListsCreateWithoutProblemInput, Problem_ListsUncheckedCreateWithoutProblemInput> | Problem_ListsCreateWithoutProblemInput[] | Problem_ListsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutProblemInput | Problem_ListsCreateOrConnectWithoutProblemInput[]
    upsert?: Problem_ListsUpsertWithWhereUniqueWithoutProblemInput | Problem_ListsUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: Problem_ListsCreateManyProblemInputEnvelope
    set?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    disconnect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    delete?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    update?: Problem_ListsUpdateWithWhereUniqueWithoutProblemInput | Problem_ListsUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: Problem_ListsUpdateManyWithWhereWithoutProblemInput | Problem_ListsUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: Problem_ListsScalarWhereInput | Problem_ListsScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput> | SubmissionCreateWithoutProblemInput[] | SubmissionUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutProblemInput | SubmissionCreateOrConnectWithoutProblemInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutProblemInput | SubmissionUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SubmissionCreateManyProblemInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutProblemInput | SubmissionUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutProblemInput | SubmissionUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SolvedUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<SolvedCreateWithoutProblemInput, SolvedUncheckedCreateWithoutProblemInput> | SolvedCreateWithoutProblemInput[] | SolvedUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: SolvedCreateOrConnectWithoutProblemInput | SolvedCreateOrConnectWithoutProblemInput[]
    upsert?: SolvedUpsertWithWhereUniqueWithoutProblemInput | SolvedUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: SolvedCreateManyProblemInputEnvelope
    set?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    disconnect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    delete?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    connect?: SolvedWhereUniqueInput | SolvedWhereUniqueInput[]
    update?: SolvedUpdateWithWhereUniqueWithoutProblemInput | SolvedUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: SolvedUpdateManyWithWhereWithoutProblemInput | SolvedUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: SolvedScalarWhereInput | SolvedScalarWhereInput[]
  }

  export type Problem_ListsUncheckedUpdateManyWithoutProblemNestedInput = {
    create?: XOR<Problem_ListsCreateWithoutProblemInput, Problem_ListsUncheckedCreateWithoutProblemInput> | Problem_ListsCreateWithoutProblemInput[] | Problem_ListsUncheckedCreateWithoutProblemInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutProblemInput | Problem_ListsCreateOrConnectWithoutProblemInput[]
    upsert?: Problem_ListsUpsertWithWhereUniqueWithoutProblemInput | Problem_ListsUpsertWithWhereUniqueWithoutProblemInput[]
    createMany?: Problem_ListsCreateManyProblemInputEnvelope
    set?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    disconnect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    delete?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    update?: Problem_ListsUpdateWithWhereUniqueWithoutProblemInput | Problem_ListsUpdateWithWhereUniqueWithoutProblemInput[]
    updateMany?: Problem_ListsUpdateManyWithWhereWithoutProblemInput | Problem_ListsUpdateManyWithWhereWithoutProblemInput[]
    deleteMany?: Problem_ListsScalarWhereInput | Problem_ListsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
  }

  export type Test_CaseCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<Test_CaseCreateWithoutSubmissionInput, Test_CaseUncheckedCreateWithoutSubmissionInput> | Test_CaseCreateWithoutSubmissionInput[] | Test_CaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: Test_CaseCreateOrConnectWithoutSubmissionInput | Test_CaseCreateOrConnectWithoutSubmissionInput[]
    createMany?: Test_CaseCreateManySubmissionInputEnvelope
    connect?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
  }

  export type Test_CaseUncheckedCreateNestedManyWithoutSubmissionInput = {
    create?: XOR<Test_CaseCreateWithoutSubmissionInput, Test_CaseUncheckedCreateWithoutSubmissionInput> | Test_CaseCreateWithoutSubmissionInput[] | Test_CaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: Test_CaseCreateOrConnectWithoutSubmissionInput | Test_CaseCreateOrConnectWithoutSubmissionInput[]
    createMany?: Test_CaseCreateManySubmissionInputEnvelope
    connect?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
  }

  export type EnumSUBMISSION_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.SUBMISSION_STATUS
  }

  export type UserUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubmissionsInput
    upsert?: UserUpsertWithoutSubmissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubmissionsInput, UserUpdateWithoutSubmissionsInput>, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSubmissionsInput
    upsert?: ProblemUpsertWithoutSubmissionsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSubmissionsInput, ProblemUpdateWithoutSubmissionsInput>, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type Test_CaseUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<Test_CaseCreateWithoutSubmissionInput, Test_CaseUncheckedCreateWithoutSubmissionInput> | Test_CaseCreateWithoutSubmissionInput[] | Test_CaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: Test_CaseCreateOrConnectWithoutSubmissionInput | Test_CaseCreateOrConnectWithoutSubmissionInput[]
    upsert?: Test_CaseUpsertWithWhereUniqueWithoutSubmissionInput | Test_CaseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: Test_CaseCreateManySubmissionInputEnvelope
    set?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    disconnect?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    delete?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    connect?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    update?: Test_CaseUpdateWithWhereUniqueWithoutSubmissionInput | Test_CaseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: Test_CaseUpdateManyWithWhereWithoutSubmissionInput | Test_CaseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: Test_CaseScalarWhereInput | Test_CaseScalarWhereInput[]
  }

  export type Test_CaseUncheckedUpdateManyWithoutSubmissionNestedInput = {
    create?: XOR<Test_CaseCreateWithoutSubmissionInput, Test_CaseUncheckedCreateWithoutSubmissionInput> | Test_CaseCreateWithoutSubmissionInput[] | Test_CaseUncheckedCreateWithoutSubmissionInput[]
    connectOrCreate?: Test_CaseCreateOrConnectWithoutSubmissionInput | Test_CaseCreateOrConnectWithoutSubmissionInput[]
    upsert?: Test_CaseUpsertWithWhereUniqueWithoutSubmissionInput | Test_CaseUpsertWithWhereUniqueWithoutSubmissionInput[]
    createMany?: Test_CaseCreateManySubmissionInputEnvelope
    set?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    disconnect?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    delete?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    connect?: Test_CaseWhereUniqueInput | Test_CaseWhereUniqueInput[]
    update?: Test_CaseUpdateWithWhereUniqueWithoutSubmissionInput | Test_CaseUpdateWithWhereUniqueWithoutSubmissionInput[]
    updateMany?: Test_CaseUpdateManyWithWhereWithoutSubmissionInput | Test_CaseUpdateManyWithWhereWithoutSubmissionInput[]
    deleteMany?: Test_CaseScalarWhereInput | Test_CaseScalarWhereInput[]
  }

  export type SubmissionCreateNestedOneWithoutTest_casesInput = {
    create?: XOR<SubmissionCreateWithoutTest_casesInput, SubmissionUncheckedCreateWithoutTest_casesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTest_casesInput
    connect?: SubmissionWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumTEST_CASE_STATUSFieldUpdateOperationsInput = {
    set?: $Enums.TEST_CASE_STATUS
  }

  export type SubmissionUpdateOneRequiredWithoutTest_casesNestedInput = {
    create?: XOR<SubmissionCreateWithoutTest_casesInput, SubmissionUncheckedCreateWithoutTest_casesInput>
    connectOrCreate?: SubmissionCreateOrConnectWithoutTest_casesInput
    upsert?: SubmissionUpsertWithoutTest_casesInput
    connect?: SubmissionWhereUniqueInput
    update?: XOR<XOR<SubmissionUpdateToOneWithWhereWithoutTest_casesInput, SubmissionUpdateWithoutTest_casesInput>, SubmissionUncheckedUpdateWithoutTest_casesInput>
  }

  export type UserCreateNestedOneWithoutSolvedInput = {
    create?: XOR<UserCreateWithoutSolvedInput, UserUncheckedCreateWithoutSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedInput
    connect?: UserWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutSolvedInput = {
    create?: XOR<ProblemCreateWithoutSolvedInput, ProblemUncheckedCreateWithoutSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedInput
    connect?: ProblemWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSolvedNestedInput = {
    create?: XOR<UserCreateWithoutSolvedInput, UserUncheckedCreateWithoutSolvedInput>
    connectOrCreate?: UserCreateOrConnectWithoutSolvedInput
    upsert?: UserUpsertWithoutSolvedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSolvedInput, UserUpdateWithoutSolvedInput>, UserUncheckedUpdateWithoutSolvedInput>
  }

  export type ProblemUpdateOneRequiredWithoutSolvedNestedInput = {
    create?: XOR<ProblemCreateWithoutSolvedInput, ProblemUncheckedCreateWithoutSolvedInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutSolvedInput
    upsert?: ProblemUpsertWithoutSolvedInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutSolvedInput, ProblemUpdateWithoutSolvedInput>, ProblemUncheckedUpdateWithoutSolvedInput>
  }

  export type UserCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type Problem_ListsCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Problem_ListsCreateWithoutPlaylistInput, Problem_ListsUncheckedCreateWithoutPlaylistInput> | Problem_ListsCreateWithoutPlaylistInput[] | Problem_ListsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutPlaylistInput | Problem_ListsCreateOrConnectWithoutPlaylistInput[]
    createMany?: Problem_ListsCreateManyPlaylistInputEnvelope
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
  }

  export type Problem_ListsUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Problem_ListsCreateWithoutPlaylistInput, Problem_ListsUncheckedCreateWithoutPlaylistInput> | Problem_ListsCreateWithoutPlaylistInput[] | Problem_ListsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutPlaylistInput | Problem_ListsCreateOrConnectWithoutPlaylistInput[]
    createMany?: Problem_ListsCreateManyPlaylistInputEnvelope
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    upsert?: UserUpsertWithoutPlaylistInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlaylistInput, UserUpdateWithoutPlaylistInput>, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type Problem_ListsUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Problem_ListsCreateWithoutPlaylistInput, Problem_ListsUncheckedCreateWithoutPlaylistInput> | Problem_ListsCreateWithoutPlaylistInput[] | Problem_ListsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutPlaylistInput | Problem_ListsCreateOrConnectWithoutPlaylistInput[]
    upsert?: Problem_ListsUpsertWithWhereUniqueWithoutPlaylistInput | Problem_ListsUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: Problem_ListsCreateManyPlaylistInputEnvelope
    set?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    disconnect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    delete?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    update?: Problem_ListsUpdateWithWhereUniqueWithoutPlaylistInput | Problem_ListsUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: Problem_ListsUpdateManyWithWhereWithoutPlaylistInput | Problem_ListsUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: Problem_ListsScalarWhereInput | Problem_ListsScalarWhereInput[]
  }

  export type Problem_ListsUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Problem_ListsCreateWithoutPlaylistInput, Problem_ListsUncheckedCreateWithoutPlaylistInput> | Problem_ListsCreateWithoutPlaylistInput[] | Problem_ListsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: Problem_ListsCreateOrConnectWithoutPlaylistInput | Problem_ListsCreateOrConnectWithoutPlaylistInput[]
    upsert?: Problem_ListsUpsertWithWhereUniqueWithoutPlaylistInput | Problem_ListsUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: Problem_ListsCreateManyPlaylistInputEnvelope
    set?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    disconnect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    delete?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    connect?: Problem_ListsWhereUniqueInput | Problem_ListsWhereUniqueInput[]
    update?: Problem_ListsUpdateWithWhereUniqueWithoutPlaylistInput | Problem_ListsUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: Problem_ListsUpdateManyWithWhereWithoutPlaylistInput | Problem_ListsUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: Problem_ListsScalarWhereInput | Problem_ListsScalarWhereInput[]
  }

  export type PlaylistCreateNestedOneWithoutProblemsInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
  }

  export type ProblemCreateNestedOneWithoutProblem_listsInput = {
    create?: XOR<ProblemCreateWithoutProblem_listsInput, ProblemUncheckedCreateWithoutProblem_listsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblem_listsInput
    connect?: ProblemWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutProblemsNestedInput = {
    create?: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutProblemsInput
    upsert?: PlaylistUpsertWithoutProblemsInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<XOR<PlaylistUpdateToOneWithWhereWithoutProblemsInput, PlaylistUpdateWithoutProblemsInput>, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type ProblemUpdateOneRequiredWithoutProblem_listsNestedInput = {
    create?: XOR<ProblemCreateWithoutProblem_listsInput, ProblemUncheckedCreateWithoutProblem_listsInput>
    connectOrCreate?: ProblemCreateOrConnectWithoutProblem_listsInput
    upsert?: ProblemUpsertWithoutProblem_listsInput
    connect?: ProblemWhereUniqueInput
    update?: XOR<XOR<ProblemUpdateToOneWithWhereWithoutProblem_listsInput, ProblemUpdateWithoutProblem_listsInput>, ProblemUncheckedUpdateWithoutProblem_listsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumUSER_ROLEFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEFilter<$PrismaModel> | $Enums.USER_ROLE
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumUSER_ROLEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.USER_ROLE | EnumUSER_ROLEFieldRefInput<$PrismaModel>
    in?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    notIn?: $Enums.USER_ROLE[] | ListEnumUSER_ROLEFieldRefInput<$PrismaModel>
    not?: NestedEnumUSER_ROLEWithAggregatesFilter<$PrismaModel> | $Enums.USER_ROLE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUSER_ROLEFilter<$PrismaModel>
    _max?: NestedEnumUSER_ROLEFilter<$PrismaModel>
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

  export type NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel = never> = {
    equals?: $Enums.PROBLEM_DIFFICULTY | EnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    in?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    not?: NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel> | $Enums.PROBLEM_DIFFICULTY
  }

  export type NestedEnumPROBLEM_DIFFICULTYWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PROBLEM_DIFFICULTY | EnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    in?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    notIn?: $Enums.PROBLEM_DIFFICULTY[] | ListEnumPROBLEM_DIFFICULTYFieldRefInput<$PrismaModel>
    not?: NestedEnumPROBLEM_DIFFICULTYWithAggregatesFilter<$PrismaModel> | $Enums.PROBLEM_DIFFICULTY
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel>
    _max?: NestedEnumPROBLEM_DIFFICULTYFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
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

  export type NestedEnumSUBMISSION_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBMISSION_STATUS | EnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBMISSION_STATUSFilter<$PrismaModel> | $Enums.SUBMISSION_STATUS
  }

  export type NestedEnumSUBMISSION_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SUBMISSION_STATUS | EnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.SUBMISSION_STATUS[] | ListEnumSUBMISSION_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumSUBMISSION_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.SUBMISSION_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSUBMISSION_STATUSFilter<$PrismaModel>
    _max?: NestedEnumSUBMISSION_STATUSFilter<$PrismaModel>
  }

  export type NestedEnumTEST_CASE_STATUSFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_CASE_STATUS | EnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_CASE_STATUSFilter<$PrismaModel> | $Enums.TEST_CASE_STATUS
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

  export type NestedEnumTEST_CASE_STATUSWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TEST_CASE_STATUS | EnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    in?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    notIn?: $Enums.TEST_CASE_STATUS[] | ListEnumTEST_CASE_STATUSFieldRefInput<$PrismaModel>
    not?: NestedEnumTEST_CASE_STATUSWithAggregatesFilter<$PrismaModel> | $Enums.TEST_CASE_STATUS
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTEST_CASE_STATUSFilter<$PrismaModel>
    _max?: NestedEnumTEST_CASE_STATUSFilter<$PrismaModel>
  }

  export type ProblemCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solved?: SolvedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solved?: SolvedUncheckedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutUserInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemCreateManyUserInputEnvelope = {
    data: ProblemCreateManyUserInput | ProblemCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutUserInput = {
    id?: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
    test_cases?: Test_CaseCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutUserInput = {
    id?: string
    problem_id: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    test_cases?: Test_CaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionCreateManyUserInputEnvelope = {
    data: SubmissionCreateManyUserInput | SubmissionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SolvedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutSolvedInput
  }

  export type SolvedUncheckedCreateWithoutUserInput = {
    id?: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedCreateOrConnectWithoutUserInput = {
    where: SolvedWhereUniqueInput
    create: XOR<SolvedCreateWithoutUserInput, SolvedUncheckedCreateWithoutUserInput>
  }

  export type SolvedCreateManyUserInputEnvelope = {
    data: SolvedCreateManyUserInput | SolvedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlaylistCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: Problem_ListsCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: Problem_ListsUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistCreateManyUserInputEnvelope = {
    data: PlaylistCreateManyUserInput | PlaylistCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProblemUpsertWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    update: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
    create: XOR<ProblemCreateWithoutUserInput, ProblemUncheckedCreateWithoutUserInput>
  }

  export type ProblemUpdateWithWhereUniqueWithoutUserInput = {
    where: ProblemWhereUniqueInput
    data: XOR<ProblemUpdateWithoutUserInput, ProblemUncheckedUpdateWithoutUserInput>
  }

  export type ProblemUpdateManyWithWhereWithoutUserInput = {
    where: ProblemScalarWhereInput
    data: XOR<ProblemUpdateManyMutationInput, ProblemUncheckedUpdateManyWithoutUserInput>
  }

  export type ProblemScalarWhereInput = {
    AND?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    OR?: ProblemScalarWhereInput[]
    NOT?: ProblemScalarWhereInput | ProblemScalarWhereInput[]
    id?: StringFilter<"Problem"> | string
    title?: StringFilter<"Problem"> | string
    description?: StringFilter<"Problem"> | string
    difficulty?: EnumPROBLEM_DIFFICULTYFilter<"Problem"> | $Enums.PROBLEM_DIFFICULTY
    tags?: StringNullableListFilter<"Problem">
    created_by?: StringFilter<"Problem"> | string
    examples?: JsonFilter<"Problem">
    constraints?: StringFilter<"Problem"> | string
    hints?: StringNullableFilter<"Problem"> | string | null
    editorial?: StringNullableFilter<"Problem"> | string | null
    test_cases?: JsonFilter<"Problem">
    code_snippets?: JsonFilter<"Problem">
    reference_solutions?: JsonFilter<"Problem">
    createdAt?: DateTimeFilter<"Problem"> | Date | string
    updatedAt?: DateTimeFilter<"Problem"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
    create: XOR<SubmissionCreateWithoutUserInput, SubmissionUncheckedCreateWithoutUserInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutUserInput, SubmissionUncheckedUpdateWithoutUserInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutUserInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: StringFilter<"Submission"> | string
    submitted_by?: StringFilter<"Submission"> | string
    problem_id?: StringFilter<"Submission"> | string
    source_code?: StringFilter<"Submission"> | string
    language?: StringFilter<"Submission"> | string
    std_input?: StringNullableFilter<"Submission"> | string | null
    std_output?: StringNullableFilter<"Submission"> | string | null
    std_error?: StringNullableFilter<"Submission"> | string | null
    compile_output?: StringNullableFilter<"Submission"> | string | null
    status?: EnumSUBMISSION_STATUSFilter<"Submission"> | $Enums.SUBMISSION_STATUS
    memory?: StringNullableFilter<"Submission"> | string | null
    time?: StringNullableFilter<"Submission"> | string | null
    createdAt?: DateTimeFilter<"Submission"> | Date | string
    updatedAt?: DateTimeFilter<"Submission"> | Date | string
  }

  export type SolvedUpsertWithWhereUniqueWithoutUserInput = {
    where: SolvedWhereUniqueInput
    update: XOR<SolvedUpdateWithoutUserInput, SolvedUncheckedUpdateWithoutUserInput>
    create: XOR<SolvedCreateWithoutUserInput, SolvedUncheckedCreateWithoutUserInput>
  }

  export type SolvedUpdateWithWhereUniqueWithoutUserInput = {
    where: SolvedWhereUniqueInput
    data: XOR<SolvedUpdateWithoutUserInput, SolvedUncheckedUpdateWithoutUserInput>
  }

  export type SolvedUpdateManyWithWhereWithoutUserInput = {
    where: SolvedScalarWhereInput
    data: XOR<SolvedUpdateManyMutationInput, SolvedUncheckedUpdateManyWithoutUserInput>
  }

  export type SolvedScalarWhereInput = {
    AND?: SolvedScalarWhereInput | SolvedScalarWhereInput[]
    OR?: SolvedScalarWhereInput[]
    NOT?: SolvedScalarWhereInput | SolvedScalarWhereInput[]
    id?: StringFilter<"Solved"> | string
    solved_by?: StringFilter<"Solved"> | string
    problem_id?: StringFilter<"Solved"> | string
    createdAt?: DateTimeFilter<"Solved"> | Date | string
    updatedAt?: DateTimeFilter<"Solved"> | Date | string
  }

  export type PlaylistUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistCreateWithoutUserInput, PlaylistUncheckedCreateWithoutUserInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutUserInput, PlaylistUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    OR?: PlaylistScalarWhereInput[]
    NOT?: PlaylistScalarWhereInput | PlaylistScalarWhereInput[]
    id?: StringFilter<"Playlist"> | string
    title?: StringFilter<"Playlist"> | string
    description?: StringFilter<"Playlist"> | string
    created_by?: StringFilter<"Playlist"> | string
    createdAt?: DateTimeFilter<"Playlist"> | Date | string
    updatedAt?: DateTimeFilter<"Playlist"> | Date | string
  }

  export type UserCreateWithoutProblemsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solved?: SolvedCreateNestedManyWithoutUserInput
    playlist?: PlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProblemsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solved?: SolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProblemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
  }

  export type SubmissionCreateWithoutProblemInput = {
    id?: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    test_cases?: Test_CaseCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionUncheckedCreateWithoutProblemInput = {
    id?: string
    submitted_by: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    test_cases?: Test_CaseUncheckedCreateNestedManyWithoutSubmissionInput
  }

  export type SubmissionCreateOrConnectWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionCreateManyProblemInputEnvelope = {
    data: SubmissionCreateManyProblemInput | SubmissionCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type SolvedCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSolvedInput
  }

  export type SolvedUncheckedCreateWithoutProblemInput = {
    id?: string
    solved_by: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedCreateOrConnectWithoutProblemInput = {
    where: SolvedWhereUniqueInput
    create: XOR<SolvedCreateWithoutProblemInput, SolvedUncheckedCreateWithoutProblemInput>
  }

  export type SolvedCreateManyProblemInputEnvelope = {
    data: SolvedCreateManyProblemInput | SolvedCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type Problem_ListsCreateWithoutProblemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    playlist: PlaylistCreateNestedOneWithoutProblemsInput
  }

  export type Problem_ListsUncheckedCreateWithoutProblemInput = {
    id?: string
    playlist_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Problem_ListsCreateOrConnectWithoutProblemInput = {
    where: Problem_ListsWhereUniqueInput
    create: XOR<Problem_ListsCreateWithoutProblemInput, Problem_ListsUncheckedCreateWithoutProblemInput>
  }

  export type Problem_ListsCreateManyProblemInputEnvelope = {
    data: Problem_ListsCreateManyProblemInput | Problem_ListsCreateManyProblemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProblemsInput = {
    update: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
    create: XOR<UserCreateWithoutProblemsInput, UserUncheckedCreateWithoutProblemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProblemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProblemsInput, UserUncheckedUpdateWithoutProblemsInput>
  }

  export type UserUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solved?: SolvedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
    create: XOR<SubmissionCreateWithoutProblemInput, SubmissionUncheckedCreateWithoutProblemInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutProblemInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutProblemInput, SubmissionUncheckedUpdateWithoutProblemInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutProblemInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutProblemInput>
  }

  export type SolvedUpsertWithWhereUniqueWithoutProblemInput = {
    where: SolvedWhereUniqueInput
    update: XOR<SolvedUpdateWithoutProblemInput, SolvedUncheckedUpdateWithoutProblemInput>
    create: XOR<SolvedCreateWithoutProblemInput, SolvedUncheckedCreateWithoutProblemInput>
  }

  export type SolvedUpdateWithWhereUniqueWithoutProblemInput = {
    where: SolvedWhereUniqueInput
    data: XOR<SolvedUpdateWithoutProblemInput, SolvedUncheckedUpdateWithoutProblemInput>
  }

  export type SolvedUpdateManyWithWhereWithoutProblemInput = {
    where: SolvedScalarWhereInput
    data: XOR<SolvedUpdateManyMutationInput, SolvedUncheckedUpdateManyWithoutProblemInput>
  }

  export type Problem_ListsUpsertWithWhereUniqueWithoutProblemInput = {
    where: Problem_ListsWhereUniqueInput
    update: XOR<Problem_ListsUpdateWithoutProblemInput, Problem_ListsUncheckedUpdateWithoutProblemInput>
    create: XOR<Problem_ListsCreateWithoutProblemInput, Problem_ListsUncheckedCreateWithoutProblemInput>
  }

  export type Problem_ListsUpdateWithWhereUniqueWithoutProblemInput = {
    where: Problem_ListsWhereUniqueInput
    data: XOR<Problem_ListsUpdateWithoutProblemInput, Problem_ListsUncheckedUpdateWithoutProblemInput>
  }

  export type Problem_ListsUpdateManyWithWhereWithoutProblemInput = {
    where: Problem_ListsScalarWhereInput
    data: XOR<Problem_ListsUpdateManyMutationInput, Problem_ListsUncheckedUpdateManyWithoutProblemInput>
  }

  export type Problem_ListsScalarWhereInput = {
    AND?: Problem_ListsScalarWhereInput | Problem_ListsScalarWhereInput[]
    OR?: Problem_ListsScalarWhereInput[]
    NOT?: Problem_ListsScalarWhereInput | Problem_ListsScalarWhereInput[]
    id?: StringFilter<"Problem_Lists"> | string
    playlist_id?: StringFilter<"Problem_Lists"> | string
    problem_id?: StringFilter<"Problem_Lists"> | string
    createdAt?: DateTimeFilter<"Problem_Lists"> | Date | string
    updatedAt?: DateTimeFilter<"Problem_Lists"> | Date | string
  }

  export type UserCreateWithoutSubmissionsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    solved?: SolvedCreateNestedManyWithoutUserInput
    playlist?: PlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    solved?: SolvedUncheckedCreateNestedManyWithoutUserInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubmissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
  }

  export type ProblemCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    solved?: SolvedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSubmissionsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    created_by: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    solved?: SolvedUncheckedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSubmissionsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
  }

  export type Test_CaseCreateWithoutSubmissionInput = {
    id?: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output?: string | null
    expected_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Test_CaseUncheckedCreateWithoutSubmissionInput = {
    id?: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output?: string | null
    expected_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Test_CaseCreateOrConnectWithoutSubmissionInput = {
    where: Test_CaseWhereUniqueInput
    create: XOR<Test_CaseCreateWithoutSubmissionInput, Test_CaseUncheckedCreateWithoutSubmissionInput>
  }

  export type Test_CaseCreateManySubmissionInputEnvelope = {
    data: Test_CaseCreateManySubmissionInput | Test_CaseCreateManySubmissionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutSubmissionsInput = {
    update: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<UserCreateWithoutSubmissionsInput, UserUncheckedCreateWithoutSubmissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubmissionsInput, UserUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    solved?: SolvedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSubmissionsInput = {
    update: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<ProblemCreateWithoutSubmissionsInput, ProblemUncheckedCreateWithoutSubmissionsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSubmissionsInput, ProblemUncheckedUpdateWithoutSubmissionsInput>
  }

  export type ProblemUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    solved?: SolvedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSubmissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    created_by?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    solved?: SolvedUncheckedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type Test_CaseUpsertWithWhereUniqueWithoutSubmissionInput = {
    where: Test_CaseWhereUniqueInput
    update: XOR<Test_CaseUpdateWithoutSubmissionInput, Test_CaseUncheckedUpdateWithoutSubmissionInput>
    create: XOR<Test_CaseCreateWithoutSubmissionInput, Test_CaseUncheckedCreateWithoutSubmissionInput>
  }

  export type Test_CaseUpdateWithWhereUniqueWithoutSubmissionInput = {
    where: Test_CaseWhereUniqueInput
    data: XOR<Test_CaseUpdateWithoutSubmissionInput, Test_CaseUncheckedUpdateWithoutSubmissionInput>
  }

  export type Test_CaseUpdateManyWithWhereWithoutSubmissionInput = {
    where: Test_CaseScalarWhereInput
    data: XOR<Test_CaseUpdateManyMutationInput, Test_CaseUncheckedUpdateManyWithoutSubmissionInput>
  }

  export type Test_CaseScalarWhereInput = {
    AND?: Test_CaseScalarWhereInput | Test_CaseScalarWhereInput[]
    OR?: Test_CaseScalarWhereInput[]
    NOT?: Test_CaseScalarWhereInput | Test_CaseScalarWhereInput[]
    id?: StringFilter<"Test_Case"> | string
    submission_id?: StringFilter<"Test_Case"> | string
    test_case?: IntFilter<"Test_Case"> | number
    status?: EnumTEST_CASE_STATUSFilter<"Test_Case"> | $Enums.TEST_CASE_STATUS
    std_output?: StringNullableFilter<"Test_Case"> | string | null
    expected_output?: StringNullableFilter<"Test_Case"> | string | null
    std_error?: StringNullableFilter<"Test_Case"> | string | null
    compile_output?: StringNullableFilter<"Test_Case"> | string | null
    memory?: StringNullableFilter<"Test_Case"> | string | null
    time?: StringNullableFilter<"Test_Case"> | string | null
    createdAt?: DateTimeFilter<"Test_Case"> | Date | string
    updatedAt?: DateTimeFilter<"Test_Case"> | Date | string
  }

  export type SubmissionCreateWithoutTest_casesInput = {
    id?: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubmissionsInput
    problem: ProblemCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutTest_casesInput = {
    id?: string
    submitted_by: string
    problem_id: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateOrConnectWithoutTest_casesInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutTest_casesInput, SubmissionUncheckedCreateWithoutTest_casesInput>
  }

  export type SubmissionUpsertWithoutTest_casesInput = {
    update: XOR<SubmissionUpdateWithoutTest_casesInput, SubmissionUncheckedUpdateWithoutTest_casesInput>
    create: XOR<SubmissionCreateWithoutTest_casesInput, SubmissionUncheckedCreateWithoutTest_casesInput>
    where?: SubmissionWhereInput
  }

  export type SubmissionUpdateToOneWithWhereWithoutTest_casesInput = {
    where?: SubmissionWhereInput
    data: XOR<SubmissionUpdateWithoutTest_casesInput, SubmissionUncheckedUpdateWithoutTest_casesInput>
  }

  export type SubmissionUpdateWithoutTest_casesInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutTest_casesInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutSolvedInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    playlist?: PlaylistCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSolvedInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    playlist?: PlaylistUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSolvedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSolvedInput, UserUncheckedCreateWithoutSolvedInput>
  }

  export type ProblemCreateWithoutSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutSolvedInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    created_by: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    problem_lists?: Problem_ListsUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutSolvedInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutSolvedInput, ProblemUncheckedCreateWithoutSolvedInput>
  }

  export type UserUpsertWithoutSolvedInput = {
    update: XOR<UserUpdateWithoutSolvedInput, UserUncheckedUpdateWithoutSolvedInput>
    create: XOR<UserCreateWithoutSolvedInput, UserUncheckedCreateWithoutSolvedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSolvedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSolvedInput, UserUncheckedUpdateWithoutSolvedInput>
  }

  export type UserUpdateWithoutSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    playlist?: PlaylistUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProblemUpsertWithoutSolvedInput = {
    update: XOR<ProblemUpdateWithoutSolvedInput, ProblemUncheckedUpdateWithoutSolvedInput>
    create: XOR<ProblemCreateWithoutSolvedInput, ProblemUncheckedCreateWithoutSolvedInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutSolvedInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutSolvedInput, ProblemUncheckedUpdateWithoutSolvedInput>
  }

  export type ProblemUpdateWithoutSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutSolvedInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    created_by?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type UserCreateWithoutPlaylistInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemCreateNestedManyWithoutUserInput
    submissions?: SubmissionCreateNestedManyWithoutUserInput
    solved?: SolvedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistInput = {
    id?: string
    username: string
    email: string
    password: string
    avatar_url?: string
    is_verified?: boolean
    role?: $Enums.USER_ROLE
    refresh_token?: string | null
    email_verification_token?: string | null
    email_verification_token_expiry?: Date | string | null
    password_reset_token?: string | null
    password_reset_token_expiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    problems?: ProblemUncheckedCreateNestedManyWithoutUserInput
    submissions?: SubmissionUncheckedCreateNestedManyWithoutUserInput
    solved?: SolvedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type Problem_ListsCreateWithoutPlaylistInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    problem: ProblemCreateNestedOneWithoutProblem_listsInput
  }

  export type Problem_ListsUncheckedCreateWithoutPlaylistInput = {
    id?: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Problem_ListsCreateOrConnectWithoutPlaylistInput = {
    where: Problem_ListsWhereUniqueInput
    create: XOR<Problem_ListsCreateWithoutPlaylistInput, Problem_ListsUncheckedCreateWithoutPlaylistInput>
  }

  export type Problem_ListsCreateManyPlaylistInputEnvelope = {
    data: Problem_ListsCreateManyPlaylistInput | Problem_ListsCreateManyPlaylistInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlaylistInput = {
    update: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlaylistInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type UserUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUpdateManyWithoutUserNestedInput
    solved?: SolvedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    avatar_url?: StringFieldUpdateOperationsInput | string
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    role?: EnumUSER_ROLEFieldUpdateOperationsInput | $Enums.USER_ROLE
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token?: NullableStringFieldUpdateOperationsInput | string | null
    email_verification_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    password_reset_token?: NullableStringFieldUpdateOperationsInput | string | null
    password_reset_token_expiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: ProblemUncheckedUpdateManyWithoutUserNestedInput
    submissions?: SubmissionUncheckedUpdateManyWithoutUserNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Problem_ListsUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: Problem_ListsWhereUniqueInput
    update: XOR<Problem_ListsUpdateWithoutPlaylistInput, Problem_ListsUncheckedUpdateWithoutPlaylistInput>
    create: XOR<Problem_ListsCreateWithoutPlaylistInput, Problem_ListsUncheckedCreateWithoutPlaylistInput>
  }

  export type Problem_ListsUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: Problem_ListsWhereUniqueInput
    data: XOR<Problem_ListsUpdateWithoutPlaylistInput, Problem_ListsUncheckedUpdateWithoutPlaylistInput>
  }

  export type Problem_ListsUpdateManyWithWhereWithoutPlaylistInput = {
    where: Problem_ListsScalarWhereInput
    data: XOR<Problem_ListsUpdateManyMutationInput, Problem_ListsUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistCreateWithoutProblemsInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutProblemsInput = {
    id?: string
    title: string
    description: string
    created_by: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateOrConnectWithoutProblemsInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
  }

  export type ProblemCreateWithoutProblem_listsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutProblemsInput
    submissions?: SubmissionCreateNestedManyWithoutProblemInput
    solved?: SolvedCreateNestedManyWithoutProblemInput
  }

  export type ProblemUncheckedCreateWithoutProblem_listsInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    created_by: string
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutProblemInput
    solved?: SolvedUncheckedCreateNestedManyWithoutProblemInput
  }

  export type ProblemCreateOrConnectWithoutProblem_listsInput = {
    where: ProblemWhereUniqueInput
    create: XOR<ProblemCreateWithoutProblem_listsInput, ProblemUncheckedCreateWithoutProblem_listsInput>
  }

  export type PlaylistUpsertWithoutProblemsInput = {
    update: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
    create: XOR<PlaylistCreateWithoutProblemsInput, PlaylistUncheckedCreateWithoutProblemsInput>
    where?: PlaylistWhereInput
  }

  export type PlaylistUpdateToOneWithWhereWithoutProblemsInput = {
    where?: PlaylistWhereInput
    data: XOR<PlaylistUpdateWithoutProblemsInput, PlaylistUncheckedUpdateWithoutProblemsInput>
  }

  export type PlaylistUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutProblemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProblemUpsertWithoutProblem_listsInput = {
    update: XOR<ProblemUpdateWithoutProblem_listsInput, ProblemUncheckedUpdateWithoutProblem_listsInput>
    create: XOR<ProblemCreateWithoutProblem_listsInput, ProblemUncheckedCreateWithoutProblem_listsInput>
    where?: ProblemWhereInput
  }

  export type ProblemUpdateToOneWithWhereWithoutProblem_listsInput = {
    where?: ProblemWhereInput
    data: XOR<ProblemUpdateWithoutProblem_listsInput, ProblemUncheckedUpdateWithoutProblem_listsInput>
  }

  export type ProblemUpdateWithoutProblem_listsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProblemsNestedInput
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solved?: SolvedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutProblem_listsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    created_by?: StringFieldUpdateOperationsInput | string
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemCreateManyUserInput = {
    id?: string
    title: string
    description: string
    difficulty: $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemCreatetagsInput | string[]
    examples: JsonNullValueInput | InputJsonValue
    constraints: string
    hints?: string | null
    editorial?: string | null
    test_cases: JsonNullValueInput | InputJsonValue
    code_snippets: JsonNullValueInput | InputJsonValue
    reference_solutions: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionCreateManyUserInput = {
    id?: string
    problem_id: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedCreateManyUserInput = {
    id?: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PlaylistCreateManyUserInput = {
    id?: string
    title: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProblemUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUpdateManyWithoutProblemNestedInput
    solved?: SolvedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutProblemNestedInput
    solved?: SolvedUncheckedUpdateManyWithoutProblemNestedInput
    problem_lists?: Problem_ListsUncheckedUpdateManyWithoutProblemNestedInput
  }

  export type ProblemUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    difficulty?: EnumPROBLEM_DIFFICULTYFieldUpdateOperationsInput | $Enums.PROBLEM_DIFFICULTY
    tags?: ProblemUpdatetagsInput | string[]
    examples?: JsonNullValueInput | InputJsonValue
    constraints?: StringFieldUpdateOperationsInput | string
    hints?: NullableStringFieldUpdateOperationsInput | string | null
    editorial?: NullableStringFieldUpdateOperationsInput | string | null
    test_cases?: JsonNullValueInput | InputJsonValue
    code_snippets?: JsonNullValueInput | InputJsonValue
    reference_solutions?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSubmissionsNestedInput
    test_cases?: Test_CaseUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test_cases?: Test_CaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutSolvedNestedInput
  }

  export type SolvedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: Problem_ListsUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problems?: Problem_ListsUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyProblemInput = {
    id?: string
    submitted_by: string
    source_code: string
    language: string
    std_input?: string | null
    std_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    status: $Enums.SUBMISSION_STATUS
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SolvedCreateManyProblemInput = {
    id?: string
    solved_by: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Problem_ListsCreateManyProblemInput = {
    id?: string
    playlist_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubmissionUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubmissionsNestedInput
    test_cases?: Test_CaseUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    test_cases?: Test_CaseUncheckedUpdateManyWithoutSubmissionNestedInput
  }

  export type SubmissionUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    submitted_by?: StringFieldUpdateOperationsInput | string
    source_code?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    std_input?: NullableStringFieldUpdateOperationsInput | string | null
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSUBMISSION_STATUSFieldUpdateOperationsInput | $Enums.SUBMISSION_STATUS
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSolvedNestedInput
  }

  export type SolvedUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    solved_by?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolvedUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    solved_by?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playlist?: PlaylistUpdateOneRequiredWithoutProblemsNestedInput
  }

  export type Problem_ListsUncheckedUpdateWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlist_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsUncheckedUpdateManyWithoutProblemInput = {
    id?: StringFieldUpdateOperationsInput | string
    playlist_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_CaseCreateManySubmissionInput = {
    id?: string
    test_case: number
    status: $Enums.TEST_CASE_STATUS
    std_output?: string | null
    expected_output?: string | null
    std_error?: string | null
    compile_output?: string | null
    memory?: string | null
    time?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Test_CaseUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_CaseUncheckedUpdateWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Test_CaseUncheckedUpdateManyWithoutSubmissionInput = {
    id?: StringFieldUpdateOperationsInput | string
    test_case?: IntFieldUpdateOperationsInput | number
    status?: EnumTEST_CASE_STATUSFieldUpdateOperationsInput | $Enums.TEST_CASE_STATUS
    std_output?: NullableStringFieldUpdateOperationsInput | string | null
    expected_output?: NullableStringFieldUpdateOperationsInput | string | null
    std_error?: NullableStringFieldUpdateOperationsInput | string | null
    compile_output?: NullableStringFieldUpdateOperationsInput | string | null
    memory?: NullableStringFieldUpdateOperationsInput | string | null
    time?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsCreateManyPlaylistInput = {
    id?: string
    problem_id: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Problem_ListsUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    problem?: ProblemUpdateOneRequiredWithoutProblem_listsNestedInput
  }

  export type Problem_ListsUncheckedUpdateWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Problem_ListsUncheckedUpdateManyWithoutPlaylistInput = {
    id?: StringFieldUpdateOperationsInput | string
    problem_id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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