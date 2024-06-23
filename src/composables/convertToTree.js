export const convertArrayToTree = (data) => {
  const treeMap = data.reduce((acc, item) => {
    acc[item.id] = { ...item, children: [] }
    return acc
  }, {})

  return data.reduce((acc, item) => {
    if (item.parent_id === 0) {
      acc.push(treeMap[item.id])
    } else if (treeMap[item.parent_id]) {
      treeMap[item.parent_id].children.push(treeMap[item.id])
    }
    return acc
  }, [])
}
