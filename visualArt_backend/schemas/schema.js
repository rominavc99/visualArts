// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user';
import pin from './pin';
import comment from './comment';
import postedBy from './postedBy';
import save from './save';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user, pin, comment, postedBy, save
  ]),
})
