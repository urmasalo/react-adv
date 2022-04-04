import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";

const product = {
    id: '1',
    title: 'Mug title 01',
    img: ''
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store 🎁 </h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                {/* Compound Component Pattern */}

                <ProductCard product={product} >
                    <ProductImage img={product.img} />
                    <ProductTitle title={"Hola Munich"} />
                    <ProductButtons />
                </ProductCard >

                Another Componet Pattern

                <ProductCard product={product} >
                    <ProductCard.Image img={product.img} />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard >
            </div>
        </div>
    )
}