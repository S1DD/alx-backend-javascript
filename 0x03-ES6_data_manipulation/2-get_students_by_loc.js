export default function getStudentByLocation(data, city) {

    const studentsInCity = data.filter((s) => s.location === city);
    return studentsInCity;
}