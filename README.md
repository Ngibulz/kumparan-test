# kumparan-test
test untuk magang kumparan backend<br/>
Menggunakan NodeJS dengan REST<br/>
cara memakai :<br/>
mengimport database ( kumparan-test.db ) ke phpmyadmin (menggunakan xampp menyalakan apache dan mysql )<br/>
npm start / nodemon index.js -> mulai <br/>
npm run test -> unit testing<br/>
untuk mengetes API bisa menggunakan postman dengan base url : localhost:8080/api/.. ( contoh : localhost:8080/api/article)<br/>

API List method GET :<br/>
/article -> mendapatkan list semua artikel berdasarkan timestamp terbaru ( sorting descending )<br/>
/article/:name -> mendapatkan artikel tertentu berdasarkan nama author<br/>
/article2/:title -> mendapatkan artikel tertentu berdasarkan judul<br/>

API POST :<br/>
/article -> untuk menambahkan artikel baru ( nb : jika di test dengan postman, akan merequest terus menerus namun data sudah masuk ke database, maka jika sudah melakukan post pada postman, dapat di cancel langsung saja requestnya karena sebenarnya data sudah masuk.)<br/>

-- Maaf bila ada kekurangan, terimakasih :D
