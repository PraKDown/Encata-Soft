import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @ViewChild(MatSort, {static: true}) sort: MatSort;

  dataSource;
  displayedColumns: string[] = ['id', 'name', 'surname', 'age', 'city'];
  usersData = [
    { id: '0', name: 'Vasilij', surname: 'Pushnov', age: '21', city: 'Grodno' },
    { id: '1', name: 'Petr', surname: 'Marich', age: '19', city: 'Braslov' },
    { id: '2', name: 'Dmitrij', surname: 'Kavkov', age: '20', city: 'Brest' },
    { id: '3', name: 'Ivan', surname: 'Rudenov', age: '21', city: 'Mogilev' },
    { id: '4', name: 'Vyacheslav', surname: 'Tkachev', age: '21', city: 'Gomel' },
    { id: '5', name: 'Artem', surname: 'Rak', age: '22', city: 'Gomel' },
    { id: '6', name: 'Viktor', surname: 'Mechev', age: '27', city: 'Polotsk' },
    { id: '7', name: 'Maria', surname: 'Simakova', age: '23', city: 'Dobrush' },
    { id: '8', name: 'Vicktoria', surname: 'Levtsova', age: '22', city: 'Bragin' },
    { id: '9', name: 'Vladislav', surname: 'Kvarkov', age: '17', city: 'Vitebsk' },
  ];
  filters = {
    id: '',
    name: '',
    surname: '',
    age: '',
    city: ''
  };

  constructor() {
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.usersData);
    this.dataSource.sort = this.sort;
  }

  applyFilter(param, value) {
    this.filters[param] = value.trim().toLowerCase();
    this.dataSource.filterPredicate = (data) => {
      const validId = data.id.toLowerCase().indexOf(this.filters.id) !== -1;
      const validName = data.name.toLowerCase().indexOf(this.filters.name) !== -1;
      const validSurname = data.surname.toLowerCase().indexOf(this.filters.surname) !== -1;
      const validAge = data.age.toLowerCase().indexOf(this.filters.age) !== -1;
      const validCity = data.city.toLowerCase().indexOf(this.filters.city) !== -1;
      return validId && validName && validSurname && validAge && validCity;
    };
    this.dataSource.filter = 'filter';
  }

}
