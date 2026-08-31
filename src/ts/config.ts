import { Socket } from "socket.io-client";

export default {
  socket: <Socket>{},
  PORT: import.meta.env.VITE_PORT || 2002,
  SERVER: import.meta.env.VITE_SERVER,
  API_CEP: '',
  // Configurações JWT
  API_TOKEN: import.meta.env.VITE_API_TOKEN || "G#o1tj67G6^0Ok53KGfIPoSB",
  API_BASE_URL: import.meta.env.VITE_API_TEXT_URL || 'http://localhost:8000',
  // Texto e audio saem pelo MESMO host: o tunel roteia /audio-inference/ para o
  // servico de integracoes por dentro do cluster. Mesma origem significa sem
  // preflight CORS, e o servico de voz nao precisa de hostname proprio exposto.
  //
  // Nao ha fallback para VITE_API_AUDIO_URL de proposito: o host separado
  // (int-v2) so' existia no DNS, sem rota no tunel, e um .env esquecido numa
  // maquina de build reintroduziria o endereco quebrado no bundle publicado.
  API_AUDIO_URL: import.meta.env.VITE_API_TEXT_URL || 'http://localhost:8010',
};
