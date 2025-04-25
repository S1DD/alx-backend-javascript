export default function updateUniqueItems(itemMap) {
    if (!(itemMap instanceof Map)) {
        throw new Error('Cannot process');
    }
    itemMap.forEach((k, v) => {
        if (v === 1) {
            itemMap.set(k, 100)
        }

    });
}
