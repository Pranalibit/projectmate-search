import Card from "../../Components/Card";
import Navbar from "../../Components/Navbar";
import photo from '../../assets/darkbluebg.jpg';
import photo1 from '../../assets/neonwave.jpg';
import photo2 from '../../assets/images.jpg';

const Dashboard = () => {

    const details = [
      {
        userName: "Anurodh Dubey",
        img : photo,
        datePosted: "27 August"
      },
      {
        userName: "Utkarsh Kumar",
        img : photo1,
        datePosted: "18 June"
      },
      {
        userName: "Ashutosh Tripathi",
        img : photo2,
        datePosted: "15 October"
      }
    ]

  return (  
    <>
      <Navbar/>
      <div className="flex flex-col">
        {
          details.map((detail)=>(
            <Card userName={detail.userName} datePosted = {detail.datePosted} img={detail.img}/>
          ))
        }
      </div>
    </>
  );
}
 
export default Dashboard;