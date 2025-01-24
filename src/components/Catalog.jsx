import Card from "./Card";

export default function Catalog() {
    return (
        <div className="flex flex-col gap-4 lg:flex-row my-8 w-full lg:mx-12">
            <div className="flex flex-col gap-4 h-full">
                <Card src={"../../public/assets/images/kebun.png"} description={"Lorem ipsum dolor sit amet."} title={"Foto Sawah"} isDescriptionVisible={true} />
                <Card src={"../../public/assets/images/karmel.png"} description={"Lorem ipsum dolor sit amet."} title={"Foto Karmel"} isDescriptionVisible={true} />
            </div>
            <div className="flex flex-col gap-4 h-full">
                <Card src={"../../public/assets/images/kebun.png"} description={"Lorem ipsum dolor sit amet."} title={"Foto Sawah"} isDescriptionVisible={true} />
                <Card src={"../../public/assets/images/karmel.png"} description={"Lorem ipsum dolor sit amet."} title={"Foto Karmel"} isDescriptionVisible={true} />
            </div>
        </div>
    );
}