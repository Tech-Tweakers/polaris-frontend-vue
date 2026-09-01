import { Socket } from "socket.io-client";

export default {
  socket: <Socket>{},
  PORT: import.meta.env.VITE_PORT || 2002,
  SERVER: import.meta.env.VITE_SERVER,
  API_CEP: '',
  // Configurações JWT
  // Sem fallback: o valor que estava aqui era um secret desatualizado e, por
  // ser default silencioso, um build sem VITE_API_TOKEN publicava um bundle
  // que so' falhava em runtime, com 401 em /auth/token.
  // Vazio faz o apiService lancar erro explicito na primeira chamada.
  API_TOKEN: import.meta.env.VITE_API_TOKEN || "",
  API_BASE_URL: import.meta.env.VITE_API_TEXT_URL || 'http://localhost:8000',
  // O audio tem host proprio: cada connector do Cloudflare atende um hostname,
  // entao /audio-inference/ nao pode ser um path de api-v2 -- e' um tunel a
  // parte, apontando para o servico de integracoes.
  // Sendo origem distinta do front, depende do CORS declarado no servidor
  // (ALLOWED_ORIGINS do polaris_integrations).
  API_AUDIO_URL: import.meta.env.VITE_API_AUDIO_URL || 'http://localhost:8010',
};
