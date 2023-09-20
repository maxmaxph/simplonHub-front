import { Store } from "../models/store";

export interface InterfaceStore {
    status: string,
    data: Store[],
}