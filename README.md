# Library app
Userbased library app.       
You can create an user and loan books from the library. Admin user can also add/delete books or/and authors from database.         
UI is pretty simple, as the plan was to not use that many dependencies.        

## Made with
<table>
<tbody>
  <tr>
    <td><img src="https://img.icons8.com/color/48/000000/javascript--v1.png" height="50px"></td>
     <td><img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png" height="50px"></td>
     <td><img src="https://spring.io/img/spring.svg" height="50px"></td>
     <td><img src="https://hashnode.com/utility/r?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1633101239445%2F1LPg4fxdV.png%3Fw%3D1200%26h%3D630%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp%26fm%3Dpng" height="50px"</td>
     <td><img src="https://img.icons8.com/color/48/000000/react-native.png" height="50px"></td>
     <td><img src="https://img.icons8.com/color/48/000000/mysql-logo.png" height="50px"></td>
  </tr>
  <tr>
    <td>JavaScript</td>
    <td>Java</td>
    <td>Springboot</td>
    <td>Spring Security</td>
    <td>React</td>
    <td>MySQL</td>
  </tr>
</tbody>
</table>

## How to run locally
- First clone the repository    
`git clone https://github.com/Spirilo/library-app.git`
- In the repo you can find the sql dump called "library.sql"     
- Use command line to navigate to your mySQL server bin folder e.g. C:\Program Files\MySQL\MySQL Server 8.0\bin and insert the following line      
`mysql -u <your-username> -p library < <library.sql path>`
- Now in repo go to \library-app\library\src\main\resources\application.properties file and change two things:      
`spring.datasource.username=<your-mysql-username>`    
`spring.datasource.password=<your-mysql-username>`   
- Remember to give all access to the user to database in MySQL command client    
`grant all privileges on library.* to <your-mysql-username>;`
- You can also keep the defaults, but then you have to make user in your MySQL command client    
`create user 'librarian'@'localhost' identified BY 'test123';`    
`grant all privileges on library.* to librarian@localhost;`
- Now you can go to \library-app\library in cmd    
`mvnw spring-boot:run`
- Then go to \library-app\client on other cmd    
`npm i`    
`npm start`     
Backend runs in localhost:8080 and frontend in localhost:3000       
There is one admin and one user:     
username:admin/pw:nimda      
username:user/pw:resu    
You can also create your own user!

## Pictures
Heres the loginUI when you start the app      
<img width="961" alt="l2" src="https://github.com/Spirilo/library-app/assets/101670946/f3aec3c7-e9e3-4673-b3be-1546c339952f">

Here you can see the mainpage after you have login     
<img width="961" alt="l1" src="https://github.com/Spirilo/library-app/assets/101670946/8479a456-cda8-47ca-914f-3eba6609db98">

Heres the view for books and ability to loan them, and return if loaned by you     
<img width="961" alt="l3" src="https://github.com/Spirilo/library-app/assets/101670946/aaa015a8-7bce-4c4b-b0db-f08e32731d29">
