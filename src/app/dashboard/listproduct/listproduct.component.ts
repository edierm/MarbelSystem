import { Component } from '@angular/core';
declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}
@Component({
    selector: 'listpro-cmp',
    
    templateUrl: 'listproduct.component.html',
    styleUrls : ['./listproduct.component.scss']
})

export class ListProductComponent{
    public tableData1: TableData;
   
    ngOnInit(){
        this.tableData1 = {
            headerRow: [ 'ID', 'Name', 'Country', 'City', 'Status','Salary'],
            dataRows: [
                ['1', 'Dakota Rice', 'Meson', 'Oud-Turnhout','Activo','$36,738'],
                ['2', 'Minerva Hooper', 'Curaçao', 'Sinaai-Waas', 'Activo','$23,789'],
                ['3', 'Sage Rodriguez', 'Netherlands', 'Baileux', 'Activo','$56,142'],
                ['4', 'Philip Chaney', 'Korea, South', 'Overland Park', 'Activo','$38,735'],
                ['5', 'Doris Greene', 'Malawi', 'Feldkirchen in Kärnten', 'Activo','$63,542'],
                ['6', 'Mason Porter', 'Chile', 'Gloucester', 'Activo','$78,615']
            ]
        };
      
    }
}