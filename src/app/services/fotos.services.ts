import { Injectable } from '@angular/core';
import { Camera, CameraPhoto, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Storage } from '@capacitor/storage';
import { Foto } from '../models/fotos.interface';

@Injectable({
  providedIn: 'root'
})
export class FotosService {
  public fotos: Foto[] = [];
  private PHOTO_STORAGE: string = "fotos";

  constructor() { }

  public async addNewGallery() {
    // Proceso para tomar una foto
    const fotoCapturada = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });

    if (fotoCapturada.webPath) {
      const savedImageFile = await this.savePicture(fotoCapturada);
      this.fotos.unshift(savedImageFile);

      await Storage.set({
        key: this.PHOTO_STORAGE,
        value: JSON.stringify(this.fotos)
      });
    }
  }

  public async savePicture(cameraPhoto: CameraPhoto) {
    const base64Data = await this.readAsBase64(cameraPhoto);
    // Escribir la foto en el directorio
    const fileName = new Date().getTime() + '.jpeg';
    const savedFile = await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data
    });

    return {
      filePath: fileName,
      webviewPath: cameraPhoto.webPath
    } as Foto; // Agregar el tipo 'Foto' para evitar el error
  }

  public async readAsBase64(cameraPhoto: CameraPhoto) {
    const response = await fetch(cameraPhoto.webPath!);
    const blob = await response.blob();

    return await this.convertBlobToBase64(blob) as string;
  }

  convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result as string);
    };
    reader.readAsDataURL(blob);
  });

  public async loadSaved() {
    const listaFotos = await Storage.get({ key: this.PHOTO_STORAGE });
    this.fotos = JSON.parse(listaFotos.value || "[]");
    
    for (const foto of this.fotos) {
      const readFile = await Filesystem.readFile({
        path: foto.filePath,
        directory: Directory.Data
      });
      foto.webviewPath = `data:image/jpeg;base64,${readFile.data}`;
    }
  }

}
