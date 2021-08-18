import Gun from "gun";

export const gun = Gun({ peers: ["http://localhost:5000/gun"] });
