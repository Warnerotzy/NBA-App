import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAVb_lRStyhM87bXZvdl8v2khy-MwT4yEI",
    authDomain: "nba-full-91a6a.firebaseapp.com",
    databaseURL: "https://nba-full-91a6a.firebaseio.com",
    projectId: "nba-full-91a6a",
    storageBucket: "nba-full-91a6a.appspot.com",
    messagingSenderId: "757949499269"
};
firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref('articles');
const firebaseTeams = firebaseDB.ref('teams');
const firebaseVideos = firebaseDB.ref('videos');

const firebaseLooper = (snapshot)=>{
    const data = [];
    snapshot.forEach(childSnapshot => {
                
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key,
            
        })
        
    });
    
    return data

}



export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
}