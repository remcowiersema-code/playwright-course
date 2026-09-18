import { APIRequestContext, request } from "playwright/test";

export type User = {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
};

class APIController {
    private fakerApi!: APIRequestContext;

    async init() {
        this.fakerApi = await request.newContext({
            baseURL: 'https://jsonplaceholder.typicode.com/'
        });
    };

    async getUser(id: number): Promise<User> {
        const response = await this.fakerApi.get(`/users/${id}`);
        return await response.json();
    };

    async createUserTodo(requestBody: { title: string; completed: boolean }) {
        const response = await this.fakerApi.post('/users/1/todos', {
            data: requestBody
        });

        return await response.json();
    };
};

export default new APIController();