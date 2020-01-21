import res from '../backstage/data'

const getImage = (data) => {
    return data.has_image ?
        data.image_list.length > 0 ?
            data.image_list.map(info => info.url)
            : [data.image_url]
        : []

}
const getItemType = (data) => {
    return data.has_image ?
        data.image_list.length > 0 ?
            'threePic'
            : 'onePic'
        : 'noPic'

}
const formListData = (data) => {
    return data.map((item) => {
        return {
            imgList: getImage(item),
            title: item.title,
            listType: getItemType(item)
        }
    })
}
const getList = () => {
    return Promise.resolve(res.data).then(data => formListData(data))
}


export { getList }