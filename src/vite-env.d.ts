/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />


interface ImportMetaEnv {
    readonly VITE_SUPABASE_API_URL: string
    readonly VITE_SUPABASE_ANON_KEY: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}