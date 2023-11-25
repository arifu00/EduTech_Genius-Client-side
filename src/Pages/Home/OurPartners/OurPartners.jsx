import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/Container/SectionTitle";

const OurPartners = () => {
  const partners = [
    { id: 1, image: "https://i.ibb.co/vQ5C6QM/ipdc.png" },
    { id: 2, image: "https://i.ibb.co/1ZNqdXm/unitedgroup.png" },
    { id: 3, image: "https://i.ibb.co/qnXvxWB/samsung.jpg" },
    { id: 4, image: "https://i.ibb.co/NtZvPZ7/brack.png" },
    { id: 5, image: "https://i.ibb.co/KmRx7kK/apex.png" },
    { id: 6, image: "https://i.ibb.co/mRr7fCz/uniliver.png" },
  ];
  return (
    <div className="mt-12 bg-[#e5e5e5] py-12">
      <Container>
        <div className="">
          <SectionTitle 
          tittle={' Our Partners'} 
          subTitle={"Partnering with Tech Innovators Collaborative, we bring the latest technological advancements to our educational programs, ensuring students stay ahead in the rapidly evolving digital landscape."}></SectionTitle>
          
        
        </div>
        <div className="flex justify-center items-center mt-12 gap-5  ">
          {partners.map((partner) => (
            <div className="" key={partner.id}>
                <img className="rounded-full w-20 h-20 cursor-pointer " src={partner.image} alt="" />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurPartners;
