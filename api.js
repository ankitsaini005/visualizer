console.log("this is one of my pages");
//now will begin the new javascript page

  let nam;
  let prop;
  function savedata()
  {
   // nam=document.getElementById('name').value;
    prop=document.getElementById('property').value;
  }
 // console.log(prop);
 //console.log(document.getElementById('name').value);
//   function getdata()
//   {
    
//     let url=`https://codeforces.com/api/user.status?handle=${prop}&from=1&count=10`;
//      fetch(url).then(
//          function(resolve)
//          {
//              return resolve.json();
//          }
//      ).then(
//          function(data)
//      {
//          console.log(data);
//      }
//      )
//   }
function pie(err,errcnt)
{
  let  xValues = err;
  let yValues = errcnt;
  let barColors = [
  "#b91d47",
  "#00aba9",
  "#2b5797",
  "#e8c3b9",
  "#1e7145"
];
new Chart("mypie",{
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options:{
    title: {
     // display: true,
      text: "Codeforces visualizer"
      
    }
  }
});
}
function bar(prob,probrating)
{
  let xValues =prob;
  let  yValues =probrating;
  let  barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];

new Chart("mybar",{
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Rating graph",
    }
  }
});
}
let ele1=document.getElementById('cont');

  let nwrw=`
  <tr>
    <th scope="row">1</th>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
  <tr>
    <th scope="row">2</th>
    <td>Jacob</td>
    <td>Thornton</td>
    <td>@fat</td>
  </tr>
  <tr>
    <th scope="row">3</th>
    <td>Larry</td>
    <td>the Bird</td>
    <td>@twitter</td>
  </tr>`
 // console.log(ele1);
//ele1.innerHTML+=nwrw;
  let content="";
  
  function showdata()
  {
    let ele2=document.querySelector('table');
     ele2.style.visibility="visible";
  let f=0;//1500;
  let s=0;//1600;
  let th=0;//1700;
    function getdata()
    {
     
    let url=`https://codeforces.com/api/user.status?handle=${prop}&from=1&count=1700`;
     fetch(url).then(
         function(resolve)
         {
             return resolve.json();
         }
     ).then(
         function(data)
     {
         let create=new Map;
         console.log(data);
         let smstring="";
         let index=0;
         data.result.forEach((ele) => {
             if(ele.verdict!="OK"&&ele.verdict!="SKIPPED"&&create.get(`${ele.problem.name}`)==undefined)
             {
                 
                 smstring+=`<tr>
                 <th scope="row">${index+1}</th>
                 <td>${ele.problem.name}</td>
                 <td>${ele.verdict}</td>
                 <td>${ele.problem.index}</td>
                 <td> <a href="https://codeforces.com/problemset/problem/${ele.problem.contestId}/${ele.problem.index}">codeforces${index+1}</a></td>
               </tr>`
               index++;
             }
             else
             {
              if(ele.verdict!="SKIPPED"&&ele.verdict=='OK')
               {
                create.set(`${ele.problem.name}`,1);
                //acc++; 
                if(ele.problem.rating==1500)
                f++;
                if(ele.problem.rating==1600)
                s++;
                if(ele.problem.rating==1700)
                th++;

               }
             }
         });
         //console.log(acc);
         
         
         let nw1=new Map;
         data.result.forEach((ele)=>
         {
           if(nw1.has(`${ele.verdict}`)==true)
           {
            nw1.set(`${ele.verdict}`,nw1.get(`${ele.verdict}`)+1);
           }
           else
           nw1.set(`${ele.verdict}`,1);
         }
         );
         let err1=[];
         let errcnt=[];
         nw1.forEach((ele,cnt1)=>
         {
          //console.log(ele,cnt1);
           err1.push(cnt1);
           errcnt.push(ele);
         }
         )
         let nw2=new Map;
         let nw3=new Map;
         for (let index = 800; index <=3600; index+=100) {
          //const element = array[index];
          nw3.set(`${index}`,0);
         }
         data.result.forEach((ele)=>
         {
         if(ele.verdict=="OK")
          {
           let val=`${ele.contestId}+${ele.problem.index}`;
           if(nw2.has(`${val}`)!=true&&ele.problem.rating!=undefined)
           {
             nw2.set(`${val}`,1);

             nw3.set(`${ele.problem.rating}`,nw3.get(`${ele.problem.rating}`)+1);
           }
          }
         }


         )
         let prob=[];
         let probrating=[];
         nw3.forEach((element,key) => {
            prob.push(key);
            probrating.push(element);
         });
        // console.log(err1);
         //console.log(errcnt);
         console.log(prob);
         console.log(probrating);
         
        
         pie(err1,errcnt);
         bar(prob,probrating);
         ele1.innerHTML+=smstring;
   });
        // document.getElementById("piechart").innerHTML+=myPieChart;
       
     }
    
   // console.log(acc);
  //  
  //console.log(prop);
  //content="";
   //content+=`<li>${nam}</li>`;
   //content+=`<li>${prop}</li>`;
   //document.getElementById('display').innerHTML=content;
   getdata();
  
 //  document.getElementById("piechart").innerHTML+=myPieChart;
   //console.log(tle,acc,runerr,wa,mle);
  }
  console.log("before getting data");
  //getdata();
  console.log("after getting data");
//   function postdata()
//   {
//     let url="https://api.instantwebtools.net/v1/passenger";
//     data=`{
//         "id": 12,
//         "name": "Sri Lankan Airways",
//         "country": "Sri Lanka",
//         "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Qatar_Airways_Logo.svg/sri_lanka.png",
//         "slogan": "From Sri Lanka",
//         "head_quaters": "Katunayake, Sri Lanka",
//         "website": "www.srilankaairways.com",
//         "established": "1990"
//     }`
//      params={
//        method:'post',
//        Headers:{
//            'Content-Type':'application/json'
//        },
//        body: data
//     }
//      fetch(url,params).then(
//          function(resolve)
//          {
//              return resolve.json();
//          }
//      ).then(function(data)
//      {
//          console.log(data);
//      })
//   }
//   postdata();
