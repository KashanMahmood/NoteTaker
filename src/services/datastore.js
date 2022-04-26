/* eslint-disable no-unused-vars */
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD4wJuSKwjP5_Qq5ZfSFMluVuX6KAVfRSk',
  authDomain: 'firenotes-40d1f.firebaseapp.com',
  databaseURL: 'https://firenotes-40d1f-default-rtdb.firebaseio.com',
  projectId: 'firenotes-40d1f',
  storageBucket: 'firenotes-40d1f.appspot.com',
  messagingSenderId: '191787123479',
  appId: '1:191787123479:web:06bb1c84b5a78c908f6d52',
  measurementId: 'G-30NCKV6S8V',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// for updating?
export function updateState(id, updatedNote) {
  database.ref('notes').child(id).update(updatedNote);
}

// id and NewNote isn't defined so make sure to come back to this

export function deleteNote(id) {
  database.ref('notes').child(id).remove();
}

export function pushNote(newNote) {
  database.ref('notes').push(newNote);
}

// eslint-disable-next-line import/prefer-default-export
export function fetchNotes(callback) {
  database.ref('notes').on('value', (snapshot) => {
    const newNoteState = snapshot.val();
    callback(newNoteState);
  });
}
