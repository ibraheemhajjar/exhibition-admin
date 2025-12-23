import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://exhibition-city-backend-production.up.railway.app/graphql',
  documents: ['lib/graphql/**/*.ts'],
  ignoreNoDocuments: true,
  generates: {
    './types/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typed-document-node'],
      config: {
        skipTypename: false,
        withHooks: false,
        withComponent: false,
        withHOC: false,
      },
    },
  },
};

export default config;
