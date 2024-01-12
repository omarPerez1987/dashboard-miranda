
export const getBaseUrl = (): string => {
  if (import.meta.env.MODE === 'development') {
    return import.meta.env.VITE_LOCAL_API_URL;
  } else {
    return import.meta.env.VITE_PRODUCTION_API_URL;
  }
};

