// graphql/types/blog-post.js
import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'Item',
  fields: {
    _id: {type: GraphQLID},
    name: {type: GraphQLString},
    conferenceId: {type: GraphQLString}
  }
});
