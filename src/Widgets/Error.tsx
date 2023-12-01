import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type Props = { errorTxt: string | FetchBaseQueryError | SerializedError };

export default function Error({ errorTxt }: Props) {
  return <div>{"An error has occurred: " + errorTxt}</div>;
}
