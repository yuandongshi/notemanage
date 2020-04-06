import DataHelper from './DataHelper';
import ItemData from '../model/ItemData';
import Category from '../model/CateEnum';

class ActionHelper {
    // 1. 负责数据处理
    dataHelper: DataHelper = new DataHelper('memoData', 'id');
    // 1.1 笔记数组
    memoList!: Array<ItemData>;
    // 2. 负责业务处理

    constructor() {
        this.memoList = this.readData();
    }


    readData(): Array<ItemData> {
        // 读取本地object数据
        let arrobj = this.dataHelper.readData();

        // 将objet数组转换成itemData数组
        // map遍历数组对象 将返回的ele对象转换为itemdata对象
        let arryItem = arrobj.map((ele: any) => {
            let item: ItemData = new ItemData();
            item.id = ele.id;
            item.cateId = ele.cateId;
            item.content = ele.content;
            item.title = ele.title;
            item.createTime = ele.createTime;
            return item;
        }
        );

        // 返回
        return arryItem;
    }

    // 新增笔记
    add(item: ItemData): number {

        // 将必将保存到本地datahelper 返回生成的id
        var newid = this.dataHelper.addData(item);
        // 将笔记添加到笔记数组
        this.memoList.push(item);
        // 将笔记数组重新保存到本地
        this.dataHelper.saveData(this.memoList);
        // 返回新的笔记ID
        return newid;
    }

    // 修改笔记
    edit(item: ItemData): void {
        // 查找要修改的对象
        var itemdata: ItemData | undefined = this.memoList.find((ele) => {
            return ele.id == item.id;
        });
        // 进行修改
        if (itemdata) {
            itemdata.cateId = item.cateId;
            itemdata.content = item.content;
            itemdata.title = item.title;

            // 保存到本地
            this.dataHelper.saveData(this.memoList);
        }
    }

    // 删除笔记
    remove(id: number): void {
        // 找出下标
        let index: number = this.memoList.findIndex((ele) => {
            return ele.id === id;
        })
        // splice方法
        if (index > -1) {
            this.memoList.splice(index, 1);
            // 删除后的数组保存到本地
            this.dataHelper.saveData(this.memoList);
        }
    }

    getCategoryName(cateId: Category): string {
        const arrName = ['工作', '生活', '学习']
        return arrName[cateId]
      }
}

export default ActionHelper;