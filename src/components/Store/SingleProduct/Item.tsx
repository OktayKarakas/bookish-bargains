import React from "react";
import Image from "next/image";

const Item = () => {
  return (
    <div>
      <Image src="" width="380" height="510" alt="book" />
      <div>
        <h3>The Atomic {"One's"}</h3>
        <p>
          $30<span>.00 USD</span>
        </p>
        <p>
          Making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful of model
          sentence structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum.
        </p>
        <div>
          <h4>Publisher : Learning Private Limited (1 January 2021)</h4>
          <h4>Language : English</h4>
          <h4>Paperback : 212 pages</h4>
          <h4>ISBN-10 : 9788120345799</h4>
          <h4>Dimensions : 20 x 14 x 4 cm</h4>
        </div>
        <div>
          <input type="number" id="quantity" name="quantity" min="1" max="5" />
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Item;
