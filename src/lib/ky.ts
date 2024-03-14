import _ky from 'ky';

export const ky = _ky.create({ prefixUrl: import.meta.env.VITE_API_URL });
