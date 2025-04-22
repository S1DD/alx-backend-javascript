export default function updateUniqueItems(itemMap) {
    if (!(itemMap instanceof Map)) {
        throw new Error('Cannot process');
    }
    for (const [k, v] of itemMap.entries()) {
    if (v === 1) {
        itemMap.set(k, 100);
    }
}
}