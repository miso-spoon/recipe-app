const NODE_ENV = process.env.NODE_ENV;

let isLocal = NODE_ENV === "development";
let env = {};
env.base_url = isLocal ? "http://localhost:4000" : "http://localhost:4000";

export default env;
