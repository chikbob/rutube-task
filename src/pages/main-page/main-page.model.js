import {BaseModel} from "../../models/base.model.js";
import {useStore} from "pinia-class-store";

class GradeModel extends BaseModel {
    constructor() {
        super();
        this.grade = undefined;
    }

    init(grade) {
        this.grade = grade;
    }
}

export const gradeModel = useStore.bind(undefined, GradeModel);
