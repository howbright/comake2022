import {OutputData} from "@editorjs/editorjs";

export type RequestUserData = {
    fullName: string,
    email: string,
    id: number,
    createdAt: string,
    updatedAt: string,
    commentsCount?: number;
    token: {
        access_token: string
    }
};

export type PostType = {
    id: number;
    title: string;
    body: OutputData['blocks'];
    description: string;
    user: RequestUserData;
    tags: null | string;
    views: number;
    createdAt: string;
    updatedAt: string;
}