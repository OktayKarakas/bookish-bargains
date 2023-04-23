import React from "react";
import AuthorBooksIncludesBooks from "./AuthorBooksIncludesBooks";

const AuthorBookIncludesSection = () => {
  return (
    // this component being imported to index within a div which has this className bg-white h-[650px] i want this div to be vertically centered.
    <div>
      <h1 className="after:content-[''] after:block after:h-[2px] after:w-12 after:mt-5 after:bg-special_colors-yellow after:mx-auto my-10 text-center cardo font-bold text-4xl line-tight text-special_colors-blue">
        Author’s Book Includes
      </h1>
      <div className="flex xl:flex-row flex-col space-y-10 xl:space-y-0 xl:space-x-10 justify-center">
        <AuthorBooksIncludesBooks
          img={"/images/BookIncludesSection-1.svg"}
          title={"Atomic One’s"}
          description={
            "Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
          }
        />
        <AuthorBooksIncludesBooks
          img={"/images/BookIncludesSection-2.svg"}
          title={"The Dark Light"}
          description={
            "Many variations of passages of Lorem Ipsum willing araise  alteration in some form."
          }
        />
      </div>
    </div>
  );
};

export default AuthorBookIncludesSection;
