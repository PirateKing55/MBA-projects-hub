export const paginate = (array, page) => {
    if (array.length <= 6) {
        return { paginatedArray: array, isLastPage: true, isFirstPage: true };
    }
    const paginatedArray = array.slice((6 * page) - 6, 6 * page);
    const isLastPage = array.length <= 6 * page;
    const isFirstPage = page < 2;
    return { paginatedArray, isLastPage, isFirstPage };
}

