export default function getListStudentIds(arr_obj) {

    if (!Array.isArray(arr_obj)) {
        return [];
    }

    const ids = arr_obj.map((user) => user.id)
    return ids;
}