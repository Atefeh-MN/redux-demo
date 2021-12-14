import { BUY_CAKES } from "./CakeType";

export function buyCake (numbers=1) {
    return {
        type: BUY_CAKES,
        payload:numbers,
    }
};

