import { Tooltip } from "@material-tailwind/react";
import Container from "../../../Components/Container/Container";
import SectionTitle from "../../../Components/Container/SectionTitle";

const OurPartners = () => {
  const partners = [
    { id: 1, name:"IPDC Finance Limited", image: "https://i.ibb.co/vQ5C6QM/ipdc.png" },
    { id: 2, name:"UNITED GROUP", image: "https://i.ibb.co/1ZNqdXm/unitedgroup.png" },
    { id: 3, name:"Samsung", image: "https://i.ibb.co/qnXvxWB/samsung.jpg" },
    { id: 4, name:"BRAC", image: "https://i.ibb.co/NtZvPZ7/brack.png" },
    { id: 5, name:"Apex", image: "https://i.ibb.co/KmRx7kK/apex.png" },
    { id: 6, name:"Uniliver", image: "https://i.ibb.co/mRr7fCz/uniliver.png" },
  ];
  return (
    <div className="mt-12 mb-5 bg-[#e5e5e5] py-12">
      <Container>
        <div className="">
          <SectionTitle
            tittle={" Our Partners"}
            subTitle={
              "Partnering with Tech Innovators Collaborative, we bring the latest technological advancements to our educational programs, ensuring students stay ahead in the rapidly evolving digital landscape."
            }
          ></SectionTitle>
        </div>
        <div className="flex flex-wrap justify-center items-center mt-12 gap-5  ">
          {partners.map((partner) => (
            <div className="" key={partner.id}>
              <Tooltip
                content={partner.name}
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <img
                  className="rounded-full w-16 h-16 md:w-20 md:h-20 cursor-pointer "
                  src={partner.image}
                  alt=""
                />
              </Tooltip>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default OurPartners;
