import http from "../components/common/HttpCommon";

const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImRhbnkiLCJpYXQiOjE1OTc5MzY0MDAsImV4cCI6MTU5Nzk0MDAwMH0.mB86ifEG8K5JANdPoKZQEnMxmmWGFnsVXE_LkKrkMiM";
export const getListAuthors = async () => {
    return await http.get("/api/v1/author", { headers: { 'Authorization': "Bearer " + accessToken}});
};