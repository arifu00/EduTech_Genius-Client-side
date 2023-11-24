import Container from "../../../Components/Container/Container";

const OurPartners = () => {
    const partners = [
        { id: 1, image: 'https://via.placeholder.com/150' },
        { id: 2, image: 'https://via.placeholder.com/150' },
        { id: 3, image: 'https://via.placeholder.com/150' },
        { id: 4, image: 'https://via.placeholder.com/150' },
        { id: 5, image: 'https://via.placeholder.com/150' },
        { id: 6, image: 'https://via.placeholder.com/150' },
      ];
    return (
        <div className="mt-12">
            <Container>
                <div className="">
                    <h2 className="text-center font-lora text-4xl italic">Our Partners</h2>
                    <p className="text-center mt-3 font-roboto w-[900px] mx-auto text-xl">Partnering with Tech Innovators Collaborative, we bring the latest technological advancements to our educational programs, ensuring students stay ahead in the rapidly evolving digital landscape.</p>
                </div>
            </Container>
        </div>
    );
};

export default OurPartners;