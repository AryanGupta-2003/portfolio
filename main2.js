 // Parallax Code
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);
const firebaseConfig = {
          apiKey: "AIzaSyA799eLOGxG7RNo2GQd0CacnTQoIlPChj4",
          authDomain: "portfolio-4aa44.firebaseapp.com",
          databaseURL: "https://portfolio-4aa44-default-rtdb.firebaseio.com",
          projectId: "portfolio-4aa44",
          storageBucket: "portfolio-4aa44.appspot.com",
          messagingSenderId: "520676150932",
          appId: "1:520676150932:web:59962041eb5f1b80b1ee81"
        };
firebase.initializeApp(firebaseConfig);

const contactFormDB=firebase.database().ref('contact_form')

document.getElementById('contact_form').addEventListener('submit',submitForm);

function submitForm(e)
{
  e.preventDefault();
  var name = getElementVal("name_input");
  var emailid = getElementVal("email_input");
  var telephone = getElementVal("telephone_input");
  var subject = getElementVal("subject_input");
  var message = getElementVal("message_input");
  saveMessages(name,emailid,telephone,subject,message);

  document.querySelector('.alert').style.display = "block"; 

  setTimeout(()=>{
    document.querySelector('.alert').style.display = "none";  
  },3000);

  document.getElementById('contact_form').reset();
}
const saveMessages = (name,emailid,telephone,subject,message)=>{
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name:name,
    emailid:emailid,
    telephone:telephone,
    subject:subject,
    message:message,
  });
};

const getElementVal = (id) =>{
  return document.getElementById(id).value;
}