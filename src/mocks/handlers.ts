import {http, HttpResponse, graphql} from 'msw';

export const handlers = [
    http.get('https://api.example.com/user', () =>{
        // console.log("request: ", req);
        return HttpResponse.json({
            id: 'abc123',
            firstName: 'Juan de Dios',
            lastName: 'de la Torre Gonzalez',
        })
    }),

    http.get('https://api.example.com/hello', (req) =>{
         console.log("hello request: ", req);
    }),

    graphql.query('ListMovies', () => {
        return HttpResponse.json({
            data: {
                movies: [{
                    title: 'Harry Potter'
                },
                {
                    title: 'Star Wars: The Empire Strikes'
                }
                ]
            }
        });
    }),

    http.get('/resource', async ({request}) => {
        const data = await request.clone().json();

        if (data?.id === 'abc-123'){
            return HttpResponse.json({id: 'abc-123'})
        }
    }),
    http.get('/api/user', ({cookies}) => {
        if (!cookies.authToken){
            return new HttpResponse(null, {status: 403})
        }

        return HttpResponse.json({name: 'John'})
    }),
    http.get<{id?: string}>('/books/:id', ({params}) =>{
        if (params.id === 'abc-123'){
            return HttpResponse.json({error: 'Unauthorized access'}, {status: 404})
        }

        return HttpResponse.json({id: params.id, title: "The Lord of the Rings"})
    }) 
];

