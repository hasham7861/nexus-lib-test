/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */







declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
}

export interface NexusGenObjects {
  Author: { // root type
    id: number; // Int!
    name: string; // String!
  }
  BlogPost: { // root type
    content?: string | null; // String
    id: number; // Int!
    published?: string | null; // String
    title?: string | null; // String
  }
  Mutation: {};
  Query: {};
  Subscription: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Author: { // field return type
    id: number; // Int!
    name: string; // String!
  }
  BlogPost: { // field return type
    author: NexusGenRootTypes['Author'] | null; // Author
    content: string | null; // String
    id: number; // Int!
    published: string | null; // String
    title: string | null; // String
  }
  Mutation: { // field return type
    addPost: NexusGenRootTypes['BlogPost'] | null; // BlogPost
    deletePost: boolean | null; // Boolean
  }
  Query: { // field return type
    blogPosts: Array<NexusGenRootTypes['BlogPost'] | null> | null; // [BlogPost]
    blogPostsCount: number | null; // Int
  }
  Subscription: { // field return type
    postAdded: NexusGenRootTypes['BlogPost'] | null; // BlogPost
  }
}

export interface NexusGenFieldTypeNames {
  Author: { // field return type name
    id: 'Int'
    name: 'String'
  }
  BlogPost: { // field return type name
    author: 'Author'
    content: 'String'
    id: 'Int'
    published: 'String'
    title: 'String'
  }
  Mutation: { // field return type name
    addPost: 'BlogPost'
    deletePost: 'Boolean'
  }
  Query: { // field return type name
    blogPosts: 'BlogPost'
    blogPostsCount: 'Int'
  }
  Subscription: { // field return type name
    postAdded: 'BlogPost'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addPost: { // args
      content: string; // String!
      id: number; // Int!
      published: string; // String!
      title: string; // String!
    }
    deletePost: { // args
      id: number; // Int!
    }
  }
  Query: {
    blogPosts: { // args
      name?: string | null; // String
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}