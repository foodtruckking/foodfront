# description

푸드트럭킹 front-end repository

## prerequisite

```sh
npm run install
```

## dev script

1. semantic-ui css & js 변경 감지

```sh
npm run semantic
```

2. vuejs 변경 감지

```sh
npm run vue
```

3. npm run semantic && npm run vue

```sh
npm start
```

## build script

1. semantic-ui 소스 빌드

- dest: ./semantic/dist

```sh
npm run build-semantic
```

2. vuejs 소스 빌드

- dest: ./dist

```sh
npm run build-vue
```

3. npm run build-semantic && npm run build-vue

```sh
npm run build
```
