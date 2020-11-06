import {setTimestamp } from './hooks/setTimestamp'

// Application hooks that run for every service
// Don't remove this comment. It's needed to format import lines nicely.



export default {
  before: {
    all: [],
    find: [],
    get: [],
    create: [setTimestamp('createdAt')],
    update: [setTimestamp('updatedAt')],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
