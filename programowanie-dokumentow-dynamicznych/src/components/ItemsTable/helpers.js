export function sortBy(itemsTable, productNameAsc, attribute) {
    return itemsTable.sort(function(a, b){
        if (productNameAsc) {
            if(a[attribute] < b[attribute]) { return -1; }
            if(a.attribute > b.attribute) { return 1; }
        } else {
            if(a[attribute] < b[attribute]) { return 1; }
            if(a[attribute] > b[attribute]) { return -1; }
        }
        
        return 0;
    })
};