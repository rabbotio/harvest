import {
  GraphQLScalarType,
  Kind,
  IntValueNode,
} from 'graphql'

import { mergeTypes } from 'merge-graphql-schemas';
import arbitrage from './arbitrage.def';
import exchange from './exchange.def';
import core from './core.def';

const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      const intValue: IntValueNode = <IntValueNode>ast;
      return parseInt(intValue.value, 10);
    }
    return null;
  },
})

const types = [
  arbitrage,
  exchange,
  core,
]

module.exports = mergeTypes(types)