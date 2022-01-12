# kumparan-test
test untuk magang kumparan backend
Menggunakan NodeJS dengan REST
cara memakai :
mengimport database ( kumparan-test.db ) ke phpmyadmin (menggunakan xampp menyalakan apache dan mysql )
npm start / nodemon index.js -> mulai 
npm run test -> unit testing
untuk mengetes API bisa menggunakan postman dengan base url : localhost:8080/api/.. ( contoh : localhost:8080/api/article)

API List method GET :
/article -> mendapatkan list semua artikel berdasarkan timestamp terbaru ( sorting descending )
/article/:name -> mendapatkan artikel tertentu berdasarkan nama author
/article2/:title -> mendapatkan artikel tertentu berdasarkan judul

API POST :
/article -> untuk menambahkan artikel baru ( nb : jika di test dengan postman, akan merequest terus menerus namun data sudah masuk ke database, maka jika sudah melakukan post pada postman, dapat di cancel langsung saja requestnya karena sebenarnya data sudah masuk.)

-- Maaf bila ada kekurangan, terimakasih :D
