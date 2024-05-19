import { CarouselComponentes } from "./CarouselComponentes";
import { ListaProdutos } from "./ListaProdutos";
import { MeunavBar } from "./MeunavBar";

function Home (){
    return (
        <>
        <div id="root">
            <div className="container">
                <MeunavBar></MeunavBar>
            </div>
        <CarouselComponentes></CarouselComponentes>
        <ListaProdutos></ListaProdutos>
        </div>

        </>


    );
}
export {Home};
