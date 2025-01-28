import { Injectable } from "@angular/core";
import {
    HttpErrorResponse,
    HttpClient,
    HttpParams,
    HttpHeaders
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import {
    throwError, Observable
} from 'rxjs';

@Injectable()
export class DataService {

  

    constructor(private httpClient: HttpClient) { }

    addObject(url: string, body: any): Observable<Object> {
        const options = { headers: this.getHeader() };
        return this.httpClient.post(url, body, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    updateObject(url: string, body: any): Observable<Object> {
        const options = { headers: this.getHeader() };
        return this.httpClient.put(url, body, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    deleteObject(url: string, params?: HttpParams): Observable<Object> {
        const options = { headers: this.getHeader(), params: params };
        return this.httpClient.delete(url, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    getAllObjects(url: string, params?: HttpParams): Observable<Object[]> {
        const options = { headers: this.getHeader(), params: params };
        return this.httpClient.get<Object[]>(url, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    getObjectById(url: string, params?: HttpParams): Observable<Object> {
        const options = { headers: this.getHeader(), params: params };
        return this.httpClient.get(url, options)
            .pipe(tap(data => { }), catchError(res => this.handleError(res)));
    }

    private handleError(error: HttpErrorResponse) {
        return throwError(error!.error!.message);
    }

    getHeader(): HttpHeaders {

        return new HttpHeaders({
            'Content-Type': 'application/json'
        });

    }

    public downloadTemplate(url: string, fileNameNew?: string | null | undefined): Observable<any> {
    return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; error: (arg0: any) => any; }) => {
      const formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
      const nAgt = navigator.userAgent;
      
      let verOffset;

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(xhr.response);
            observer.complete();
            let filename;
            if (fileNameNew === null || fileNameNew === undefined || fileNameNew === '') {
              filename = 'xlName-' + new Date().getTime() + '.xlsx';
            } else {
              filename = fileNameNew + '.xlsx';
            }
            const data = xhr.response;
            let blob = new Blob([data], { type: 'application/vnd.ms-excel' });

            if (typeof window !== 'undefined') {
              if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
                // chrome browser
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);

                link.download = filename;
                link.click();
              } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
                // Mozilla firefox
                const file = new File([xhr.response], filename, {
                  type: 'application/vnd.ms-excel'
                });
                window.open(URL.createObjectURL(file));
              } else {
                // Internet Explorer
                blob = new Blob([xhr.response], {
                  type: 'application/vnd.ms-excel'
                });
              }
            }
          } else {
            xhr.response.text().then((response: string) => observer.error(JSON.parse(response))).catch((err: any) => observer.error(err));
          }
        }
      };

      xhr.send();
    });
  }

  downloadpdf(url: string, name: string) {
    return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; error: (arg0: any) => any; }) => {
      const formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.responseType = 'blob';
     
      const nAgt = navigator.userAgent;
      let verOffset;

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(xhr.response);
            observer.complete();
            const filename = 'xlName-' + new Date().getTime() + '.pdf';
            const data = xhr.response;
            let blob = new Blob([data], { type: 'application/pdf' });

            if (typeof window !== 'undefined') {
              if ((verOffset = nAgt.indexOf('Chrome')) !== -1) {
                // chrome browser
                const link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = name + '.pdf';
                link.click();
              } else if ((verOffset = nAgt.indexOf('Firefox')) !== -1) {
                // Mozilla firefox
                const file = new File([xhr.response], filename, {
                  type: 'application/pdf'
                });
                window.open(URL.createObjectURL(file));
              } else {
                // Internet Explorer
                blob = new Blob([xhr.response], { type: 'application/pdf' });
              }
            }
          } else {
            xhr.response.text().then((response: string) => observer.error(JSON.parse(response))).catch((err: any) => observer.error(err));
          }
        }
      };

      xhr.send();
    });
  }

  public upload(url: string, params: string[], files: File[], tenantId?: string, isLoaderNotRequired?: boolean): Observable<any> {
    return Observable.create((observer: { next: (arg0: any) => void; complete: () => void; error: (arg0: any) => void; }) => {
     
      const formData: FormData = new FormData(),
        xhr: XMLHttpRequest = new XMLHttpRequest();
      if(files.length==0){
        formData.append('file', new Blob());
      }else{
        for (let i = 0; i < files.length; i++) {
          formData.append('file', files[i], files[i].name);
        }
      }

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {          
          if (xhr.status === 200 || xhr.status ===204) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(JSON.parse(xhr.response));
          }
        }
      };      

      xhr.open('POST', url, true);      
      xhr.send(formData);
    });
  }

}