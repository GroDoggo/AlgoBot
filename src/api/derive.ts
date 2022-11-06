import call from "./call";

export default async (expression: String) : Promise<String> => {
    return await call("derive", expression);
}