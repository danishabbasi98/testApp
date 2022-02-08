// import { setupServer } from "msw/lib/types/node";
import { setupServer } from 'msw/node'
import { handlers } from "./handlers";

export const server = setupServer(...handlers);