import React from "react";
import Delivery from "./Delivery";
import CustomerService from "./CustomerService";
import MoneyBack from "./MoneyBack";

type Props = {};

export default function Policies({}: Props) {
  return (
    <div className="flex mb-[140px]">
      <div className="mx-auto flex gap-20 ">
        <div className="flex align-middle justify-center flex-col">
          <div className="mx-auto">
            <Delivery />
          </div>
          <div className="mt-6 text-center  ">
            <h2 className="mb-2 font-semibold text-xl">
              FREE AND FAST DELIVERY
            </h2>
            <p className="text-sm font-medium">
              Free delivery for all orders over $140
            </p>
          </div>
        </div>
        <div className="flex align-middle justify-center flex-col">
          <div className="mx-auto">
            <CustomerService />
          </div>

          <div className="mt-6 text-center">
            <h2 className="mb-2 font-semibold text-xl">
              24/7 CUSTOMER SERVICE
            </h2>
            <p className="text-sm font-medium">
              Friendly 24/7 customer support
            </p>
          </div>
        </div>
        <div className="flex align-middle justify-center flex-col">
          <div className="mx-auto">
            <MoneyBack />
          </div>

          <div className="mt-6 text-center">
            <h2 className="mb-2 font-semibold text-xl">MONEY BACK GUARANTEE</h2>
            <p className="text-sm font-medium">We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}
