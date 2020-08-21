import http from "../components/common/HttpCommon";

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbnkiLCJpYXQiOjE1OTc5NzI3MDQsImV4cCI6MTU5Nzk3NjMwNH0.srB1OuEyM9jGEoDw0KiCFpcVJjkz3u9MGwXZOgbh2Fw";
export const getListBooks = async () => {
    return await http.get("/api/v1/book/getall", { headers: { 'Authorization': "Bearer " + accessToken}});
};

export const saveBook = async (book) => {
    return await http.post('/api/v1/book', book, { headers: { 'Authorization': "Bearer " + accessToken}});
}
