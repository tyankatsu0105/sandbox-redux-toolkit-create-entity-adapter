- `@hookform/devtools`は本来devDependenciesに入れるものだが、検証サイトということで、dependenciesに入れている。
  - https://github.com/react-hook-form/devtools/issues/18
  - NODE_ENVがproductionのときにビルドに含まれないようになっているっぽいので、documentと合わせてバージョンを固定している
  - https://github.com/react-hook-form/documentation/blob/e590e393931d4626fa568197980af87dd2dc3e76/src/components/DevTools.tsx
