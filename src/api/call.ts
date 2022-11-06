import axios, { AxiosResponse, AxiosStatic } from "axios";

// export default async (method: string, expression: String): Promise<String> => {
//     return new Promise<String>((resolve, reject) => {
//         axios.get('https://newton.vercel.app/api/v2/' + method + '/' + expression)
//             .then(response => {
//                 resolve(response.data.result);
//             })
//             .catch(error => {
//                 reject(error);
//             });
//     })
// }

export default async (method: string, expression: String) : Promise<String> => {
    const req : AxiosResponse = await axios.get('https://newton.vercel.app/api/v2/' + method + '/' + expression);
    return req.data.result;
}