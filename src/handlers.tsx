import{ rest } from 'msw';

export const handlers = [
    rest.get(`http://localhost:8080/students`,(req, res, ctx) =>{
     return res(
         ctx.status(200),
         ctx.json([
            {
                "id": 5,
                "name": "Urdu",
                "teacher": null,
                "students": []
            },
            {
                "id": 6,
                "name": "Science",
                "teacher": null,
                "students": []
            }
        ])
     )
    })
]