import res from "../backstage/data.js";

// 解释数据结构
interface OriginData {
  image_list: Array<Object>;
  image_url: String;
  title: String;
  has_image: Boolean;
  item_id: String;
}

/**
 *
 *  规定入参数据类型
 *  规定函数返回值类型
 */
const getImage = (data: OriginData): Array<String> => {
  return data.has_image
    ? data.image_list.length > 0
      ? data.image_list.map((info: any) => info.url)
      : [data.image_url]
    : [];
};
const getItemType = data => {
  return data.has_image
    ? data.image_list.length > 0
      ? "threePic"
      : "onePic"
    : "noPic";
};

/**
 *
 * 规定入参数据类型
 */
const formListData = data => {
  return data.map((item: OriginData) => {
    return {
      imgList: getImage(item),
      title: item.title,
      listType: getItemType(item),
      //   由于没有规定id的类型 类型“OriginData”上不存在属性“id”。
      //   id: item.id
      id: item.item_id
    };
  });
};
const getList = () => {
  return Promise.resolve(res.data).then(data => formListData(data));
};

export { getList };
