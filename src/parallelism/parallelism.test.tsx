// parallelism

//Vitest runs test files in parrallel across multiple workers
// Por default los test se corren de manera secuencial adentro de un archivo
// Podemos habilittar que los test se corran de forma parallela

import { describe, expect, test } from "vitest";

type User = {
    id: number;
    name: string;
};

type Post = {
    id: number;
    userId: number;
    title: string;
};

const fetchUser = async (id: number): Promise<User> => {
    return new Promise<User>((resolve) => {
        setTimeout(() => {
            resolve({ id, name: 'John Doe' });
        }, 1000);
    });
}

const fetchPosts = async (userId: number): Promise<Post[]> => {
    return new Promise<Post[]>((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, userId, title: 'Post 1' },
                { id: 2, userId, title: 'Post 2' },
                { id: 3, userId, title: 'Post 3' },
            ]);
        }, 1000);
    });
}

describe('test parallelism', () => {
    test('fetch user profile', async () => {
        const user = await fetchUser(1);
        expect(user.name).toBe('John Doe');
    });

    test('fetch user posts', async () => {
        const posts = await fetchPosts(1);
        expect(posts).toHaveLength(3);
    });
});