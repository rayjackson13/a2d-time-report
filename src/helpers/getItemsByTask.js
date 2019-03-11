const getItemsByTask = (array, task) => {
    return array.filter(item => item[ 'Task' ] === task)
}

export default getItemsByTask