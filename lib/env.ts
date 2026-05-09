export function getRequiredEnv(name:string){const v=process.env[name]; if(!v) throw new Error(`Missing required environment variable: ${name}`); return v;}
