import { Pipe, PipeTransform } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TREE_DATA } from '../right-sidebar.component';
import { BehaviorSubject } from 'rxjs';
interface MenuNode {
    id: number;
    name: string;
    parentId?: number;
    children: MenuNode[];
}
@Pipe({
    name: 'search',
    pure: false
})
export class Search implements PipeTransform {
    constructor() { }
    transform(tree: MatTreeNestedDataSource<MenuNode>, textToFind: string): any {
        let items = tree.data;
        console.log("items", items)
        if (!textToFind || textToFind == '') {
            return tree;
        }
        else {
            return this.searchHelper(items, textToFind) ?? [];
        }

    }
    private searchHelper = (data: MenuNode[], textToFind: string): MenuNode[] | null => {
        const _returnData: MenuNode[] = [];
        if (data.length === 0) {
            return null
        }
       
        for (let i = 0; i < data.length; i++) {
            if (data[i].name.toLowerCase().includes(textToFind)) {
                _returnData.push(...[data[i]]);
            } else {
                if (data[i].children) {
                    const _filteredData = this.searchHelper(data[i].children!, textToFind);
                    if (_filteredData) {
                        const _node: MenuNode = { id: data[i].id, name: data[i].name, children: [] };
                        _node.children = _filteredData;
                        _returnData.push(_node);
                    }
                }
            }
        }
        if (_returnData.length === 0) return null;

        return _returnData;
    };
}