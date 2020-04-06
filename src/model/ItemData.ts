import Category from './CateEnum'
class ItemData {

    // 注意感叹号在这里的作用
    id!: number;
    cateId!: Category;
    title!: string;
    content!: string;
    createTime!: string;

    constructor(id: number = -1, cateid: Category=-1, title: string = '', content: string = '') {
        this.id = id;
        this.cateId = cateid;
        this.title = title;
        this.content = content;
        this.createTime = this.toSelfDateStr(Date.now());
    }

    toSelfDateStr(timespan: number): string {
        // 将时间戳转换为date对象
        var date:Date=new Date(timespan);
        // 一次获取时间对象的年月日时分等等
        var result=date.getUTCFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes();
        // 拼接成想要的格式之后返回
        return result;
    }


}

export default ItemData;