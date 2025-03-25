export const buildUrl = (
  baseUrl: string,
  query: Record<string, string | undefined>
) => {
  const params = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });

  const search = params.toString();
  return `${baseUrl}${search ? `?${search}` : ''}`;
};
