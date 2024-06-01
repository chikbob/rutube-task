import {BaseModel} from "../../models/base.model.js";
import {useStore} from "pinia-class-store";

class CompleteModel extends BaseModel {
    constructor() {
        super();
        this.complete = undefined;
    }

    init(complete) {
        this.complete = complete;
    }
}

export const completeModel = useStore.bind(undefined, CompleteModel);
