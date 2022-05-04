export const isInFavorite = (state,id) => {
    const result = state.selectedItem.find(item=> item.id=== id);
    return result;
 }