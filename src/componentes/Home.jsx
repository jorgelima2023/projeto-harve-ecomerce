import { CarouselComponentes } from "./CarouselComponentes";
import { ListaProdutos } from "./ListaProdutos";
import { MeunavBar } from "./MeunavBar";

function Home (){
    return (
        <>
        <MeunavBar></MeunavBar>
        <CarouselComponentes></CarouselComponentes>
        <ListaProdutos></ListaProdutos>
        </>


    );
}
export {Home};
