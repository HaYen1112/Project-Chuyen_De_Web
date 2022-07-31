import { Component, Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({providedIn: 'root'})
export class AppComponent {
  constructor(private http: HttpClient){
        }

  getData(url: string): Observable<any>{
    return this.http.get(url);
  }
  }


  const firebaseConfig = {
    apiKey: "AIzaSyArvmRgn824XxpVIUPMoACvJqQJSYuQcps",
    authDomain: "frontend-d1626.firebaseapp.com",
    projectId: "frontend-d1626",
    storageBucket: "frontend-d1626.appspot.com",
    messagingSenderId: "763064103774",
    appId: "1:763064103774:web:833cf9c29fc7ffb36115cf",
    measurementId: "G-EDD1X84TS7"
  };

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

