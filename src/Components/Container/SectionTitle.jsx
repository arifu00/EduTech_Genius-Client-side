
const SectionTitle = ({tittle, subTitle}) => {
    return (
        <div>
            <h2 className="text-center font-lora text-4xl italic hover:underline transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110">
            {tittle}
          </h2>
          <p className="text-center mt-3 font-roboto w-[800px] text-[#343a40] mx-auto text-xl">
            {subTitle}
          </p>
        </div>
    );
};

export default SectionTitle;