 import React from 'react'
 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';
 import Container from 'react-bootstrap/Container';
 import Row from 'react-bootstrap/Row';
 import Carousel from 'react-bootstrap/Carousel';
 
   
    export default function App() {
      let districts=[
        {
          "id":1,
          "title":"TRIVANDRAM",
          "decsription":"CAPITAL CITY",
          "image":"https://media.istockphoto.com/id/615090784/photo/sri-padmanabhaswamy-temple-in-trivandrum-kerala-india.jpg?s=612x612&w=0&k=20&c=VhLxq50RnsosdI1-l8R3a2Xa4kfjTVVIQJagI9UDzdE="
        },
        
        {
          "id":2,
          "title":"KOLLAM",
          "decsription":"CASHEW CITY",
          "image":"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg"
        },
        
        {
          "id":3,
          "title":"PATHANAMTHITTA",
          "decsription":"Headquarters of Pilgrimage Tourism",
          "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbE0fioFF5gC0i0Jxt5ZPx-CD36dXiYEEk4J5gD4N1Gw&s"
        },
        
      
        {
          "id":4,
          "title":"ALAPPUZHA",
          "decsription":"Venice of the East'",
          "image":"https://media.istockphoto.com/id/1311786286/photo/stunning-view-of-a-boat-sailing-on-the-alleppeys-backwaters-during-a-beautiful-sunset-kerala.jpg?s=612x612&w=0&k=20&c=7eb2naEpD6qJ55_anCmqx01NxNVyKoHHw_ii7Rabd30="
        },
        
        {
          "id":5,
          "title":"KOTTAYAM",
          "decsription":"city of letters",
          "image":"https://www.shutterstock.com/image-photo/church-kumarakom-kottayam-kerala-along-260nw-1026587635.jpg"
        },
        
        {
          "id":6,
          "title":"IDUKKI",
          "decsription":"spice garden of Kerala",
          "image":"https://images.unsplash.com/photo-1599632740188-8a4f152a8342?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aWR1a2tpfGVufDB8fDB8fHww&w=1000&q=80"
        },
        
        {
          "id":7,
          "title":"ERNAKULAM",
          "decsription":"Fort Kochi, one of the most famous attractions in the state especially for the view of Chinese Fishing nets. It is located in Ernakulam district, India.",
          "image":"https://stylesatlife.com/wp-content/uploads/2013/12/Parks-in-Ernakulam-Subhash-Bose-Park.jpeg.webp"
        },

        {
          "id" : 8,
           "title" :"Thrissur",
          "decsription":" cultural capital of Kerala",
          "image": "https://images.moneycontrol.com/static-mcnews/2020/04/Thrissur-Pooram-770x433.jpg?impolicy=website&width=770&height=431f",
        },

        {
          "id" : 6,
          "title" :"Palakkad",
          "decsription":"Palakkad is famous for the ancient Palakkad Fort, which is in the heart of the city and was captured and rebuilt by Hyder Ali in 1766. The city is about 347 kilometres (216 mi) northeast of the state capital, Thiruvananthapuram.",
          "image": "https://img.traveltriangle.com/blog/wp-content/uploads/2018/03/cover6.jpg",
        }

        ,
        {"id" : 5,
         "title" :"Malappuram",
         "decsription":" In earlier times, Malappuram was the head quarters of European and British troops and later it became the head quarters of the Malabar Special Police (M.S.P). This place has still the ruins of an ancient fort built by Tippu Sultan.",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfLV4GampA7Y2D2Ul3URR4h2C3Bd3kfgNq8IpwJXF43A&usqp=CAU&ec=48600112",
  
         }

  ,
   {
    "id" : 4,
  "title" :"Wayanad",
  "decsription":"Historians are of the view that organised human life existed in these parts, at least ten centuries before Christ. Countless evidences about New Stone Age civilisation can be seen on the hills of Wayanad.",
  "image":"https://images.hindustantimes.com/img/2022/12/05/1600x900/0e1b0f60-74b3-11ed-b084-c0a51ed14e2f_1670254910634.jpg",
  }
  ,
  {
  "id" : 3,
  "title" :"kozhikode",
  "decsription":"Kozhikode is the largest urban area in the state and 195th largest urban area in the world. During classical antiquity and the Middle Ages, Kozhikode was dubbed the “City of Spices” for its role as the major trading point of Eastern spices.",
  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bBmgJn7KbW0NNJqIoEAhjjOCjMCzjpug0sQYO23ngQ&usqp=CAU&ec=48600112"
  },

  {
    "id":2,
    "title":"kannur",
    "decsription": "Kannur was an important trading center in the 12th century with active business connections with Persia and Arabia. It served as the British military headquarters on India's west coast until 1887.",
  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxgXrPQ5EDi5NMhTsgcASoypqyterc0NrFboX5BzP3YQ&usqp=CAU&ec=48600112",
  
  
  },{
    "id":1,
  "title":"kasargodmap",
  "decsription" : "Kasaragod is known as the land of gods, forts, rivers, hills and beautiful beaches. The fort at Bekal is the largest and best preserved in the State",
"image":"https://www.kerala.com/userfiles/1548911996_kasaragod.jpg" ,
}
]
        
      
      
      
      
      
      
      
      
      
      
      return (
        
        <Container>
<Row>
{
districts.map((districts,index)=>{
return(
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src={districts.image}/>
<Card.Body>
<Card.Title>{districts.title}</Card.Title>
<Card.Text>{districts.decsription}
</Card.Text>
<Button variant="primary">click!</Button>
</Card.Body>
</Card>
)
}
)
}
</Row>
</Container>

    )
  }
  
  
  
    
    
    
  


