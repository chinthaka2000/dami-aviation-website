/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLOUDINARY_CLOUD_NAME: string
  // add more env variables here as needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}