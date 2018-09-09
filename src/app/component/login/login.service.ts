import { Injectable, NO_ERRORS_SCHEMA } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument  } from "angularfire2/firestore";
@Injectable()
export class LoginServiceFireBase {
    
    public constructor( private fireDatabase:AngularFirestore, private cnx:AngularFireAuth, private router:Router){
    }
    
    public login( username:string,password:string):Promise<firebase.auth.UserCredential>{
         
       return this.cnx.auth.signInWithEmailAndPassword(username, password)
    //.then(()=>{
         
    //     this.router.navigate(['/succes'])  
         

       //}
     

    
//     ).catch((errors)=> {
        
//         // Handle Errors here.
        
//     //     var errorCode = errors.code;
//     //    // var errorMessage = error.message;
//     //     if (errorCode === 'auth/wrong-password') {
//     //    //    errorMessage=errors.message
//     //      // alert('Wrong password.');
//     //     } else {
//     //       alert(errorMessage);
//     //     }
//    console.log(errors);
//       });

    }
    public getAllBooks(){
       return this.fireDatabase.collection('books').valueChanges()

    }
    public sigOut(){
        this.cnx.auth.signOut().then(()=>{
            this.router.navigate(['/home'])  


        }  ).catch((error)=>{
            let err=error.message

        });

    }




}