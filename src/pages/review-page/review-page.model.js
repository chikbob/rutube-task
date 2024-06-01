import {BaseModel} from "../../models/base.model.js";
import {useStore} from "pinia-class-store";
import {defineStore} from 'pinia';


class ReviewModel extends BaseModel {
    constructor() {
        super();
        this.review = undefined;
    }

    init(review) {
        this.review = review;
    }
}

export const useReviewStore = defineStore({
    id: 'review',
    state: () => ({
        question1: window.localStorage.getItem('question1') || null,
        question2: window.localStorage.getItem('question2') || null,
        question3: window.localStorage.getItem('question3') || null,
        question4: window.localStorage.getItem('question4') || null,
        question5: window.localStorage.getItem('question5') || null,
        question6: window.localStorage.getItem('question6') || null,
    }),
    actions: {
        setQuestion1(value) {
            this.question1 = value;
            window.localStorage.setItem('question1', value);
        },
        setQuestion2(value) {
            this.question2 = value;
            window.localStorage.setItem('question2', value);
        },
        setQuestion3(value) {
            this.question3 = value;
            window.localStorage.setItem('question3', value);
        },
        setQuestion4(value) {
            this.question4 = value;
            window.localStorage.setItem('question4', value);
        },
        setQuestion5(value) {
            this.question5 = value;
            window.localStorage.setItem('question5', value);
        },
        setQuestion6(value) {
            this.question6 = value;
            window.localStorage.setItem('question6', value);
        },
    },
});

export const reviewModel = useStore.bind(undefined, ReviewModel);
