import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
const arzImg="https://scontent.xx.fbcdn.net/v/t1.15752-9/355116733_6588224987924525_7018458927726649515_n.jpg?stp=dst-jpg_s206x206&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeFLc3z3iaoD7ooVmjR0ybxt9rKxQiXB2QP2srFCJcHZA-BCn_6IsBMZPLEMs7Ch3-zULbCo-1lS9gAWCNm-i8HA&_nc_ohc=hrcmop0CdLkAX9HEvJg&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQzJIw4-D6_7PX99JDgM40kFnVnQn8mUSPz1sxiKAmRxA&oe=64CFF189";
const chapImg="https://scontent.xx.fbcdn.net/v/t1.15752-9/355063582_771705301414035_7126364892693968287_n.jpg?stp=dst-jpg_p206x206&_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=aee45a&_nc_eui2=AeEnXI8bigItfx5HvxQ2kcWjvla-rytbr5y-Vr6vK1uvnOgBRh-tXNO3R-b3Y0U_hlh6AzRVtdTJ1wbHR9QU1p2g&_nc_ohc=wvSh-XgNDkIAX9EdUZV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ42h-ObrA-A35883bfowVmHYA_W4s06Jtj5AmzLn4PnA&oe=64D01747"  
const arrArz=[arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg,arzImg];
const arrChap=[chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg,chapImg];
return (  
<div id="room">
<div id="front-wall">{
    arrChap.map((val,ind)=>{
      return(<img src={val} key={ind}/>);
    })
  }</div>

<div id="ceiling">{
    arrArz.map((val,ind)=>{
      return(<img src={val} key={ind}/>);
    })
  }</div>
</div>
  )
}

export default App
