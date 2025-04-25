export default function getStudentByLocation(data, city) {
    return data.filter((s) => s.location === city);
}