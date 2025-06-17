import {
  LoginCheckApi,
  LoginCheckPostRequest,
  BookApi,
  Configuration,
  ApiBooksGetCollection200Response,
} from '../../../../../services';

const API_URL = 'http://localhost:8080';

let token: string | null = null;

const getConfig = () =>
  new Configuration({
    basePath: API_URL,
    accessToken: () => (token ? `Bearer ${token}` : ''),
  });

export const login = async (
  username: string,
  password: string
): Promise<void> => {
  const loginApi = new LoginCheckApi(new Configuration({ basePath: API_URL }));

  const loginPayload: LoginCheckPostRequest = {
    username,
    password,
  };

  const response = await loginApi.checkPost(loginPayload);
  console.log('Réponse complète login:', response);

  token = response.data?.token;

  if (!token) {
    throw new Error('Token JWT manquant');
  }
  console.log('Connexion réussie, token:', token);
};

export const fetchBooks =
  async (): Promise<ApiBooksGetCollection200Response> => {
    if (!token) {
      throw new Error('Vous devez être connecté pour accéder aux livres.');
    }

    const bookApi = new BookApi(getConfig());
    const response = await bookApi.booksGetCollection(1);
    return response.data;
  };
