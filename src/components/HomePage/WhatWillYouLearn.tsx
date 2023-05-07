import React from "react";
import WhatWillYouLearnBlock from "./WhatWillYouLearnBlock";
import Image from "next/image";

const WhatWillYouLearn = () => {
  return (
    <div>
      <h1 className="after:content-[''] after:block after:h-[2px] after:w-12 after:mt-5 after:bg-special_colors-yellow after:mx-auto mb-10 mt-24 text-center cardo font-bold text-4xl line-tight text-special_colors-blue">
        What will you learn ?{" "}
      </h1>
      <div className="flex flex-col lg:flex-row lg:space-x-24 space-y-10 lg:space-y-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-7 gap-y-7 px-10 lg:px-0">
          <WhatWillYouLearnBlock
            number={"01"}
            description={
              "Use HDFS & Map Reduce for storing & analyzing data at scale."
            }
          />
          <WhatWillYouLearnBlock
            number={"02"}
            description={
              "Consume streaming data using Spark Streaming, Flink, and Storm."
            }
          />
          <WhatWillYouLearnBlock
            number={"03"}
            description={
              "Choose an appropriate data storage technology for your application"
            }
          />
          <WhatWillYouLearnBlock
            number={"04"}
            description={
              "Analyze non-relational data using HBase, Cassandra, and MongoDB."
            }
          />
        </div>
        <Image
          src="/images/HomePage/WhatWillYouLearn.png"
          width="590"
          height="690"
          alt="What Will You Learn Image"
          className="px-5"
        />
      </div>
    </div>
  );
};

export default WhatWillYouLearn;
