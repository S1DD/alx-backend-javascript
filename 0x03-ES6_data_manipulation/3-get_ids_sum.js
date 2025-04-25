export default function getStudentIdsSum(data) {
    return data.reduce((acc, curr) => curr.id + acc, 0);
}