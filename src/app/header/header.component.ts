import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// @Output() featureSelected = new EventEmitter<string>();


//   onSelect(feature: string) {
//     this.featureSelected.emit(feature);
//   }

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void {
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchRecipes() {
    this.dataStorageService.fetchRecipes().subscribe();
}

}
