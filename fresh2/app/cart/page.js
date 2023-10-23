import Helloo from "./data";
export default function Cart() {
    let 장바구니 = ["Tomatoes", "Pasta", "Coconut"];
    return (
        <div>
            <h4 className="title">Cart</h4>
            <Cartitem jang={장바구니[0]} />
            <Cartitem jang={장바구니[1]} />
            <Cartitem jang={장바구니[2]} />
            <Btn color="blue" />
        </div>
    );
}
function Cartitem(props) {
    return (
        <div className="cart-item">
            <p>{props.jang}</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    );
}
function Btn(props) {
    return <button style={{ background: props.color }}>버튼임</button>;
}
