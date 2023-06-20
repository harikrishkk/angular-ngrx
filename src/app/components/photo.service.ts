import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PhotoService extends EntityCollectionServiceBase<Photo> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Photo', serviceElementsFactory);
  }
}
