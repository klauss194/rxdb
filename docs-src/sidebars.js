/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  tutorialSidebar: [
    'quickstart',
    'install',
    'dev-mode',
    'rx-database',
    'rx-schema',
    'rx-collection',
    'rx-document',
    'rx-query',
    'rx-attachment',
    {
      type: 'category',
      label: '💾 RxStorage',
      items: [
        'rx-storage',
        'rx-storage-performance',
        'rx-storage-indexeddb',
        'rx-storage-sqlite',
        'rx-storage-memory',
        'rx-storage-dexie',
        'rx-storage-opfs',
        'rx-storage-filesystem-node',
        'rx-storage-mongodb',
        'rx-storage-denokv',
        'rx-storage-foundationdb',
        'rx-storage-lokijs',
        'rx-storage-remote',
        'rx-storage-worker',
        'rx-storage-shared-worker',
        'rx-storage-memory-synced',
        'rx-storage-sharding',
        'rx-storage-localstorage-meta-optimizer',
        'electron'
      ],
    },
    {
      type: 'category',
      label: '🔄 Replication',
      items: [
        'replication',
        'replication-http',
        'replication-server',
        'replication-graphql',
        'replication-websocket',
        'replication-couchdb',
        'replication-webrtc',
        'replication-firestore',
        'replication-nats'
      ],
    },
    {
      type: 'category',
      label: 'Server',
      items: [
        'rx-server',
        'rx-server-scaling',
      ],
    },
    {
      type: 'category',
      label: 'Migration',
      items: [
        'migration-schema',
        'migration-storage'
      ],
    },
    'reactivity',
    'rx-state',
    'rx-local-document',
    'encryption',
    'key-compression',
    'leader-election',
    'cleanup',
    'backup',
    'transactions-conflicts-revisions',
    'middleware',
    'query-cache',
    'crdt',
    'population',
    'orm',
    'query-optimizer',
    'logger',
    'plugins',
    'nosql-performance-tips',
    'third-party-plugins',
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        'tutorials/typescript',
        'nodejs-database'
      ],
    },
    'questions-answers',
    'contribute',
    {
      type: 'category',
      label: '🆕 Releases',
      items: [
        'releases/15.0.0',
        'releases/14.0.0',
        'releases/13.0.0',
        'releases/12.0.0',
        'releases/11.0.0',
        'releases/10.0.0',
        'releases/9.0.0',
        'releases/8.0.0',
      ],
    },
    {
      type: 'category',
      label: 'Articles',
      items: [
        'offline-first',
        'downsides-of-offline-first',
        'slow-indexeddb',
        'why-nosql',
        'react-native-database',
        'alternatives',
        'articles/angular-database',
        'articles/browser-database',
        'articles/browser-storage',
        'articles/data-base',
        'articles/embedded-database',
        'articles/flutter-database',
        'articles/frontend-database',
        'articles/in-memory-nosql-database',
        'articles/ionic-database',
        'articles/json-database',
        'articles/localstorage',
        'articles/mobile-database',
        'articles/progressive-web-app-database',
        'articles/react-database',
        'articles/realtime-database',
        'capacitor-database',
        'electron-database'
      ],
    }
  ],
};

export default sidebars;
