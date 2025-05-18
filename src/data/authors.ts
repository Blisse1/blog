import blissImage from "../assets/authors/asd.jpeg";

export interface Props {
    name: string;
    slug: string;
    image: string;
    bio: string;
}

export type Author = Props;

export const authors: Props[] = [
    {
        name: "Andres Morales",
        slug: "andres-morales",
        image: blissImage,
        bio: "Who am I?",
    },
];
