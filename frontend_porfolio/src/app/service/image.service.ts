import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage'

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";
  g_file: string;
  constructor(private storage: Storage) { }
                                  
  public uploadImage($event: any,name: string, n_file: string){
    const file = $event.target.files[0];
    /*console.log(file);*/
    
    if(n_file.substring(0,9) === "educacion"){
      this.g_file = "educacion_imagenes";
      /*console.log(this.g_file);*/
    }
    if(n_file.substring(0,11) === "experiencia"){
      this.g_file = "experiencia_imagenes";
      /*console.log(this.g_file);*/
    }
    if(n_file.substring(0,6) === "imagen"){
      this.g_file = "imagen";
      /*console.log(this.g_file);*/
    }
    if(n_file.substring(0,7) === "portada"){
      this.g_file = "portada_imagen";
      /*console.log(this.g_file);*/
    }


    const imgRef = ref(this.storage, n_file+name)
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(this.g_file)})
    .catch(error => {console.log(error)})
  }

  getImages(n_file: string){
    
    const imagesRef = ref(this.storage, n_file)
    /*console.log(imagesRef);*/
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        /*console.log("la url es "+this.url);*/
      }
    })
    .catch(error => {console.log(error)})
  }
}
