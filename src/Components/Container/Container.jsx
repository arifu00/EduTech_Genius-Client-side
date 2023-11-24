
const Container = ({children}) => {
    return (
        <div className="container mx-auto px-2 md:px-5 my-5">
            {children}
        </div>
    );
};

export default Container;