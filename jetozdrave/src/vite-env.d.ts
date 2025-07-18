/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BUILD_DATE: string
  readonly VITE_APP_VERSION: string
  readonly VITE_BRANCH: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
