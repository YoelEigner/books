import { BookReview } from "../Components/Books/BookReview";
import { Books } from "../Components/Books/Books";
import { BookDetails } from "../Components/Main/BookDetails";
import { Main } from "../Components/Main/Main";
import { Recommended } from "../Components/Recommended/Recommended";

export const routes = [
    {
        path: '*',
        component: <Main />,
    },
    {
        path: '/Main',
        component: <Main />,
    },
    {
        path: '/allbooks',
        component: <Books />
    },
    {
        path: '/book/:id',
        component: <BookReview />
    },
    {
        path: '/recommended',
        component: <Recommended />
    }
];
