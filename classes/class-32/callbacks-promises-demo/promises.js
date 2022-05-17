// now you're familiar with get and axios/superagent right (Express Nodejs)
// see the following example

// app.get('/location', locationHandler);

// function locationHandler(request, response) {
//   let city = request.query.city;
//   let key = process.env.GEOCODE_API_KEY;
//   const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

//   console.log('before the superagent'); // or axios

// //   let data = superagent.get(url);
// //   response.send(data.body);

//   superagent.get(url)
//     .then(data => {
//         console.log('inside the superagent');
//         console.log(data.body);
//         response.send(data.body);
//     })
//     .catch((error) => {
//       console.log('So sorry, something went wrong.', error);
//     });

//   console.log('after the superagent');
// }


// or using async/await

// console.log('before');
// async function locationHandler(request, response) {
// console.log('inside');

//     let city = request.query.city;
//     let key = process.env.GEOCODE_API_KEY;
//     const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${city}&format=json&limit=1`;

//   try{
//     const data = await superagent.get(url);
//         console.log('inside the superagent');
//         console.log(data.body);
//         response.send(data.body);
//   } catch(err) {
//     console.error('error from axios', err);
//     response.status(500).send('server error');
//   }

//   }
// locationHandler()
// console.log('after');


function change() {

   console.log('hi 1 ');

   let do_homework = new Promise(function(resolve,reject){
       let homework =false;
    //    doing the homework
       if(homework) {
        //    on success
        resolve('homework is done')
       } else {
        //    on failed
        reject('homework is not completed')
       }
   })

   do_homework.then(msg=>{
       console.log('hi 2');
    //    copy the homework // call the copy_homework()
       console.log(msg);
   }).catch(error=>{
       console.log(error);
   })

   console.log('hi 3 ');


    // goAndGetSomeData()
    // .then( data => { console.log(data); return data; )
    // .then( moreData => { console.log(moreData); return moreData; )
    // .then( evenMoreData => { console.log(evenMoreData); }


}
