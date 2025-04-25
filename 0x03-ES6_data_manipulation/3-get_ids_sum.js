export default function getStudentIdsSum(data) {
    const sumIds = data.reduce(
        (acc, curr) => curr.id + acc, 0);
    return sumIds;
}