
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
 * Model Condition
 * 
 */
export type Condition = $Result.DefaultSelection<Prisma.$ConditionPayload>
/**
 * Model Value
 * 
 */
export type Value = $Result.DefaultSelection<Prisma.$ValuePayload>
/**
 * Model Rule
 * 
 */
export type Rule = $Result.DefaultSelection<Prisma.$RulePayload>
/**
 * Model Variable
 * 
 */
export type Variable = $Result.DefaultSelection<Prisma.$VariablePayload>

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
   * `prisma.base`: Exposes CRUD operations for the **Base** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bases
    * const bases = await prisma.base.findMany()
    * ```
    */
  get base(): Prisma.BaseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.condition`: Exposes CRUD operations for the **Condition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Conditions
    * const conditions = await prisma.condition.findMany()
    * ```
    */
  get condition(): Prisma.ConditionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.value`: Exposes CRUD operations for the **Value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.value.findMany()
    * ```
    */
  get value(): Prisma.ValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rule`: Exposes CRUD operations for the **Rule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rule.findMany()
    * ```
    */
  get rule(): Prisma.RuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.variable`: Exposes CRUD operations for the **Variable** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Variables
    * const variables = await prisma.variable.findMany()
    * ```
    */
  get variable(): Prisma.VariableDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    Base: 'Base',
    Condition: 'Condition',
    Value: 'Value',
    Rule: 'Rule',
    Variable: 'Variable'
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
      modelProps: "base" | "condition" | "value" | "rule" | "variable"
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
      Condition: {
        payload: Prisma.$ConditionPayload<ExtArgs>
        fields: Prisma.ConditionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConditionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConditionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          findFirst: {
            args: Prisma.ConditionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConditionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          findMany: {
            args: Prisma.ConditionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          create: {
            args: Prisma.ConditionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          createMany: {
            args: Prisma.ConditionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConditionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          delete: {
            args: Prisma.ConditionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          update: {
            args: Prisma.ConditionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          deleteMany: {
            args: Prisma.ConditionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConditionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConditionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>[]
          }
          upsert: {
            args: Prisma.ConditionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConditionPayload>
          }
          aggregate: {
            args: Prisma.ConditionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCondition>
          }
          groupBy: {
            args: Prisma.ConditionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConditionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConditionCountArgs<ExtArgs>
            result: $Utils.Optional<ConditionCountAggregateOutputType> | number
          }
        }
      }
      Value: {
        payload: Prisma.$ValuePayload<ExtArgs>
        fields: Prisma.ValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findFirst: {
            args: Prisma.ValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findMany: {
            args: Prisma.ValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          create: {
            args: Prisma.ValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          createMany: {
            args: Prisma.ValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          delete: {
            args: Prisma.ValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          update: {
            args: Prisma.ValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          deleteMany: {
            args: Prisma.ValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          upsert: {
            args: Prisma.ValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          aggregate: {
            args: Prisma.ValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValue>
          }
          groupBy: {
            args: Prisma.ValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValueCountArgs<ExtArgs>
            result: $Utils.Optional<ValueCountAggregateOutputType> | number
          }
        }
      }
      Rule: {
        payload: Prisma.$RulePayload<ExtArgs>
        fields: Prisma.RuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findFirst: {
            args: Prisma.RuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          findMany: {
            args: Prisma.RuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          create: {
            args: Prisma.RuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          createMany: {
            args: Prisma.RuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          delete: {
            args: Prisma.RuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          update: {
            args: Prisma.RuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          deleteMany: {
            args: Prisma.RuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>[]
          }
          upsert: {
            args: Prisma.RuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulePayload>
          }
          aggregate: {
            args: Prisma.RuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRule>
          }
          groupBy: {
            args: Prisma.RuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RuleCountArgs<ExtArgs>
            result: $Utils.Optional<RuleCountAggregateOutputType> | number
          }
        }
      }
      Variable: {
        payload: Prisma.$VariablePayload<ExtArgs>
        fields: Prisma.VariableFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VariableFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VariableFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>
          }
          findFirst: {
            args: Prisma.VariableFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VariableFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>
          }
          findMany: {
            args: Prisma.VariableFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>[]
          }
          create: {
            args: Prisma.VariableCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>
          }
          createMany: {
            args: Prisma.VariableCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VariableCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>[]
          }
          delete: {
            args: Prisma.VariableDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>
          }
          update: {
            args: Prisma.VariableUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>
          }
          deleteMany: {
            args: Prisma.VariableDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VariableUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VariableUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>[]
          }
          upsert: {
            args: Prisma.VariableUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VariablePayload>
          }
          aggregate: {
            args: Prisma.VariableAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVariable>
          }
          groupBy: {
            args: Prisma.VariableGroupByArgs<ExtArgs>
            result: $Utils.Optional<VariableGroupByOutputType>[]
          }
          count: {
            args: Prisma.VariableCountArgs<ExtArgs>
            result: $Utils.Optional<VariableCountAggregateOutputType> | number
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
    base?: BaseOmit
    condition?: ConditionOmit
    value?: ValueOmit
    rule?: RuleOmit
    variable?: VariableOmit
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
   * Count Type BaseCountOutputType
   */

  export type BaseCountOutputType = {
    rules: number
    Variable: number
  }

  export type BaseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | BaseCountOutputTypeCountRulesArgs
    Variable?: boolean | BaseCountOutputTypeCountVariableArgs
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
  export type BaseCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
  }

  /**
   * BaseCountOutputType without action
   */
  export type BaseCountOutputTypeCountVariableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariableWhereInput
  }


  /**
   * Count Type ValueCountOutputType
   */

  export type ValueCountOutputType = {
    Condition: number
  }

  export type ValueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Condition?: boolean | ValueCountOutputTypeCountConditionArgs
  }

  // Custom InputTypes
  /**
   * ValueCountOutputType without action
   */
  export type ValueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ValueCountOutputType
     */
    select?: ValueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ValueCountOutputType without action
   */
  export type ValueCountOutputTypeCountConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
  }


  /**
   * Count Type RuleCountOutputType
   */

  export type RuleCountOutputType = {
    Condition: number
  }

  export type RuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Condition?: boolean | RuleCountOutputTypeCountConditionArgs
  }

  // Custom InputTypes
  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RuleCountOutputType
     */
    select?: RuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RuleCountOutputType without action
   */
  export type RuleCountOutputTypeCountConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
  }


  /**
   * Count Type VariableCountOutputType
   */

  export type VariableCountOutputType = {
    Condition: number
    Value: number
  }

  export type VariableCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Condition?: boolean | VariableCountOutputTypeCountConditionArgs
    Value?: boolean | VariableCountOutputTypeCountValueArgs
  }

  // Custom InputTypes
  /**
   * VariableCountOutputType without action
   */
  export type VariableCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VariableCountOutputType
     */
    select?: VariableCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VariableCountOutputType without action
   */
  export type VariableCountOutputTypeCountConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
  }

  /**
   * VariableCountOutputType without action
   */
  export type VariableCountOutputTypeCountValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
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
  }

  export type BaseMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type BaseCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type BaseMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type BaseMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type BaseCountAggregateInputType = {
    id?: true
    name?: true
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
    rules?: boolean | Base$rulesArgs<ExtArgs>
    Variable?: boolean | Base$VariableArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["base"]>

  export type BaseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["base"]>

  export type BaseSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type BaseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["base"]>
  export type BaseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | Base$rulesArgs<ExtArgs>
    Variable?: boolean | Base$VariableArgs<ExtArgs>
    _count?: boolean | BaseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BaseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BaseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BasePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Base"
    objects: {
      rules: Prisma.$RulePayload<ExtArgs>[]
      Variable: Prisma.$VariablePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
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
    rules<T extends Base$rulesArgs<ExtArgs> = {}>(args?: Subset<T, Base$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Variable<T extends Base$VariableArgs<ExtArgs> = {}>(args?: Subset<T, Base$VariableArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Base.rules
   */
  export type Base$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    cursor?: RuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Base.Variable
   */
  export type Base$VariableArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    where?: VariableWhereInput
    orderBy?: VariableOrderByWithRelationInput | VariableOrderByWithRelationInput[]
    cursor?: VariableWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VariableScalarFieldEnum | VariableScalarFieldEnum[]
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
   * Model Condition
   */

  export type AggregateCondition = {
    _count: ConditionCountAggregateOutputType | null
    _min: ConditionMinAggregateOutputType | null
    _max: ConditionMaxAggregateOutputType | null
  }

  export type ConditionMinAggregateOutputType = {
    id: string | null
    connective: string | null
    variableId: string | null
    valueId: string | null
    ruleId: string | null
  }

  export type ConditionMaxAggregateOutputType = {
    id: string | null
    connective: string | null
    variableId: string | null
    valueId: string | null
    ruleId: string | null
  }

  export type ConditionCountAggregateOutputType = {
    id: number
    connective: number
    variableId: number
    valueId: number
    ruleId: number
    _all: number
  }


  export type ConditionMinAggregateInputType = {
    id?: true
    connective?: true
    variableId?: true
    valueId?: true
    ruleId?: true
  }

  export type ConditionMaxAggregateInputType = {
    id?: true
    connective?: true
    variableId?: true
    valueId?: true
    ruleId?: true
  }

  export type ConditionCountAggregateInputType = {
    id?: true
    connective?: true
    variableId?: true
    valueId?: true
    ruleId?: true
    _all?: true
  }

  export type ConditionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Condition to aggregate.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Conditions
    **/
    _count?: true | ConditionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConditionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConditionMaxAggregateInputType
  }

  export type GetConditionAggregateType<T extends ConditionAggregateArgs> = {
        [P in keyof T & keyof AggregateCondition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCondition[P]>
      : GetScalarType<T[P], AggregateCondition[P]>
  }




  export type ConditionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithAggregationInput | ConditionOrderByWithAggregationInput[]
    by: ConditionScalarFieldEnum[] | ConditionScalarFieldEnum
    having?: ConditionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConditionCountAggregateInputType | true
    _min?: ConditionMinAggregateInputType
    _max?: ConditionMaxAggregateInputType
  }

  export type ConditionGroupByOutputType = {
    id: string
    connective: string
    variableId: string
    valueId: string
    ruleId: string
    _count: ConditionCountAggregateOutputType | null
    _min: ConditionMinAggregateOutputType | null
    _max: ConditionMaxAggregateOutputType | null
  }

  type GetConditionGroupByPayload<T extends ConditionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConditionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConditionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConditionGroupByOutputType[P]>
            : GetScalarType<T[P], ConditionGroupByOutputType[P]>
        }
      >
    >


  export type ConditionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connective?: boolean
    variableId?: boolean
    valueId?: boolean
    ruleId?: boolean
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    value?: boolean | ValueDefaultArgs<ExtArgs>
    rule?: boolean | RuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connective?: boolean
    variableId?: boolean
    valueId?: boolean
    ruleId?: boolean
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    value?: boolean | ValueDefaultArgs<ExtArgs>
    rule?: boolean | RuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    connective?: boolean
    variableId?: boolean
    valueId?: boolean
    ruleId?: boolean
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    value?: boolean | ValueDefaultArgs<ExtArgs>
    rule?: boolean | RuleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["condition"]>

  export type ConditionSelectScalar = {
    id?: boolean
    connective?: boolean
    variableId?: boolean
    valueId?: boolean
    ruleId?: boolean
  }

  export type ConditionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "connective" | "variableId" | "valueId" | "ruleId", ExtArgs["result"]["condition"]>
  export type ConditionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    value?: boolean | ValueDefaultArgs<ExtArgs>
    rule?: boolean | RuleDefaultArgs<ExtArgs>
  }
  export type ConditionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    value?: boolean | ValueDefaultArgs<ExtArgs>
    rule?: boolean | RuleDefaultArgs<ExtArgs>
  }
  export type ConditionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    value?: boolean | ValueDefaultArgs<ExtArgs>
    rule?: boolean | RuleDefaultArgs<ExtArgs>
  }

  export type $ConditionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Condition"
    objects: {
      variable: Prisma.$VariablePayload<ExtArgs>
      value: Prisma.$ValuePayload<ExtArgs>
      rule: Prisma.$RulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      connective: string
      variableId: string
      valueId: string
      ruleId: string
    }, ExtArgs["result"]["condition"]>
    composites: {}
  }

  type ConditionGetPayload<S extends boolean | null | undefined | ConditionDefaultArgs> = $Result.GetResult<Prisma.$ConditionPayload, S>

  type ConditionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConditionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConditionCountAggregateInputType | true
    }

  export interface ConditionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Condition'], meta: { name: 'Condition' } }
    /**
     * Find zero or one Condition that matches the filter.
     * @param {ConditionFindUniqueArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConditionFindUniqueArgs>(args: SelectSubset<T, ConditionFindUniqueArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Condition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConditionFindUniqueOrThrowArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConditionFindUniqueOrThrowArgs>(args: SelectSubset<T, ConditionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Condition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindFirstArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConditionFindFirstArgs>(args?: SelectSubset<T, ConditionFindFirstArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Condition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindFirstOrThrowArgs} args - Arguments to find a Condition
     * @example
     * // Get one Condition
     * const condition = await prisma.condition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConditionFindFirstOrThrowArgs>(args?: SelectSubset<T, ConditionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Conditions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Conditions
     * const conditions = await prisma.condition.findMany()
     * 
     * // Get first 10 Conditions
     * const conditions = await prisma.condition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const conditionWithIdOnly = await prisma.condition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConditionFindManyArgs>(args?: SelectSubset<T, ConditionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Condition.
     * @param {ConditionCreateArgs} args - Arguments to create a Condition.
     * @example
     * // Create one Condition
     * const Condition = await prisma.condition.create({
     *   data: {
     *     // ... data to create a Condition
     *   }
     * })
     * 
     */
    create<T extends ConditionCreateArgs>(args: SelectSubset<T, ConditionCreateArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Conditions.
     * @param {ConditionCreateManyArgs} args - Arguments to create many Conditions.
     * @example
     * // Create many Conditions
     * const condition = await prisma.condition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConditionCreateManyArgs>(args?: SelectSubset<T, ConditionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Conditions and returns the data saved in the database.
     * @param {ConditionCreateManyAndReturnArgs} args - Arguments to create many Conditions.
     * @example
     * // Create many Conditions
     * const condition = await prisma.condition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Conditions and only return the `id`
     * const conditionWithIdOnly = await prisma.condition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConditionCreateManyAndReturnArgs>(args?: SelectSubset<T, ConditionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Condition.
     * @param {ConditionDeleteArgs} args - Arguments to delete one Condition.
     * @example
     * // Delete one Condition
     * const Condition = await prisma.condition.delete({
     *   where: {
     *     // ... filter to delete one Condition
     *   }
     * })
     * 
     */
    delete<T extends ConditionDeleteArgs>(args: SelectSubset<T, ConditionDeleteArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Condition.
     * @param {ConditionUpdateArgs} args - Arguments to update one Condition.
     * @example
     * // Update one Condition
     * const condition = await prisma.condition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConditionUpdateArgs>(args: SelectSubset<T, ConditionUpdateArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Conditions.
     * @param {ConditionDeleteManyArgs} args - Arguments to filter Conditions to delete.
     * @example
     * // Delete a few Conditions
     * const { count } = await prisma.condition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConditionDeleteManyArgs>(args?: SelectSubset<T, ConditionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Conditions
     * const condition = await prisma.condition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConditionUpdateManyArgs>(args: SelectSubset<T, ConditionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Conditions and returns the data updated in the database.
     * @param {ConditionUpdateManyAndReturnArgs} args - Arguments to update many Conditions.
     * @example
     * // Update many Conditions
     * const condition = await prisma.condition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Conditions and only return the `id`
     * const conditionWithIdOnly = await prisma.condition.updateManyAndReturn({
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
    updateManyAndReturn<T extends ConditionUpdateManyAndReturnArgs>(args: SelectSubset<T, ConditionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Condition.
     * @param {ConditionUpsertArgs} args - Arguments to update or create a Condition.
     * @example
     * // Update or create a Condition
     * const condition = await prisma.condition.upsert({
     *   create: {
     *     // ... data to create a Condition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Condition we want to update
     *   }
     * })
     */
    upsert<T extends ConditionUpsertArgs>(args: SelectSubset<T, ConditionUpsertArgs<ExtArgs>>): Prisma__ConditionClient<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Conditions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionCountArgs} args - Arguments to filter Conditions to count.
     * @example
     * // Count the number of Conditions
     * const count = await prisma.condition.count({
     *   where: {
     *     // ... the filter for the Conditions we want to count
     *   }
     * })
    **/
    count<T extends ConditionCountArgs>(
      args?: Subset<T, ConditionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConditionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ConditionAggregateArgs>(args: Subset<T, ConditionAggregateArgs>): Prisma.PrismaPromise<GetConditionAggregateType<T>>

    /**
     * Group by Condition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConditionGroupByArgs} args - Group by arguments.
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
      T extends ConditionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConditionGroupByArgs['orderBy'] }
        : { orderBy?: ConditionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ConditionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConditionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Condition model
   */
  readonly fields: ConditionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Condition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConditionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variable<T extends VariableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariableDefaultArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    value<T extends ValueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ValueDefaultArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rule<T extends RuleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RuleDefaultArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Condition model
   */
  interface ConditionFieldRefs {
    readonly id: FieldRef<"Condition", 'String'>
    readonly connective: FieldRef<"Condition", 'String'>
    readonly variableId: FieldRef<"Condition", 'String'>
    readonly valueId: FieldRef<"Condition", 'String'>
    readonly ruleId: FieldRef<"Condition", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Condition findUnique
   */
  export type ConditionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition findUniqueOrThrow
   */
  export type ConditionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition findFirst
   */
  export type ConditionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conditions.
     */
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition findFirstOrThrow
   */
  export type ConditionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Condition to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Conditions.
     */
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition findMany
   */
  export type ConditionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter, which Conditions to fetch.
     */
    where?: ConditionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Conditions to fetch.
     */
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Conditions.
     */
    cursor?: ConditionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Conditions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Conditions.
     */
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Condition create
   */
  export type ConditionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The data needed to create a Condition.
     */
    data: XOR<ConditionCreateInput, ConditionUncheckedCreateInput>
  }

  /**
   * Condition createMany
   */
  export type ConditionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Conditions.
     */
    data: ConditionCreateManyInput | ConditionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Condition createManyAndReturn
   */
  export type ConditionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * The data used to create many Conditions.
     */
    data: ConditionCreateManyInput | ConditionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Condition update
   */
  export type ConditionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The data needed to update a Condition.
     */
    data: XOR<ConditionUpdateInput, ConditionUncheckedUpdateInput>
    /**
     * Choose, which Condition to update.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition updateMany
   */
  export type ConditionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Conditions.
     */
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyInput>
    /**
     * Filter which Conditions to update
     */
    where?: ConditionWhereInput
    /**
     * Limit how many Conditions to update.
     */
    limit?: number
  }

  /**
   * Condition updateManyAndReturn
   */
  export type ConditionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * The data used to update Conditions.
     */
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyInput>
    /**
     * Filter which Conditions to update
     */
    where?: ConditionWhereInput
    /**
     * Limit how many Conditions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Condition upsert
   */
  export type ConditionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * The filter to search for the Condition to update in case it exists.
     */
    where: ConditionWhereUniqueInput
    /**
     * In case the Condition found by the `where` argument doesn't exist, create a new Condition with this data.
     */
    create: XOR<ConditionCreateInput, ConditionUncheckedCreateInput>
    /**
     * In case the Condition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConditionUpdateInput, ConditionUncheckedUpdateInput>
  }

  /**
   * Condition delete
   */
  export type ConditionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    /**
     * Filter which Condition to delete.
     */
    where: ConditionWhereUniqueInput
  }

  /**
   * Condition deleteMany
   */
  export type ConditionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Conditions to delete
     */
    where?: ConditionWhereInput
    /**
     * Limit how many Conditions to delete.
     */
    limit?: number
  }

  /**
   * Condition without action
   */
  export type ConditionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
  }


  /**
   * Model Value
   */

  export type AggregateValue = {
    _count: ValueCountAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  export type ValueMinAggregateOutputType = {
    id: string | null
    value: string | null
    variableId: string | null
  }

  export type ValueMaxAggregateOutputType = {
    id: string | null
    value: string | null
    variableId: string | null
  }

  export type ValueCountAggregateOutputType = {
    id: number
    value: number
    variableId: number
    _all: number
  }


  export type ValueMinAggregateInputType = {
    id?: true
    value?: true
    variableId?: true
  }

  export type ValueMaxAggregateInputType = {
    id?: true
    value?: true
    variableId?: true
  }

  export type ValueCountAggregateInputType = {
    id?: true
    value?: true
    variableId?: true
    _all?: true
  }

  export type ValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Value to aggregate.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Values
    **/
    _count?: true | ValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValueMaxAggregateInputType
  }

  export type GetValueAggregateType<T extends ValueAggregateArgs> = {
        [P in keyof T & keyof AggregateValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValue[P]>
      : GetScalarType<T[P], AggregateValue[P]>
  }




  export type ValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithAggregationInput | ValueOrderByWithAggregationInput[]
    by: ValueScalarFieldEnum[] | ValueScalarFieldEnum
    having?: ValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValueCountAggregateInputType | true
    _min?: ValueMinAggregateInputType
    _max?: ValueMaxAggregateInputType
  }

  export type ValueGroupByOutputType = {
    id: string
    value: string
    variableId: string
    _count: ValueCountAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  type GetValueGroupByPayload<T extends ValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValueGroupByOutputType[P]>
            : GetScalarType<T[P], ValueGroupByOutputType[P]>
        }
      >
    >


  export type ValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    variableId?: boolean
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    Condition?: boolean | Value$ConditionArgs<ExtArgs>
    _count?: boolean | ValueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    variableId?: boolean
    variable?: boolean | VariableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    variableId?: boolean
    variable?: boolean | VariableDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectScalar = {
    id?: boolean
    value?: boolean
    variableId?: boolean
  }

  export type ValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "variableId", ExtArgs["result"]["value"]>
  export type ValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variable?: boolean | VariableDefaultArgs<ExtArgs>
    Condition?: boolean | Value$ConditionArgs<ExtArgs>
    _count?: boolean | ValueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variable?: boolean | VariableDefaultArgs<ExtArgs>
  }
  export type ValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    variable?: boolean | VariableDefaultArgs<ExtArgs>
  }

  export type $ValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Value"
    objects: {
      variable: Prisma.$VariablePayload<ExtArgs>
      Condition: Prisma.$ConditionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      variableId: string
    }, ExtArgs["result"]["value"]>
    composites: {}
  }

  type ValueGetPayload<S extends boolean | null | undefined | ValueDefaultArgs> = $Result.GetResult<Prisma.$ValuePayload, S>

  type ValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValueCountAggregateInputType | true
    }

  export interface ValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Value'], meta: { name: 'Value' } }
    /**
     * Find zero or one Value that matches the filter.
     * @param {ValueFindUniqueArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValueFindUniqueArgs>(args: SelectSubset<T, ValueFindUniqueArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Value that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValueFindUniqueOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValueFindUniqueOrThrowArgs>(args: SelectSubset<T, ValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValueFindFirstArgs>(args?: SelectSubset<T, ValueFindFirstArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValueFindFirstOrThrowArgs>(args?: SelectSubset<T, ValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.value.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.value.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const valueWithIdOnly = await prisma.value.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ValueFindManyArgs>(args?: SelectSubset<T, ValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Value.
     * @param {ValueCreateArgs} args - Arguments to create a Value.
     * @example
     * // Create one Value
     * const Value = await prisma.value.create({
     *   data: {
     *     // ... data to create a Value
     *   }
     * })
     * 
     */
    create<T extends ValueCreateArgs>(args: SelectSubset<T, ValueCreateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Values.
     * @param {ValueCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValueCreateManyArgs>(args?: SelectSubset<T, ValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Values and returns the data saved in the database.
     * @param {ValueCreateManyAndReturnArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Values and only return the `id`
     * const valueWithIdOnly = await prisma.value.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValueCreateManyAndReturnArgs>(args?: SelectSubset<T, ValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Value.
     * @param {ValueDeleteArgs} args - Arguments to delete one Value.
     * @example
     * // Delete one Value
     * const Value = await prisma.value.delete({
     *   where: {
     *     // ... filter to delete one Value
     *   }
     * })
     * 
     */
    delete<T extends ValueDeleteArgs>(args: SelectSubset<T, ValueDeleteArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Value.
     * @param {ValueUpdateArgs} args - Arguments to update one Value.
     * @example
     * // Update one Value
     * const value = await prisma.value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValueUpdateArgs>(args: SelectSubset<T, ValueUpdateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Values.
     * @param {ValueDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValueDeleteManyArgs>(args?: SelectSubset<T, ValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValueUpdateManyArgs>(args: SelectSubset<T, ValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values and returns the data updated in the database.
     * @param {ValueUpdateManyAndReturnArgs} args - Arguments to update many Values.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Values and only return the `id`
     * const valueWithIdOnly = await prisma.value.updateManyAndReturn({
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
    updateManyAndReturn<T extends ValueUpdateManyAndReturnArgs>(args: SelectSubset<T, ValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Value.
     * @param {ValueUpsertArgs} args - Arguments to update or create a Value.
     * @example
     * // Update or create a Value
     * const value = await prisma.value.upsert({
     *   create: {
     *     // ... data to create a Value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Value we want to update
     *   }
     * })
     */
    upsert<T extends ValueUpsertArgs>(args: SelectSubset<T, ValueUpsertArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.value.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends ValueCountArgs>(
      args?: Subset<T, ValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ValueAggregateArgs>(args: Subset<T, ValueAggregateArgs>): Prisma.PrismaPromise<GetValueAggregateType<T>>

    /**
     * Group by Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueGroupByArgs} args - Group by arguments.
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
      T extends ValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValueGroupByArgs['orderBy'] }
        : { orderBy?: ValueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Value model
   */
  readonly fields: ValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    variable<T extends VariableDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VariableDefaultArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Condition<T extends Value$ConditionArgs<ExtArgs> = {}>(args?: Subset<T, Value$ConditionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Value model
   */
  interface ValueFieldRefs {
    readonly id: FieldRef<"Value", 'String'>
    readonly value: FieldRef<"Value", 'String'>
    readonly variableId: FieldRef<"Value", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Value findUnique
   */
  export type ValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findUniqueOrThrow
   */
  export type ValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findFirst
   */
  export type ValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findFirstOrThrow
   */
  export type ValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findMany
   */
  export type ValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Values to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value create
   */
  export type ValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to create a Value.
     */
    data: XOR<ValueCreateInput, ValueUncheckedCreateInput>
  }

  /**
   * Value createMany
   */
  export type ValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Value createManyAndReturn
   */
  export type ValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Value update
   */
  export type ValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to update a Value.
     */
    data: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
    /**
     * Choose, which Value to update.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value updateMany
   */
  export type ValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
  }

  /**
   * Value updateManyAndReturn
   */
  export type ValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Value upsert
   */
  export type ValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The filter to search for the Value to update in case it exists.
     */
    where: ValueWhereUniqueInput
    /**
     * In case the Value found by the `where` argument doesn't exist, create a new Value with this data.
     */
    create: XOR<ValueCreateInput, ValueUncheckedCreateInput>
    /**
     * In case the Value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
  }

  /**
   * Value delete
   */
  export type ValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter which Value to delete.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value deleteMany
   */
  export type ValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Values to delete
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to delete.
     */
    limit?: number
  }

  /**
   * Value.Condition
   */
  export type Value$ConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    cursor?: ConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Value without action
   */
  export type ValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
  }


  /**
   * Model Rule
   */

  export type AggregateRule = {
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  export type RuleAvgAggregateOutputType = {
    order: number | null
  }

  export type RuleSumAggregateOutputType = {
    order: number | null
  }

  export type RuleMinAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    baseId: string | null
  }

  export type RuleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    order: number | null
    baseId: string | null
  }

  export type RuleCountAggregateOutputType = {
    id: number
    name: number
    order: number
    baseId: number
    _all: number
  }


  export type RuleAvgAggregateInputType = {
    order?: true
  }

  export type RuleSumAggregateInputType = {
    order?: true
  }

  export type RuleMinAggregateInputType = {
    id?: true
    name?: true
    order?: true
    baseId?: true
  }

  export type RuleMaxAggregateInputType = {
    id?: true
    name?: true
    order?: true
    baseId?: true
  }

  export type RuleCountAggregateInputType = {
    id?: true
    name?: true
    order?: true
    baseId?: true
    _all?: true
  }

  export type RuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rule to aggregate.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RuleMaxAggregateInputType
  }

  export type GetRuleAggregateType<T extends RuleAggregateArgs> = {
        [P in keyof T & keyof AggregateRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRule[P]>
      : GetScalarType<T[P], AggregateRule[P]>
  }




  export type RuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RuleWhereInput
    orderBy?: RuleOrderByWithAggregationInput | RuleOrderByWithAggregationInput[]
    by: RuleScalarFieldEnum[] | RuleScalarFieldEnum
    having?: RuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RuleCountAggregateInputType | true
    _avg?: RuleAvgAggregateInputType
    _sum?: RuleSumAggregateInputType
    _min?: RuleMinAggregateInputType
    _max?: RuleMaxAggregateInputType
  }

  export type RuleGroupByOutputType = {
    id: string
    name: string
    order: number
    baseId: string | null
    _count: RuleCountAggregateOutputType | null
    _avg: RuleAvgAggregateOutputType | null
    _sum: RuleSumAggregateOutputType | null
    _min: RuleMinAggregateOutputType | null
    _max: RuleMaxAggregateOutputType | null
  }

  type GetRuleGroupByPayload<T extends RuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RuleGroupByOutputType[P]>
            : GetScalarType<T[P], RuleGroupByOutputType[P]>
        }
      >
    >


  export type RuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    baseId?: boolean
    Base?: boolean | Rule$BaseArgs<ExtArgs>
    Condition?: boolean | Rule$ConditionArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    baseId?: boolean
    Base?: boolean | Rule$BaseArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    order?: boolean
    baseId?: boolean
    Base?: boolean | Rule$BaseArgs<ExtArgs>
  }, ExtArgs["result"]["rule"]>

  export type RuleSelectScalar = {
    id?: boolean
    name?: boolean
    order?: boolean
    baseId?: boolean
  }

  export type RuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "order" | "baseId", ExtArgs["result"]["rule"]>
  export type RuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Base?: boolean | Rule$BaseArgs<ExtArgs>
    Condition?: boolean | Rule$ConditionArgs<ExtArgs>
    _count?: boolean | RuleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Base?: boolean | Rule$BaseArgs<ExtArgs>
  }
  export type RuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Base?: boolean | Rule$BaseArgs<ExtArgs>
  }

  export type $RulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rule"
    objects: {
      Base: Prisma.$BasePayload<ExtArgs> | null
      Condition: Prisma.$ConditionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      order: number
      baseId: string | null
    }, ExtArgs["result"]["rule"]>
    composites: {}
  }

  type RuleGetPayload<S extends boolean | null | undefined | RuleDefaultArgs> = $Result.GetResult<Prisma.$RulePayload, S>

  type RuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RuleCountAggregateInputType | true
    }

  export interface RuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rule'], meta: { name: 'Rule' } }
    /**
     * Find zero or one Rule that matches the filter.
     * @param {RuleFindUniqueArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RuleFindUniqueArgs>(args: SelectSubset<T, RuleFindUniqueArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RuleFindUniqueOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RuleFindUniqueOrThrowArgs>(args: SelectSubset<T, RuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RuleFindFirstArgs>(args?: SelectSubset<T, RuleFindFirstArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindFirstOrThrowArgs} args - Arguments to find a Rule
     * @example
     * // Get one Rule
     * const rule = await prisma.rule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RuleFindFirstOrThrowArgs>(args?: SelectSubset<T, RuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rule.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ruleWithIdOnly = await prisma.rule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RuleFindManyArgs>(args?: SelectSubset<T, RuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rule.
     * @param {RuleCreateArgs} args - Arguments to create a Rule.
     * @example
     * // Create one Rule
     * const Rule = await prisma.rule.create({
     *   data: {
     *     // ... data to create a Rule
     *   }
     * })
     * 
     */
    create<T extends RuleCreateArgs>(args: SelectSubset<T, RuleCreateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RuleCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RuleCreateManyArgs>(args?: SelectSubset<T, RuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RuleCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rule = await prisma.rule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RuleCreateManyAndReturnArgs>(args?: SelectSubset<T, RuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rule.
     * @param {RuleDeleteArgs} args - Arguments to delete one Rule.
     * @example
     * // Delete one Rule
     * const Rule = await prisma.rule.delete({
     *   where: {
     *     // ... filter to delete one Rule
     *   }
     * })
     * 
     */
    delete<T extends RuleDeleteArgs>(args: SelectSubset<T, RuleDeleteArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rule.
     * @param {RuleUpdateArgs} args - Arguments to update one Rule.
     * @example
     * // Update one Rule
     * const rule = await prisma.rule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RuleUpdateArgs>(args: SelectSubset<T, RuleUpdateArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RuleDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RuleDeleteManyArgs>(args?: SelectSubset<T, RuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RuleUpdateManyArgs>(args: SelectSubset<T, RuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RuleUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rule = await prisma.rule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const ruleWithIdOnly = await prisma.rule.updateManyAndReturn({
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
    updateManyAndReturn<T extends RuleUpdateManyAndReturnArgs>(args: SelectSubset<T, RuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rule.
     * @param {RuleUpsertArgs} args - Arguments to update or create a Rule.
     * @example
     * // Update or create a Rule
     * const rule = await prisma.rule.upsert({
     *   create: {
     *     // ... data to create a Rule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rule we want to update
     *   }
     * })
     */
    upsert<T extends RuleUpsertArgs>(args: SelectSubset<T, RuleUpsertArgs<ExtArgs>>): Prisma__RuleClient<$Result.GetResult<Prisma.$RulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rule.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RuleCountArgs>(
      args?: Subset<T, RuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RuleAggregateArgs>(args: Subset<T, RuleAggregateArgs>): Prisma.PrismaPromise<GetRuleAggregateType<T>>

    /**
     * Group by Rule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RuleGroupByArgs} args - Group by arguments.
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
      T extends RuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RuleGroupByArgs['orderBy'] }
        : { orderBy?: RuleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rule model
   */
  readonly fields: RuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Base<T extends Rule$BaseArgs<ExtArgs> = {}>(args?: Subset<T, Rule$BaseArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Condition<T extends Rule$ConditionArgs<ExtArgs> = {}>(args?: Subset<T, Rule$ConditionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rule model
   */
  interface RuleFieldRefs {
    readonly id: FieldRef<"Rule", 'String'>
    readonly name: FieldRef<"Rule", 'String'>
    readonly order: FieldRef<"Rule", 'Int'>
    readonly baseId: FieldRef<"Rule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rule findUnique
   */
  export type RuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findUniqueOrThrow
   */
  export type RuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule findFirst
   */
  export type RuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findFirstOrThrow
   */
  export type RuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rule to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule findMany
   */
  export type RuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RuleOrderByWithRelationInput | RuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RuleScalarFieldEnum | RuleScalarFieldEnum[]
  }

  /**
   * Rule create
   */
  export type RuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to create a Rule.
     */
    data: XOR<RuleCreateInput, RuleUncheckedCreateInput>
  }

  /**
   * Rule createMany
   */
  export type RuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rule createManyAndReturn
   */
  export type RuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RuleCreateManyInput | RuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule update
   */
  export type RuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The data needed to update a Rule.
     */
    data: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
    /**
     * Choose, which Rule to update.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule updateMany
   */
  export type RuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rule updateManyAndReturn
   */
  export type RuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rule upsert
   */
  export type RuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * The filter to search for the Rule to update in case it exists.
     */
    where: RuleWhereUniqueInput
    /**
     * In case the Rule found by the `where` argument doesn't exist, create a new Rule with this data.
     */
    create: XOR<RuleCreateInput, RuleUncheckedCreateInput>
    /**
     * In case the Rule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RuleUpdateInput, RuleUncheckedUpdateInput>
  }

  /**
   * Rule delete
   */
  export type RuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
    /**
     * Filter which Rule to delete.
     */
    where: RuleWhereUniqueInput
  }

  /**
   * Rule deleteMany
   */
  export type RuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RuleWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rule.Base
   */
  export type Rule$BaseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: BaseWhereInput
  }

  /**
   * Rule.Condition
   */
  export type Rule$ConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    cursor?: ConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Rule without action
   */
  export type RuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rule
     */
    select?: RuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rule
     */
    omit?: RuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RuleInclude<ExtArgs> | null
  }


  /**
   * Model Variable
   */

  export type AggregateVariable = {
    _count: VariableCountAggregateOutputType | null
    _min: VariableMinAggregateOutputType | null
    _max: VariableMaxAggregateOutputType | null
  }

  export type VariableMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    baseId: string | null
  }

  export type VariableMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    baseId: string | null
  }

  export type VariableCountAggregateOutputType = {
    id: number
    name: number
    type: number
    baseId: number
    _all: number
  }


  export type VariableMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    baseId?: true
  }

  export type VariableMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    baseId?: true
  }

  export type VariableCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    baseId?: true
    _all?: true
  }

  export type VariableAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variable to aggregate.
     */
    where?: VariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariableOrderByWithRelationInput | VariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Variables
    **/
    _count?: true | VariableCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VariableMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VariableMaxAggregateInputType
  }

  export type GetVariableAggregateType<T extends VariableAggregateArgs> = {
        [P in keyof T & keyof AggregateVariable]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVariable[P]>
      : GetScalarType<T[P], AggregateVariable[P]>
  }




  export type VariableGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VariableWhereInput
    orderBy?: VariableOrderByWithAggregationInput | VariableOrderByWithAggregationInput[]
    by: VariableScalarFieldEnum[] | VariableScalarFieldEnum
    having?: VariableScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VariableCountAggregateInputType | true
    _min?: VariableMinAggregateInputType
    _max?: VariableMaxAggregateInputType
  }

  export type VariableGroupByOutputType = {
    id: string
    name: string
    type: string
    baseId: string
    _count: VariableCountAggregateOutputType | null
    _min: VariableMinAggregateOutputType | null
    _max: VariableMaxAggregateOutputType | null
  }

  type GetVariableGroupByPayload<T extends VariableGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VariableGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VariableGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VariableGroupByOutputType[P]>
            : GetScalarType<T[P], VariableGroupByOutputType[P]>
        }
      >
    >


  export type VariableSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
    Condition?: boolean | Variable$ConditionArgs<ExtArgs>
    Value?: boolean | Variable$ValueArgs<ExtArgs>
    _count?: boolean | VariableCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variable"]>

  export type VariableSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variable"]>

  export type VariableSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    baseId?: boolean
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["variable"]>

  export type VariableSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    baseId?: boolean
  }

  export type VariableOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "baseId", ExtArgs["result"]["variable"]>
  export type VariableInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
    Condition?: boolean | Variable$ConditionArgs<ExtArgs>
    Value?: boolean | Variable$ValueArgs<ExtArgs>
    _count?: boolean | VariableCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VariableIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }
  export type VariableIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    base?: boolean | BaseDefaultArgs<ExtArgs>
  }

  export type $VariablePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Variable"
    objects: {
      base: Prisma.$BasePayload<ExtArgs>
      Condition: Prisma.$ConditionPayload<ExtArgs>[]
      Value: Prisma.$ValuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      baseId: string
    }, ExtArgs["result"]["variable"]>
    composites: {}
  }

  type VariableGetPayload<S extends boolean | null | undefined | VariableDefaultArgs> = $Result.GetResult<Prisma.$VariablePayload, S>

  type VariableCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VariableFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VariableCountAggregateInputType | true
    }

  export interface VariableDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Variable'], meta: { name: 'Variable' } }
    /**
     * Find zero or one Variable that matches the filter.
     * @param {VariableFindUniqueArgs} args - Arguments to find a Variable
     * @example
     * // Get one Variable
     * const variable = await prisma.variable.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VariableFindUniqueArgs>(args: SelectSubset<T, VariableFindUniqueArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Variable that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VariableFindUniqueOrThrowArgs} args - Arguments to find a Variable
     * @example
     * // Get one Variable
     * const variable = await prisma.variable.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VariableFindUniqueOrThrowArgs>(args: SelectSubset<T, VariableFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variable that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableFindFirstArgs} args - Arguments to find a Variable
     * @example
     * // Get one Variable
     * const variable = await prisma.variable.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VariableFindFirstArgs>(args?: SelectSubset<T, VariableFindFirstArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Variable that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableFindFirstOrThrowArgs} args - Arguments to find a Variable
     * @example
     * // Get one Variable
     * const variable = await prisma.variable.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VariableFindFirstOrThrowArgs>(args?: SelectSubset<T, VariableFindFirstOrThrowArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Variables that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Variables
     * const variables = await prisma.variable.findMany()
     * 
     * // Get first 10 Variables
     * const variables = await prisma.variable.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const variableWithIdOnly = await prisma.variable.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VariableFindManyArgs>(args?: SelectSubset<T, VariableFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Variable.
     * @param {VariableCreateArgs} args - Arguments to create a Variable.
     * @example
     * // Create one Variable
     * const Variable = await prisma.variable.create({
     *   data: {
     *     // ... data to create a Variable
     *   }
     * })
     * 
     */
    create<T extends VariableCreateArgs>(args: SelectSubset<T, VariableCreateArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Variables.
     * @param {VariableCreateManyArgs} args - Arguments to create many Variables.
     * @example
     * // Create many Variables
     * const variable = await prisma.variable.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VariableCreateManyArgs>(args?: SelectSubset<T, VariableCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Variables and returns the data saved in the database.
     * @param {VariableCreateManyAndReturnArgs} args - Arguments to create many Variables.
     * @example
     * // Create many Variables
     * const variable = await prisma.variable.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Variables and only return the `id`
     * const variableWithIdOnly = await prisma.variable.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VariableCreateManyAndReturnArgs>(args?: SelectSubset<T, VariableCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Variable.
     * @param {VariableDeleteArgs} args - Arguments to delete one Variable.
     * @example
     * // Delete one Variable
     * const Variable = await prisma.variable.delete({
     *   where: {
     *     // ... filter to delete one Variable
     *   }
     * })
     * 
     */
    delete<T extends VariableDeleteArgs>(args: SelectSubset<T, VariableDeleteArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Variable.
     * @param {VariableUpdateArgs} args - Arguments to update one Variable.
     * @example
     * // Update one Variable
     * const variable = await prisma.variable.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VariableUpdateArgs>(args: SelectSubset<T, VariableUpdateArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Variables.
     * @param {VariableDeleteManyArgs} args - Arguments to filter Variables to delete.
     * @example
     * // Delete a few Variables
     * const { count } = await prisma.variable.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VariableDeleteManyArgs>(args?: SelectSubset<T, VariableDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Variables
     * const variable = await prisma.variable.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VariableUpdateManyArgs>(args: SelectSubset<T, VariableUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Variables and returns the data updated in the database.
     * @param {VariableUpdateManyAndReturnArgs} args - Arguments to update many Variables.
     * @example
     * // Update many Variables
     * const variable = await prisma.variable.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Variables and only return the `id`
     * const variableWithIdOnly = await prisma.variable.updateManyAndReturn({
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
    updateManyAndReturn<T extends VariableUpdateManyAndReturnArgs>(args: SelectSubset<T, VariableUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Variable.
     * @param {VariableUpsertArgs} args - Arguments to update or create a Variable.
     * @example
     * // Update or create a Variable
     * const variable = await prisma.variable.upsert({
     *   create: {
     *     // ... data to create a Variable
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Variable we want to update
     *   }
     * })
     */
    upsert<T extends VariableUpsertArgs>(args: SelectSubset<T, VariableUpsertArgs<ExtArgs>>): Prisma__VariableClient<$Result.GetResult<Prisma.$VariablePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Variables.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableCountArgs} args - Arguments to filter Variables to count.
     * @example
     * // Count the number of Variables
     * const count = await prisma.variable.count({
     *   where: {
     *     // ... the filter for the Variables we want to count
     *   }
     * })
    **/
    count<T extends VariableCountArgs>(
      args?: Subset<T, VariableCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VariableCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Variable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VariableAggregateArgs>(args: Subset<T, VariableAggregateArgs>): Prisma.PrismaPromise<GetVariableAggregateType<T>>

    /**
     * Group by Variable.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VariableGroupByArgs} args - Group by arguments.
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
      T extends VariableGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VariableGroupByArgs['orderBy'] }
        : { orderBy?: VariableGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VariableGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVariableGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Variable model
   */
  readonly fields: VariableFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Variable.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VariableClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    base<T extends BaseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BaseDefaultArgs<ExtArgs>>): Prisma__BaseClient<$Result.GetResult<Prisma.$BasePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Condition<T extends Variable$ConditionArgs<ExtArgs> = {}>(args?: Subset<T, Variable$ConditionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConditionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Value<T extends Variable$ValueArgs<ExtArgs> = {}>(args?: Subset<T, Variable$ValueArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Variable model
   */
  interface VariableFieldRefs {
    readonly id: FieldRef<"Variable", 'String'>
    readonly name: FieldRef<"Variable", 'String'>
    readonly type: FieldRef<"Variable", 'String'>
    readonly baseId: FieldRef<"Variable", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Variable findUnique
   */
  export type VariableFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * Filter, which Variable to fetch.
     */
    where: VariableWhereUniqueInput
  }

  /**
   * Variable findUniqueOrThrow
   */
  export type VariableFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * Filter, which Variable to fetch.
     */
    where: VariableWhereUniqueInput
  }

  /**
   * Variable findFirst
   */
  export type VariableFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * Filter, which Variable to fetch.
     */
    where?: VariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariableOrderByWithRelationInput | VariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variables.
     */
    cursor?: VariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variables.
     */
    distinct?: VariableScalarFieldEnum | VariableScalarFieldEnum[]
  }

  /**
   * Variable findFirstOrThrow
   */
  export type VariableFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * Filter, which Variable to fetch.
     */
    where?: VariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariableOrderByWithRelationInput | VariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Variables.
     */
    cursor?: VariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Variables.
     */
    distinct?: VariableScalarFieldEnum | VariableScalarFieldEnum[]
  }

  /**
   * Variable findMany
   */
  export type VariableFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * Filter, which Variables to fetch.
     */
    where?: VariableWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Variables to fetch.
     */
    orderBy?: VariableOrderByWithRelationInput | VariableOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Variables.
     */
    cursor?: VariableWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Variables from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Variables.
     */
    skip?: number
    distinct?: VariableScalarFieldEnum | VariableScalarFieldEnum[]
  }

  /**
   * Variable create
   */
  export type VariableCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * The data needed to create a Variable.
     */
    data: XOR<VariableCreateInput, VariableUncheckedCreateInput>
  }

  /**
   * Variable createMany
   */
  export type VariableCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Variables.
     */
    data: VariableCreateManyInput | VariableCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Variable createManyAndReturn
   */
  export type VariableCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * The data used to create many Variables.
     */
    data: VariableCreateManyInput | VariableCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variable update
   */
  export type VariableUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * The data needed to update a Variable.
     */
    data: XOR<VariableUpdateInput, VariableUncheckedUpdateInput>
    /**
     * Choose, which Variable to update.
     */
    where: VariableWhereUniqueInput
  }

  /**
   * Variable updateMany
   */
  export type VariableUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Variables.
     */
    data: XOR<VariableUpdateManyMutationInput, VariableUncheckedUpdateManyInput>
    /**
     * Filter which Variables to update
     */
    where?: VariableWhereInput
    /**
     * Limit how many Variables to update.
     */
    limit?: number
  }

  /**
   * Variable updateManyAndReturn
   */
  export type VariableUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * The data used to update Variables.
     */
    data: XOR<VariableUpdateManyMutationInput, VariableUncheckedUpdateManyInput>
    /**
     * Filter which Variables to update
     */
    where?: VariableWhereInput
    /**
     * Limit how many Variables to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Variable upsert
   */
  export type VariableUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * The filter to search for the Variable to update in case it exists.
     */
    where: VariableWhereUniqueInput
    /**
     * In case the Variable found by the `where` argument doesn't exist, create a new Variable with this data.
     */
    create: XOR<VariableCreateInput, VariableUncheckedCreateInput>
    /**
     * In case the Variable was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VariableUpdateInput, VariableUncheckedUpdateInput>
  }

  /**
   * Variable delete
   */
  export type VariableDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
    /**
     * Filter which Variable to delete.
     */
    where: VariableWhereUniqueInput
  }

  /**
   * Variable deleteMany
   */
  export type VariableDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Variables to delete
     */
    where?: VariableWhereInput
    /**
     * Limit how many Variables to delete.
     */
    limit?: number
  }

  /**
   * Variable.Condition
   */
  export type Variable$ConditionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Condition
     */
    select?: ConditionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Condition
     */
    omit?: ConditionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ConditionInclude<ExtArgs> | null
    where?: ConditionWhereInput
    orderBy?: ConditionOrderByWithRelationInput | ConditionOrderByWithRelationInput[]
    cursor?: ConditionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ConditionScalarFieldEnum | ConditionScalarFieldEnum[]
  }

  /**
   * Variable.Value
   */
  export type Variable$ValueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    cursor?: ValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Variable without action
   */
  export type VariableDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Variable
     */
    select?: VariableSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Variable
     */
    omit?: VariableOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VariableInclude<ExtArgs> | null
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
    name: 'name'
  };

  export type BaseScalarFieldEnum = (typeof BaseScalarFieldEnum)[keyof typeof BaseScalarFieldEnum]


  export const ConditionScalarFieldEnum: {
    id: 'id',
    connective: 'connective',
    variableId: 'variableId',
    valueId: 'valueId',
    ruleId: 'ruleId'
  };

  export type ConditionScalarFieldEnum = (typeof ConditionScalarFieldEnum)[keyof typeof ConditionScalarFieldEnum]


  export const ValueScalarFieldEnum: {
    id: 'id',
    value: 'value',
    variableId: 'variableId'
  };

  export type ValueScalarFieldEnum = (typeof ValueScalarFieldEnum)[keyof typeof ValueScalarFieldEnum]


  export const RuleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    order: 'order',
    baseId: 'baseId'
  };

  export type RuleScalarFieldEnum = (typeof RuleScalarFieldEnum)[keyof typeof RuleScalarFieldEnum]


  export const VariableScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    baseId: 'baseId'
  };

  export type VariableScalarFieldEnum = (typeof VariableScalarFieldEnum)[keyof typeof VariableScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    id?: UuidFilter<"Base"> | string
    name?: StringFilter<"Base"> | string
    rules?: RuleListRelationFilter
    Variable?: VariableListRelationFilter
  }

  export type BaseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rules?: RuleOrderByRelationAggregateInput
    Variable?: VariableOrderByRelationAggregateInput
  }

  export type BaseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BaseWhereInput | BaseWhereInput[]
    OR?: BaseWhereInput[]
    NOT?: BaseWhereInput | BaseWhereInput[]
    name?: StringFilter<"Base"> | string
    rules?: RuleListRelationFilter
    Variable?: VariableListRelationFilter
  }, "id">

  export type BaseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: BaseCountOrderByAggregateInput
    _max?: BaseMaxOrderByAggregateInput
    _min?: BaseMinOrderByAggregateInput
  }

  export type BaseScalarWhereWithAggregatesInput = {
    AND?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    OR?: BaseScalarWhereWithAggregatesInput[]
    NOT?: BaseScalarWhereWithAggregatesInput | BaseScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Base"> | string
    name?: StringWithAggregatesFilter<"Base"> | string
  }

  export type ConditionWhereInput = {
    AND?: ConditionWhereInput | ConditionWhereInput[]
    OR?: ConditionWhereInput[]
    NOT?: ConditionWhereInput | ConditionWhereInput[]
    id?: UuidFilter<"Condition"> | string
    connective?: StringFilter<"Condition"> | string
    variableId?: UuidFilter<"Condition"> | string
    valueId?: UuidFilter<"Condition"> | string
    ruleId?: UuidFilter<"Condition"> | string
    variable?: XOR<VariableScalarRelationFilter, VariableWhereInput>
    value?: XOR<ValueScalarRelationFilter, ValueWhereInput>
    rule?: XOR<RuleScalarRelationFilter, RuleWhereInput>
  }

  export type ConditionOrderByWithRelationInput = {
    id?: SortOrder
    connective?: SortOrder
    variableId?: SortOrder
    valueId?: SortOrder
    ruleId?: SortOrder
    variable?: VariableOrderByWithRelationInput
    value?: ValueOrderByWithRelationInput
    rule?: RuleOrderByWithRelationInput
  }

  export type ConditionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConditionWhereInput | ConditionWhereInput[]
    OR?: ConditionWhereInput[]
    NOT?: ConditionWhereInput | ConditionWhereInput[]
    connective?: StringFilter<"Condition"> | string
    variableId?: UuidFilter<"Condition"> | string
    valueId?: UuidFilter<"Condition"> | string
    ruleId?: UuidFilter<"Condition"> | string
    variable?: XOR<VariableScalarRelationFilter, VariableWhereInput>
    value?: XOR<ValueScalarRelationFilter, ValueWhereInput>
    rule?: XOR<RuleScalarRelationFilter, RuleWhereInput>
  }, "id">

  export type ConditionOrderByWithAggregationInput = {
    id?: SortOrder
    connective?: SortOrder
    variableId?: SortOrder
    valueId?: SortOrder
    ruleId?: SortOrder
    _count?: ConditionCountOrderByAggregateInput
    _max?: ConditionMaxOrderByAggregateInput
    _min?: ConditionMinOrderByAggregateInput
  }

  export type ConditionScalarWhereWithAggregatesInput = {
    AND?: ConditionScalarWhereWithAggregatesInput | ConditionScalarWhereWithAggregatesInput[]
    OR?: ConditionScalarWhereWithAggregatesInput[]
    NOT?: ConditionScalarWhereWithAggregatesInput | ConditionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Condition"> | string
    connective?: StringWithAggregatesFilter<"Condition"> | string
    variableId?: UuidWithAggregatesFilter<"Condition"> | string
    valueId?: UuidWithAggregatesFilter<"Condition"> | string
    ruleId?: UuidWithAggregatesFilter<"Condition"> | string
  }

  export type ValueWhereInput = {
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    id?: UuidFilter<"Value"> | string
    value?: StringFilter<"Value"> | string
    variableId?: UuidFilter<"Value"> | string
    variable?: XOR<VariableScalarRelationFilter, VariableWhereInput>
    Condition?: ConditionListRelationFilter
  }

  export type ValueOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    variableId?: SortOrder
    variable?: VariableOrderByWithRelationInput
    Condition?: ConditionOrderByRelationAggregateInput
  }

  export type ValueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    value?: StringFilter<"Value"> | string
    variableId?: UuidFilter<"Value"> | string
    variable?: XOR<VariableScalarRelationFilter, VariableWhereInput>
    Condition?: ConditionListRelationFilter
  }, "id">

  export type ValueOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    variableId?: SortOrder
    _count?: ValueCountOrderByAggregateInput
    _max?: ValueMaxOrderByAggregateInput
    _min?: ValueMinOrderByAggregateInput
  }

  export type ValueScalarWhereWithAggregatesInput = {
    AND?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    OR?: ValueScalarWhereWithAggregatesInput[]
    NOT?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Value"> | string
    value?: StringWithAggregatesFilter<"Value"> | string
    variableId?: UuidWithAggregatesFilter<"Value"> | string
  }

  export type RuleWhereInput = {
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    id?: UuidFilter<"Rule"> | string
    name?: StringFilter<"Rule"> | string
    order?: IntFilter<"Rule"> | number
    baseId?: UuidNullableFilter<"Rule"> | string | null
    Base?: XOR<BaseNullableScalarRelationFilter, BaseWhereInput> | null
    Condition?: ConditionListRelationFilter
  }

  export type RuleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    baseId?: SortOrderInput | SortOrder
    Base?: BaseOrderByWithRelationInput
    Condition?: ConditionOrderByRelationAggregateInput
  }

  export type RuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RuleWhereInput | RuleWhereInput[]
    OR?: RuleWhereInput[]
    NOT?: RuleWhereInput | RuleWhereInput[]
    name?: StringFilter<"Rule"> | string
    order?: IntFilter<"Rule"> | number
    baseId?: UuidNullableFilter<"Rule"> | string | null
    Base?: XOR<BaseNullableScalarRelationFilter, BaseWhereInput> | null
    Condition?: ConditionListRelationFilter
  }, "id">

  export type RuleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    baseId?: SortOrderInput | SortOrder
    _count?: RuleCountOrderByAggregateInput
    _avg?: RuleAvgOrderByAggregateInput
    _max?: RuleMaxOrderByAggregateInput
    _min?: RuleMinOrderByAggregateInput
    _sum?: RuleSumOrderByAggregateInput
  }

  export type RuleScalarWhereWithAggregatesInput = {
    AND?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    OR?: RuleScalarWhereWithAggregatesInput[]
    NOT?: RuleScalarWhereWithAggregatesInput | RuleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Rule"> | string
    name?: StringWithAggregatesFilter<"Rule"> | string
    order?: IntWithAggregatesFilter<"Rule"> | number
    baseId?: UuidNullableWithAggregatesFilter<"Rule"> | string | null
  }

  export type VariableWhereInput = {
    AND?: VariableWhereInput | VariableWhereInput[]
    OR?: VariableWhereInput[]
    NOT?: VariableWhereInput | VariableWhereInput[]
    id?: UuidFilter<"Variable"> | string
    name?: StringFilter<"Variable"> | string
    type?: StringFilter<"Variable"> | string
    baseId?: UuidFilter<"Variable"> | string
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    Condition?: ConditionListRelationFilter
    Value?: ValueListRelationFilter
  }

  export type VariableOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    baseId?: SortOrder
    base?: BaseOrderByWithRelationInput
    Condition?: ConditionOrderByRelationAggregateInput
    Value?: ValueOrderByRelationAggregateInput
  }

  export type VariableWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VariableWhereInput | VariableWhereInput[]
    OR?: VariableWhereInput[]
    NOT?: VariableWhereInput | VariableWhereInput[]
    name?: StringFilter<"Variable"> | string
    type?: StringFilter<"Variable"> | string
    baseId?: UuidFilter<"Variable"> | string
    base?: XOR<BaseScalarRelationFilter, BaseWhereInput>
    Condition?: ConditionListRelationFilter
    Value?: ValueListRelationFilter
  }, "id">

  export type VariableOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    baseId?: SortOrder
    _count?: VariableCountOrderByAggregateInput
    _max?: VariableMaxOrderByAggregateInput
    _min?: VariableMinOrderByAggregateInput
  }

  export type VariableScalarWhereWithAggregatesInput = {
    AND?: VariableScalarWhereWithAggregatesInput | VariableScalarWhereWithAggregatesInput[]
    OR?: VariableScalarWhereWithAggregatesInput[]
    NOT?: VariableScalarWhereWithAggregatesInput | VariableScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Variable"> | string
    name?: StringWithAggregatesFilter<"Variable"> | string
    type?: StringWithAggregatesFilter<"Variable"> | string
    baseId?: UuidWithAggregatesFilter<"Variable"> | string
  }

  export type BaseCreateInput = {
    id?: string
    name: string
    rules?: RuleCreateNestedManyWithoutBaseInput
    Variable?: VariableCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateInput = {
    id?: string
    name: string
    rules?: RuleUncheckedCreateNestedManyWithoutBaseInput
    Variable?: VariableUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: RuleUpdateManyWithoutBaseNestedInput
    Variable?: VariableUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: RuleUncheckedUpdateManyWithoutBaseNestedInput
    Variable?: VariableUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type BaseCreateManyInput = {
    id?: string
    name: string
  }

  export type BaseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BaseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionCreateInput = {
    id?: string
    connective: string
    variable: VariableCreateNestedOneWithoutConditionInput
    value: ValueCreateNestedOneWithoutConditionInput
    rule: RuleCreateNestedOneWithoutConditionInput
  }

  export type ConditionUncheckedCreateInput = {
    id?: string
    connective: string
    variableId: string
    valueId: string
    ruleId: string
  }

  export type ConditionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variable?: VariableUpdateOneRequiredWithoutConditionNestedInput
    value?: ValueUpdateOneRequiredWithoutConditionNestedInput
    rule?: RuleUpdateOneRequiredWithoutConditionNestedInput
  }

  export type ConditionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    valueId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionCreateManyInput = {
    id?: string
    connective: string
    variableId: string
    valueId: string
    ruleId: string
  }

  export type ConditionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    valueId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
  }

  export type ValueCreateInput = {
    id?: string
    value: string
    variable: VariableCreateNestedOneWithoutValueInput
    Condition?: ConditionCreateNestedManyWithoutValueInput
  }

  export type ValueUncheckedCreateInput = {
    id?: string
    value: string
    variableId: string
    Condition?: ConditionUncheckedCreateNestedManyWithoutValueInput
  }

  export type ValueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    variable?: VariableUpdateOneRequiredWithoutValueNestedInput
    Condition?: ConditionUpdateManyWithoutValueNestedInput
  }

  export type ValueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUncheckedUpdateManyWithoutValueNestedInput
  }

  export type ValueCreateManyInput = {
    id?: string
    value: string
    variableId: string
  }

  export type ValueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type ValueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
  }

  export type RuleCreateInput = {
    id?: string
    name: string
    order: number
    Base?: BaseCreateNestedOneWithoutRulesInput
    Condition?: ConditionCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateInput = {
    id?: string
    name: string
    order: number
    baseId?: string | null
    Condition?: ConditionUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    Base?: BaseUpdateOneWithoutRulesNestedInput
    Condition?: ConditionUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    baseId?: NullableStringFieldUpdateOperationsInput | string | null
    Condition?: ConditionUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleCreateManyInput = {
    id?: string
    name: string
    order: number
    baseId?: string | null
  }

  export type RuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type RuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    baseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VariableCreateInput = {
    id?: string
    name: string
    type: string
    base: BaseCreateNestedOneWithoutVariableInput
    Condition?: ConditionCreateNestedManyWithoutVariableInput
    Value?: ValueCreateNestedManyWithoutVariableInput
  }

  export type VariableUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    baseId: string
    Condition?: ConditionUncheckedCreateNestedManyWithoutVariableInput
    Value?: ValueUncheckedCreateNestedManyWithoutVariableInput
  }

  export type VariableUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    base?: BaseUpdateOneRequiredWithoutVariableNestedInput
    Condition?: ConditionUpdateManyWithoutVariableNestedInput
    Value?: ValueUpdateManyWithoutVariableNestedInput
  }

  export type VariableUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUncheckedUpdateManyWithoutVariableNestedInput
    Value?: ValueUncheckedUpdateManyWithoutVariableNestedInput
  }

  export type VariableCreateManyInput = {
    id?: string
    name: string
    type: string
    baseId: string
  }

  export type VariableUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VariableUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type RuleListRelationFilter = {
    every?: RuleWhereInput
    some?: RuleWhereInput
    none?: RuleWhereInput
  }

  export type VariableListRelationFilter = {
    every?: VariableWhereInput
    some?: VariableWhereInput
    none?: VariableWhereInput
  }

  export type RuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariableOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BaseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BaseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type BaseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type VariableScalarRelationFilter = {
    is?: VariableWhereInput
    isNot?: VariableWhereInput
  }

  export type ValueScalarRelationFilter = {
    is?: ValueWhereInput
    isNot?: ValueWhereInput
  }

  export type RuleScalarRelationFilter = {
    is?: RuleWhereInput
    isNot?: RuleWhereInput
  }

  export type ConditionCountOrderByAggregateInput = {
    id?: SortOrder
    connective?: SortOrder
    variableId?: SortOrder
    valueId?: SortOrder
    ruleId?: SortOrder
  }

  export type ConditionMaxOrderByAggregateInput = {
    id?: SortOrder
    connective?: SortOrder
    variableId?: SortOrder
    valueId?: SortOrder
    ruleId?: SortOrder
  }

  export type ConditionMinOrderByAggregateInput = {
    id?: SortOrder
    connective?: SortOrder
    variableId?: SortOrder
    valueId?: SortOrder
    ruleId?: SortOrder
  }

  export type ConditionListRelationFilter = {
    every?: ConditionWhereInput
    some?: ConditionWhereInput
    none?: ConditionWhereInput
  }

  export type ConditionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValueCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    variableId?: SortOrder
  }

  export type ValueMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    variableId?: SortOrder
  }

  export type ValueMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    variableId?: SortOrder
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

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BaseNullableScalarRelationFilter = {
    is?: BaseWhereInput | null
    isNot?: BaseWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RuleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    baseId?: SortOrder
  }

  export type RuleAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type RuleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    baseId?: SortOrder
  }

  export type RuleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    order?: SortOrder
    baseId?: SortOrder
  }

  export type RuleSumOrderByAggregateInput = {
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

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BaseScalarRelationFilter = {
    is?: BaseWhereInput
    isNot?: BaseWhereInput
  }

  export type ValueListRelationFilter = {
    every?: ValueWhereInput
    some?: ValueWhereInput
    none?: ValueWhereInput
  }

  export type ValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VariableCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    baseId?: SortOrder
  }

  export type VariableMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    baseId?: SortOrder
  }

  export type VariableMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    baseId?: SortOrder
  }

  export type RuleCreateNestedManyWithoutBaseInput = {
    create?: XOR<RuleCreateWithoutBaseInput, RuleUncheckedCreateWithoutBaseInput> | RuleCreateWithoutBaseInput[] | RuleUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutBaseInput | RuleCreateOrConnectWithoutBaseInput[]
    createMany?: RuleCreateManyBaseInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type VariableCreateNestedManyWithoutBaseInput = {
    create?: XOR<VariableCreateWithoutBaseInput, VariableUncheckedCreateWithoutBaseInput> | VariableCreateWithoutBaseInput[] | VariableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: VariableCreateOrConnectWithoutBaseInput | VariableCreateOrConnectWithoutBaseInput[]
    createMany?: VariableCreateManyBaseInputEnvelope
    connect?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
  }

  export type RuleUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<RuleCreateWithoutBaseInput, RuleUncheckedCreateWithoutBaseInput> | RuleCreateWithoutBaseInput[] | RuleUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutBaseInput | RuleCreateOrConnectWithoutBaseInput[]
    createMany?: RuleCreateManyBaseInputEnvelope
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
  }

  export type VariableUncheckedCreateNestedManyWithoutBaseInput = {
    create?: XOR<VariableCreateWithoutBaseInput, VariableUncheckedCreateWithoutBaseInput> | VariableCreateWithoutBaseInput[] | VariableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: VariableCreateOrConnectWithoutBaseInput | VariableCreateOrConnectWithoutBaseInput[]
    createMany?: VariableCreateManyBaseInputEnvelope
    connect?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type RuleUpdateManyWithoutBaseNestedInput = {
    create?: XOR<RuleCreateWithoutBaseInput, RuleUncheckedCreateWithoutBaseInput> | RuleCreateWithoutBaseInput[] | RuleUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutBaseInput | RuleCreateOrConnectWithoutBaseInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutBaseInput | RuleUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: RuleCreateManyBaseInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutBaseInput | RuleUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutBaseInput | RuleUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type VariableUpdateManyWithoutBaseNestedInput = {
    create?: XOR<VariableCreateWithoutBaseInput, VariableUncheckedCreateWithoutBaseInput> | VariableCreateWithoutBaseInput[] | VariableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: VariableCreateOrConnectWithoutBaseInput | VariableCreateOrConnectWithoutBaseInput[]
    upsert?: VariableUpsertWithWhereUniqueWithoutBaseInput | VariableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: VariableCreateManyBaseInputEnvelope
    set?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    disconnect?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    delete?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    connect?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    update?: VariableUpdateWithWhereUniqueWithoutBaseInput | VariableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: VariableUpdateManyWithWhereWithoutBaseInput | VariableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: VariableScalarWhereInput | VariableScalarWhereInput[]
  }

  export type RuleUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<RuleCreateWithoutBaseInput, RuleUncheckedCreateWithoutBaseInput> | RuleCreateWithoutBaseInput[] | RuleUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: RuleCreateOrConnectWithoutBaseInput | RuleCreateOrConnectWithoutBaseInput[]
    upsert?: RuleUpsertWithWhereUniqueWithoutBaseInput | RuleUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: RuleCreateManyBaseInputEnvelope
    set?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    disconnect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    delete?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    connect?: RuleWhereUniqueInput | RuleWhereUniqueInput[]
    update?: RuleUpdateWithWhereUniqueWithoutBaseInput | RuleUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: RuleUpdateManyWithWhereWithoutBaseInput | RuleUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: RuleScalarWhereInput | RuleScalarWhereInput[]
  }

  export type VariableUncheckedUpdateManyWithoutBaseNestedInput = {
    create?: XOR<VariableCreateWithoutBaseInput, VariableUncheckedCreateWithoutBaseInput> | VariableCreateWithoutBaseInput[] | VariableUncheckedCreateWithoutBaseInput[]
    connectOrCreate?: VariableCreateOrConnectWithoutBaseInput | VariableCreateOrConnectWithoutBaseInput[]
    upsert?: VariableUpsertWithWhereUniqueWithoutBaseInput | VariableUpsertWithWhereUniqueWithoutBaseInput[]
    createMany?: VariableCreateManyBaseInputEnvelope
    set?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    disconnect?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    delete?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    connect?: VariableWhereUniqueInput | VariableWhereUniqueInput[]
    update?: VariableUpdateWithWhereUniqueWithoutBaseInput | VariableUpdateWithWhereUniqueWithoutBaseInput[]
    updateMany?: VariableUpdateManyWithWhereWithoutBaseInput | VariableUpdateManyWithWhereWithoutBaseInput[]
    deleteMany?: VariableScalarWhereInput | VariableScalarWhereInput[]
  }

  export type VariableCreateNestedOneWithoutConditionInput = {
    create?: XOR<VariableCreateWithoutConditionInput, VariableUncheckedCreateWithoutConditionInput>
    connectOrCreate?: VariableCreateOrConnectWithoutConditionInput
    connect?: VariableWhereUniqueInput
  }

  export type ValueCreateNestedOneWithoutConditionInput = {
    create?: XOR<ValueCreateWithoutConditionInput, ValueUncheckedCreateWithoutConditionInput>
    connectOrCreate?: ValueCreateOrConnectWithoutConditionInput
    connect?: ValueWhereUniqueInput
  }

  export type RuleCreateNestedOneWithoutConditionInput = {
    create?: XOR<RuleCreateWithoutConditionInput, RuleUncheckedCreateWithoutConditionInput>
    connectOrCreate?: RuleCreateOrConnectWithoutConditionInput
    connect?: RuleWhereUniqueInput
  }

  export type VariableUpdateOneRequiredWithoutConditionNestedInput = {
    create?: XOR<VariableCreateWithoutConditionInput, VariableUncheckedCreateWithoutConditionInput>
    connectOrCreate?: VariableCreateOrConnectWithoutConditionInput
    upsert?: VariableUpsertWithoutConditionInput
    connect?: VariableWhereUniqueInput
    update?: XOR<XOR<VariableUpdateToOneWithWhereWithoutConditionInput, VariableUpdateWithoutConditionInput>, VariableUncheckedUpdateWithoutConditionInput>
  }

  export type ValueUpdateOneRequiredWithoutConditionNestedInput = {
    create?: XOR<ValueCreateWithoutConditionInput, ValueUncheckedCreateWithoutConditionInput>
    connectOrCreate?: ValueCreateOrConnectWithoutConditionInput
    upsert?: ValueUpsertWithoutConditionInput
    connect?: ValueWhereUniqueInput
    update?: XOR<XOR<ValueUpdateToOneWithWhereWithoutConditionInput, ValueUpdateWithoutConditionInput>, ValueUncheckedUpdateWithoutConditionInput>
  }

  export type RuleUpdateOneRequiredWithoutConditionNestedInput = {
    create?: XOR<RuleCreateWithoutConditionInput, RuleUncheckedCreateWithoutConditionInput>
    connectOrCreate?: RuleCreateOrConnectWithoutConditionInput
    upsert?: RuleUpsertWithoutConditionInput
    connect?: RuleWhereUniqueInput
    update?: XOR<XOR<RuleUpdateToOneWithWhereWithoutConditionInput, RuleUpdateWithoutConditionInput>, RuleUncheckedUpdateWithoutConditionInput>
  }

  export type VariableCreateNestedOneWithoutValueInput = {
    create?: XOR<VariableCreateWithoutValueInput, VariableUncheckedCreateWithoutValueInput>
    connectOrCreate?: VariableCreateOrConnectWithoutValueInput
    connect?: VariableWhereUniqueInput
  }

  export type ConditionCreateNestedManyWithoutValueInput = {
    create?: XOR<ConditionCreateWithoutValueInput, ConditionUncheckedCreateWithoutValueInput> | ConditionCreateWithoutValueInput[] | ConditionUncheckedCreateWithoutValueInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutValueInput | ConditionCreateOrConnectWithoutValueInput[]
    createMany?: ConditionCreateManyValueInputEnvelope
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type ConditionUncheckedCreateNestedManyWithoutValueInput = {
    create?: XOR<ConditionCreateWithoutValueInput, ConditionUncheckedCreateWithoutValueInput> | ConditionCreateWithoutValueInput[] | ConditionUncheckedCreateWithoutValueInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutValueInput | ConditionCreateOrConnectWithoutValueInput[]
    createMany?: ConditionCreateManyValueInputEnvelope
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type VariableUpdateOneRequiredWithoutValueNestedInput = {
    create?: XOR<VariableCreateWithoutValueInput, VariableUncheckedCreateWithoutValueInput>
    connectOrCreate?: VariableCreateOrConnectWithoutValueInput
    upsert?: VariableUpsertWithoutValueInput
    connect?: VariableWhereUniqueInput
    update?: XOR<XOR<VariableUpdateToOneWithWhereWithoutValueInput, VariableUpdateWithoutValueInput>, VariableUncheckedUpdateWithoutValueInput>
  }

  export type ConditionUpdateManyWithoutValueNestedInput = {
    create?: XOR<ConditionCreateWithoutValueInput, ConditionUncheckedCreateWithoutValueInput> | ConditionCreateWithoutValueInput[] | ConditionUncheckedCreateWithoutValueInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutValueInput | ConditionCreateOrConnectWithoutValueInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutValueInput | ConditionUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: ConditionCreateManyValueInputEnvelope
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutValueInput | ConditionUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutValueInput | ConditionUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type ConditionUncheckedUpdateManyWithoutValueNestedInput = {
    create?: XOR<ConditionCreateWithoutValueInput, ConditionUncheckedCreateWithoutValueInput> | ConditionCreateWithoutValueInput[] | ConditionUncheckedCreateWithoutValueInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutValueInput | ConditionCreateOrConnectWithoutValueInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutValueInput | ConditionUpsertWithWhereUniqueWithoutValueInput[]
    createMany?: ConditionCreateManyValueInputEnvelope
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutValueInput | ConditionUpdateWithWhereUniqueWithoutValueInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutValueInput | ConditionUpdateManyWithWhereWithoutValueInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type BaseCreateNestedOneWithoutRulesInput = {
    create?: XOR<BaseCreateWithoutRulesInput, BaseUncheckedCreateWithoutRulesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutRulesInput
    connect?: BaseWhereUniqueInput
  }

  export type ConditionCreateNestedManyWithoutRuleInput = {
    create?: XOR<ConditionCreateWithoutRuleInput, ConditionUncheckedCreateWithoutRuleInput> | ConditionCreateWithoutRuleInput[] | ConditionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRuleInput | ConditionCreateOrConnectWithoutRuleInput[]
    createMany?: ConditionCreateManyRuleInputEnvelope
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type ConditionUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<ConditionCreateWithoutRuleInput, ConditionUncheckedCreateWithoutRuleInput> | ConditionCreateWithoutRuleInput[] | ConditionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRuleInput | ConditionCreateOrConnectWithoutRuleInput[]
    createMany?: ConditionCreateManyRuleInputEnvelope
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BaseUpdateOneWithoutRulesNestedInput = {
    create?: XOR<BaseCreateWithoutRulesInput, BaseUncheckedCreateWithoutRulesInput>
    connectOrCreate?: BaseCreateOrConnectWithoutRulesInput
    upsert?: BaseUpsertWithoutRulesInput
    disconnect?: BaseWhereInput | boolean
    delete?: BaseWhereInput | boolean
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutRulesInput, BaseUpdateWithoutRulesInput>, BaseUncheckedUpdateWithoutRulesInput>
  }

  export type ConditionUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ConditionCreateWithoutRuleInput, ConditionUncheckedCreateWithoutRuleInput> | ConditionCreateWithoutRuleInput[] | ConditionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRuleInput | ConditionCreateOrConnectWithoutRuleInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutRuleInput | ConditionUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: ConditionCreateManyRuleInputEnvelope
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutRuleInput | ConditionUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutRuleInput | ConditionUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ConditionUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<ConditionCreateWithoutRuleInput, ConditionUncheckedCreateWithoutRuleInput> | ConditionCreateWithoutRuleInput[] | ConditionUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutRuleInput | ConditionCreateOrConnectWithoutRuleInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutRuleInput | ConditionUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: ConditionCreateManyRuleInputEnvelope
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutRuleInput | ConditionUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutRuleInput | ConditionUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type BaseCreateNestedOneWithoutVariableInput = {
    create?: XOR<BaseCreateWithoutVariableInput, BaseUncheckedCreateWithoutVariableInput>
    connectOrCreate?: BaseCreateOrConnectWithoutVariableInput
    connect?: BaseWhereUniqueInput
  }

  export type ConditionCreateNestedManyWithoutVariableInput = {
    create?: XOR<ConditionCreateWithoutVariableInput, ConditionUncheckedCreateWithoutVariableInput> | ConditionCreateWithoutVariableInput[] | ConditionUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutVariableInput | ConditionCreateOrConnectWithoutVariableInput[]
    createMany?: ConditionCreateManyVariableInputEnvelope
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type ValueCreateNestedManyWithoutVariableInput = {
    create?: XOR<ValueCreateWithoutVariableInput, ValueUncheckedCreateWithoutVariableInput> | ValueCreateWithoutVariableInput[] | ValueUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariableInput | ValueCreateOrConnectWithoutVariableInput[]
    createMany?: ValueCreateManyVariableInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type ConditionUncheckedCreateNestedManyWithoutVariableInput = {
    create?: XOR<ConditionCreateWithoutVariableInput, ConditionUncheckedCreateWithoutVariableInput> | ConditionCreateWithoutVariableInput[] | ConditionUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutVariableInput | ConditionCreateOrConnectWithoutVariableInput[]
    createMany?: ConditionCreateManyVariableInputEnvelope
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
  }

  export type ValueUncheckedCreateNestedManyWithoutVariableInput = {
    create?: XOR<ValueCreateWithoutVariableInput, ValueUncheckedCreateWithoutVariableInput> | ValueCreateWithoutVariableInput[] | ValueUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariableInput | ValueCreateOrConnectWithoutVariableInput[]
    createMany?: ValueCreateManyVariableInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type BaseUpdateOneRequiredWithoutVariableNestedInput = {
    create?: XOR<BaseCreateWithoutVariableInput, BaseUncheckedCreateWithoutVariableInput>
    connectOrCreate?: BaseCreateOrConnectWithoutVariableInput
    upsert?: BaseUpsertWithoutVariableInput
    connect?: BaseWhereUniqueInput
    update?: XOR<XOR<BaseUpdateToOneWithWhereWithoutVariableInput, BaseUpdateWithoutVariableInput>, BaseUncheckedUpdateWithoutVariableInput>
  }

  export type ConditionUpdateManyWithoutVariableNestedInput = {
    create?: XOR<ConditionCreateWithoutVariableInput, ConditionUncheckedCreateWithoutVariableInput> | ConditionCreateWithoutVariableInput[] | ConditionUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutVariableInput | ConditionCreateOrConnectWithoutVariableInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutVariableInput | ConditionUpsertWithWhereUniqueWithoutVariableInput[]
    createMany?: ConditionCreateManyVariableInputEnvelope
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutVariableInput | ConditionUpdateWithWhereUniqueWithoutVariableInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutVariableInput | ConditionUpdateManyWithWhereWithoutVariableInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type ValueUpdateManyWithoutVariableNestedInput = {
    create?: XOR<ValueCreateWithoutVariableInput, ValueUncheckedCreateWithoutVariableInput> | ValueCreateWithoutVariableInput[] | ValueUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariableInput | ValueCreateOrConnectWithoutVariableInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutVariableInput | ValueUpsertWithWhereUniqueWithoutVariableInput[]
    createMany?: ValueCreateManyVariableInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutVariableInput | ValueUpdateWithWhereUniqueWithoutVariableInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutVariableInput | ValueUpdateManyWithWhereWithoutVariableInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type ConditionUncheckedUpdateManyWithoutVariableNestedInput = {
    create?: XOR<ConditionCreateWithoutVariableInput, ConditionUncheckedCreateWithoutVariableInput> | ConditionCreateWithoutVariableInput[] | ConditionUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ConditionCreateOrConnectWithoutVariableInput | ConditionCreateOrConnectWithoutVariableInput[]
    upsert?: ConditionUpsertWithWhereUniqueWithoutVariableInput | ConditionUpsertWithWhereUniqueWithoutVariableInput[]
    createMany?: ConditionCreateManyVariableInputEnvelope
    set?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    disconnect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    delete?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    connect?: ConditionWhereUniqueInput | ConditionWhereUniqueInput[]
    update?: ConditionUpdateWithWhereUniqueWithoutVariableInput | ConditionUpdateWithWhereUniqueWithoutVariableInput[]
    updateMany?: ConditionUpdateManyWithWhereWithoutVariableInput | ConditionUpdateManyWithWhereWithoutVariableInput[]
    deleteMany?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
  }

  export type ValueUncheckedUpdateManyWithoutVariableNestedInput = {
    create?: XOR<ValueCreateWithoutVariableInput, ValueUncheckedCreateWithoutVariableInput> | ValueCreateWithoutVariableInput[] | ValueUncheckedCreateWithoutVariableInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutVariableInput | ValueCreateOrConnectWithoutVariableInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutVariableInput | ValueUpsertWithWhereUniqueWithoutVariableInput[]
    createMany?: ValueCreateManyVariableInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutVariableInput | ValueUpdateWithWhereUniqueWithoutVariableInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutVariableInput | ValueUpdateManyWithWhereWithoutVariableInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
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

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
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

  export type RuleCreateWithoutBaseInput = {
    id?: string
    name: string
    order: number
    Condition?: ConditionCreateNestedManyWithoutRuleInput
  }

  export type RuleUncheckedCreateWithoutBaseInput = {
    id?: string
    name: string
    order: number
    Condition?: ConditionUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RuleCreateOrConnectWithoutBaseInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutBaseInput, RuleUncheckedCreateWithoutBaseInput>
  }

  export type RuleCreateManyBaseInputEnvelope = {
    data: RuleCreateManyBaseInput | RuleCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type VariableCreateWithoutBaseInput = {
    id?: string
    name: string
    type: string
    Condition?: ConditionCreateNestedManyWithoutVariableInput
    Value?: ValueCreateNestedManyWithoutVariableInput
  }

  export type VariableUncheckedCreateWithoutBaseInput = {
    id?: string
    name: string
    type: string
    Condition?: ConditionUncheckedCreateNestedManyWithoutVariableInput
    Value?: ValueUncheckedCreateNestedManyWithoutVariableInput
  }

  export type VariableCreateOrConnectWithoutBaseInput = {
    where: VariableWhereUniqueInput
    create: XOR<VariableCreateWithoutBaseInput, VariableUncheckedCreateWithoutBaseInput>
  }

  export type VariableCreateManyBaseInputEnvelope = {
    data: VariableCreateManyBaseInput | VariableCreateManyBaseInput[]
    skipDuplicates?: boolean
  }

  export type RuleUpsertWithWhereUniqueWithoutBaseInput = {
    where: RuleWhereUniqueInput
    update: XOR<RuleUpdateWithoutBaseInput, RuleUncheckedUpdateWithoutBaseInput>
    create: XOR<RuleCreateWithoutBaseInput, RuleUncheckedCreateWithoutBaseInput>
  }

  export type RuleUpdateWithWhereUniqueWithoutBaseInput = {
    where: RuleWhereUniqueInput
    data: XOR<RuleUpdateWithoutBaseInput, RuleUncheckedUpdateWithoutBaseInput>
  }

  export type RuleUpdateManyWithWhereWithoutBaseInput = {
    where: RuleScalarWhereInput
    data: XOR<RuleUpdateManyMutationInput, RuleUncheckedUpdateManyWithoutBaseInput>
  }

  export type RuleScalarWhereInput = {
    AND?: RuleScalarWhereInput | RuleScalarWhereInput[]
    OR?: RuleScalarWhereInput[]
    NOT?: RuleScalarWhereInput | RuleScalarWhereInput[]
    id?: UuidFilter<"Rule"> | string
    name?: StringFilter<"Rule"> | string
    order?: IntFilter<"Rule"> | number
    baseId?: UuidNullableFilter<"Rule"> | string | null
  }

  export type VariableUpsertWithWhereUniqueWithoutBaseInput = {
    where: VariableWhereUniqueInput
    update: XOR<VariableUpdateWithoutBaseInput, VariableUncheckedUpdateWithoutBaseInput>
    create: XOR<VariableCreateWithoutBaseInput, VariableUncheckedCreateWithoutBaseInput>
  }

  export type VariableUpdateWithWhereUniqueWithoutBaseInput = {
    where: VariableWhereUniqueInput
    data: XOR<VariableUpdateWithoutBaseInput, VariableUncheckedUpdateWithoutBaseInput>
  }

  export type VariableUpdateManyWithWhereWithoutBaseInput = {
    where: VariableScalarWhereInput
    data: XOR<VariableUpdateManyMutationInput, VariableUncheckedUpdateManyWithoutBaseInput>
  }

  export type VariableScalarWhereInput = {
    AND?: VariableScalarWhereInput | VariableScalarWhereInput[]
    OR?: VariableScalarWhereInput[]
    NOT?: VariableScalarWhereInput | VariableScalarWhereInput[]
    id?: UuidFilter<"Variable"> | string
    name?: StringFilter<"Variable"> | string
    type?: StringFilter<"Variable"> | string
    baseId?: UuidFilter<"Variable"> | string
  }

  export type VariableCreateWithoutConditionInput = {
    id?: string
    name: string
    type: string
    base: BaseCreateNestedOneWithoutVariableInput
    Value?: ValueCreateNestedManyWithoutVariableInput
  }

  export type VariableUncheckedCreateWithoutConditionInput = {
    id?: string
    name: string
    type: string
    baseId: string
    Value?: ValueUncheckedCreateNestedManyWithoutVariableInput
  }

  export type VariableCreateOrConnectWithoutConditionInput = {
    where: VariableWhereUniqueInput
    create: XOR<VariableCreateWithoutConditionInput, VariableUncheckedCreateWithoutConditionInput>
  }

  export type ValueCreateWithoutConditionInput = {
    id?: string
    value: string
    variable: VariableCreateNestedOneWithoutValueInput
  }

  export type ValueUncheckedCreateWithoutConditionInput = {
    id?: string
    value: string
    variableId: string
  }

  export type ValueCreateOrConnectWithoutConditionInput = {
    where: ValueWhereUniqueInput
    create: XOR<ValueCreateWithoutConditionInput, ValueUncheckedCreateWithoutConditionInput>
  }

  export type RuleCreateWithoutConditionInput = {
    id?: string
    name: string
    order: number
    Base?: BaseCreateNestedOneWithoutRulesInput
  }

  export type RuleUncheckedCreateWithoutConditionInput = {
    id?: string
    name: string
    order: number
    baseId?: string | null
  }

  export type RuleCreateOrConnectWithoutConditionInput = {
    where: RuleWhereUniqueInput
    create: XOR<RuleCreateWithoutConditionInput, RuleUncheckedCreateWithoutConditionInput>
  }

  export type VariableUpsertWithoutConditionInput = {
    update: XOR<VariableUpdateWithoutConditionInput, VariableUncheckedUpdateWithoutConditionInput>
    create: XOR<VariableCreateWithoutConditionInput, VariableUncheckedCreateWithoutConditionInput>
    where?: VariableWhereInput
  }

  export type VariableUpdateToOneWithWhereWithoutConditionInput = {
    where?: VariableWhereInput
    data: XOR<VariableUpdateWithoutConditionInput, VariableUncheckedUpdateWithoutConditionInput>
  }

  export type VariableUpdateWithoutConditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    base?: BaseUpdateOneRequiredWithoutVariableNestedInput
    Value?: ValueUpdateManyWithoutVariableNestedInput
  }

  export type VariableUncheckedUpdateWithoutConditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    Value?: ValueUncheckedUpdateManyWithoutVariableNestedInput
  }

  export type ValueUpsertWithoutConditionInput = {
    update: XOR<ValueUpdateWithoutConditionInput, ValueUncheckedUpdateWithoutConditionInput>
    create: XOR<ValueCreateWithoutConditionInput, ValueUncheckedCreateWithoutConditionInput>
    where?: ValueWhereInput
  }

  export type ValueUpdateToOneWithWhereWithoutConditionInput = {
    where?: ValueWhereInput
    data: XOR<ValueUpdateWithoutConditionInput, ValueUncheckedUpdateWithoutConditionInput>
  }

  export type ValueUpdateWithoutConditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    variable?: VariableUpdateOneRequiredWithoutValueNestedInput
  }

  export type ValueUncheckedUpdateWithoutConditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
  }

  export type RuleUpsertWithoutConditionInput = {
    update: XOR<RuleUpdateWithoutConditionInput, RuleUncheckedUpdateWithoutConditionInput>
    create: XOR<RuleCreateWithoutConditionInput, RuleUncheckedCreateWithoutConditionInput>
    where?: RuleWhereInput
  }

  export type RuleUpdateToOneWithWhereWithoutConditionInput = {
    where?: RuleWhereInput
    data: XOR<RuleUpdateWithoutConditionInput, RuleUncheckedUpdateWithoutConditionInput>
  }

  export type RuleUpdateWithoutConditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    Base?: BaseUpdateOneWithoutRulesNestedInput
  }

  export type RuleUncheckedUpdateWithoutConditionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    baseId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VariableCreateWithoutValueInput = {
    id?: string
    name: string
    type: string
    base: BaseCreateNestedOneWithoutVariableInput
    Condition?: ConditionCreateNestedManyWithoutVariableInput
  }

  export type VariableUncheckedCreateWithoutValueInput = {
    id?: string
    name: string
    type: string
    baseId: string
    Condition?: ConditionUncheckedCreateNestedManyWithoutVariableInput
  }

  export type VariableCreateOrConnectWithoutValueInput = {
    where: VariableWhereUniqueInput
    create: XOR<VariableCreateWithoutValueInput, VariableUncheckedCreateWithoutValueInput>
  }

  export type ConditionCreateWithoutValueInput = {
    id?: string
    connective: string
    variable: VariableCreateNestedOneWithoutConditionInput
    rule: RuleCreateNestedOneWithoutConditionInput
  }

  export type ConditionUncheckedCreateWithoutValueInput = {
    id?: string
    connective: string
    variableId: string
    ruleId: string
  }

  export type ConditionCreateOrConnectWithoutValueInput = {
    where: ConditionWhereUniqueInput
    create: XOR<ConditionCreateWithoutValueInput, ConditionUncheckedCreateWithoutValueInput>
  }

  export type ConditionCreateManyValueInputEnvelope = {
    data: ConditionCreateManyValueInput | ConditionCreateManyValueInput[]
    skipDuplicates?: boolean
  }

  export type VariableUpsertWithoutValueInput = {
    update: XOR<VariableUpdateWithoutValueInput, VariableUncheckedUpdateWithoutValueInput>
    create: XOR<VariableCreateWithoutValueInput, VariableUncheckedCreateWithoutValueInput>
    where?: VariableWhereInput
  }

  export type VariableUpdateToOneWithWhereWithoutValueInput = {
    where?: VariableWhereInput
    data: XOR<VariableUpdateWithoutValueInput, VariableUncheckedUpdateWithoutValueInput>
  }

  export type VariableUpdateWithoutValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    base?: BaseUpdateOneRequiredWithoutVariableNestedInput
    Condition?: ConditionUpdateManyWithoutVariableNestedInput
  }

  export type VariableUncheckedUpdateWithoutValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    baseId?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUncheckedUpdateManyWithoutVariableNestedInput
  }

  export type ConditionUpsertWithWhereUniqueWithoutValueInput = {
    where: ConditionWhereUniqueInput
    update: XOR<ConditionUpdateWithoutValueInput, ConditionUncheckedUpdateWithoutValueInput>
    create: XOR<ConditionCreateWithoutValueInput, ConditionUncheckedCreateWithoutValueInput>
  }

  export type ConditionUpdateWithWhereUniqueWithoutValueInput = {
    where: ConditionWhereUniqueInput
    data: XOR<ConditionUpdateWithoutValueInput, ConditionUncheckedUpdateWithoutValueInput>
  }

  export type ConditionUpdateManyWithWhereWithoutValueInput = {
    where: ConditionScalarWhereInput
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyWithoutValueInput>
  }

  export type ConditionScalarWhereInput = {
    AND?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
    OR?: ConditionScalarWhereInput[]
    NOT?: ConditionScalarWhereInput | ConditionScalarWhereInput[]
    id?: UuidFilter<"Condition"> | string
    connective?: StringFilter<"Condition"> | string
    variableId?: UuidFilter<"Condition"> | string
    valueId?: UuidFilter<"Condition"> | string
    ruleId?: UuidFilter<"Condition"> | string
  }

  export type BaseCreateWithoutRulesInput = {
    id?: string
    name: string
    Variable?: VariableCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateWithoutRulesInput = {
    id?: string
    name: string
    Variable?: VariableUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseCreateOrConnectWithoutRulesInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutRulesInput, BaseUncheckedCreateWithoutRulesInput>
  }

  export type ConditionCreateWithoutRuleInput = {
    id?: string
    connective: string
    variable: VariableCreateNestedOneWithoutConditionInput
    value: ValueCreateNestedOneWithoutConditionInput
  }

  export type ConditionUncheckedCreateWithoutRuleInput = {
    id?: string
    connective: string
    variableId: string
    valueId: string
  }

  export type ConditionCreateOrConnectWithoutRuleInput = {
    where: ConditionWhereUniqueInput
    create: XOR<ConditionCreateWithoutRuleInput, ConditionUncheckedCreateWithoutRuleInput>
  }

  export type ConditionCreateManyRuleInputEnvelope = {
    data: ConditionCreateManyRuleInput | ConditionCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type BaseUpsertWithoutRulesInput = {
    update: XOR<BaseUpdateWithoutRulesInput, BaseUncheckedUpdateWithoutRulesInput>
    create: XOR<BaseCreateWithoutRulesInput, BaseUncheckedCreateWithoutRulesInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutRulesInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutRulesInput, BaseUncheckedUpdateWithoutRulesInput>
  }

  export type BaseUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Variable?: VariableUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    Variable?: VariableUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type ConditionUpsertWithWhereUniqueWithoutRuleInput = {
    where: ConditionWhereUniqueInput
    update: XOR<ConditionUpdateWithoutRuleInput, ConditionUncheckedUpdateWithoutRuleInput>
    create: XOR<ConditionCreateWithoutRuleInput, ConditionUncheckedCreateWithoutRuleInput>
  }

  export type ConditionUpdateWithWhereUniqueWithoutRuleInput = {
    where: ConditionWhereUniqueInput
    data: XOR<ConditionUpdateWithoutRuleInput, ConditionUncheckedUpdateWithoutRuleInput>
  }

  export type ConditionUpdateManyWithWhereWithoutRuleInput = {
    where: ConditionScalarWhereInput
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyWithoutRuleInput>
  }

  export type BaseCreateWithoutVariableInput = {
    id?: string
    name: string
    rules?: RuleCreateNestedManyWithoutBaseInput
  }

  export type BaseUncheckedCreateWithoutVariableInput = {
    id?: string
    name: string
    rules?: RuleUncheckedCreateNestedManyWithoutBaseInput
  }

  export type BaseCreateOrConnectWithoutVariableInput = {
    where: BaseWhereUniqueInput
    create: XOR<BaseCreateWithoutVariableInput, BaseUncheckedCreateWithoutVariableInput>
  }

  export type ConditionCreateWithoutVariableInput = {
    id?: string
    connective: string
    value: ValueCreateNestedOneWithoutConditionInput
    rule: RuleCreateNestedOneWithoutConditionInput
  }

  export type ConditionUncheckedCreateWithoutVariableInput = {
    id?: string
    connective: string
    valueId: string
    ruleId: string
  }

  export type ConditionCreateOrConnectWithoutVariableInput = {
    where: ConditionWhereUniqueInput
    create: XOR<ConditionCreateWithoutVariableInput, ConditionUncheckedCreateWithoutVariableInput>
  }

  export type ConditionCreateManyVariableInputEnvelope = {
    data: ConditionCreateManyVariableInput | ConditionCreateManyVariableInput[]
    skipDuplicates?: boolean
  }

  export type ValueCreateWithoutVariableInput = {
    id?: string
    value: string
    Condition?: ConditionCreateNestedManyWithoutValueInput
  }

  export type ValueUncheckedCreateWithoutVariableInput = {
    id?: string
    value: string
    Condition?: ConditionUncheckedCreateNestedManyWithoutValueInput
  }

  export type ValueCreateOrConnectWithoutVariableInput = {
    where: ValueWhereUniqueInput
    create: XOR<ValueCreateWithoutVariableInput, ValueUncheckedCreateWithoutVariableInput>
  }

  export type ValueCreateManyVariableInputEnvelope = {
    data: ValueCreateManyVariableInput | ValueCreateManyVariableInput[]
    skipDuplicates?: boolean
  }

  export type BaseUpsertWithoutVariableInput = {
    update: XOR<BaseUpdateWithoutVariableInput, BaseUncheckedUpdateWithoutVariableInput>
    create: XOR<BaseCreateWithoutVariableInput, BaseUncheckedCreateWithoutVariableInput>
    where?: BaseWhereInput
  }

  export type BaseUpdateToOneWithWhereWithoutVariableInput = {
    where?: BaseWhereInput
    data: XOR<BaseUpdateWithoutVariableInput, BaseUncheckedUpdateWithoutVariableInput>
  }

  export type BaseUpdateWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: RuleUpdateManyWithoutBaseNestedInput
  }

  export type BaseUncheckedUpdateWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rules?: RuleUncheckedUpdateManyWithoutBaseNestedInput
  }

  export type ConditionUpsertWithWhereUniqueWithoutVariableInput = {
    where: ConditionWhereUniqueInput
    update: XOR<ConditionUpdateWithoutVariableInput, ConditionUncheckedUpdateWithoutVariableInput>
    create: XOR<ConditionCreateWithoutVariableInput, ConditionUncheckedCreateWithoutVariableInput>
  }

  export type ConditionUpdateWithWhereUniqueWithoutVariableInput = {
    where: ConditionWhereUniqueInput
    data: XOR<ConditionUpdateWithoutVariableInput, ConditionUncheckedUpdateWithoutVariableInput>
  }

  export type ConditionUpdateManyWithWhereWithoutVariableInput = {
    where: ConditionScalarWhereInput
    data: XOR<ConditionUpdateManyMutationInput, ConditionUncheckedUpdateManyWithoutVariableInput>
  }

  export type ValueUpsertWithWhereUniqueWithoutVariableInput = {
    where: ValueWhereUniqueInput
    update: XOR<ValueUpdateWithoutVariableInput, ValueUncheckedUpdateWithoutVariableInput>
    create: XOR<ValueCreateWithoutVariableInput, ValueUncheckedCreateWithoutVariableInput>
  }

  export type ValueUpdateWithWhereUniqueWithoutVariableInput = {
    where: ValueWhereUniqueInput
    data: XOR<ValueUpdateWithoutVariableInput, ValueUncheckedUpdateWithoutVariableInput>
  }

  export type ValueUpdateManyWithWhereWithoutVariableInput = {
    where: ValueScalarWhereInput
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyWithoutVariableInput>
  }

  export type ValueScalarWhereInput = {
    AND?: ValueScalarWhereInput | ValueScalarWhereInput[]
    OR?: ValueScalarWhereInput[]
    NOT?: ValueScalarWhereInput | ValueScalarWhereInput[]
    id?: UuidFilter<"Value"> | string
    value?: StringFilter<"Value"> | string
    variableId?: UuidFilter<"Value"> | string
  }

  export type RuleCreateManyBaseInput = {
    id?: string
    name: string
    order: number
  }

  export type VariableCreateManyBaseInput = {
    id?: string
    name: string
    type: string
  }

  export type RuleUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    Condition?: ConditionUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    Condition?: ConditionUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RuleUncheckedUpdateManyWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
  }

  export type VariableUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUpdateManyWithoutVariableNestedInput
    Value?: ValueUpdateManyWithoutVariableNestedInput
  }

  export type VariableUncheckedUpdateWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUncheckedUpdateManyWithoutVariableNestedInput
    Value?: ValueUncheckedUpdateManyWithoutVariableNestedInput
  }

  export type VariableUncheckedUpdateManyWithoutBaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionCreateManyValueInput = {
    id?: string
    connective: string
    variableId: string
    ruleId: string
  }

  export type ConditionUpdateWithoutValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variable?: VariableUpdateOneRequiredWithoutConditionNestedInput
    rule?: RuleUpdateOneRequiredWithoutConditionNestedInput
  }

  export type ConditionUncheckedUpdateWithoutValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateManyWithoutValueInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionCreateManyRuleInput = {
    id?: string
    connective: string
    variableId: string
    valueId: string
  }

  export type ConditionUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variable?: VariableUpdateOneRequiredWithoutConditionNestedInput
    value?: ValueUpdateOneRequiredWithoutConditionNestedInput
  }

  export type ConditionUncheckedUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    valueId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateManyWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    variableId?: StringFieldUpdateOperationsInput | string
    valueId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionCreateManyVariableInput = {
    id?: string
    connective: string
    valueId: string
    ruleId: string
  }

  export type ValueCreateManyVariableInput = {
    id?: string
    value: string
  }

  export type ConditionUpdateWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    value?: ValueUpdateOneRequiredWithoutConditionNestedInput
    rule?: RuleUpdateOneRequiredWithoutConditionNestedInput
  }

  export type ConditionUncheckedUpdateWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    valueId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
  }

  export type ConditionUncheckedUpdateManyWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    connective?: StringFieldUpdateOperationsInput | string
    valueId?: StringFieldUpdateOperationsInput | string
    ruleId?: StringFieldUpdateOperationsInput | string
  }

  export type ValueUpdateWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUpdateManyWithoutValueNestedInput
  }

  export type ValueUncheckedUpdateWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    Condition?: ConditionUncheckedUpdateManyWithoutValueNestedInput
  }

  export type ValueUncheckedUpdateManyWithoutVariableInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
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