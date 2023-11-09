export const inCart = (items, id) =>{
    return items.find(item=>item.id == id)
  }